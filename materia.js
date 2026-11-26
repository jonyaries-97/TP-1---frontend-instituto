let materia = [];
let siguienteId = 1;
function crearmateria(texto) {
materia.push({
     id: siguienteId,
      texto: texto,
       completada: false,
     });
      siguienteId++;
    }
    function alternarCompletada(id) { 
        const materia = materia.find(function (t) { return t.id === id; }); 
        if (materia) {
             materia.completada = !materia.completada;
             }
            }
            function eliminarmateria(id) {
                 materia = materia.filter(function (t) { return t.id !== id; });
                }
                function renderizarmateria() {
                     const lista = document.getElementById("lista-materias"); 
                     let html = "";
 materia.forEach(function (t) {
     html += `
      <li class="profesor ${t.completada ? "completada" : ""}" data-id="${t.id}"> 
        <span class="lista-materias">${t.materia}</span> 
      <div> 
        <button class="btn-completar">✓</button> 
        <button class="btn-eliminar">✕</button> 
        </div> 
        </li> 
        `; 
    }); 
    lista.innerHTML = html;
     const materias = materias.filter(function (t) { 
        return !t.completada;
     })
     .length;
      document.getElementById("contador").textContent = pendientes + "materia";
    }