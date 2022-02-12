let metin = document.getElementById("metin");
const btn = document.getElementById("convert");
let çıktı = document.getElementById("çıktı");

btn.addEventListener("click" ,(event) => {
    let çıktı2 = "";
    metin = metin.value.split(" ");

    for (let i = 0; i < metin.length; i++) {
        çıktı2 += metin[i].charAt(0).toUpperCase() + metin[i].slice(1) + " " 
        
    };

    çıktı.innerHTML = çıktı2;


})