console.log("conectando");
//*
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

//*
function  Lista de Asistencia Automática() {
    let curso = ["Ana", "Diego", "Sofía", "Matias"];

};