let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

// descargar CV con el boton
document.getElementById('descargarCV').addEventListener('click', function () {
    const enlace = document.createElement('a');
    enlace.href = 'assets/pdf/HojaDeVidaRafaelLopez2025.pdf'; // Ruta al PDF
    enlace.download = 'HojaDeVidaRafaelLopez2025.pdf'; // Nombre con el que se descargará
    enlace.target = '_blank'; // Opcional: abrir en nueva pestaña
    enlace.click();
  });

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("skills__progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("angular");
        habilidades[3].classList.add("react");
        habilidades[4].classList.add("nodejs");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("logic");
    }
}

// formulario
// mensaje de exito al enviar
function mostrarToast() {
    const toast = document.getElementById("toast");
    toast.classList.add("show");
  
    setTimeout(() => {
      toast.classList.remove("show");
    }, 4000); // El toast desaparece después de 4 segundos
  }
  
// envio formulario
document.getElementById("formularioContacto").addEventListener("submit", function (e) {
    e.preventDefault(); // Evita que se redirija

    const form = e.target;

    // Usamos Fetch para enviar los datos
    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        form.reset(); // Limpia el formulario
        mostrarToast(); // Muestra mensaje
      } else {
        alert("Hubo un error al enviar el mensaje.");
      }
    }).catch(error => {
      alert("Error al enviar el mensaje. Intenta de nuevo más tarde.");
    });
  });



//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 