function attachEvents() {
  const BASE_URL = 'http://localhost:3030/jsonstore/collections/books';
  const loadAllBooksBtn = document.getElementById('loadBooks');
  const tableBody = document.querySelector('tbody');
  const titleInput = document.querySelector('div > input[name=title]');
  const authorInput = document.querySelector('div > input[name=author]');
  const submitBtn = document.querySelector('div > button');
  const formHeader = document.querySelector('#form > h3');
  let changeBookId = null;
  console.log(formHeader)

  loadAllBooksBtn.addEventListener('click', getAllBooksHandler);
  submitBtn.addEventListener('click', createNewBookHandler)
  function getAllBooksHandler() {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        tableBody.innerHTML = '';
        for (const each in data) {
          let author = data[each].author;
          let title = data[each].title;

          const tr = document.createElement('tr');
          const authorTd = document.createElement('td');
          const titleTd = document.createElement('td');
          const buttonsTd = document.createElement('td');
          const editBtn = document.createElement('button');
          editBtn.id = each;
          editBtn.addEventListener('click', editBtnHandler);
          const deleteBtn = document.createElement('button');
          deleteBtn.id = each;
          deleteBtn.addEventListener('click', deleteBtnHandler);
          authorTd.textContent = author;
          titleTd.textContent = title;
          editBtn.textContent = 'Edit';
          deleteBtn.textContent = 'Delete';
          buttonsTd.appendChild(editBtn);
          buttonsTd.appendChild(deleteBtn);
          tr.appendChild(titleTd)
          tr.appendChild(authorTd);

          tr.appendChild(buttonsTd);
          tableBody.appendChild(tr);

        }
      })
      .catch((err) => {
        console.error(err)
      })
  }
  function createNewBookHandler() {
    const title = titleInput.value;
    const author = authorInput.value;
    if (title !== '' && author !== '') {
      let url = BASE_URL;
      httpHeaders = {
        method: "POST",
        body: JSON.stringify({
          author,
          title,
        })
      }
      if (submitBtn.textContent === 'Save') {
        httpHeaders.method = 'PUT'
        url += `/${changeBookId}`;
      }
      fetch(url, httpHeaders)
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          getAllBooksHandler()
          titleInput.value = '';
          authorInput.value = '';
        })
    }
  }
  function deleteBtnHandler() {
    const id = this.id;
    console.log(id)

    fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE'
    })
      .then((res) => res.json())
      .then(getAllBooksHandler)
  }
  function editBtnHandler() {
    const id = this.id;
    changeBookId = id;
    console.log(id)
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        for (const bookId in data) {
          const { author, title } = data[bookId];
          console.log(author)
          if (bookId === id) {
            formHeader.textContent = 'Edit Form';
            submitBtn.textContent = 'Save';
            authorInput.value = author;
            titleInput.value = title;
          }
        }
      })
  }
}

attachEvents();