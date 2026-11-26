let profesor = [];
let siguienteId = 1;
function crearprofesor(texto) {
profesor.push({
     id: siguienteId,
      texto: texto,
       completada: false,
     });
      siguienteId++;
    }
    function alternarCompletada(id) { 
        const profesor = profesor.find(function (t) { return t.id === id; }); 
        if (profesor) {
             profesor.completada = !profesor.completada;
             }
            }
            function eliminarprofesor(id) {
                 profesor = profesor.filter(function (t) { return t.id !== id; });
                }
                function renderizarprofesor() {
                     const lista = document.getElementById("lista-profesores"); 
                     let html = "";
 profesor.forEach(function (t) {
     html += `
      <li class="profesor ${t.completada ? "completada" : ""}" data-id="${t.id}"> 
        <span class="lista-profesores">${t.profesor}</span> 
      <div> 
        <button class="btn-completar">✓</button> 
        <button class="btn-eliminar">✕</button> 
        </div> 
        </li> 
        `; 
    }); 
    lista.innerHTML = html;
     const profesores = profesores.filter(function (t) { 
        return !t.completada;
     })
     .length;
      document.getElementById("contador").textContent = pendientes + "profesor";
    }