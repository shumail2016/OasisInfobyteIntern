let display = document.getElementById("display");

currentValue = "";
currentExpression = "";

function updateDisplay(value) {
    display.textContent = value;
}

function updateValue(value) {
    currentValue = display.textContent;
    currentValue += value;
    updateDisplay(currentValue);
}

function clearDisplay() {
    currentValue = "";
    updateDisplay(currentValue);
}

function deleteValue() {
    currentValue = display.textContent.slice(0, -1);
    updateDisplay(currentValue);
}

function evaluateExpression() {
    currentExpression = display.textContent;
    if (currentExpression[currentExpression.length-1]==="%") {
        currentExpression = currentExpression.slice(0, -1);
        currentExpression =eval(currentExpression+"/100");
        updateDisplay(currentExpression);
    } else {
        try {
            currentExpression = eval(currentExpression);
            updateDisplay(currentExpression);
        } catch (error) {
            console.log(error);
        }
    }
}

let buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener('click', () => {
        switch (button.textContent) {
            case "AC":
                clearDisplay();
                break;
            case "DEL":
                deleteValue();
                break;
            case "=":
                evaluateExpression();
                break;
            default:
                updateValue(button.textContent);
        }
    });
});

