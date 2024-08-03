/*parpadear*/

let texto = document.getElementById("nombre");

function parpadear() {
    let r = Math.floor(Math.random() * 250);
    let g = Math.floor(Math.random() * 250);
    let b = Math.floor(Math.random() * 250);
    texto.style.color = "rgb(" + r + "," + g + "," + b + ")";
}
setInterval(parpadear, 1000);

/*Carrusel*/
let c=0;
let banner = document.getElementById("banner");
function carrusel(){
    c++;
    if(c>4) c=1;
    banner.setAttribute("src", "img/banner"+c+".jpg");
}
setInterval(carrusel, 1000);