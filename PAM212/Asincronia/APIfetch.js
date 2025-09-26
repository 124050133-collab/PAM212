// Usamos fetch para pedir información
fetch("https://jsonplaceholder.typicode.com/users")
  .then(respuesta => respuesta.json())  // Convertimos la respuesta a JSON
  .then(datos => {
    console.log("Lista de usuarios:");
    console.log(datos); // Mostramos los usuarios en consola
  })
  .catch(error => {
    console.log("Ocurrió un error:", error);
  });
