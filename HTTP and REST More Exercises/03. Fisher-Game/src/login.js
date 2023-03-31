const loginForm = document.querySelector('form[id=login]');
const emailInput = document.querySelector('input[name="email"]');
const passwordInput = document.querySelector('input[name="password"]');
const errorMessage = document.querySelector('.notification');

loginForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevents the form from submitting and refreshing the page

    const email = emailInput.value;
    const password = passwordInput.value;

    try {
        const response = await fetch('http://localhost:3030/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (response.ok) {
            // Login successful
            sessionStorage.setItem('user', JSON.stringify(data.user)); // Store user data in session storage
            window.location.replace('index.html'); // Redirect to home page
        } else {
            // Login failed
            errorMessage.textContent = data.message;
            errorMessage.style.display = 'block';
        }
    } catch (error) {
        // Network error or server down
        errorMessage.textContent = 'An error occurred. Please try again later.';
        errorMessage.style.display = 'block';
    }
});