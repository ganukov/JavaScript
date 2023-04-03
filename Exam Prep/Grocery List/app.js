
const BASE_URL = 'http://localhost:3030/jsonstore/grocery/';
const loadAllProductsBtn = document.getElementById('load-product');
const addProductBtn = document.getElementById('add-product');
const tableBody = document.getElementById('tbody');

const productInput = document.getElementById('product');
const countInput = document.getElementById('count');
const priceInput = document.getElementById('price');
const updateBtn = document.getElementById('update-product');
let buttonId = null;

loadAllProductsBtn.addEventListener('click', loadAllProductsHandler)
addProductBtn.addEventListener('click', addNewProductHandler)
updateBtn.addEventListener('click', mainUpdateBtnHandler)

async function loadAllProductsHandler(e) {
    e.preventDefault();
    const response = await fetch(BASE_URL);
    const data = await response.json();
    const info = Object.values(data);

    for (const each of info) {
        let { product, count, price, _id } = each;

        const trElement = document.createElement('tr');

        const nameTd = document.createElement('td');
        nameTd.classList.add('name');
        nameTd.textContent = product;

        const countTd = document.createElement('td');
        countTd.classList.add('count-product');
        countTd.textContent = count;

        const priceTd = document.createElement('td');
        priceTd.classList.add('product-price');
        priceTd.textContent = price;

        const buttons = document.createElement('td');
        buttons.classList.add('btn');

        const updateBtn = document.createElement('button');
        updateBtn.classList.add('update');
        updateBtn.id = _id;
        updateBtn.textContent = 'Update';
        updateBtn.addEventListener('click', updateProductHandler)
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete');
        deleteBtn.id = _id;
        deleteBtn.textContent = 'Delete'
        deleteBtn.addEventListener('click', deleteProductHandler)

        buttons.appendChild(updateBtn);
        buttons.appendChild(deleteBtn);


        trElement.appendChild(nameTd);
        trElement.appendChild(countTd);
        trElement.appendChild(priceTd);
        trElement.appendChild(buttons);

        tableBody.appendChild(trElement);
        productInput.value = '';
        countInput.value = '';
        priceInput.value = '';

    }
}

function addNewProductHandler(e) {
    e.preventDefault()
    if (productInput.value !== '' && countInput.value !== '' && priceInput.value !== '') {
        const product = productInput.value;
        const count = countInput.value;
        const price = priceInput.value;
        httpHeaders = {
            method: 'POST',
            body: JSON.stringify({
                product,
                count,
                price,
            })
        }
        fetch(BASE_URL, httpHeaders)
            .then((res) => res.json())
            .then((data) => {
                const info = Object.values(data);


                let [product, count, price, _id] = info;

                const trElement = document.createElement('tr');

                const nameTd = document.createElement('td');
                nameTd.classList.add('name');
                nameTd.textContent = product;

                const countTd = document.createElement('td');
                countTd.classList.add('count-product');
                countTd.textContent = count;

                const priceTd = document.createElement('td');
                priceTd.classList.add('product-price');
                priceTd.textContent = price;

                const buttons = document.createElement('td');
                buttons.classList.add('btn');

                const updateBtn = document.createElement('button');
                updateBtn.classList.add('update');
                updateBtn.id = _id;
                updateBtn.textContent = 'Update';

                const deleteBtn = document.createElement('button');
                deleteBtn.classList.add('delete');
                deleteBtn.id = _id;
                deleteBtn.textContent = 'Delete'
                deleteBtn.addEventListener('click', deleteProductHandler)
                buttons.appendChild(updateBtn);
                buttons.appendChild(deleteBtn);


                trElement.appendChild(nameTd);
                trElement.appendChild(countTd);
                trElement.appendChild(priceTd);
                trElement.appendChild(buttons);
            })
            .catch((err) => {
                console.error(err)
            })
    }
}

function deleteProductHandler() {
    const id = this.id;
    httpHeaders = {
        method: 'DELETE',
    }
    fetch(`${BASE_URL}${id}`, httpHeaders)
        .then(tableBody.removeChild(this.parentElement.parentElement))
}

function updateProductHandler() {
    addProductBtn.disabled = true;
    buttonId = this.id;
    updateBtn.disabled = false;
    fetch(`${BASE_URL}${buttonId}`)
        .then((res) => res.json())
        .then((data) => {
            let { product, count, price, _id } = data;
            productInput.value = product;
            countInput.value = count;
            priceInput.value = price;
        })
}

function mainUpdateBtnHandler() {
    const id = buttonId;
    const product = productInput.value;
    const count = countInput.value;
    const price = priceInput.value;
    httpHeaders = {
        method: 'PATCH',
        body: JSON.stringify({
            product,
            count,
            price,
            id
        })
    }
    fetch(`${BASE_URL}${id}`, httpHeaders)
        .then(
            fetch(BASE_URL)
                .then((res) => res.json())
                .then((data) => {
                    const info = Object.values(data);
                    tableBody.innerHTML = ''
                    for (const each of info) {
                        let { product, count, price, _id } = each;
                        const trElement = document.createElement('tr');

                        const nameTd = document.createElement('td');
                        nameTd.classList.add('name');
                        nameTd.textContent = product;

                        const countTd = document.createElement('td');
                        countTd.classList.add('count-product');
                        countTd.textContent = count;

                        const priceTd = document.createElement('td');
                        priceTd.classList.add('product-price');
                        priceTd.textContent = price;

                        const buttons = document.createElement('td');
                        buttons.classList.add('btn');

                        const updateBtn = document.createElement('button');
                        updateBtn.classList.add('update');
                        updateBtn.id = _id;
                        updateBtn.textContent = 'Update';

                        const deleteBtn = document.createElement('button');
                        deleteBtn.classList.add('delete');
                        deleteBtn.id = _id;
                        deleteBtn.textContent = 'Delete'
                        deleteBtn.addEventListener('click', deleteProductHandler)
                        buttons.appendChild(updateBtn);
                        buttons.appendChild(deleteBtn);


                        trElement.appendChild(nameTd);
                        trElement.appendChild(countTd);
                        trElement.appendChild(priceTd);
                        trElement.appendChild(buttons);
                        tableBody.appendChild(trElement)
                    }
                })
                .catch((err) => {
                    console.error(err)
                }))
}

