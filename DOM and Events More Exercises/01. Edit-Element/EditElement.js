function editElement(a, b, c) {
    if (a.textContent.includes(b)) {
        a.textContent = a.textContent.replace(new RegExp(b, 'g'), c);
    }
}