const registerForm = document.querySelector('form[id=register]');
const emailInput = document.querySelector('input[name="email"]');
const passwordInput = document.querySelector('input[name="password"]');
const confirmPasswordInput = document.querySelector('input[name="rePass"]');
const errorMessage = document.querySelector('.notification');





registerForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevents the form from submitting and refreshing the page
    debugger;
    const email = emailInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    if (email.value !== '' && password.value !== '' && confirmPassword !== ''){
        if (password !== confirmPassword) {
            // Password and confirm password do not match
            errorMessage.textContent = 'Password and confirm password do not match.';
            errorMessage.style.display = 'block';
            return;
        }

    try {
        const response = await fetch('http://localhost:3030/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (response.ok) {
            // Registration successful
            sessionStorage.setItem('user', JSON.stringify(data.user)); // Store user data in session storage
            window.location.replace('index.html')

        } else {
            // Registration failed
            errorMessage.textContent = data.message;
            errorMessage.style.display = 'block';
        }
    } catch (error) {
        // Network error or server down
        errorMessage.textContent = 'An error occurred. Please try again later.';
        errorMessage.style.display = 'block';
    }
}});
