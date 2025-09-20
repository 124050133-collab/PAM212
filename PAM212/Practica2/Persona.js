const persona = {
    nombre: "Pablo Cipriano",
    edad: 19,
    direccion: {
        cuidad: "Qro",
        pais: "MX"
    }
}

const { nombre, edad, direccion: {pais, cuidad }} = persona;
console.log( "Me llamo " + nombre + " tengo " + edad + " años y vivo en " + cuidad + "."); 

