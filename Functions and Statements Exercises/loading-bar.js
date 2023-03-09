function loadingBar(num) {
    let loadBar = ['.','.','.','.','.','.','.','.','.','.'];
    let numSyms = num / 10;
    for (let i = 0; i < numSyms; i++) {
        loadBar[i] = '%';
    }
    if (num === 100){
        console.log(`${num}% Complete!`)
        console.log(`[${loadBar.join('')}]`)
    }
    else {
        console.log(`${num}% [${loadBar.join('')}]`);
        console.log('Still loading...')
    }
}

loadingBar(50);
