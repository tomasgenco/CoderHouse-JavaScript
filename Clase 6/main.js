// JavaScript

const equipo = []

class personal{

    constructor(nombre, edad, rol){
        this.nombre = nombre
        this.edad = edad
        this.rol = rol
    }
}


function agregarPersonal(){

    let a =  new personal(prompt("Nombre"), prompt("edad"), prompt("Rol"))
    equipo.push(a)


}

let cantidad = prompt("Ingrese la cantidad de personal que quiere añadir")
for(let i = 0; i < cantidad; i++){
    agregarPersonal()
}

console.log(equipo)


























