//objetos//
class Materia {
  constructor (nombre, ano, promedio) {
  this.nombre = nombre;
  this.ano = ano;
  this.promedio = promedio;
} }
function calcularNota(porcentaje) {
  //calculo notas//
  let nota = -1;
  if (porcentaje == 0) {
    nota = 0;
  } else if (porcentaje >= 1 && porcentaje <= 33) {
    nota = 1;
  } else if (porcentaje >= 34 && porcentaje <= 54) {
    nota = 2;
  } else if (porcentaje >= 55 && porcentaje <= 60) {
    nota = 3;
  } else if (porcentaje >= 51 && porcentaje <= 64) {
    nota = 4;
  } else if (porcentaje >= 65 && porcentaje <= 69) {
    nota = 5;
  } else if (porcentaje >= 70 && porcentaje <= 73) {
    nota = 6;
  } else if (porcentaje >= 74 && porcentaje <= 78) {
    nota = 7;
  } else if (porcentaje >= 79 && porcentaje <= 82) {
    nota = 8;
  } else if (porcentaje >= 83 && porcentaje <= 87) {
    nota = 9;
  } else if (porcentaje >= 88 && porcentaje <= 91) {
    nota = 10;
  } else if (porcentaje >= 92 && porcentaje <= 96) {
    nota = 11;
  } else if (porcentaje >= 97 && porcentaje <= 100) {
    nota = 12;
  }

  if (nota == -1) {
    alert("Porcentaje incorrecto");
  } else {  
    alert("Su nota es " + nota);
  }
  return nota;
  //fin calculo notas//
}
function mostrarPromedioNotas(cantidadNotas, totalNotas){
    let promedio = totalNotas / cantidadNotas;
    alert("El promedio de notas es: "  + promedio)
}

let cantidadDeMaterias = 0;
let notasSumadas = 0;

let continuar = true;
while (continuar) {
    let textoUsuario = prompt("Ingrese el porcentaje aqui o escriba 'x' para salir y mostrar el promedio:");
    if (textoUsuario == 'x') {
        continuar = false
    }
    else {
        let notaMateria = calcularNota(textoUsuario);
        if (notaMateria != -1){
            cantidadDeMaterias = cantidadDeMaterias + 1;
            notasSumadas = notasSumadas + notaMateria;
        }
    }
}
mostrarPromedioNotas(cantidadDeMaterias, notasSumadas);
//termina objetos//

//arrays//
const materias = [];
materias.push (new Materia ('sucesiones', '4to', 9));
materias.push (new Materia ('familia', '4to', 7));
materias.push (new Materia ('infancia', '4to', 6));
materias.push (new Materia ('contratos', '3ro', 4));
materias.push (new Materia ('DipR', '5to', 8));
//termina arrays//

//function de orden superior//
const materias4to = materias.filter ((el) => el.ano === '4to')
const materias3ro = materias.filter ((el) => el.ano === '3ro')

console.log (materias4to)
console.log (materias3ro)
//final funcioes orden superior//
