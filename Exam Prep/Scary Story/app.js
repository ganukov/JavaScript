window.addEventListener("load", solve);

function solve() {
  const firstNameInput = document.getElementById('first-name');
  const lastNameInput = document.getElementById('last-name');
  const ageInput = document.getElementById('age');
  const storyTitleInput = document.getElementById('story-title');
  const storyInput = document.getElementById('story');
  const btn = document.getElementById('form-btn');
  const previewList = document.getElementById('preview-list');
  const genreSelect = document.getElementById('genre');
  const main = document.getElementById('main');

  btn.addEventListener('click', publishHandler);

  function publishHandler(e) {
    e.preventDefault();
    if (firstNameInput.value == ''
      || lastNameInput.value == ''
      || ageInput.value == ''
      || storyTitleInput.value == ''
      || storyInput.value == '') {
      return;
    }

    let liElement = document.createElement("li");
    liElement.setAttribute('class', 'story-info');

    let articleElement = document.createElement("article");

    let fullName = document.createElement("h4");
    fullName.textContent = `Name: ${firstNameInput.value} ${lastNameInput.value}`;

    let Age = document.createElement("p");
    Age.textContent = `Age: ${ageInput.value}`;

    let StoryTitle = document.createElement("p");
    StoryTitle.textContent = `Title: ${storyTitleInput.value}`;

    let Genre = document.createElement("p");
    Genre.textContent = `Genre: ${genreSelect.value}`;

    let StoryText = document.createElement("p");
    StoryText.textContent = `${storyInput.value}`;


    let saveBtn = document.createElement("button");
    saveBtn.setAttribute('class', 'save-btn');
    saveBtn.textContent = 'Save Story';
    saveBtn.addEventListener('click',saveStoryHandler)


    let editBtn = document.createElement("button");
    editBtn.setAttribute('class', 'edit-btn');
    editBtn.textContent = 'Edit Story';
    editBtn.addEventListener('click',editStoryHandler)

    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute('class', 'delete-btn');
    deleteBtn.textContent = 'Delete Story';
    deleteBtn.addEventListener('click',deleteStoryHandler)

    articleElement.appendChild(fullName);
    articleElement.appendChild(Age);
    articleElement.appendChild(StoryTitle);
    articleElement.appendChild(Genre);
    articleElement.appendChild(StoryText);

    liElement.appendChild(articleElement);
    liElement.appendChild(saveBtn);
    liElement.appendChild(editBtn);
    liElement.appendChild(deleteBtn);

    previewList.appendChild(liElement);

    firstNameInput.value = "";
    lastNameInput.value = "";
    ageInput.value = "";
    storyTitleInput.value = "";
    storyInput.value = "";

    btn.disabled = true;
  }

  function editStoryHandler() {
    const info = this.parentElement.children[0].children;
    const article = this.parentElement;
    const names = info[0].textContent.split(': ')[1];
    const age = info[1].textContent.split(': ')[1];
    const title = info[2].textContent.split(': ')[1];
    const genre = info[3].textContent.split(': ')[1];
    const text = info[4].textContent;
    const [firstName, lastName] = names.split(' ');
    firstNameInput.value = firstName;
    lastNameInput.value = lastName;
    ageInput.value = age;
    storyTitleInput.value = title;
    genreSelect.selectedOptions = genre;
    storyInput.value = text;
    previewList.removeChild(article)
    btn.disabled = false;
  }

  function saveStoryHandler() {
    main.innerHTML = `<h1>Your scary story is saved!</h1>`;
  }

  function deleteStoryHandler() {
    const li = this.parentElement;
    previewList.removeChild(li);
    btn.disabled = false;
  }
}

