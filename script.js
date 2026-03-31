const descripcion= document.getElementById("inputDescripcion").value.trim();
const fecha= document.getElementById("inputFecha").value;
const terminado= document.getElementById("inputTerminado").value.trim();
FileReader.innerHTML= `
<td>${descripcion}</td>
<td>${fecha}</td>
<td>${terminado}</td>`;