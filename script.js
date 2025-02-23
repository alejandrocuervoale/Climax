function mostrarClima() {
    const ciudad = document.getElementById('ciudad').value;
    const climaSimulado = {
        "Madrid": "Soleado, 25°C",
        "Barcelona": "Parcialmente nublado, 22°C",
        "Londres": "Lluvioso, 15°C",
        "Nueva York": "Nublado, 18°C"
    };
    const resultado = climaSimulado[ciudad] || "Ciudad no encontrada";
    document.getElementById('resultado').textContent = `Clima en ${ciudad}: ${resultado}`;
}