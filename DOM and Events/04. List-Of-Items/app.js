function addItem() {
    const ulElement = document.getElementById('items');
    const newText = document.getElementById('newItemText');
    ulElement.innerHTML += '<li>' + newText.value + '</li>'
    newText.value = '';
}