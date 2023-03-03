// Write a function that receives a grade between 2.00 and 6.00 
// and prints a formatted line with grade and description


function formatGrade(grade) {
    if (grade < 3) {
        console.log(`Fail (${2})`);
    }
    else if (grade >= 3 && grade < 3.50) {
        console.log(`Poor (${grade.toFixed(2)})`);
    }
    else if (grade >= 3.50 && grade < 4.50) {
        console.log(`Good (${grade.toFixed(2)})`);
    }
    else if (grade >= 4.50 && grade < 5.50) {
        console.log(`Very good (${grade.toFixed(2)})`);
    }
    else if (grade >= 5.50) {
        console.log(`Excellent (${grade.toFixed(2)})`);
    }
}

formatGrade(2.99)