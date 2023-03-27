let stock = 0;

let botonAumentarStock = document.getElementById("boton-sumar-stock");
botonAumentarStock.addEventListener("click", () => agregarProductoStock());
let botonRestarStock = document.getElementById("boton-restar-stock");
botonRestarStock.addEventListener("click", () => restarProductoStock());

let cantidadStock = document.getElementById("productos-stock");

function agregarProductoStock(){
    stock++;
    cantidadStock.innerHTML = stock;
}

function restarProductoStock(){
    stock == 0 ? stock = 0 : stock--;
    cantidadStock.innerHTML = stock;
}

function agregarAlCarrito(){
    let botonesProductos = document.getElementsByClassName("boton-agregar-carrito");
    let nombresProductos = document.getElementsByClassName("titulo-producto");
    let seccionCarrito = document.getElementById("carrito");
    let avisoVacio = document.getElementById("carrito-vacio");

    for (let i = 0; i < botonesProductos.length; i++) {
        botonesProductos[i].addEventListener("click", () => {
            avisoVacio.style.display = "none";
            let p = document.createElement("p");
            p.innerText = nombresProductos[i].textContent;
            p.classList.add("black-letter");
            seccionCarrito.appendChild(p);
        })   
    }
}

agregarAlCarrito();

/* Parte creadores */ 

let texto = "Creado por Román Martinez";
let bloqueCreadores = document.getElementById("creadores");
let p = document.createElement("p");
p.classList.add("black-letter");
p.innerText = texto;

let botonCreadores = document.getElementById("boton-creadores");
botonCreadores.addEventListener("click", () => {
    if(!p.isConnected){
        botonCreadores.innerHTML = "Ocultar creadores";
        bloqueCreadores.appendChild(p);
    }
    else{
        botonCreadores.innerHTML = "Mostrar creadores";
        bloqueCreadores.removeChild(p);
    }
});