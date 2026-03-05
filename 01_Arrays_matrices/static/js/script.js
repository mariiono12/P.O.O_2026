console.log("contectando")

// Ejercicio 1//
function construirFrase() {
    let palabra = ["programar", "es"];
    palabra.push("increible");
    palabra.push("borrar");
    palabra.pop("borrar")

    alert(`${palabra.join(" ")}`);
    alert(`la palabra eliminada fue "${eliminada}".`)
}

// Ejercicio 2// 
function filaEspera() {
    let alumnos = ["Juan", "María", "Pedro"];
    alumnos.unshift("Luis");
    let salon = [alumnos.shift()];
    alert(`Entró ${salon[0]} y la fila ahora es: ${alumnos.join(", ")}.`);
}

// Ejercicio 3//
function ordenNum() {
    let datos = [3, "gatos", "negros", "duermen"];
    datos[0] += 2;
    datos.push("placidamente");
    alert(datos.join(" "));
}

// Ejercicio 4// 
function cordMatriz() {
    let matriz = [
        [10, 20],
        [30, 40]
    ];
    let suma = matriz[0][0] + matriz[1][1]
    alert(`suma de ${matriz[0][0]} y ${matriz[1][1]} da un total de ${suma}. `)
}

// Ejercicio 5//
function operarIntruso() {
    let datos = [1, [2, [3, 4]]];
    datos[1][1].push(5);
    alert(datos);
}

// Ejercicio 6//
function traductorAcciones() {
    let sujetos = ["El programador", "La computadora"];
    let verbos = [["codifica", "analiza"], ["falla", "reinicia"]];

    alert(`${sujetos[0]} ${verbos[0][1]}`);
}

// Ejercicio 7//
function limpiarDatos() {
    let inventario = ["Error", "Laptop", "Mouse", "Teclado", "Virus"];
    inventario.shift();
    inventario.pop();
    inventario.unshift("Monitor");
alert(`${inventario.join(" - ")}`)

}

// Ejercicio 8//
function matrizTrabajar() {
    let tablero = [
       [0, 0, 0],
       [0, 0, 0],
       [0, 0, 0] 
    ];

    tablero [0][0] =1;
    tablero [1][1] =1;
    tablero[2][2]= 1;

    alert(tablero);
    
}

// Ejercicio 9: El Consultorio Médico (Complejo)
function consultorioMedico() {
    let pacientes = ["Ana", "Betto"];
    pacientes.push("Carlos", "Diana");
    pacientes.shift();
    pacientes.unshift("Sonia");
    alert(`Pacientes restantes: ${pacientes.length} \nSiguiente en la lista: ${pacientes[0]}`);
}

// Ejercicio 10: Extracción de Profundidad (Matriz 3x3x3)
function extraccionProfundidad() {
    let caja = [
        ["frutas", "verduras"],
        [["manzana", "pera"], ["tomate", "lechuga"]]
    ];
    let canasta = [caja[1][0][1], caja[1][1][1]];
    alert(`En la canasta hay ${canasta[0]} y ${canasta[1]}`);
}