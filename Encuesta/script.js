document.addEventListener('DOMContentLoaded', function() {
    const secciones = document.querySelectorAll('.seccion');

    secciones.forEach(seccion => {
        seccion.style.display = 'none';
    });
    
    document.getElementById('rubro').addEventListener('change', function() {
        const bellezaDiv = document.querySelector('.salud-belleza-bienestar');
        const textilDiv = document.querySelector('.ropa-zapatos-accesorios');

        if (this.value === 'belleza') {
            bellezaDiv.style.display = 'block';
            textilDiv.style.display = 'none';  // Asegúrate de ocultar la otra sección
        } 
        else if (this.value === 'textil') {
            bellezaDiv.style.display = 'none';  // Asegúrate de ocultar la otra sección
            textilDiv.style.display = 'block';
        }
        else if (this.value === 'elegir') {
            bellezaDiv.style.display = 'none';
            textilDiv.style.display = 'none';
        }
    });
});

document.getElementById('servicios').addEventListener('change', function() {
    const belleza1Div = document.querySelector('.belleza1');

    if (this.value === 'belleza1') {
        belleza1Div.style.display = 'block';
    } 
    else {
        belleza1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
    }
});

document.getElementById('cabello').addEventListener('change', function() {
    const cabelloDiv = document.querySelector('.cabello');

    if (this.value === 'si') {
        cabelloDiv.style.display = 'block';
    } 
    else {
        cabelloDiv.style.display = 'none';  // Asegúrate de ocultar la otra sección
    }
});

//document.getElementById('cabello').addEventListener('change', function() {
  //  const experienciaLenguajesDiv = document.getElementById('experienciaLenguajes');
    //const objetivoAprendizajeDiv = document.getElementById('objetivoAprendizaje');

    //if (this.value === 'si') {
      //  experienciaLenguajesDiv.classList.remove('oculto');
        //objetivoAprendizajeDiv.classList.remove('oculto');
 //   } 
  //  else {
 //       experienciaLenguajesDiv.classList.add('oculto');
 //       objetivoAprendizajeDiv.classList.add('oculto');
  //  }
//});
//Esto es la prueba de Kiara