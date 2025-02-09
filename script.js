const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const qrContainer = document.querySelector('.qr-body');

let size = sizes.value;
generateBtn.addEventListener('click', (e) => {
     e.preventDefault(); // to prevent refresh because on clicking generate it is getting refreshed
     isEmptyInput();
});

sizes.addEventListener('change', (e) => {  //for changing size of QR code we will access size 
    size = e.target.value;
    isEmptyInput();
});

downloadBtn.addEventListener('click', ()=>{
    let img = document.querySelector('.qr-body img');
    if(img !== null){ //first check if image is not null
        let imgAtrr = img.getAttribute('src'); //if its not null then store its attribute src in a variable
        downloadBtn.setAttribute("href", imgAtrr); //then pass it in downloadbtn 
    }
    else{
        downloadBtn.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`);
    }
}); 

function isEmptyInput(){
     if(qrText.value.length > 0){
         generateQRCode();
    }
     else{
         alert("Enter the text or URL to generate your QR code");
     }
    }

function generateQRCode() {
    qrContainer.innerHTML = "";
    new QRCode(qrContainer, {
        text:qrText.value,
        height:size,
        width:size,
        colorLight:"#fff",
        colorDark:"#000",
    });
}


