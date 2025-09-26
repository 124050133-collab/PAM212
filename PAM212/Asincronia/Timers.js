console.log("Inicio");

setTimeout(() => {
    console.log("Ejecutando un setTimeout, esto se ejecuta una sóla vez");
}, 3000);

setInterval(() => {
    console.log("Ejecutando un setInterval, esto se ejecuta indifinidamente cada cierto tiempo");
}, 1000);

/* let temporizadorSI = setInterval(() => {
    console.log(new Date().toLocaleTimeString());
}, 1000);


clearInterval(temporizadorSI);
console.log("después del clearInterval");

let temporizadorTO = setTimeout(() => {
    console.log(new Date().toLocaleTimeString());
}, 1000);

clearInterval(temporizadorTO);
console.log("después del clearTimeout"); */