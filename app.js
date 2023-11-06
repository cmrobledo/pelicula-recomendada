function recomendar(genero){  
  let edad = document.getElementById("edad").value;
  let recomendacion = document.getElementById("recomendacion");
  
  switch(genero){
    case "drama":
      if (edad < 13) {
        recomendacion.textContent = "Casablanca";
      } else if (edad < 16) {
        recomendacion.textContent = "The Shawshank Redemption";
      } else {
        recomendacion.textContent = "Taxi Driver";
      } break;

    case "comedia":
      if (edad < 13) {
        recomendacion.textContent = "Back to the Future";
      } else if (edad < 16) {
        recomendacion.textContent = "The Truman Show";
      } else {
        recomendacion.textContent = "The Wolf of Wall Street";
      } break;

    case "accion":
      if (edad < 13) {
        recomendacion.textContent = "The Goonies";
      } else if (edad < 16) {
        recomendacion.textContent = "Las Cronicas de Naria";
      } else {
        recomendacion.textContent = "Rapido y Furioso";
      } break;

    case "ficcion":
      if (edad < 13) {
        recomendacion.textContent = "Noche en el museo";
      } else if (edad < 16) {
        recomendacion.textContent = "Jumanji";
      } else {
        recomendacion.textContent = "Gravedad";
      } break;
    }  
}



