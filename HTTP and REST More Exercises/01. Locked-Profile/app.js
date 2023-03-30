function lockedProfile() {
    const BASE_URL = 'http://localhost:3030/jsonstore/advanced/profiles';
    const main = document.getElementById('main');

    window.onload = getAllProfiles()
    function getAllProfiles() {
        
        fetch(BASE_URL)
            .then((res) => res.json())
            .then((data) => {
                data = Object.values(data)
                for (const each of data) {
                    const { _id, username, email, age } = each;
                    const divProfile = document.createElement('div');
                    divProfile.classList.add('profile');
                    const img = document.createElement('img');
                    img.src = './iconProfile2.png';
                    img.classList.add('userIcon')
                    divProfile.appendChild(img);
                    const firstRadioLabel = document.createElement('label');
                    firstRadioLabel.textContent = 'Lock';
                    divProfile.appendChild(firstRadioLabel);
                    const firstRadionInput = document.createElement('input');
                    firstRadionInput.type = 'radio';
                    firstRadionInput.name = _id;
                    firstRadionInput.value = 'lock';
                    firstRadionInput.checked = true;
                    divProfile.appendChild(firstRadionInput);
                    const secondRadioLabel = document.createElement('label');
                    secondRadioLabel.textContent = 'Unlock';
                    divProfile.appendChild(secondRadioLabel);
                    const secondRadionInput = document.createElement('input');
                    secondRadionInput.type = 'radio';
                    secondRadionInput.name = _id;
                    secondRadionInput.value = 'unlock';
                    divProfile.appendChild(secondRadionInput);
                    const br = document.createElement('br');
                    const hr = document.createElement('hr');
                    divProfile.appendChild(br);
                    divProfile.appendChild(hr);
                    const usernameLabel = document.createElement('label');
                    usernameLabel.textContent = 'Username';
                    divProfile.appendChild(usernameLabel);
                    const usernameInput = document.createElement('input');
                    usernameInput.type = 'text';
                    usernameInput.name = 'user1Username';
                    usernameInput.value = username;
                    usernameInput.readOnly = true;
                    usernameInput.disabled = true;
                    divProfile.appendChild(usernameInput);
                    const userHiddenFields = document.createElement('div');
                    userHiddenFields.id = `${_id}HiddenFields`;
                    userHiddenFields.appendChild(hr);
                    const hiddenLabel = document.createElement('label');
                    hiddenLabel.textContent = 'Email:';
                    userHiddenFields.appendChild(hiddenLabel);
                    const hiddenInputOne = document.createElement('input');
                    hiddenInputOne.type = 'email';
                    hiddenInputOne.name = `${_id}Email`;
                    hiddenInputOne.value = email;
                    hiddenInputOne.disabled = true;
                    hiddenInputOne.readOnly = true;
                    userHiddenFields.appendChild(hiddenInputOne);
                    const hiddenLabelTwo = document.createElement('label');
                    hiddenLabelTwo.textContent = 'Age:';
                    userHiddenFields.appendChild(hiddenLabelTwo);
                    const hiddenInputTwo = document.createElement('input');
                    hiddenInputTwo.type = 'email';
                    hiddenInputTwo.name = `${_id}Age`;
                    hiddenInputTwo.value = age;
                    hiddenInputTwo.disabled = true;
                    hiddenInputTwo.readOnly = true;
                    userHiddenFields.appendChild(hiddenInputTwo);
                    divProfile.appendChild(userHiddenFields)
                    const btn = document.createElement('button');
                    btn.textContent = 'Show more';
                    divProfile.appendChild(btn);
                    userHiddenFields.style.display = 'none';
                    main.appendChild(divProfile)
                    btn.addEventListener('click', showMoreHandler)

                    function showMoreHandler() {
                        if (secondRadionInput.checked) {
                            if (btn.textContent === 'Show more') {
                                userHiddenFields.style.display = 'block';
                                btn.textContent = 'Hide it';
                            } else {
                                userHiddenFields.style.display = 'none';
                                btn.textContent = 'Show more';
                            }
                        }
                    }

                }
            })
    }
}