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
resultado.textContent= ""; // Limpiar contenedor
for(let i = 0; i < curso.length; i++) {
    resultado.textContent += `${curso[i]}, `
}
container.classList.remove(`d-none`)
};

//*Buscador de Aprobados (Escala 1 a 7)
function buscadorApoderados(){
    let notas = [3.5, 6.2, 5.0, 2.8, 4.5, 7.0]
    let contadorAprobados = 0
const container = document.getElementById(`container3`); //selección elementos html
const resultado = document.getElementById(`resultado3`);
for (let i = 0; i >= notas.length; i++) {
    if (nota[1] >= 4.0) {
        contadorAprobados++;

    }
 
} 
 console.log(resultado, contadorAprobados)
 resultado.textoContent = "Total de alumnos aprobados: "+ contadorAprobados
 container.classListremove(`d-none`)

}
;