let asistencia = [];
function agregarLista(nombre) {
    asistencia.push(nombre);
    return asistencia.join(", ");
}

function ejercicio_1() {
    const container = document.getElementById("resultadoContainer1");
    const result = document.getElementById("resultado1");
    const input = document.getElementById("input1");
    let nombre = input.value;
    let resultado = agregarLista(nombre);
    result.textContent = resultado;
    input.value = "";
    container.classList.remove("d-none");
}

let pacientes = ["Carlos", "María", "Diego"];
function agregarUrgencia(nombre) {
    asistencia.unshift(nombre);
    return asistencia.join(", ");
}

function ejercicio_2() {
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
        alert("No puede estar vacío");
    };
}

let entregas = ["Pizza", "Suchi", "Hamburguesa", "Ensalada"];
function actualizarPedidos(pedido) {
    if (pedido == "despachar") {
        entregas.shift();
    } else if (pedido == "cancelar") {
        entregas.pop()
    } else {
        alert("Ingresar un valor valido")
    }
    return `Pedidos pendientes: ${entregas.join(", ")}`
}

function ejercicio_3() {
    const container = document.getElementById("resultadoContainer3");
    const result = document.getElementById("resultado3");
    let input = document.getElementById("input3").value;
    let resultado = actualizarPedidos(input);
    result.textContent = resultado;
    input.value = "";
    container.classList.remove("d-none")
}

let codigosValidos = ["VERANO2026", "PROMO50", "CLIENTEVIP"];
function buscarCodigo(codigo) {
    let mensaje = "Código inválido o expirado";
    for (let i = 0; i < codigosValidos.length; i++) {
        if (codigo == codigosValidos[i]) {
            mensaje = "!Éxito¡ Código aceptado."
            return "!Éxito¡ Código aceptado"
        } else {
            mensaje = ("Ingresa un código válido")
        }
    }
    return mensaje;
}

function ejercicio_4() {
    let input = document.getElementById("input4");
    let codigo = input.value;
    const result = document.getElementById("resultado4");
    const container = document.getElementById("resultadoContainer4");
    let resultado = buscarCodigo(codigo);
    result.textContent = resultado;
    input.value = "";
    container.classList.remove("d-none");
}

function calcularCuotas(valor, cuota) {
    let registroPagos = "";
    for (let i = 1; i <= 3; i++) {
        registroPagos += `Cuota ${i} de ${cuota}: ${parseInt(valor / 3)} |`;
    }
    return registroPagos;
}

function ejercicio_5() {
    const producto = document.getElementById("input5_1");
    let valorProducto = parseInt(producto.value);
    const cuotaInput = document.getElementById("input5_2");
    let cuota = parseInt(cuotaInput.value);
    const result = document.getElementById("resultado5");
    const container = document.getElementById("resultadoContainer5");
    let resultado = calcularCuotas(valorProducto, cuota);
    result.textContent = resultado;
    producto.value = "";
    cuotaInput.value = "";
    container.classList.remove("d-none")
}

let vitrina = [2500, 15000, 8000, 30000, 5000];
let opciones = [];
function comprobarPresupuesto(presupuesto) {
    for (let i = 0; i <= vitrina.length; i++) {
        if (presupuesto >= vitrina[i]) {
            opciones.push(vitrina[i]);
        }
    };
    if (opciones == "") {
        return "No te alcanza para nada."
    } else {
        return `Te alcanza para los precios: ${opciones.join(" - ")}`;
    }
}

function ejercicio_6() {
    let input = document.getElementById("input6");
    const result = document.getElementById("resultado6");
    const container = document.getElementById("resultadoContainer6");
    let dinero = parseInt(input.value);
    if (isNaN(dinero)) {
        alert("Ingresa valores válidos.");
    } else {
        let resultado = comprobarPresupuesto(dinero);
        result.textContent = resultado;
        input.value = "";
        container.classList.remove("d-none")
        opciones = [];
    }
}

