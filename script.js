const fromUnit = document.getElementById("from");
const toUnit = document.getElementById("to");
const button = document.getElementById("convertBtn");
const input = document.getElementById("userInput");
const resultDisplay = document.getElementById("result");

function convert() {
    const inputValue = parseFloat(input.value);
    const fromUnitValue = fromUnit.value;
    const toUnitValue = toUnit.value;
    let result;

    // Unit Conversions
    if (fromUnitValue === "celsius" && toUnitValue === "fahrenheit") {
        result = (inputValue * 9/5) + 32;
    } else if (fromUnitValue === "fahrenheit" && toUnitValue === "celsius") {
        result = (inputValue - 32) * 5/9;
    } else if (fromUnitValue === "celsius" && toUnitValue === "kelvin") {
        result = inputValue + 273.15;
    } else if (fromUnitValue === "kelvin" && toUnitValue === "celsius") {
        result = inputValue - 273.15;
    } else if (fromUnitValue === "fahrenheit" && toUnitValue === "kelvin") {
        result = (inputValue - 32) * 5/9 + 273.15; 
    } else if (fromUnitValue === "kelvin" && toUnitValue === "fahrenheit") {
        result = (inputValue - 273.15) * 9/5 + 32;
    }
    
    resultDisplay.textContent = result.toFixed(1);
}

// Runs when button is clicked
button.addEventListener("click", convert);


function sameUnits() {
    if (fromUnit.value === toUnit.value) { 
        button.disabled = true;
    } else {
        button.disabled = false;
    }
}

fromUnit.addEventListener("change", sameUnits);
toUnit.addEventListener("change", sameUnits);

sameUnits();
