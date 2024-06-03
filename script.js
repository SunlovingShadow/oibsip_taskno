const displayOperation = document.getElementById('display-operation');
const displayResult = document.getElementById('display-result');
let currentInput = '';
let ans = '';

function appendCharacter(character) {
    currentInput += character;
    updateDisplay();
}

function updateDisplay() {
    displayOperation.innerText = currentInput;
}

function clearDisplay() {
    currentInput = '';
    displayOperation.innerText = '';
    displayResult.innerText = '';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function useAns() {
    currentInput += ans;
    updateDisplay();
}

function calculate() {
    let result;
    // let expr = currentInput.replace(/÷/g, '/').replace(/x/g, '*').replace(/√/g, 'Math.sqrt');
    let expr = currentInput.replace(/÷/g, '/').replace(/x/g, '*').replace(/√(\d+)/g, 'Math.sqrt($1)').replace(/√/g, 'Math.sqrt');
    try {
        result = eval(expr);
    } catch (e) {
        result = 'Error';
    }
    displayResult.innerText = result;
    ans = result.toString();
    updateDisplay();
}
