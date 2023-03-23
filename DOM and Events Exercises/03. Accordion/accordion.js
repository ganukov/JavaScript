function toggle() {
    const buttonEl = document.getElementsByClassName('button')[0];
    const moreInfo = document.getElementById('extra');
    if (moreInfo.style.display === 'none'){
        moreInfo.style.display = 'block';
        buttonEl.textContent = 'Less'
    } else {
        moreInfo.style.display = 'none';
        buttonEl.textContent = 'More'
    }
}