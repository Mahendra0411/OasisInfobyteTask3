function convertTemperature() {
    let temperature = parseFloat(document.getElementById("temperature").value);
    let unit = document.getElementById("unit").value;
    let resultElement = document.getElementById("result");

    if (isNaN(temperature)) {
        resultElement.innerHTML = "Please enter a valid number for temperature.";
        return;
    }

    if (unit === "celsius") {
        let convertedTemp = (temperature * 9/5) + 32;
        resultElement.innerHTML = "Converted Temperature: " + convertedTemp.toFixed(2) + " °F";
    } else if (unit === "fahrenheit") {
        let convertedTemp = (temperature - 32) * 5/9;
        resultElement.innerHTML = "Converted Temperature: " + convertedTemp.toFixed(2) + " °C";
    } else if (unit === "kelvin") {
        let convertedTemp = temperature + 273.15;
        resultElement.innerHTML = "Converted Temperature: " + convertedTemp.toFixed(2) + " K";
    }
}