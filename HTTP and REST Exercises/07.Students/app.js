function attachEvents() {
  const BASE_URL = 'http://localhost:3030/jsonstore/collections/students';
  const tableBody = document.querySelector('tbody');
  const submitBtn = document.getElementById('submit');
  const inputs = document.querySelectorAll('input')
  console.log(inputs)
  window.onload = showInfo()
  submitBtn.addEventListener('click', addNewStudentHandler);
  function showInfo() {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        tableBody.innerHTML = '';
        data = Object.values(data);
        for (const { firstName, lastName, facultyNumber, grade, _id } of data) {
          const trFirstName = document.createElement('tr');
          const firstTd = document.createElement('td');
          const secondTd = document.createElement('td');
          const thirdTd = document.createElement('td');
          const fourthTd = document.createElement('td');
          firstTd.textContent = firstName;
          secondTd.textContent = lastName;
          thirdTd.textContent = facultyNumber;
          fourthTd.textContent = grade;
          trFirstName.appendChild(firstTd);
          trFirstName.appendChild(secondTd);
          trFirstName.appendChild(thirdTd);
          trFirstName.appendChild(fourthTd);
          tableBody.appendChild(trFirstName);
        }
      })
      .catch((err) => {
        console.error(err);
      })
  }
  function addNewStudentHandler() {
    const [firstNameIn, lastNameIn, facultyNumberIn, gradeIn] = inputs;
    const firstName = firstNameIn.value;
    const lastName = lastNameIn.value;
    const facultyNumber = facultyNumberIn.value;
    const grade = gradeIn.value;
    httpHeaders = {
      method: 'POST',
      body: JSON.stringify({
        firstName,
        lastName,
        facultyNumber,
        grade,
      })
    }
    fetch(BASE_URL, httpHeaders)
      .then((res) => res.json())
      .then(() => {
        showInfo();
        firstNameIn.value = '';
        lastNameIn.value = '';
        facultyNumberIn.value = '';
        gradeIn.value = '';
      })
  }
}

attachEvents();