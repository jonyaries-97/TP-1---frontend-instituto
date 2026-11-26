let estudiante = [];
let siguienteId = 1;
function crearestudiante(texto) {
estudiante.push({
     id: siguienteId,
      texto: texto,
       completada: false,
     });
      siguienteId++;
    }
    function alternarCompletada(id) { 
        const estudiante = estudiante.find(function (t) { return t.id === id; }); 
        if (materia) {
             estudiante.completada = !estudiante.completada;
             }
            }
            function eliminarestudiante(id) {
                 estudiante = estudiante.filter(function (t) { return t.id !== id; });
                }
                function renderizarestudiante() {
                     const lista = document.getElementById("lista-estudiantes"); 
                     let html = "";
 estudiante.forEach(function (t) {
     html += `
      <li class="estudiante ${t.completada ? "completada" : ""}" data-id="${t.id}"> 
        <span class="lista-estudiantes">${t.estudiante}</span> 
      <div> 
        <button class="btn-completar">✓</button> 
        <button class="btn-eliminar">✕</button> 
        </div> 
        </li> 
        `; 
    }); 
    lista.innerHTML = html;
     const estudiante = estudiante.filter(function (t) { 
        return !t.completada;
     })
     .length;
      document.getElementById("contador").textContent = pendientes + "estudiante";
    }