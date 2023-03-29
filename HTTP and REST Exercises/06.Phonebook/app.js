function attachEvents() {

    const buttonLoad = document.getElementById('btnLoad');
    const phonebook = document.getElementById('phonebook');
    const createBtn = document.getElementById('btnCreate');
    const personInput = document.getElementById('person');
    const numberInput = document.getElementById('phone');

    const GET_AND_POST_URL = 'http://localhost:3030/jsonstore/phonebook';
    const DELETE_BASE_URL = 'http://localhost:3030/jsonstore/phonebook/';

    buttonLoad.addEventListener('click', getAll);
    createBtn.addEventListener('click', createBtnHandler);

    function getAll() {
        fetch(`${GET_AND_POST_URL}`)
            .then((response) => response.json())
            .then((info) => {
                console.log(info)
                phonebook.innerHTML = '';
                info = Object.values(info)
                for (const { phone, person, _id } of info) {
                    const li = document.createElement('li');
                    const button = document.createElement('button');
                    button.textContent = 'Delete';
                    button.id = _id;

                    button.addEventListener('click', deletePhoneHandler);
                    li.innerHTML = `${person}: ${phone}`;
                    li.appendChild(button);
                    phonebook.appendChild(li);
                }

            })
            .catch((err) => {
                console.log(err.message)
            })

    }
    function createBtnHandler() {
        const person = personInput.value;
        const phone = numberInput.value;

        const httpHeader = {
            method: 'POST',
            body: JSON.stringify({ person, phone })
        }
        console.log(httpHeader)
        fetch(GET_AND_POST_URL, httpHeader)
            .then((res) => res.json())
            .then(() => {

                getAll();
                personInput.value = '';
                numberInput.value = '';
            })
            .catch((err) => {
                console.error(err)
            })
    }


    function deletePhoneHandler() {
        const id = this.id;
        fetch(`${DELETE_BASE_URL}${id}`, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then(getAll)
            .catch((err) => {
                console.error(err)
            })
    }

}

attachEvents();