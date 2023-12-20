//! Control structures: conditionals

//! if, else, else if

//* 1 Even or Odd Number

/* Create a program that prompts the user to enter a number and displays a message
indicating whether the entered value is even or odd. */

let number = parseInt(prompt("Enter a number to check if it's even or odd:"));

if (isNaN(number)) {
    alert("Please enter a valid number.");
} else {
    if (number % 2 === 0) {
        alert("The entered number is even.");
    } else {
        alert("The entered number is odd.");
    }
}

//* 2 Days of the Month

/* Create a program that prompts the user for a month and returns the number of days
in that month. */

let month = prompt("Enter a month (in lowercase):").toLowerCase();

switch (month) {
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
        alert("The month of " + month + " has 31 days.");
        break;

    case "april":
    case "june":
    case "september":
    case "november":
        alert("The month of " + month + " has 30 days.");
        break;

    case "february":
        alert("The month of February can have 28 or 29 days, depending on whether it's a leap year or not.");
        break;

    default:
        alert("Please enter a valid month.")
}

//* 3 Password Change

/* Create a program that allows changing the user's password. To do this, it has to
answer three security questions. If all three questions are answered correctly,
it should ask for the new password and then display a message that it has been changed.
If at least one question was answered incorrectly, it should show a warning message.
Define security questions and answers beforehand (hardcode). */

let securityQuestions = [
    "What is your favorite color?",
    "In which city were you born?",
    "What is your dog's name?"
];

let correctAnswers = [
    "yellow",
    "bali",
    "iron"
];

let correctAnswersCount = 0;

for (let i = 0; i < securityQuestions.length; i++) {
    let userAnswer = prompt(securityQuestions[i]);

    userAnswer = userAnswer.toLowerCase();

    if (userAnswer === correctAnswers[i]) {
        correctAnswersCount++;
    }
}

if (correctAnswersCount === securityQuestions.length) {
    let newPassword = prompt("Enter your new password:");
    alert("Password changed successfully!");
} else {
    alert("At least one answer was incorrect. Password cannot be changed.");
}

//* 4 Passed Exam

/* Create a program that prompts the user to enter an exam grade and displays a message
indicating whether the exam is passed, needs recovery, or is a failure. If the grade is
greater than 7, it passes; if it's greater than 4, it needs recovery; if it's less than 4, it's a failure. */

let examGrade = parseFloat(prompt("Enter the exam grade:"));

if (examGrade > 7) {
    alert("Congratulations! You passed.");
} else if (examGrade > 4) {
    alert("You need to recover.");
} else {
    alert("Sorry. You failed.");
}

//* 5 Letter Groups

/* Create a program that prompts the user to enter a letter and displays a message
indicating the group to which it belongs.
Group A = {a, e, i, o, u}
Group B = {b, c, d, f, g}
Group C = {h, j, k, l, m}
Group D = {n, p, q, r}
Group E = {s, t, v, w, x, y, z} */

let letter = prompt("Enter a letter (in lowercase):").toLowerCase();

let group;

switch (letter) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        group = "Group A";
        break;

    case "b":
    case "c":
    case "d":
    case "f":
    case "g":
        group = "Group B";
        break;

    case "h":
    case "j":
    case "k":
    case "l":
    case "m":
        group = "Group C";
        break;

    case "n":
    case "p":
    case "q":
    case "r":
        group = "Group D";
        break;

    case "s":
    case "t":
    case "v":
    case "w":
    case "x":
    case "y":
    case "z":
        group = "Group E";
        break;

    default:
        group = "Unrecognized character";
}

alert(`The letter ${letter} belongs to ${group}.`);

//* 6 Sandwich

/* Create a program that asks the user step by step what options they want
to choose to build their order. If an invalid option is chosen at any step,
it should display a message warning that the order will be incomplete.
Show a final message with the resulting order. It should ask:

Bread type: white, black, whole wheat
Ingredient 1: tomato, lettuce, bell pepper
Ingredient 2: onion, olive, cucumber
Condiments: mustard, mayonnaise, spicy
Soda: Coca Cola, Pepsi, Sprite */

