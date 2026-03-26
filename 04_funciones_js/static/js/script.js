
let asistencia = [];
function agregarLista(nombre) {
    asistencia.push(nombre);
    return asistencia.join(", ");

}
function registrarAlumno() {
    const container = document.getElementById("container1");
    const result = document.getElementById("result1");
    const input = document.getElementById("input1");
    let nombre = input.value;
    let resultado = agregarLista(nombre);
    result.textContent = resultado;// llamado a la funcion con envio de parametro 
    input.value = "";
    container.classList.remove("d-none");
}







let pacientes = ["Carlos", "María", "Diego"];
function agregarUrgencia(nombre) {
    pacientes.unshift(nombre);
    return pacientes.join(", ");
}
function agregarUrgencia() {
    const container = document.getElementById("container2")
    const result = document.getElementById("result2")
    const input = document.getElementById("input2");
    //input = parseInt(input); --> transformar a numero  
    if (input.value !== "") {
        let nombre = input.value;
        let resultado = agregarUrgencia(nombre);
        result.textContent = resultado;
        input.value = "";
        container.classList.remove("d-none");
    } else {
        alert("El nombre no puede estar vacio ")
    }

}


let entregas = ["Pizza", "Sushi", "Hamburguesa", "Ensalada"];

function actualizarPedidos(pedido) {
    if (pedido == "despachar") {
        entregas.shift()
    } else if (pedido == "cancelar") {
        entregas.pop()
    } else {
        alert("Ingresar un valor valido")
    }
    return `Pedidos pendientes: ${entregas.join(", ")}`
}

function gestionarPedidos() {
    const container = document.getElementById("container3")
    const result = document.getElementById("result3")
    const texto = document.getElementById("input3");
    let input = texto.value.toLowerCase();
    let resultado = actualizarPedidos(input);
    result.textContent = resultado;
    texto.value = "";
    container.classList.remove("d-none");
}




let codigosValidos = ["VERANO2026", "PROMO50", "CLIENTEVIP"];
function buscarCodigpo(codigo) {
    let mensaje = "Codigo invalido o expírado";
    for (let i = 0; i < codigosValidos.length; i++) {
        if (codigo === codigosValidos[i]) {
            mensaje = "Exito codigo aceptado";
            return "Exito codigo aceptado";
        } else {
            mensaje = "Ingresar un codigo valido";
        }
    }
    return mensaje
}
function verificarCodigo() {
    let input = document.getElementById("input4");
    let codigo = input.value;
    const result = document.getElementById("result4")
    const container = document.getElementById("container4");
    let resultado = buscarCodigo(codigo);
    result.textContent = resultado;
    input.value = "";
    container.classList.remove("d-none");
}
