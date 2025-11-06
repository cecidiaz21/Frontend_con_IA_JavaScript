//1-Selecciona un elemento por su ID y cambia su texto.
const encabezado = document.getElementById("encabezado");
encabezado.textContent = "Texto cambiado por ID";

//2-Cambia el color de fondo de un elemento al hacer clic en él.
const parrafo = document.getElementById("parrafo");
parrafo.addEventListener("click", () => {
    parrafo.style.backgroundColor = "yellow";
});

//3-Selecciona todos los elementos con una clase específica y cámbiales el texto.
const elementos = document.querySelectorAll(".miClase");
elementos.forEach((el)=> {
    el.textContent = "Texto cambiado por clase.";
});

//4-Agrega una nueva clase a un elemento seleccionado.
const boton = document.getElementById("miBoton")
boton.classList.add("nuevaClase");

//5-Elimina una clase existente de un elemento.
const elemento = document.getElementById("miElemento");
elemento.classList.remove("claseExistente");

//6-Cambia el contenido HTML de un div usando innerHTML.
const contenedor = document.getElementById("miDiv");
contenedor.innerHTML = "<strong>Nuevo contenido en HTML.</strong>";

//7-Muestra en la consola el texto de un párrafo seleccionado.
const parrafoTexto = document.getElementById("parrafo");
console.log(parrafoTexto.textContent);

//8-Usa querySelectorAll para seleccionar múltiples elementos y recorrerlos con un bucle.
const listaElementos = document.querySelectorAll(".item");
listaElementos.forEach((item, index) => {
    console.log('Elemento ${index + 1}: ${item.textContent}');

});

//9-Crea un botón que, al hacer clic, oculte un párrafo.
const botonOcultar = document.getElementById("btnOcular");
const parrafoOcultar = document.getElementById("parrafo");

botonOcultar.addEventListener("click", () =>{
    parrafoOcultar.style.display = "none";
})

//10-Agrega un nuevo elemento HTML a un contenedor existente.
const contenedor = document.getElementById("contenedor");
const nuevoElemento = document.createElement("p");
nuevoElemento.textContent = "Este es un nuevo párrafo.";
contenedor.appendChild(nuevoElemento);

