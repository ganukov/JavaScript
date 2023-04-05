window.addEventListener('load', solve);

function solve() {

    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const checkInInput = document.getElementById('date-in');
    const checkOutInput = document.getElementById('date-out');
    const numberOfGuestsInput = document.getElementById('people-count');
    const ulElement = document.getElementsByClassName('info-list')[0];
    const confirmUlElement = document.getElementsByClassName('confirm-list')[0];
    const verification = document.getElementById('verification');

    const nextBtn = document.getElementById('next-btn');
    nextBtn.addEventListener('click', nextBtnHandler);

    function nextBtnHandler(e) {
        e.preventDefault()
        if (firstNameInput.value === ''
            || lastNameInput.value === ''
            || checkInInput.value === ''
            || checkOutInput.value === ''
            || numberOfGuestsInput.value === ''
            || checkInInput.value > checkOutInput.value) {
            return;
        }
    
        const liElement = document.createElement('li');
        liElement.classList.add('reservation-content');

        const articleElement = document.createElement('article');

        const h3Element = document.createElement('h3');
        h3Element.textContent = `Name: ${firstNameInput.value} ${lastNameInput.value}`;

        const pDateIn = document.createElement('p');
        pDateIn.textContent = `From date: ${checkInInput.value}`;

        const pDateOut = document.createElement('p');
        pDateOut.textContent = `To date: ${checkOutInput.value}`;

        const countP = document.createElement('p');
        countP.textContent = `For ${numberOfGuestsInput.value} people`;

        const editBtn = document.createElement('button');
        editBtn.classList.add('edit-btn');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', editHandler);

        const continueBtn = document.createElement('button');
        continueBtn.classList.add('continue-btn');
        continueBtn.textContent = 'Continue';
        continueBtn.addEventListener('click', continueHandler)

        articleElement.appendChild(h3Element);
        articleElement.appendChild(pDateIn);
        articleElement.appendChild(pDateOut);
        articleElement.appendChild(countP);

        liElement.appendChild(articleElement);
        liElement.appendChild(editBtn);
        liElement.appendChild(continueBtn);

        ulElement.appendChild(liElement);


        firstNameInput.value = '';
        lastNameInput.value = '';
        checkInInput.value = '';
        checkOutInput.value = '';
        numberOfGuestsInput.value = '';
        nextBtn.setAttribute('disabled', true);
    }

    function editHandler() {
        const liElement = this.parentElement;
        const names = liElement.querySelector('h3').textContent.split(': ')[1];
        const [firstName, lastName] = names.split(' ');
        const fromDate = liElement.querySelectorAll('p')[0].textContent.split(': ')[1];
        const toDate = liElement.querySelectorAll('p')[1].textContent.split(': ')[1];
        const countPeople = liElement.querySelectorAll('p')[2].textContent.split(' ')[1];

        firstNameInput.value = firstName;
        lastNameInput.value = lastName;
        checkInInput.value = fromDate;
        checkOutInput.value = toDate;
        numberOfGuestsInput.value = countPeople;
        nextBtn.removeAttribute('disabled');
        liElement.remove();
    }

    function continueHandler() {
        const liElement = this.parentElement;

        const editBtn = liElement.querySelectorAll('button')[0];
        const continueBtn = liElement.querySelectorAll('button')[1];

        const confirmBtn = document.createElement('button');
        confirmBtn.classList.add('confirm-btn');
        confirmBtn.textContent = 'Confirm';
        confirmBtn.addEventListener('click', confirmHandler);

        const cancelBtn = document.createElement('button');
        cancelBtn.classList.add('cancel-btn');
        cancelBtn.textContent = `Cancel`;
        cancelBtn.addEventListener('click', cancelHandler);

        liElement.appendChild(confirmBtn);
        liElement.appendChild(cancelBtn);
        confirmUlElement.appendChild(liElement);
        editBtn.remove();
        continueBtn.remove();
    }

    function confirmHandler() {
        const liElement = this.parentElement;
        liElement.remove();
        verification.classList.add('reservation-confirmed');
        verification.textContent = 'Confirmed.';
        nextBtn.removeAttribute('disabled');
        
    }

    function cancelHandler() {
        const liElement = this.parentElement;
        liElement.remove();
        verification.classList.add('reservation-cancelled');
        verification.textContent = 'Cancelled.';
        nextBtn.removeAttribute('disabled');
        
    }
}





