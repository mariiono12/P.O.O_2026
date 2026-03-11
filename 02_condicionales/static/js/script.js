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
    let nota = parseFloat(prompt("Ingrese la nota: "));
    if (nota >= 6 && nota <= 7) {
        alert("Excelente, eximido")
    } else if (nota >= 4.1 && nota <= 5.9) {
        alert("Aprobado, vas a examen")
    } else if (nota < 4 && nota >= 1) {
        alert("Reprobado")
    } else {
        alert("Ingrese un valor valido")

    }
}


//8 Buscador de invitados//
function invitados() {
    let invitados = ["Ana", "Luis", "Camila", "Diego"];
    let personas = prompt("Ingrese su nombre: ");
    if (invitados.incluides(personas)) {
        alert(`Bienvenido/a ${personas}! Pasa a la fiesta`);
    } else {
        alert("Lo siento, no estás en la lista de invitados");
    }
}

//9 El Almacén de Matrices (2D Arrays)//
function almacenamientoMatrices() {
    let estanteria = [["Manzanas", "Peras"], ["leche", "Yogur"]];
    let seccion = prompt("ingresar una seccion(0-1)");
    let productos = prompt("ingresar producto solicitado");
    if (seccion !== 0 || seccion !== 1)
        alert("No tenemos esta seccion")
    {
        if (estanteria[seccion].includes(productos)) {
            alert("Producto encontrado en el estante")
        } else {
            alert("No tenemos ese producto en esa seccion")
        }
    }
}

//10 Registro Maestro de Visitas//
let bitacora = [];
function registroMaestro() {
    let nombreVisita = prompt("Ingrese tu nombre: ");
    let esVip = parseInt(prompt(`¿Eres VIP\n0 = no\n1 = si`));
    nombreVisita = nombreVisita.trim(); // Elimina los espacios del inicio y final

    if (nombreVisita == "") {
        alert("Error: el nombre no puede estar vacio.")
    } else if (bitacora.includes(nombreVisita)) { // Verifica que el nombre no está repetido
        alert("Esa persona ya está en la lista.");
    } else if (esVip == 1) {
        bitacora.unshift(nombreVisita);
        alert(`Agregado correctamente a la lista:\n${bitacora.join(", ")}\nPersona en total:
                $(bitacora-length}`);
    } else if (esVip == 0) {
        bitacora.push(nombreVisita);
        alert(`Agregado correctamente a la lista:\n$(bitacora.join(", ")}\nPersonas en total:
                        ${bitacora.length}`);
    } else if (esVip == 0) {
        bitacora.push(nombreVisita);
        alert(`Agregado correctamente a la lista:n${bitacora.join(", ")}\nPersonas en total:
                            ${bitacora.length}`);
    } else {
        alert("Ingrese valores válidos.");
    }
    }