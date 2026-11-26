document.getElementById("btn-agregar").addEventListener("click", function () { 
    const input = document.getElementById("instituto"); 
    const texto = input.value.trim(); 
    if (texto === "") { 
        return;
     }
      crearTarea(texto);
input.value = "";
 renderizarinstituto();
});
document.getElementById("instituto").addEventListener("click", function (evento) {
     const li = evento.target.closest(".instituto"); 
     if (!li) return; 
     const id = Number(li.dataset.id);
      if (evento.target.classList.contains("btn-completar")) { 
        alternarCompletada(id); 
        renderizarinstituto(); 
    }
     if (evento.target.classList.contains("btn-eliminar")) {
         eliminainstituto(id); 
         renderizarinstituto(); 
        }
    });
    renderizarinstituto();