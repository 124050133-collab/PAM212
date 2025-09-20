const personas = [
    { nombre: "Ana", edad: 22 },
    { nombre: "Luis", edad: 35 },
    { nombre: "María", edad: 28 }
];

let people = personas.find(personas => personas.nombre == "Luis");
console.log(people);

personas.forEach(function (nombre, edad) {
    console.log(this.value, nombre, edad)
});

let suma = personas.reduce(function(i, personas) {
    return i + persona.edad;
}, 0);
console.log(suma);