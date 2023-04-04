window.addEventListener("load", solve);

function solve() {
  const firstNameInput = document.getElementById('first-name');
  const lastNameInput = document.getElementById('last-name');
  const ageInput = document.getElementById('age');
  const genderInput = document.getElementById('genderSelect');
  const descriptionInput = document.getElementById('task');
  const ulElement = document.getElementById('in-progress');
  const finishedUlElement = document.getElementById('finished');
  const submitBtn = document.getElementById('form-btn');
  const clearBtn = document.getElementById('clear-btn');
  const progressCounter = document.getElementById('progress-count');
  submitBtn.addEventListener('click', submitHandler);
  clearBtn.addEventListener('click', clearHandler)


  function submitHandler() {

    if (firstNameInput.value === ''
      || lastNameInput.value === ''
      || ageInput.value === '') {
      return;
    }
    const name = firstNameInput.value;
    const lastName = lastNameInput.value;
    const age = ageInput.value;
    const gender = genderInput.selectedOptions[0].value;
    const description = descriptionInput.value;

    const liElement = document.createElement('li');
    liElement.classList.add('each-line');
    const articleElement = document.createElement('article');

    const h4Element = document.createElement('h4');
    h4Element.textContent = `${name} ${lastName}`;

    const firstPElement = document.createElement('p');
    firstPElement.textContent = `${gender}, ${age}`;

    const secondPElement = document.createElement('p');
    secondPElement.textContent = `Dish description: ${description}`

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    editBtn.textContent = `Edit`;
    editBtn.addEventListener('click', editHandler)

    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete-btn')
    completeBtn.textContent = `Mark as complete`;
    completeBtn.addEventListener('click', completePostHandler)

    articleElement.appendChild(h4Element);
    articleElement.appendChild(firstPElement);
    articleElement.appendChild(secondPElement);

    liElement.appendChild(articleElement);
    liElement.appendChild(editBtn);
    liElement.appendChild(completeBtn);

    ulElement.appendChild(liElement);

    firstNameInput.value = '';
    lastNameInput.value = '';
    ageInput.value = '';
    descriptionInput.value = '';

    progressCounter.textContent = Number(progressCounter.textContent) + 1;
  }
  function editHandler() {
    const li = this.parentElement;
    const [firstName, lastName] = li.querySelector('h4').textContent.split(' ');
    const [gender, age] = li.querySelector('p').textContent.split(', ');
    const description = li.querySelectorAll('p')[1].textContent.split(' ')[2];

    firstNameInput.value = firstName;
    lastNameInput.value = lastName;
    ageInput.value = age;
    genderInput.value = gender;
    descriptionInput.value = description;

    ulElement.removeChild(li);

    progressCounter.textContent = Number(progressCounter.textContent) - 1;
  }

  function completePostHandler() {
    const li = this.parentElement;
    const otherBtn = li.querySelectorAll('button')[0];
    li.removeChild(otherBtn);
    li.removeChild(this);


    let moved = li.cloneNode(true);
    finishedUlElement.appendChild(moved);
    ulElement.removeChild(li);
    progressCounter.textContent = Number(progressCounter.textContent) - 1;
  }

  function clearHandler() {
    finishedUlElement.innerHTML = '';
  }
}
