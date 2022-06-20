// JavaScript

// querySelector
document.querySelector("#btn-agregar").addEventListener("click", agregar)
document.querySelector("#btn-vaciar").addEventListener("click", vaciar)
document.querySelector("#btn-sortear").addEventListener("click", sortear)



// declaramos array
let personas = []

// creamos la funcion para agregar 

function agregar(){
    let nombre = document.querySelector("#nombre")
    personas.push(nombre.value)

    console.log(personas)

    mostrar()
    
}

// creamos la funcion para vaciar el array

function vaciar(){
    personas = []
    let mostrar = document.querySelector(".resultado")
    mostrar.innerHTML = ""
    mostrar.innerHTML += personas
    
    console.log(personas)

}

// creamos funcion para que se muestre en el DOM
function mostrar(){
    let mostrar = document.querySelector(".resultado")
    mostrar.innerHTML = ""

    for (let elementoActual of personas)
    mostrar.innerHTML += "<p>" + elementoActual + "</p>"

}

function sortear(){
    let random = Math.floor(Math.random() * personas.length)
    let mostrar = document.querySelector(".sorteo")
    mostrar.innerHTML = ""
    mostrar.innerHTML += personas[random]

    
}






