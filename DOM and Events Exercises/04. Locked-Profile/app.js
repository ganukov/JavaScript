function lockedProfile() {
    const buttons = Array.from(document.getElementsByTagName('button'));
    for (const button of buttons) {
        button.addEventListener('click', showHiddenInfo);
        function showHiddenInfo(e) {
            const hiddenInfo = e.currentTarget.parentElement.getElementsByTagName('div')[0];
            const lockRadioInput = e.currentTarget.parentElement.getElementsByTagName('input')[1];
            console.log(lockRadioInput)
            if (lockRadioInput.checked) {
                if (button.textContent === 'Show more') {
                    hiddenInfo.style.display = 'block'
                    button.textContent = 'Hide it'
                } else {
                    hiddenInfo.style.display = 'none';
                    button.textContent = 'Show more'
                }
            }
        }
    }

}