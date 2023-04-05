window.addEventListener('load', solve);

function solve() {
    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const peopleCountInput = document.getElementById('people-count');
    const fromDateInput = document.getElementById('from-date');
    const daysCountInput = document.getElementById('days-count');
    const nextStepBtn = document.getElementById('next-btn');

    const ulElement = document.getElementsByClassName('ticket-info-list')[0];
    const confirmUlElement = document.getElementsByClassName('confirm-ticket')[0];
    nextStepBtn.addEventListener('click', nextHandler);

    function nextHandler(e) {
        e.preventDefault()

        if (firstNameInput.value === ''
            || lastNameInput.value === ''
            || peopleCountInput.value === ''
            || fromDateInput.value === ''
            || daysCountInput.value === '') {
            return;
        }

        const liElement = document.createElement('li');
        liElement.classList.add('ticket');

        const articleElement = document.createElement('article');

        const h3Element = document.createElement('h3');
        h3Element.textContent = `Name: ${firstNameInput.value} ${lastNameInput.value}`;

        const firstPElement = document.createElement('p');
        firstPElement.textContent = `From date: ${fromDateInput.value}`;
        console.log(firstPElement.textContent)

        const secondPElement = document.createElement('p');
        secondPElement.textContent = `For ${daysCountInput.value} days`;

        const thirdPElemet = document.createElement('p');
        thirdPElemet.textContent = `For ${peopleCountInput.value} people`;

        const editBtn = document.createElement('button');
        editBtn.classList.add('edit-btn');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', editHandler);

        const continueBtn = document.createElement('button');
        continueBtn.classList.add('continue-btn');
        continueBtn.textContent = 'Continue';
        continueBtn.addEventListener('click', continueHandler)

        articleElement.appendChild(h3Element);
        articleElement.appendChild(firstPElement);
        articleElement.appendChild(secondPElement);
        articleElement.appendChild(thirdPElemet);

        liElement.appendChild(articleElement);
        liElement.appendChild(editBtn);
        liElement.appendChild(continueBtn);

        ulElement.appendChild(liElement);
        firstNameInput.value = '';
        lastNameInput.value = '';
        peopleCountInput.value = '';
        fromDateInput.value = '';
        daysCountInput.value = '';
        nextStepBtn.setAttribute('disabled', true);
    }

    function editHandler() {
        const names = this.parentElement.querySelector('h3').textContent.split(': ')[1];
        const [firstName, lastName] = names.split(' ');
        const date = this.parentElement.querySelectorAll('p')[0].textContent.split(': ')[1];
        const countDays = this.parentElement.querySelectorAll('p')[1].textContent.split(' ')[1];
        const countPeople = this.parentElement.querySelectorAll('p')[2].textContent.split(' ')[1];
        firstNameInput.value = firstName;
        lastNameInput.value = lastName;
        fromDateInput.value = date;
        peopleCountInput.value = countPeople;
        daysCountInput.value = countDays;
        nextStepBtn.removeAttribute('disabled');
        const liElement = this.parentElement;
        liElement.remove();
    }

    function continueHandler() {
        const liElement = this.parentElement;
        confirmUlElement.appendChild(liElement);
        const continueBtn = liElement.querySelectorAll('button[class=continue-btn]')[0]
        const editBtn = liElement.querySelectorAll('button[class=edit-btn]')[0];
        const cancelBtn = document.createElement('button');
        const confirmBtn = document.createElement('button');

        confirmBtn.classList.add('confirm-btn');
        confirmBtn.textContent = 'Confirm';
        confirmBtn.addEventListener('click', confirmHandler);


        cancelBtn.classList.add('cancel-btn');
        cancelBtn.textContent = 'Cancel';
        cancelBtn.addEventListener('click', cancelHandler);

        liElement.appendChild(confirmBtn);
        liElement.appendChild(cancelBtn);
        continueBtn.remove();
        editBtn.remove();
    }

    function cancelHandler() {
        const liElement = this.parentElement;
        liElement.remove();
        nextStepBtn.removeAttribute('disabled');
    }

    function confirmHandler() {
        const body = document.getElementById('body');
        const divElement = document.getElementById('main');
        divElement.remove();

        const h1Element = document.createElement('h1');
        h1Element.id = 'thank-you';
        h1Element.textContent = 'Thank you, have a nice day!';

        const backBtn = document.createElement('button');
        backBtn.id = 'back-btn';
        backBtn.textContent = 'Back';
        backBtn.addEventListener('click', reloadHandler);

        body.appendChild(h1Element);
        body.appendChild(backBtn);
    }

    function reloadHandler() {
        location.reload();
    }
}




