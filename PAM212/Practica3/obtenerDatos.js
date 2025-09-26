function simularPeticionAPI() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Datos recibidos correctamente");
    }, 5000); // 5 segundos simulando la espera de la API
  });
}

async function obtenerDatos() {
  try {
    const resultado = await simularPeticionAPI(); // espera la promesa
    console.log(resultado); // imprime el resultado
  } catch (error) {
    console.error("Error al obtener datos:", error);
  }
}

// Llamamos a la función
obtenerDatos();
