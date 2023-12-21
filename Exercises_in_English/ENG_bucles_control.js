//* Control structures: loops

// For loop

//* 1 Odd numbers

/* Create a program that displays in the console the odd numbers between 0 and 20 */

for (let i = 0; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

// Example with even numbers

for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//* 2 Playlist

/* Create a program that asks the user to enter the name of a playlist and 
how many songs they want to add to it. Then it should prompt to add the 
chosen number of songs one by one. It should display the remaining number of 
songs to add and the playlist with the songs so far as it gets updated. 
At the end, display a message with the playlist name and the list of songs. */

let playlistName = prompt("Enter the playlist name:");
let numberOfSongs = parseInt(prompt("Enter the number of songs to add:"));

let playlistSongs = [];

for (let i = 0; i < numberOfSongs; i++) {
    let songName = prompt(`Enter the name of song ${i + 1}:`);

    playlistSongs.push(songName);

    console.log(`Song added: ${songName}`);
    console.log(`Remaining songs to add: ${numberOfSongs - (i + 1)}`);
    console.log(`Current playlist: ${playlistSongs.join(', ')}`);
}

console.log(`Playlist "${playlistName}" created successfully!`);
console.log(`List of songs: ${playlistSongs.join(', ')}`);


//* 3 Greater or Lesser Number

/* Create a program that asks whether to find the greatest or the smallest number 
from a set. Then, ask how many numbers to search among. Prompt to enter 
one by one the chosen quantity of numbers, and at the end, display the greatest 
or smallest number among all entered based on the choice. */

let option = prompt("Do you want to find the greatest or smallest number? Enter 'greater' or 'lesser':").toLowerCase();

if (option !== 'greater' && option !== 'lesser') {
    console.log("Invalid option. Please enter 'greater' or 'lesser'.");
} else {

    let quantityOfNumbers = parseInt(prompt("Enter the quantity of numbers to compare:"));

    if (isNaN(quantityOfNumbers) || quantityOfNumbers <= 0) {
        console.log("Invalid quantity. Please enter a positive integer.");
    } else {

        let currentNumber;
        let result;

        for (let i = 1; i <= quantityOfNumbers; i++) {
            currentNumber = parseFloat(prompt(`Enter number ${i}:`));

            while (isNaN(currentNumber)) {
                console.log("Please enter a valid number.");
                currentNumber = parseFloat(prompt(`Enter number ${i}:`));
            }

            if (option === 'greater') {
                if (i === 1 || currentNumber > result) {
                    result = currentNumber;
                }
            } else if (option === 'lesser') {
                if (i === 1 || currentNumber < result) {
                    result = currentNumber;
                }
            }
        }

        console.log(`The ${option} number is: ${result}`)
    }
}


//* 4 Factorial

/* Create a program that asks to enter a number and displays its factorial. 
This is calculated by multiplying the same number and all the numbers before it 
down to 1. For example: 4 ⇒ 4 * 3 * 2 * 1 = 24 */

let factorialNumber = parseInt(prompt("Enter a number to find its factorial:"));

if (isNaN(factorialNumber) || factorialNumber < 0) {
    console.log("Please enter a non-negative integer.");
} else {
    let factorial = 1;

    for (let i = factorialNumber; i > 1; i--) {
        factorial *= i;
    }

    console.log(`The factorial of ${factorialNumber} is: ${factorial}`);
}


//* 5 Race

/* Create a program to track laps of an athlete. It should ask the 
user for the number of laps to be completed and inquire about the time 
in seconds for each lap. In the end, display a message listing the 
times for each lap and the average time for the laps 
(sum of laps / number of laps). 
Example:

Number of laps: 3
Lap 1: 133s
Lap 2: 145s
Lap 3: 166s
Average: 144.45s */

let numberOfLaps = parseInt(prompt("Enter the number of laps to complete:"));

if (isNaN(numberOfLaps) || numberOfLaps <= 0) {
    console.log("Please enter a positive integer.");
} else {
    let lapTimes = [];
    let totalTimes = 0;

    for (let i = 1; i <= numberOfLaps; i++) {
        let lapTime = parseFloat(prompt(`Lap ${i}: Enter the time in seconds:`));

        while (isNaN(lapTime) || lapTime < 0){
            console.log("Please enter a valid time in seconds.");
            lapTime = parseFloat(prompt(`Lap ${i}: Enter the time in seconds`));
        }

        lapTimes.push(lapTime);
        totalTimes += lapTime;
    }

    let average = totalTimes / numberOfLaps;

    console.log(`\nTimes for each lap:`);
    for (let i = 0; i < numberOfLaps; i++){
        console.log(`Lap ${i + 1}: ${lapTimes[i]}s`);
    }

    console.log(`\nAverage: ${average.toFixed(2)}s`);
}


//* 6 Rock, Paper, Scissors II

/* To the conditional Rock, Paper, Scissors exercise, add the option
to play as many rounds as desired. For each round, it should display both
plays (user and computer), who won the round, the partial score up to the
moment, and rounds remaining. At the end, indicate who won.
Example:

Round: 2 of 5
Player: Rock
Computer: Scissors
Player has won this round
Score: 2 (Player) - 0 (Computer) */

function getComputerPlay() {
    const options = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random() * 3);
    return options[index];
}

let totalRounds = parseInt(prompt("Enter the number of rounds you want to play:"));

