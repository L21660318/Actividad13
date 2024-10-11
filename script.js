function convertUnits() {
    const inputValue = parseFloat(document.getElementById("inputValue").value);
    const inputUnit = document.getElementById("inputUnit").value;
    const outputUnit = document.getElementById("outputUnit").value;

    // Si el campo de valor está vacío o no es un número, no hacer nada
    if (isNaN(inputValue)) {
        document.getElementById("outputValue").textContent = "0";
        return;
    }

    // Convertir todas las unidades a metros primero
    let valueInMeters;
    switch (inputUnit) {
        case "meters":
            valueInMeters = inputValue;
            break;
        case "kilometers":
            valueInMeters = inputValue * 1000;
            break;
        case "miles":
            valueInMeters = inputValue * 1609.34;
            break;
    }

    // Convertir de metros a la unidad de salida deseada
    let outputValue;
    switch (outputUnit) {
        case "meters":
            outputValue = valueInMeters;
            break;
        case "kilometers":
            outputValue = valueInMeters / 1000;
            break;
        case "miles":
            outputValue = valueInMeters / 1609.34;
            break;
    }

    // Mostrar el resultado con un máximo de 2 decimales
    document.getElementById("outputValue").textContent = parseFloat(outputValue.toFixed(2));
}
