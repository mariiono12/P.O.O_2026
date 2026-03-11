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
    let usuarios = [];
    if (nombre !== "") {
        usuarios.push(nombre);

        alert(`Hola ${usuarios}`);
    } else {
        alert("Error: El Nombre no puede estar en blanco");
    }
};

//3 Prioridades y Turnos (Inicio de la Lista)//
function reordenarDatos() {
    let productos = ["celular", "teclado", "mouse"];
    let nuevoProducto = prompt("Ingresar un nuevo producto");
    if (productos.includes(nuevoProducto)) {
        alert("El producto ya está en el inventario");
    } else {
        alert("El producto no está en el inventario");
    }
}

//4 Control de Stock Máximo//
let bodega = ["caja1", "caja2", "caja3", "caja4", "caja5", "caja6"];
function controlStock() {
    if (bodega.lenght <= 5) {
        alert("Espacio disponible")
    } else {
        alert("Bodega llena, eliminando último ingreso")
        bodega.pop();
    }
}

//5 limpieza de Datos//
function operarIntruos() {
    let colaEspera = ["error_404", "Juan", "Sofia"];
    if (colaEspera[0] == "error_404") {
        colaEspera.shift()
    }
    alert(`Cola de espera limpia: ${colaEspera.join(" - ")}`);

}

//6 Acceso VIP//
function accesoVip() {
    let foro = ["User1", "User2"];
    let rol = prompt("Ingresar rol:");
    if (rol.toLowerCase() === "admin") {
        foro.unshift(rol);
        alert(foro);
    } else {
        foro.push(rol);
        alert(foro);
    }
}

//7 Sistema de calificaciones chile (Escala 1 a 7)//
function calificacionChile() {
    let nota = parseInt(prompt("Ingrese la nota: "));
    if (6 >= 7) {
        alert("Excelent, eximido")
    }else if (4>= 5.9)
}