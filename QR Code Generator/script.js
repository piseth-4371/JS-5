const textBox = document.getElementById("textBox");
const imgBox = document.getElementById("imgBox");
const qrImg = document.getElementById("qrImg");
const apiUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="

function generateQr() {
    if(textBox.value.length >0) {
        imgBox.style.display = "block";
        qrImg.src = apiUrl + textBox.value;
    }else{
        textBox.classList.add("error");
        setTimeout(() => {
            textBox.classList.remove("error");
        }, 1000);
    }
}