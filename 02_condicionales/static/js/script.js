console.log("conectando");

//1. Portero Digital//
function porteroDigital() {
    let edad = parseInt(prompt)("Ingrese su edad:");
    if (edad >= 18) {
        alert("Acceso permitido a la App")
    } else if (edad< 18)
        alert("Acceso denegado: necesitas ser mayor de edad ");
    }

//2. Gestión de Inventarios y Listas//
function gestiónInvyList() {`
    let productos = ["celular", "teclado", "mouse"];
let nuevoProducto = "monitor";  `cambiar` el valor para probar ambos casos`
if (!productos.includes(nuevoProducto)) {
    productos.push(nuevoProducto);
    console.log("Inventario actualizado:", productos);
} else {
    console.log("El producto ya está en el inventario");
}
}