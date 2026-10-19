// Práctica de Fundamentos de Programación
// Tema: notas de un curso (variables, condicionales, ciclos, funciones y arreglos)

const estudiantes = [
  { nombre: "Laura", notas: [4.5, 3.8, 5.0] },
  { nombre: "Camilo", notas: [2.5, 3.0, 2.8] },
  { nombre: "Daniela", notas: [3.9, 4.2, 4.0] },
  { nombre: "Mateo", notas: [] },
];

// Calcula el promedio de un arreglo de notas
function calcularPromedio(notas) {
  if (notas.length === 0) {
    return 0;
  }
  let suma = 0;
  for (let i = 0; i < notas.length; i++) {
    suma = suma + notas[i];
  }
  return suma / notas.length;
}

// Dice si el estudiante aprobó (promedio mínimo 3.0)
function estadoDelEstudiante(promedio) {
  if (promedio >= 3.0) {
    return "Aprobó";
  }
  return "Reprobó";
}

// Retorna un arreglo nuevo solo con los nombres de quienes aprobaron
function nombresAprobados(lista) {
  const aprobados = [];
  for (let i = 0; i < lista.length; i++) {
    const promedio = calcularPromedio(lista[i].notas);
    if (promedio >= 3.0) {
      aprobados.push(lista[i].nombre);
    }
  }
  return aprobados;
}

// Muestra el reporte del curso
console.log("REPORTE DEL CURSO");
for (let i = 0; i < estudiantes.length; i++) {
  const promedio = calcularPromedio(estudiantes[i].notas);
  console.log(
    estudiantes[i].nombre + " - promedio: " + promedio.toFixed(1) +
    " - " + estadoDelEstudiante(promedio)
  );
}
console.log("Aprobados:", nombresAprobados(estudiantes));
