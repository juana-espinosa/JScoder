//CLASE MATERIA//
class Materia {
  constructor(nombre, ano, notas, promedio) {
    this.nombre = nombre;
    this.ano = ano;
    this.notas = notas;
    this.promedio = promedio;
  }
}
//CLASE NOTAS
class Notas {
  constructor(materiaN, porcentajeN) {
    this.materiaN = materiaN;
    this.porcentajeN = porcentajeN;
  }
}

//variable global donde guardo las materias//
var listaMaterias = [];

//variable global donde guardo las notas//
var listaNotas = [];

var materiaActual = "";

//funcion storage//
function saveLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

//mostrar la info de las materias
function obtenerMaterias() {
  let materiasJson = localStorage.getItem("listaMaterias");
  var listaMateriasJson = JSON.parse(materiasJson);
  if (listaMateriasJson != null) {
    listaMaterias = listaMateriasJson;
    cargarMaterias(listaMateriasJson);
  }
}

//mostrar la info de las materias
function obtenerNotas() {
  let notasJson = localStorage.getItem("listaNotas");
  var listaNotasJson = JSON.parse(notasJson);
  if (listaNotasJson != null) {
    listaNotas = listaNotasJson;
  }
}

function cargarMaterias(materias) {
  if (materias != null) {
    materias.forEach((objetoListaMateria) => {
      addFila(objetoListaMateria);
    }); //recorro cada elemento de la materias, en cada interaccion se va a llamar objetoListaMateria//
  }
}

function cargarNotas(materia) {
  var notasMateria = listaNotas.filter((nota) => nota.materiaN == materia);
  if (notasMateria != null) {
    notasMateria.forEach((objetoNotasMateria) => {
      addFilaT2(objetoNotasMateria);
    }); //recorro cada elemento de la materias, en cada interaccion se va a llamar objetoListaMateria//
  }
}

//ocultar tabla 1
function ocultarTabla1Mostrar2(materia) {
  materiaActual = materia;
  document.getElementById("testHola").style.visibility = "visible";
  document.getElementById("testHola").innerHTML = materia;
  document.getElementById("tabla1").style.visibility = "hidden";
  document.getElementById("tabla2").style.visibility = "visible";
  document.getElementById("btnOcultar").style.visibility = "visible";
  document.getElementById("campnombreMateria").style.visibility = "hidden";
  document.getElementById("campanoMateria").style.visibility = "hidden";
  document.getElementById("metric_results").style.visibility = "hidden";
  document.getElementById("btnagregarNota").style.visibility = "visible";
  document.getElementById("divFetch").style.visibility = "hidden";

  limpiarListaNotas();
  cargarNotas(materia);
}

//ocultar tabla 2
function ocultarTabla2Mostrar1() {
  document.getElementById("tabla2").style.visibility = "hidden";
  document.getElementById("tabla1").style.visibility = "visible";
  document.getElementById("btnOcultar").style.visibility = "hidden";
  document.getElementById("campnombreMateria").style.visibility = "visible";
  document.getElementById("campanoMateria").style.visibility = "visible";
  document.getElementById("metric_results").style.visibility = "visible";
  document.getElementById("testHola").style.visibility = "hidden";
  document.getElementById("divFetch").style.visibility = "visible";
  document.getElementById("btnagregarNota").style.visibility = "hidden";

  limpiarListaMaterias();
  cargarMaterias(listaMaterias);
}

function limpiarListaMaterias() {
  $("#tabla1 tbody tr").remove();
}

function limpiarListaNotas() {
  $("#tabla2 tbody tr").remove();
}

//nombreMateria, anio, notitas, promedio

//CREAR FILAS DE LA TABLA 1 CON EL BOTON//
function addFila(materia) {
  var cuerpoTabla = document.getElementById("tablaMaterias");

  var tr = document.createElement("TR");
  var tdMateria = document.createElement("TD");
  tdMateria.appendChild(document.createTextNode(materia.nombre));
  var tdAno = document.createElement("TD");
  tdAno.appendChild(document.createTextNode(materia.ano));
  var tdnotas = document.createElement("TD");
  tdnotas.appendChild(document.createTextNode(materia.notas));

  ///BOTON PARA OCULTAR TABLA 1
  const button = document.createElement("button");
  button.name = "btnLapiz";
  button.id = "btnLapiz";
  button.type = "button";
  button.innerHTML = "Ver sus notas";
  button.onclick = function () {
    ocultarTabla1Mostrar2(materia.nombre);
  };
  tdnotas.appendChild(button);
  //FIN BOTON

  var tdPromedio = document.createElement("TD");
  tdPromedio.appendChild(document.createTextNode(materia.promedio));
  tr.appendChild(tdMateria);
  tr.appendChild(tdAno);
  tr.appendChild(tdnotas);
  tr.appendChild(tdPromedio);
  cuerpoTabla.appendChild(tr);
  saveLocalStorage("listaMaterias", listaMaterias);
}