if (isNaN(totalRounds) || totalRounds <= 0) {
    console.log("Please enter a positive integer.");
} else {
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= totalRounds; round++) {
        console.log(`\nRound: ${round} of ${totalRounds}`);

        let playerPlay = prompt("Enter your play 'Rock, Paper, or Scissors: '").toLowerCase();

        if (["rock", "paper", "scissors"].includes(playerPlay)) {
            let computerPlay = getComputerPlay();

            if (
                (playerPlay === "rock" && computerPlay === "scissors") ||
                (playerPlay === "paper" && computerPlay === "rock") ||
                (playerPlay === "scissors" && computerPlay === "paper")
            ) {
                playerScore++;
                console.log(`Player: ${playerPlay}`);
                console.log(`Computer: ${computerPlay}`);
                console.log(`Player has won this round`);
            } else if (playerPlay === computerPlay) {
                console.log(`Player: ${playerPlay}`);
                console.log(`Computer: ${computerPlay}`);
                console.log(`This round is a draw`);
            } else {
                computerScore++;
                console.log(`Player: ${playerPlay}`);
                console.log(`Computer: ${computerPlay}`);
                console.log(`Computer has won this round`);
            }

            console.log(`Score: ${playerScore} (Player) - ${computerScore} (Computer)`);
            console.log(`Rounds remaining: ${totalRounds - round}`);
        } else{
            console.log(("Please enter a valid play."));
            round--;
        }
    }

    if (playerScore > computerScore) {
        console.log("Player has won the game!");
    } else if (playerScore < computerScore) {
        console.log("Computer has won the game!");
    } else {
        console.log("The game has ended in a draw!");
    }
}


//* 7 Pattern 

/* Create a program that displays the following pattern in the console

*
**
***
****
*****
******
*******
********
*********
**********
***********
************
************* */

const rows = 10;

for (let i = 1; i <= rows; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += "*";
    }

    console.log(row);
}

//! WHILE LOOP

//* 8 Multiple Attempts

/* Create a program that asks for a username and password. The program should
allow up to 3 attempts when the username and/or password are incorrect.
If both are entered correctly before 3 incorrect attempts, it should display a
welcome message. If 3 incorrect attempts are entered, it should display an
error message and terminate the program. The correct username and password
should already be stored in variables.
*/

const correctUsername = "user";
const correctPassword = "1234";

const maxAttempts = 3;

for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    const enteredUsername = prompt("Enter your username:");
    const enteredPassword = prompt("Enter your password:");

    if (
        enteredUsername === correctUsername &&
        enteredPassword === correctPassword
    ) {
        console.log("Welcome!");
        break;
    } else {
        console.log(`Attempt ${attempt} incorrect.`);

        if (attempt === maxAttempts) {
            console.log("Three incorrect attempts. Logging out.");
        } else {
            console.log("Please try again.");
        }
    }
}


//* 9 Heads or Tails

/* Create a program that allows choosing between heads or tails. The program then
should generate a random result and display whether it was guessed correctly or not.
The program should show in each round how many consecutive correct guesses there are,
and if at any point a wrong guess is made, reset the counter to 0. It should also keep
track of the maximum number of consecutive rounds without an error. When the word 'EXIT'
is entered instead of 'HEADS' or 'TAILS', the program should display the maximum number
of consecutive correct rounds along with a farewell message and end its execution. */

let currentCounter = 0;
let maxCounter = 0;

function flipCoin() {
    return Math.floor(Math.random() * 2);
}

function playHeadsTails() {
    while (true) {
        let choice = prompt("Enter 'HEADS', 'TAILS', or 'EXIT':").toUpperCase();

        if (choice === "EXIT") {
            alert(`Goodbye! The maximum number of consecutive correct rounds was ${maxCounter}`);
            break;
        }

        if (choice !== "HEADS" && choice !== "TAILS") {
            alert("Please enter 'HEADS', 'TAILS', or 'EXIT'.");
            continue;
        }

        let result = flipCoin();

        alert("Result: " + (result === 0 ? "HEADS" : "TAILS"));

        if ((choice === "HEADS" && result === 0) || (choice === "TAILS" && result === 1)) {
            currentCounter++;
            if (currentCounter > maxCounter) {
                maxCounter = currentCounter;
            }
            alert(`Correct! Consecutive correct rounds: ${currentCounter}`);
        } else {
            currentCounter = 0;
            alert("Wrong! Resetting counter");
        }
    }
}

playHeadsTails();


//* 10 Greater or Lesser

/* Create a program that randomly chooses a number between 1 and 10. The program should then
ask the user to try to guess the number. For each attempt, it should notify whether the
number to guess is greater or lesser than the entered number. The program should end
when the number is guessed. */

let randomNum = Math.floor(Math.random() * 10) + 1;

while (true) {
    let userAttempt = parseInt(prompt("Try to guess the number (between 1 and 10):"));

    if (isNaN(userAttempt) || userAttempt < 1 || userAttempt > 10) {
        alert("Please enter a valid number between 1 and 10.");
        continue;
    }

    if (userAttempt === randomNum) {
        alert("Congratulations! You have guessed the number.");
        break;
    } else {
        let message = (userAttempt < randomNum) ? "The number is greater." : "The number is lesser.";
        alert(message);
    }
}
