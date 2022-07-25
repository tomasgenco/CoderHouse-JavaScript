let url = 'https://62d82b0490883139358c8851.mockapi.io/api/usuarios'

let btnRegister = document.querySelector('#btnRegister');

let btnLogin = document.querySelector('#btnLogin');




async function obtenerDatos() {

  let res = await fetch(url);
  let json = await res.json();
  console.log(json)
  
  
}

async function enviarDatos() {

  let userName = document.querySelector('#floatingInput-register').value;
  let password = document.querySelector('#floatingPassword-register').value;
  
  
 
  
  try {
    let res = await fetch(url, {
      "method": "POST",
      "headers": {"Content-type": "application/json"},
      "body": JSON.stringify({
        'username': userName,
        'password': password
      })
    })
    if(res.status === 201){
      Swal.fire(
        'Se registro correctamente'
        )
      }
    } catch (error) {
      console.log(error)
    }
  }




obtenerDatos()

  
  
  
  
btnRegister.addEventListener('click', enviarDatos)






  
  
  



