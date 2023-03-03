// Function declaration

function printStars(count){
    console.log('*'.repeat(count));
}

printStars(3)

// Function expression

const printStars = function (count){
    console.log('*'.repeat(count));
}

printStars(3)


// Function calling other functions
function printHeader(){
    console.log('--- My Custom Header');
}

function printContent() {
    console.log('--- Page Content');
}

function printFooter(){
    console.log('--- Page Footer');
}

function printBody() {
    printHeader();
    printContent();
    printFooter();
}

// functional Programming

