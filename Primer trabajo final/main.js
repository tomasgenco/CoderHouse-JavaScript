// JavaScript

class personal {
    constructor (nombre, edad, rol){
        this.nombre = nombre
        this.edad = edad
        this.rol = rol
    }
}


const equipo = []


function crearPersonal(){
    let miembro = new personal(prompt("Ingrese nombre"),prompt("Ingresa la edad"), prompt("Ingrese el rol"))
    equipo.push(miembro)
}
function contarPersonal(){
    return console.log(equipo.length)
}

crearPersonal()
crearPersonal()
crearPersonal()


contarPersonal()
















