import google.generativeai as genai
import fitz
import os
from dotenv import load_dotenv
load_dotenv()
api_key = os.getenv("GENAI_API_KEY")
if not api_key:
    raise ValueError("API key not found. Make sure the .env file is correctly set.")
genai.configure(api_key=api_key)
model = genai.GenerativeModel("gemini-2.0-flash")

def extract_text_from_pdf(file_path):
    pdf_document = fitz.open(file_path)
    text = ""
    for page in pdf_document:
        text += page.get_text("text") + "\n"
    return text

backend_dir = os.path.join(os.getcwd(), "backend")
pdf_path = os.path.join(backend_dir, "sample.pdf")
text = extract_text_from_pdf(pdf_path)

# Generate content
response = model.generate_content("""You are an expert in legal document summarization.
                        Your task is to generate a structured and precise summary of the given contract. 
                        Focus on key elements such as parties involved, obligations, terms, payment details, 
                        penalties, termination clauses, and confidentiality. The summary should be concise yet 
                        comprehensive, avoiding unnecessary legal jargon.
                        
                        Here is the contract for your reference:
                        {text[:5000]}}
                        """)

# Print the response
print(response.text)