console.log("conectando");
//*El Contador en Pantalla
function contadorPantalla() {
    let numeros = [];
    const container = document.getElementById('resultadoContainer');
    const resultado = document.getElementById('resultado1');
    for (let i = 0; i <= 10; i++) {
        numeros.push(i);
    }
    resultado.textContent = `Contando: ${numeros.join(" - ")}`;
    container.classList.remove('d-none');
};

//*Lista de Asistencia Automática
function asistenciaAutomatica() {
    let curso = ["Ana", "Diego", "Sofía", "Matias"];
    const container = document.getElementById(`container2`)
    const resultado = document.getElementById(`resultado2`)
    resultado.textContent = ""; // Limpiar contenedor
    for (let i = 0; i < curso.length; i++) {
        resultado.textContent += `${curso[i]}, `
    }
    container.classList.remove(`d-none`)
};

//*Buscador de Aprobados (Escala 1 a 7)
function buscadorApoderados() {
    let notas = [3.5, 6.2, 5.0, 2.8, 4.5, 7.0];
    let contadorAprobados = 0;

    const container = document.getElementById('Container3');
    const resultado = document.getElementById('resultado3');

    for (let i = 0; i < notas.length; i++) {

        if (notas[i] >= 4.0) {
            contadorAprobados++;
        }
    }


    container.classList.remove('d-none');
    resultado.innerHTML = `Hay ${contadorAprobados} alumnos aprobados.`;
}

//*4
function controlStock() {
    let productos = ["teclado", "Mouse", "Agotado", "Monitor", "Agotado", "Audifonos"];
    const container = document.getElementById(`container4`); //Seleccion elemento html
    const resultado = document.getElementById(`resultado4`);
    let disponibles = [];
    resultado.textContent = "";
    for (let i = 0; i < productos.length; i++) {
        if (productos[i] !== "Agotado") {
            disponibles.push(productos[i]);
        }
    }
    resultado.textContent = `Productos: ${disponibles.join(" - ")}`
    container.classList.remove(`d-none`)
}

//*5
function operarIntruso() {
    let aportes = [1500, 2000, 500, 3000, 1000];
    let totalRecaudado = 0;
    const container = document.getElementById(`Container5`);
    const resultado = document.getElementById(`resultado5`);
    for (let i = 0; i < aportes.length; i++) {
        totalRecaudado += aportes[i];
    }
    resultado.textContent = `La colecta reunió un total de: ${totalRecaudado}`;
    container.classList.remove(`d-none`);
}

//*6
function formateadorVip() {
    let asistentes = ["carlos", "MARIA", "pedro", "LUCIA"];
    const container = document.getElementById(`container6`);
    const resultado = document.getElementById(`resultado6`);
    for (let i = 0; i < asistentes.length; i++) {
        if (i % 2 === 1) (
            asistentes[i] += ["VIP"]
        )
    }
    resultado.textContent = `Asistente: ${asistentes}`;
    container.classList.remove(`d-none`);
};

//*7
function buscadorStock() {
    let bodega = ["Lápiz", "Cuaderno", "Goma", "Cuaderno", "Regla", "Cuaderno"];
    let articuloBuscado = prompt("Articulo buscado");
    let vecesEncontrado = 0;
    const container = document.getElementById(`container7`);
    const resultado = document.getElementById(`resultado7`);
    for (let i = 0; i < bodega.length; i++)
        if (articuloBuscado.toLowerCase() == bodega[i])
            vecesEncontrado++
    resultado.textContent = `El artículo ${articuloBuscado} se encuentra ${vecesEncontrado} veces en la bodega`;
    container.classList.remove(`d-none`);

};

//*8 
function párrafoAdvertencia() {
    let temperaturas = [22, 24, 28, 35, 21, 38];
    let temperaturaCritica = [];
    const container = document.getElementById(`container8`);
    const resultado = document.getElementById(`resultado8`);
    resultado.textContent = ""
    for (let i = 0; i < temperaturas.length; i++) {
        if (temperaturas[i] > 30) {
            temperaturaCritica = temperaturas[i];
            resultado.innerHTML += "¡ALERTA! temperatura crítica de " + temperaturaCritica + "grados.<br>";
        }


    }
    container.classList.remove(`d-none`)
}