/*Parpadear*/

let texto = document.getElementById("titulo");

function parpadear(){
    let r = Math.floor(Math.random()*250);
    let g = Math.floor(Math.random()*250);
    let b = Math.floor(Math.random()*250);
    texto.style.color="rgb("+r+","+g+","+b+")";
}

setInterval(parpadear, 1000);

/*Carrusel*/
let c=0;
let banner = document.getElementById("banner");

function carrusel(){
    c++;
    if(c>4) c=1;
    banner.setAttribute("src","img/banner"+c+".jpg");
}

setInterval(carrusel, 1000);

/* Fecha */
let fecha = new Date();
console.log(fecha);
let year = fecha.getFullYear();
console.log(year);
document.getElementById("copy").innerHTML="&copy; "+year


/* Acceder al dom a través de la clases */

function gira(e){
    e.style.transform="rotate(360deg)";
    e.style.transition="all 1s";
}

function retorna(e){
    e.style.transform="rotate(0)";
    e.style.transition="all 1s";
}

let elemento = document.getElementsByClassName("productos");

for(var i=0; i<elemento.length; i++)
{
    elemento[i].setAttribute("onmouseover", "gira(this)");
    elemento[i].setAttribute("onmouseout", "retorna(this)");

}