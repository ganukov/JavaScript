window.addEventListener('load', solve);

function solve() {
    const genreInput = document.getElementById('genre');
    const nameInput = document.getElementById('name');
    const authorInput = document.getElementById('author');
    const dateInput = document.getElementById('date');
    const allHitsContainer = document.getElementsByClassName('all-hits-container')[0];
    const totalLikesContainer = document.getElementsByClassName('likes')[0].children[0];
    const savedContainer = document.getElementsByClassName('saved-container')[0];
    const addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', addSongHandler);


    function addSongHandler(e) {
        e.preventDefault();
        if (genreInput.value == ''
            || nameInput.value == ''
            || authorInput.value == ''
            || dateInput.value == '') {
            return;
        }
        const hitsInfoContainer = document.createElement('div');
        hitsInfoContainer.classList.add('hits-info');

        const imgElement = document.createElement('img');
        imgElement.src = './static/img/img.png';

        const h2Genre = document.createElement('h2');
        h2Genre.textContent = `Genre: ${genreInput.value}`;

        const h2Name = document.createElement('h2');
        h2Name.textContent = `Name: ${nameInput.value}`;

        const h2Author = document.createElement('h2');
        h2Author.textContent = `Author: ${authorInput.value}`;

        const h3Date = document.createElement('h3');
        h3Date.textContent = `Date: ${dateInput.value}`;

        const saveBtn = document.createElement('button');
        saveBtn.classList.add('save-btn');
        saveBtn.textContent = 'Save song';
        saveBtn.addEventListener('click', saveSongHandler)

        const likeBtn = document.createElement('button');
        likeBtn.classList.add('like-btn');
        likeBtn.textContent = 'Like song';
        likeBtn.addEventListener('click', likeSongHandler);

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', deleteSongHandler)

        hitsInfoContainer.appendChild(imgElement);
        hitsInfoContainer.appendChild(h2Genre);
        hitsInfoContainer.appendChild(h2Name);
        hitsInfoContainer.appendChild(h2Author);
        hitsInfoContainer.appendChild(h3Date);
        hitsInfoContainer.appendChild(saveBtn);
        hitsInfoContainer.appendChild(likeBtn);
        hitsInfoContainer.appendChild(deleteBtn);

        allHitsContainer.appendChild(hitsInfoContainer);
        genreInput.value = "";
        nameInput.value = "";
        authorInput.value = "";
        dateInput.value = "";
    }

    function likeSongHandler() {
        let totalLikes = Number(document.getElementsByClassName('likes')[0].children[0].textContent.split(' ')[2]);
        totalLikes++;
        totalLikesContainer.textContent = `Total Likes: ${totalLikes}`;
        this.disabled = true;
    }

    function saveSongHandler() {
        const hitsContainer = document.getElementsByClassName('hits-info')[0];
        const likeBtn = hitsContainer.getElementsByClassName('like-btn')[0];
        const saveBtn = hitsContainer.getElementsByClassName('save-btn')[0];
        hitsContainer.removeChild(likeBtn);
        hitsContainer.removeChild(saveBtn);
        hitsContainer.cloneNode(true);
        savedContainer.appendChild(hitsContainer);

        const parent = this.parentElement;
        const grandParent = this.parentElement.parentElement;
        grandParent.removeChild(parent);

    }

    function deleteSongHandler() {
        const parent = this.parentElement;
        const grandParent = this.parentElement.parentElement;
        grandParent.removeChild(parent);

    }
}