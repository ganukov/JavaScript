function addItem() {
    const ulElement = document.getElementById('items');
    const newText = document.getElementById('newItemText');
    const newAnchor = document.createElement('a');
    const newLi = document.createElement('li');
    newLi.textContent = newText.value;
    newAnchor.textContent = '[Delete]';
    newAnchor.setAttribute(`href`, `#`)
    newAnchor.addEventListener('click', deleteHandler);
    newLi.appendChild(newAnchor);
    ulElement.appendChild(newLi);
    newText.value = '';

    function deleteHandler(e) {
        const liItem = e.currentTarget.parentElement;
        liItem.remove();
    }
}