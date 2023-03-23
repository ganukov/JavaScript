function subtract() {
    const firstInput = Number(document.getElementById('firstNumber').value);
    const secondInput = Number(document.getElementById('secondNumber').value);
    const result = document.getElementById('result');
    result.textContent = firstInput - secondInput;
}