let breadType = prompt("Bread type: white, black, whole wheat").toLowerCase();
let incompleteOrder = false;

if (!(breadType === "white" || breadType === "black" || breadType === "whole wheat")) {
    alert("Incomplete order. Invalid bread type.");
    incompleteOrder = true;
}

let ingredient1 = prompt("Ingredient 1: tomato, lettuce, bell pepper").toLowerCase();
if (!(ingredient1 === "tomato" || ingredient1 === "lettuce" || ingredient1 === "bell pepper")) {
    alert("Incomplete order. Invalid ingredient 1.");
    incompleteOrder = true;
}

let ingredient2 = prompt("Ingredient 2: onion, olive, cucumber").toLowerCase();
if (!(ingredient2 === "onion" || ingredient2 === "olive" || ingredient2 === "cucumber")) {
    alert("Incomplete order. Invalid ingredient 2.");
    incompleteOrder = true;
}

let condiments = prompt("Condiments: mustard, mayonnaise, spicy").toLowerCase();
if (!(condiments === "mustard" || condiments === "mayonnaise" || condiments === "spicy")) {
    alert("Incomplete order. Invalid condiments.");
    incompleteOrder = true;
}

let soda = prompt("Soda: Coca Cola, Pepsi, Sprite").toLowerCase();
if (!(soda === "coca cola" || soda === "pepsi" || soda === "sprite")) {
    alert("Incomplete order. Invalid soda.");
    incompleteOrder = true;
}

if (!incompleteOrder) {
    alert(`Order complete!
    \nBread type: ${breadType}
    \nIngredient 1: ${ingredient1}
    \nIngredient 2: ${ingredient2}
    \\nCondiments: ${condiments}
    \nSoda: ${soda}`);
    } else {
    alert("Incomplete order. The order could not be processed:");
    }

//* 7 Rock, Paper, Scissors

/* Create a program that allows the player to enter rock, paper, or scissors,
randomly generates the computer's play, and displays a message indicating who won,
along with the respective plays. */

function randomComputerPlay() {
    let options = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
    }
    
    let playerPlay = prompt("Choose rock, paper, or scissors:").toLowerCase();
    
    if (!(playerPlay === "rock" || playerPlay === "paper" || playerPlay === "scissors")) {
    alert("Choose a valid play (rock, paper, or scissors).");
    } else {
    let computerPlay = randomComputerPlay();
    alert(`Player: ${playerPlay}\nComputer: ${computerPlay}`);

if (playerPlay === computerPlay) {
    alert("It's a tie");
} else if (
    (playerPlay === "rock" && computerPlay === "scissors") ||
    (playerPlay === "paper" && computerPlay === "rock") ||
    (playerPlay === "scissors" && computerPlay === "paper")
) {
    alert("You win!");
} else {
    alert("You lost! The computer wins.")
}
}


//* 8 Simon says

/* Create a program that displays a sequence of 5 randomly ordered color names. 
The possible colors are 4: red, green, blue, and yellow. 
Then prompt the user to enter 5 colors one by one and display at the end if 
they guessed the sequence.
Example
Simon says: red, red, blue, green, yellow.

Enter the first color: red
Enter the second color: red
Enter the third color: blue
Enter the fourth color: green
Enter the fifth color: yellow

Congratulations! You have won! */

function randomColors(){
    let possibleColors = ["red", "green", "blue", "yellow"];
    let sequence = [];

    for (let i = 0; i < 5; i++){
        let randomIndex = Math.floor(Math.random() * possibleColors.length);
        sequence.push(possibleColors[randomIndex]);
    }

    return sequence;
}

function compareSequences(generatedSequence, enteredSequence){
    for (let i = 0; i < generatedSequence.length; i++ ) {
        if (generatedSequence[i] !== enteredSequence[i]) {
            return false;
        }
    }
    return true;
}

let randomSequence = randomColors();

alert(`Simon says: ${randomSequence.join(", ")}`);

