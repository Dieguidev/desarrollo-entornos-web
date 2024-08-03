//variables globales

let selectorMoneda = 0
let selectorimpuesto = 0
//Elementos

let precio = document.getElementById("precio")
let textoMoneda = document.getElementById("texto")
let botonCambio = document.getElementById("dolares")
let botonIgv = document.getElementById("igv")

console.log(typeof(precio))

//Aqui va algo
function cambioMoneda(){
    if(selectorMoneda == 0){
        enDolar()
    }
    else if(selectorMoneda ==1){
        enSoles()
    }
}

function cambioImpuesto(){
    if(selectorimpuesto == 0){
        conImpuesto()
    }
    else if(selectorimpuesto == 1){
        sinImpuesto()
    }
}
//Funciones
function enDolar(tipo){
    while(parseFloat(tipo) != tipo){
    tipo = prompt("Ingrese el tipo de cambio: solo numeros", "","")
}

let soles = precio.innerHTML
let dolares = parseFloat(soles) / tipo 
precio.innerHTML = dolares.toFixed(2) 
textoMoneda.innerHTML = "Precio USD"
botonCambio.innerHTML = "S/"
selectorMoneda=1
}

function enSoles(tipo){
    while(parseFloat(tipo) != tipo){
    tipo = prompt("Ingrese el tipo de cambio: solo numeros", "","")
}

let dolares = precio.innerHTML
let soles = parseFloat(dolares) * tipo 
precio.innerHTML = soles.toFixed(2) 
textoMoneda.innerHTML = "Precio S/"
botonCambio.innerHTML = "$"
selectorMoneda=0
}
function conImpuesto(){
    let precioSin = precio.innerHTML
    let precioCon = parseFloat(precioSin) * 1.18
    precio.innerHTML = precioCon.toFixed(2)
    textoMoneda.innerHTML = "Precio inc. IGV"
    botonIgv.innerHTML = "Sin IGV"
    selectorimpuesto = 1
}

function sinImpuesto(){
    let precioCon = precio.innerHTML
    let precioSin = parseFloat(precioCon) / 1.18
    precio.innerHTML = precioSin.toFixed(2)
    textoMoneda.innerHTML = "Precio sin IGV"
    botonIgv.innerHTML = "IGV"
    selectorimpuesto = 0
}

   // confirmar compra
   function confirmarCompra(productoSeleccionado) {
    const productoElemento = document.querySelector(".producto")
    if (productoElemento){
        const productos = document.querySelectorAll(".producto")
        const producto = productos[productoSeleccionado - 1].textContent
        const mensaje = `Ud. ha comprado ${producto}`
        alert(mensaje)
    } else { alert("No se ha encontrado informacion del producto")}
}    

//MODAL 
function abrirModal(imagenSrc, pie){
    const modal = document.getElementById("miModal")
    const imagenModal = document.getElementById("imagenModal")
    const pieModal = document.getElementById("pieModal")

    imagenModal.src = imagenSrc
    pieModal.textContent = pie
    modal.style.display = "block"
}

function cerrarModal(){
    const modal = document.getElementById("miModal")
    modal.style.display = "none"
}

// Fecha y hora 
let fecha = new Date()

let d = fecha.getDate()
let m = fecha.getMonth() + 1
let y = fecha.getFullYear()

document.getElementById("fecha").textContent = d+"/"+m+"/"+y


function hora(){
    let fecha = new Date() // ojo metelo //
    let h = fecha.getHours()
    let m = fecha.getMinutes()
    let s = fecha.getSeconds()

    document.getElementById("hora").textContent = h +":" + m + ":" + s
}

setInterval(hora, 1000)