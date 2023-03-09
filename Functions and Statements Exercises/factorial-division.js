function factorialDivision(firstNum, secondNum) {
    function findFact(num) {
        let nums = [];
        for (let i = 1; i <= num; i++) {
            nums.push(i)
        }
        let sum = nums.reduce(function (a, b) {
            return a * b;
        });

        return sum
    }
    console.log((findFact(firstNum) / findFact(secondNum)).toFixed(2));

}
factorialDivision(6, 2);