let enteredSequence = [];
for (let i = 0; i < 5; i++) {
    let enteredColor = prompt("Enter color "+ (i + 1) + ":")
    enteredSequence.push(enteredColor);
}

if (compareSequences(randomSequence, enteredSequence)) {
    alert("Congratulations! You have won.");
} else {
    alert(`Sorry, you lost. The correct sequence was: ${randomSequence.join(", ")}`);
}

//! SWITCH STATEMENT

//* 9 Months of the year

/* Create a program that asks the user for a number and displays a message with the 
corresponding month name. */

let monthNumber = parseInt(prompt("Enter a number from 1 to 12 to know the corresponding month:"));

let months;

switch (monthNumber){

    case 1:
        months = "January";
        break;
    case 2:
        months = "February";
        break;
    case 3:
        months = "March";
        break;
    case 4:
        months = "April";
        break;
    case 5:
        months = "May";
        break;
    case 6:
        months = "June";
        break;
    case 7:
        months = "July";
        break;
    case 8:
        months = "August";
        break;
    case 9:
        months = "September";
        break;
    case 10:
        months = "October";
        break;
    case 11:
        months = "November";
        break;
    case 12:
        months = "December";
        break;

    default:
        months = "Invalid number. Please enter a number from 1 to 12.";
}

alert(`The number ${monthNumber} corresponds to the month of ${months}.`)

// ANOTHER WAY TO DO IT

let monthsNumber = parseInt(prompt("Enter a number from 1 to 12 to know the corresponding month:"));

if (monthsNumber >= 1 && monthsNumber <= 12){
    let monthsArray = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    // Get the month name using the index
    let monthName = monthsArray[monthsNumber -1];

    alert(`The number ${monthsNumber} corresponds to the month of ${monthName}.`);
} else {
    alert(`The number ${monthsNumber} corresponds to the month of ${months}.`);
}

//* 10 Seasons of the year II

/* Create a program that asks for a season of the year and displays a message with 
the start and end dates. */

let seasonsOfYear = prompt("Enter the season of the year (SPRING, SUMMER, AUTUMN, WINTER)").toUpperCase();

let seasonDates;

switch (seasonsOfYear){

    case "SPRING":
        seasonDates = "Starts around March 20 in the northern hemisphere\n" +
                            "Starts around September 23 in the southern hemisphere\n" +
                            "Ends around June 21 in the northern hemisphere\n" +
                            "Ends around December 21 in the southern hemisphere.";
        break;

    case "SUMMER":
        seasonDates = "Starts around June 21 in the northern hemisphere\n" +
                            "Starts around December 21 in the southern hemisphere\n" +
                            "Ends around September 23 in the northern hemisphere\n" +
                            "Ends around March 20 in the southern hemisphere"
        break;

    case "AUTUMN":
        seasonDates = "Starts around September 23 in the northern hemisphere\n" +
                            "Starts around March 21 in the southern hemisphere\n" +
                            "Ends around December 21 in the northern hemisphere\n" +
                            "Ends around June 21 in the southern hemisphere"
        break;

    case "WINTER":
        seasonDates = "Starts around December 21 in the northern hemisphere\n" +
                            "Starts around June 21 in the southern hemisphere\n" +
                            "Ends around March 20 in the northern hemisphere\n" +
                            "Ends around September 23 in the southern hemisphere"
        break;

    default:
        seasonDates = " Invalid season. Please enter SPRING, SUMMER, AUTUMN, or WINTER."
}

alert(seasonDates);

// ANOTHER WAY TO DO THIS EXERCISE

let enteredSeason = prompt("Enter the season of the year (SPRING, SUMMER, AUTUMN, WINTER)").toUpperCase();

let start, end;

switch (enteredSeason) {
    case "SPRING":
        start = "March 20 (northern hemisphere) / September 23 (southern hemisphere)";
        end = "June 21 (northern hemisphere) / December 21 (southern hemisphere)";
        break;

    case "SUMMER":
        start = "June 21 (northern hemisphere) / December 21 (southern hemisphere)";
        end = "September 23 (northern hemisphere) / March 20 (southern hemisphere)";
        break;

    case "AUTUMN":
        start = "September 23 (northern hemisphere) / March 21 (southern hemisphere)";
        end = "December 21 (northern hemisphere) / June 21 (southern hemisphere)";
        break;

    case "WINTER":
        start = "December 21 (northern hemisphere) / June 21 (southern hemisphere)";
        end = "March 20 (northern hemisphere) / September 23 (southern hemisphere)";
        break;

    default:
        start = end = "Invalid season";
}

