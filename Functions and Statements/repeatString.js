// Write a function that receives a string and a repeat count n. The function should return a 
// new string (the old one repeated n times).

function repeatString(text,count){
    let newText='';
    for (let i = 0; i < count; i++) {
        newText+=text
    }
    return newText;
}

console.log(repeatString('abc',3))