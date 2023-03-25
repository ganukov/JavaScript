function validate() {
    const emailInput = document.getElementById('email');
    const emailRegex = /^[a-z]+@[a-z]+\.[a-z]+$/;

    emailInput.addEventListener('change', () => {
        if (!emailRegex.test(emailInput.value.toLowerCase())) {
            emailInput.classList.add('error');
        } else {
            emailInput.classList.remove('error');
        }
    });
}