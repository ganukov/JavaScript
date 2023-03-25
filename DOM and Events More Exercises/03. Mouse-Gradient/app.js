function attachGradientEvents() {
    const gradientBox = document.getElementById('gradient-box');
    const gradient = document.getElementById('gradient');
    const result = document.getElementById('result');

    gradientBox.addEventListener('mousemove', (event) => {
        const mouseX = event.clientX - gradient.getBoundingClientRect().left;
        const gradientWidth = gradient.offsetWidth;
        const percentage = Math.floor((mouseX / gradientWidth) * 100);
        result.textContent = `${percentage}%`;
    });

}