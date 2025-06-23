document.addEventListener('DOMContentLoaded', () => {
    const uploadIcon = document.getElementById('uploadIcon');
    const fileInput = document.getElementById('fileInput');
    const uploadedArea = document.getElementById("uploadedArea");
    const fileName = document.getElementById("fileName");
    const fileSize = document.getElementById("fileSize");


    // Add event listener to the cloud icon to trigger the file input
    uploadIcon.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', () => {
        let file = fileInput.files[0]; // Get the selected file
        if (file) {
            // Display file name and size
            fileName.textContent = file.name;
            fileSize.textContent = (file.size / 1024).toFixed(2) + " KB"; // File size in KB

            // Show the uploaded area
            uploadedArea.style.display = "block";
        }
    });

    uploadIcon.onchange = ({target}) =>{
        let file = target.files[0];
        if(file){
            let fileName = file.name;
            uploadFile(fileName);
        }

        function uploadFile(name){
            
        }
    }
});
    var myTextArea = document.getElementsByTagName('textarea')[0];
    var myTextLength = myTextArea.value.length
    var myTextWidth = parseInt(window.getComputedStyle(myTextArea).width);
    var myTextMinLength = 20;
    var myTextMaxWidth = ((parseInt(window.getComputedStyle(document.body).width) / 100) * 80);
    myTextArea.addEventListener('keypress', checkTextLength, false);

    // Add event listener to the cloud icon to trigger the file input
    
    function uploadFile(name) {
        console.log("Uploading file:", name);
        
    }

    



    function animateProgressBar() {
            
            let width = 0;
            let interval = setInterval(() => {
                if (width >= 100) {
                    clearInterval(interval); // Stop animation at 100%
                } else {
                    width += 1; // Increase width by 1% each step
                    progress.style.width = width + "%";
                }
            }, 50); 
            
        }
        
       
 


    

function insertText() {
    const inputText = document.getElementById('textInput').value;
    if (inputText.trim() !== "") {
        window.location.href = "formattedText.html"; // Redirect to another page
    } else {
        document.getElementById('textContent').textContent = "No text inserted.";
    }
}

function goToIndexPage() {
    window.location.href = "index.html"; // Redirect to another page
}

// function goToFeedbackPage() {
//     window.location.href = "formattedText.html"; // Redirect to another page
// }
