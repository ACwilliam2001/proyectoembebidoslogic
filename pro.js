document.addEventListener("DOMContentLoaded", function() {
    const clusteringImg = document.getElementById("clustering-img");
    const btnAleatorio = document.getElementById("btn-aleatorio");
  
    // Lista de rutas de imágenes aleatorias
    const imagenesAleatorias = [
      "clus1.jpg",
      "clus2.jpg",
      "clus3.jpg",
      "clus4.jpg",
      "clus5.jpg",
      
      // Agrega aquí más rutas de imágenes aleatorias según sea necesario
    ];
  
    btnAleatorio.addEventListener("click", function() {
      // Obtener un índice aleatorio dentro del rango de la lista de imágenes
      const indiceAleatorio = Math.floor(Math.random() * imagenesAleatorias.length);
      // Obtener la ruta de imagen aleatoria correspondiente al índice
      const \proyectointerciclo = imagenesAleatorias[indiceAleatorio];
      // Establecer la nueva imagen
      clusteringImg.src = \proyectointerciclo;
    });
  });
  