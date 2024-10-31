function calcularFrecuencias() {
    const frecuencias = Array(10).fill(0); 

    
    for (let j = 0; j < 10; j++) {
        for (let i = 0; i < 10000; i++) {
            const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
            frecuencias[numeroAleatorio - 1]++;
        }
    }

    
    console.log("Frecuencias:");
    frecuencias.forEach((frecuencia, index) => {
        console.log(`Número ${index + 1}: ${frecuencia}`);
    });
}

calcularFrecuencias();