function deleteByEmail() {
    // returns the first met !
    const input = document.querySelector('input[name ="email"]');
    const result = document.getElementById('result')
    let emailValue = input.value;
    // we can use this only with querySelector ! find the nth child even
    const evenTds = Array.from(document.querySelectorAll('td:nth-child(even)'));
    let foundElement = evenTds.find((td) => td.textContent === emailValue);

    if (foundElement) {
        foundElement.parentElement.remove()
        result.textContent = 'Deleted.'
    } else { 
        result.textContent = 'Not found.'
    }
}