alert(`The season ${enteredSeason} starts around ${start} and ends around ${end}.`);


//* 11 Calculator

/* Create a program that allows choosing among the operations: ADDITION, SUBTRACTION, DIVISION,
and MULTIPLICATION. After selecting an operation, input two numbers and perform the chosen
operation with them. */

let operation = prompt("Choose an operation: ADDITION, SUBTRACTION, DIVISION, MULTIPLICATION").toUpperCase();

if (operation !== "ADDITION" && operation !== "SUBTRACTION" && operation !== "DIVISION" && operation !== "MULTIPLICATION"){
    alert("Invalid operation. Please choose between ADDITION, SUBTRACTION, DIVISION, or MULTIPLICATION");
} else {

    let number1 = parseFloat(prompt("Enter the first number:"));
    let number2 = parseFloat(prompt("Enter the second number:"));

    let result;

    switch (operation){
        case "ADDITION":
            result = number1 + number2;
            break;

        case "SUBTRACTION":
            result = number1 - number2;
            break;

        case "DIVISION":
            if (number2 !== 0) {
                result = number1 / number2;
            } else {
                alert("Cannot divide by zero.");
                result = "Error";
            }
            break;

        case "MULTIPLICATION":
            result = number1 * number2;
            break;
    }

    if (result !== "Error") {
        alert(`The result of ${operation} between ${number1} and ${number2} is: ${result}`);
    }
}


//* 12 Television

/* Create a program that starts by asking if you want to turn on the television.
If you choose not to, the program should end. If you choose yes, it should display a
message with the current channel and volume level of a television and allow the following
operations:

CHANGE CHANNEL: allows entering a channel (0 to 99)
NEXT CHANNEL: increases the channel by 1
PREVIOUS CHANNEL: decreases the channel by 1
INCREASE VOLUME: increases the volume by 5
DECREASE VOLUME: decreases the volume by 5
MUTE: sets the volume to 0

Once the option is chosen and the value is entered if applicable,
it should display a message with the current channel and volume level. */

let tvOn = confirm("Do you want to turn on the television?");

if (tvOn){
    let currentChannel = 1;
    let currentVolume = 30;

    while (true) {
        let option = prompt(
            `Current channel: ${currentChannel}\nCurrent volume: ${currentVolume}\n\n` +
            "Choose an option:\n" +
            "1. Change channel (0 to 99)\n" +
            "2. Next channel\n" +
            "3. Previous channel\n" +
            "4. Increase volume\n" +
            "5. Decrease volume\n" +
            "6. Mute\n" +
            "7. Turn off the television"
        );

        if (option === null || option === "7") {
            alert("Turning off the television.");
            break;
        }

        switch (option){
            case "1":
                let newChannel = parseInt(prompt("Enter the new channel (0 to 99)"));
                if (!isNaN(newChannel) && newChannel >= 0 && newChannel <= 99){
                    currentChannel = newChannel;
                } else {
                    alert("Invalid channel. It must be between 0 and 99.");
                }
                break;

            case "2":
                currentChannel = (currentChannel + 1) % 100;
                break;

            case "3":
                currentChannel = (currentChannel - 1 + 100) % 100;
                break;

            case "4":
                currentVolume = Math.min(currentVolume + 5, 100);
                break;

            case "5":
                currentVolume = Math.max(currentVolume - 5, 0);
                break;

            case "6":
                currentVolume = 0;
                break;

            default:
                alert("Invalid option. Please choose a valid option.");
                break;
        }

        alert(`Current channel: ${currentChannel}\nCurrent volume: ${currentVolume}`)
    }
} else {
    alert("The television is off. Goodbye!");
}
