function focused() {
    const inputFields = Array.from(document.querySelectorAll('input'));
    inputFields.forEach((input) => {
        input.addEventListener('focus', () => {
            const parentDiv = input.parentElement;
            parentDiv.classList.add('focused');
        });
        input.addEventListener('blur', () => {
            const parentDiv = input.parentElement;
            parentDiv.classList.remove('focused');
        });
    });
}