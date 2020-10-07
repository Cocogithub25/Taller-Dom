let boton= document.getElementById ("boton"); /* Guarda la etiqueta */
boton.addEventListener("click", function () {
    let obra= document.getElementById("obras").value; /* Guarde el texto dentro de la etiqueta */
    let lista= document.getElementById("lista"); /* Guardamos la etiqueta, identificando donde se deben insertat las nuevas etiquetas */

    let etiquetaNueva= document.createElement("li") /* Creamos la etiqueta nueva */
    etiquetaNueva.textContent= obra;

    lista.appendChild(etiquetaNueva); /* Al padre se le agrega un hijo nuevo, en este caso etiquetaNueva */
    
})
lista.addEventListener("dblclick", function(e){
    console.long(e.target);
    let obraEliminar=e.target;
    lista.removeChild(obraEliminar);
})

let elementoLi= document.getElementsByTagName("li");
elementoLi.addEventListener("click"), function(){
lista.removeChild(etiquetaNueva)



}