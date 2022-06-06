// JAVA
// SIMULADOR DE PLAZO FIJOS EN DISTINTOS BANCOS


// declaramos Tasas anuales de cada banco
let bancoMacro = 40.0
let bancoSantander = 11.5
let BancoNacion = 35.0
let bancoPatagonia = 60.0
let seleccion = ""

// creamos la funcion
function total(){
    seleccion = Number(prompt("Elija un banco del 1 al 4. "))
    let plazo = Number(prompt("Seleccione un plazo de dias. De 30 a 365"))
    montoDeInversion = Number(prompt("Monto a invertir: "))
    if ( seleccion == 1){
        let ganancia = (montoDeInversion * (bancoMacro / 100) * plazo) / 365
        console.log("Su ganancia sera de: " + ganancia)
    }
    else if ( seleccion == 2){
        let ganancia = (montoDeInversion * (bancoSantander / 100) * plazo) / 365
        console.log("Su ganancia sera de: " + ganancia)
    }
    else if ( seleccion == 3){
        let ganancia = (montoDeInversion * (BancoNacion / 100) * plazo) / 365
        console.log("Su ganancia sera de: " + ganancia)
    }
    else if ( seleccion == 4){
        let ganancia = (montoDeInversion * (bancoPatagonia / 100) * plazo) / 365
        console.log("Su ganancia sera de: " + ganancia)
    }
    else if ( seleccion > 4){
        alert("Ingrese un banco valido")
    }
    
}

// Llamamos a la funcion
total()























