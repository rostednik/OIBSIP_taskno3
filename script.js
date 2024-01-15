function convertTemperature() {
    var temperatureInput = document.getElementById('temperature').value;
    var fromUnit = document.getElementById('fromUnit').value;
    var toUnit = document.getElementById('toUnit').value;
    var resultDisplay = document.getElementById('result');

    if (isNaN(temperatureInput)) {
        resultDisplay.innerHTML = 'Please enter a valid number for temperature.';
        return;
    }

    var temperature = parseFloat(temperatureInput);
    var convertedTemperature;
    var resultUnit;

    if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
        convertedTemperature = (temperature * 9 / 5) + 32;
        resultUnit = 'Fahrenheit';
    } else if (fromUnit === 'celsius' && toUnit === 'kelvin') {
        convertedTemperature = temperature + 273.15;
        resultUnit = 'Kelvin';
    } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
        convertedTemperature = (temperature - 32) * (5 / 9);
        resultUnit = 'Celsius';
    } else if (fromUnit === 'fahrenheit' && toUnit === 'kelvin') {
        convertedTemperature = (temperature - 32) * (5 / 9) + 273.15;
        resultUnit = 'Kelvin';
    } else if (fromUnit === 'kelvin' && toUnit === 'celsius') {
        convertedTemperature = temperature - 273.15;
        resultUnit = 'Celsius';
    } else if (fromUnit === 'kelvin' && toUnit === 'fahrenheit') {
        convertedTemperature = (temperature - 273.15) * (9 / 5) + 32;
        resultUnit = 'Fahrenheit';
    } else {
        convertedTemperature = temperature;
        resultUnit = fromUnit.charAt(0).toUpperCase() + fromUnit.slice(1);
    }
    resultDisplay.innerHTML = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${resultUnit}`;
}