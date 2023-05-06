var imgBox = document.getElementById("imgBox img");
let qrImg = document.querySelector(".qrImg");
let qrText = document.getElementById("qrText");
let GenQR = document.getElementById("GenQR");
var spin = document.querySelector(".spinner");

 GenQR.addEventListener("click" , () => {
    let qrValue = qrText.value;
    if(qrText.value.length > 0 ) {
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    setTimeout(()=>{
        qrImg.style.display = 'Block';
    },4000)
}
else {
    qrText.classList.add('error');
    setTimeout(()=>{
        qrText.classList.remove('error');
    },1000);

}
 })

GenQR.addEventListener("click" , () => {
    if(qrText.value.length > 0 ) {
    spin.style.display = 'Block';
    setTimeout(()=>{
        spin.style.display = 'none';
    },4000)
}
})

