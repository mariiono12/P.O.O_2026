console.log("conectando");

let asistencia = [];
function agregarLista(nombre) {
    asistencia.push(nombre);
    return asistencia.join(", ");

}
function registrarAlumno() {

    const container = document.getElementById("container1");
    const result = document.getElementById("resultado1");
    const input = document.getElementById("input1");
    let nombre = input.value;
    // input = parseInt(input); ---> Transformar a número
    let resultado = agregarLista(nombre); //Llamado a la función con envío de parámetros
    result.textContent = resultado;
    input.value = "";
    container.classList.remove("d-none");
}

//* 
let pacientes = ["Carlos", "María", "Diego"];
function agregarUrgencia(nombre) {
    pacientes.unshift(nombre);
    return pacientes.join(", ");
};

function ingresarUrgencia() {
    const container = document.getElementById("resultadoContainer2");
    const result = document.getElementById("resultado2");
    const input = document.getElementById("input2");
    if (input.value !== "") {
        let nombre = input.value;
        let resultado = agregarUrgencia(nombre);
        result.textContent = resultado;
        input.value = "";
        container.classList.remove("d-none");
    } else {
        alert("El nombre no puede estar vacío . . .");
    }
};

//*

let entregas = ["Pizza", "Sushi", "Hamburguesa", "Ensalada"];
function actualizarPedidos(pedido) {
    if (pedido == "despachar") {
        entregas.shift()
    } else if (pedido == "cancelar") {
        entregas.pop()
    } else {
        alert("Ingrese un valor válido")
    }
    return `Pedidos pendientes: ${entregas.join(", ")}`
};

function gestionarPedidos() {
    const container = document.getElementById("resultadoContainer3");
    const result = document.getElementById("resultado3");
    const input = document.getElementById("input3").value;
    let resultado = actualizarPedidos(input);
    result.textContent = resultado;
    input.value = "";
    container.classList.remove("d-none");
};
