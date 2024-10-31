function generarCombinacion() {
    const numeros = new Set();
    
    while (numeros.size < 6) {
        const numeroAleatorio = Math.floor(Math.random() * 49) + 1;
        numeros.add(numeroAleatorio);
    }
    
    return Array.from(numeros);
}

function generarCombinaciones() {
    const combinaciones = [];
    
    for (let i = 0; i < 50; i++) {
        combinaciones.push(generarCombinacion());
    }
    
    return combinaciones;
}

const combinaciones = generarCombinaciones();
combinaciones.forEach((combinacion, index) => {
    console.log(`Combinación ${index + 1}: ${combinacion.join(", ")}`);
});
