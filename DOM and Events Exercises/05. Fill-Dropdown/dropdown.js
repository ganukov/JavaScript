function addItem() {
    const newItemText = document.getElementById('newItemText');
    const newItemValue = document.getElementById('newItemValue');
    const selectMenu = document.getElementById('menu');

    let newOption = document.createElement('option');
    newOption.value = newItemValue.value;
    newOption.textContent = newItemText.value;
    selectMenu.appendChild(newOption);
    newItemText.value = '';
    newItemValue.value = '';
}