// You will be given a string representing a username. The correct password will be that username reversed. 
// Until you receive the correct password print on the console: "Incorrect password. Try again.". 
// When you receive the correct password print: "User {username} logged in."  

// However, on the fourth try if the password is still not correct print: "User {username} blocked!" and end the program.  

// The input comes as an array of strings - the first string represents username and each subsequent string is a password. 



function login(arr) {
    let username = arr[0];
    let tries = 0;
    for (let i = 1; i < arr.length; i++) {
        let password = arr[i].split("").reverse().join("");
        if (username !== password) {
            tries++;
            if (tries === 4) {
                console.log(`User ${username} blocked!`);
                break;
            }
            console.log(`Incorrect password. Try again.`);
        } else {
            console.log(`User ${username} logged in.`)
        }


    }
}

login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny'])