//CREAR FILAS DE LA TABLA 2 CON EL POPUP
function addFilaT2(objNota) {
  console.log(objNota);
  var cuerpoTabla2 = document.getElementById("tablaNotas");

  var tr = document.createElement("TR");
  var tdPorcentaje = document.createElement("TD");
  tdPorcentaje.appendChild(document.createTextNode(objNota.porcentajeN));

  var nota = calcularNota(objNota.porcentajeN);
  if (nota == -1) {
    return false;
  }

  var tdNota2 = document.createElement("TD");
  tdNota2.appendChild(document.createTextNode(nota));

  tr.appendChild(tdPorcentaje);
  tr.appendChild(tdNota2);
  cuerpoTabla2.appendChild(tr);
  return true;
}

//FIN CREAR FILAS

//agregar la informacion ingresada a las celdas de la fila creada
function agregarInfoCelda() {
  var campnombreMateria = document.getElementById("campnombreMateria").value;
  var campanoMateria = document.getElementById("campanoMateria").value;

  console.log(listaMaterias);

  if (
    listaMaterias.length > 0 &&
    listaMaterias.some((el) => el.nombre == campnombreMateria)
  ) {
    alert("La materia ya existe.");
  } else {
    const objMateria = new Materia(campnombreMateria, campanoMateria, "", 0);
    listaMaterias.push(objMateria);

    addFila(objMateria);
  }
}

//FUNCION CALCULAR NOTA//
function calcularNota(porcentaje) {

  console.log(porcentaje);

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
  }
  return nota;
  //fin calculo notas//
}

//funcion para calcular el promedio en base a una lista de notas
function calcularPromedio(notas) {
  if (notas == undefined || notas == null || notas.length == 0) {
    return 0;
  }
  console.log(notas);
  var cantidad = 0;
  var acumulado = 0;
  for (var nota of notas) {
    cantidad++;
    acumulado += calcularNota(nota.porcentajeN);
  }
  return acumulado / cantidad;
}

function descargarDatos() {
  const filename = "data.json";
  const jsonStr = JSON.stringify({
    materias: listaMaterias,
    notas: listaNotas,
  });

  let element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(jsonStr)
  );
  element.setAttribute("download", filename);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

function cargarDatos() {
  var input = document.createElement("input");
  input.type = "file";

  input.onchange = (e) => {
    var file = e.target.files[0];
    console.log(file);
    var reader = new FileReader();
    reader.onload = function () {
      var contentFile = reader.result;
      if (contentFile && contentFile.length > 0) {
        var jsonContent = JSON.parse(contentFile);
        listaMaterias = jsonContent.materias;
        listaNotas = jsonContent.notas;
        saveLocalStorage("listaMaterias", listaMaterias);
        saveLocalStorage("listaNotas", listaNotas);
        limpiarListaMaterias();
        limpiarListaNotas();
        cargarMaterias(listaMaterias);
        cargarNotas(listaNotas);
      }
    };
    if (file) {
      reader.readAsText(file);
    }
  };
  input.click();
}

let cantidadDeMaterias = 0;
let notasSumadas = 0;

//final funciones orden superior//

obtenerMaterias();
obtenerNotas();

//Pop up (uso de libreria sweet alert)
function botonIntento() {
  Swal.fire({
    title: "Ingrese sus notas aqui",
    input: "text",
    inputAttributes: {
      autocapitalize: "off",
    },
    showCancelButton: true,
    confirmButtonText: "Agregar",
    showLoaderOnConfirm: true,
    allowOutsideClick: false,
  }).then((result) => {
    if (result.isConfirmed) {
      const objNota = new Notas(materiaActual, result.value);
      if (addFilaT2(objNota)) {
        listaNotas.push(objNota);
        saveLocalStorage("listaNotas", listaNotas);

        const materia = listaMaterias.find(
          (materiaFind) => materiaFind.nombre == objNota.materiaN
        );
        materia.promedio = calcularPromedio(
          listaNotas.filter((nota) => nota.materiaN == materia.nombre)
        );
      }
    }
  });
}
// uso fetch//
function buscarLibro() {
  var libro = document.getElementById("buscadorLibro").value;
  fetch("https://www.etnassoft.com/api/v1/get/?book_author=" + libro)
    .then((response) => response.json())
    .then((data) => {
      // obtener el primer resultado
      const firstResult = data[0];

      // crear un enlace con el título del libro y la URL de detalles
      const link = document.getElementById("tituloLibro");
      link.textContent = firstResult.title;
      link.href = firstResult.url_details;
    })
    .catch((error) => console.error(error));
}
