console.log("conectando");

//1 Portero Digital//
function validaredad() {
    let edad = parseInt(prompt("Ingresar Edad:"));
    if (edad < 0 && edad >= 130) {
        alert("Necesitas ser mayor de edad")
    }
    else if (edad >= 18) {
        alert("Acesso permitido a la app")

         if (edad <= 17 && edad > 0) {
            alert("Necesitas ser mayor de edad")
        }
        else (alert("Ingresa una edad valida"))
    }
}

//2 Gestión de Inventarios y Listas//
function filaEspera() {
let nombre = prompt("Ingrese su nombre");
let usuarios=[];
if (nombre !=="") {
    usuarios.push(nombre);
    alert(`Hola ${usuarios}`);
}
}
