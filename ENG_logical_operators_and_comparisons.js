//! LOGICAL AND COMPARISON OPERATORS

/* Use confirm when you need to obtain a yes or no answer from the user. 
Display true or false as a response (no need to display a message). */

//* 1 Number greater than 100

/* Create a program that allows entering three numbers and shows if any of them is greater than 100 */

let number1 = parseFloat(prompt("Enter the first number:"));
let number2 = parseFloat(prompt("Enter the second number:"));
let number3 = parseFloat(prompt("Enter the third number:"));

if (number1 > 100 || number2 > 100 || number3 > 100) {
    alert("At least one of the numbers is greater than 100!");
} else {
    alert("None of the numbers is greater than 100.");
}

//* 2 Number within range

/* Create a program that asks the user to enter a number representing the lower limit 
of the range, one representing the upper limit, and then another one, and show 
in a message if the last number is within the entered range. */

let lowerLimit = parseFloat(prompt("Enter the lower limit of the range:"));
let upperLimit = parseFloat(prompt("Enter the upper limit of the range:"));
let number = parseFloat(prompt("Enter another number:"));

if (number >= lowerLimit && number <= upperLimit) {
    alert(`The number ${number} is within the range.`);
} else {
    alert(`The number ${number} is outside the range.`);
}

//* 3 Blood donation

/* Create a program that asks the user 3 questions: if they have recently got tattoos, 
if they have or had hepatitis, if they have anemia. If they answer any of them affirmatively, 
it should show a message indicating whether they can or cannot donate blood */

let tattoos = prompt("Have you got tattoos recently? (Enter 'YES' or 'NO')").toUpperCase();
let hepatitis = prompt("Have you had or do you have hepatitis? (Enter 'YES' or 'NO')").toUpperCase();
let anemia = prompt("Do you have anemia? (Enter 'YES' or 'NO')").toUpperCase();

if (tattoos === 'NO' && hepatitis === 'NO' && anemia === 'NO') {
    alert("You can donate blood. Thank you for your donation!");
} else {
    alert("Sorry, you cannot donate blood at the moment.")
}

// ANOTHER WAY TO DO THIS EXERCISE

let hasTattoos = confirm("Have you got tattoos recently?");
let hasHepatitis = confirm("Have you had or do you have hepatitis?");
let hasAnemia = confirm("Do you have anemia?");

if (!hasTattoos && !hasHepatitis && !hasAnemia) {
    alert("You can donate blood. Thank you for your donation!");
} else {
    alert("Sorry, you cannot donate blood at the moment.")
}

//* 4 Authentication

/* Create a program that prompts to enter the username and password and compares them 
with the username and password stored in variables, and shows a message if the access is authorized */

const username = "Pepe"
const pin = 1234

let enteredUsername = prompt("Enter your username:");
let enteredPassword = parseInt(prompt("Enter your password:"));

if (enteredUsername === username && enteredPassword === pin) {
    alert(`Welcome ${enteredUsername}, you have authorized access.`);
} else {
    alert("Invalid username or password.");
}

//* 5 Maintenance

/* Make a program that separately asks if the car has oil, water, 
and tires with pressure. Show a message if maintenance is required 
or not if any of the answers is negative */

let hasOil = prompt("Does it have oil? (Enter 'YES' or 'NO')").toUpperCase();
let hasWater = prompt("Does it have water? (Enter 'YES' or 'NO')").toUpperCase();
let hasTirePressure = prompt("Do the tires have pressure? (Enter 'YES' or 'NO')").toUpperCase();

if (hasOil === 'YES' && hasWater === 'YES' && hasTirePressure === 'YES') {
    alert("Your vehicle doesn't need any maintenance");
} else {
    alert("Your vehicle needs maintenance.");
}

//* 6 Restricted access

/* A club has the following rules: only members with up-to-date fees can enter, or non-members with authorization. 
Make a program that asks if the user is a member, if they have paid the fee, and if they have authorization, 
and then show a message indicating whether they have access or not. */

let isMember = prompt("Are you a member of the club? (Enter 'YES' or 'NO')").toUpperCase();
let feeUpToDate = prompt("Is your fee up to date? (Enter 'YES' or 'NO')").toUpperCase();
let hasAuthorization = prompt("Do you have authorization? (Enter 'YES' or 'NO')").toUpperCase();

if ((isMember === 'YES' && feeUpToDate === 'YES') || (isMember === 'NO' && hasAuthorization === 'YES')) {
    alert("You have access to our wonderful club.")
} else {
    alert("Sorry, you do not meet the requirements to enter our club.");
}

//* 7 Promoted subject

/* Make a program that asks to enter the values of the three partials of the subject 
and show a message indicating whether the subject is promoted or not. 
It is promoted if at least two of them were approved with a grade of 8 or more. */

let partial1 = parseFloat(prompt("Enter the grade of the first partial:"));
let partial2 = parseFloat(prompt("Enter the grade of the second partial:"));
let partial3 = parseFloat(prompt("Enter the grade of the third partial:"));

if ((partial1 >= 8 && partial2 >= 8) || (partial1 >= 8 && partial3 >= 8) || (partial2 >= 8 && partial3 >= 8)) {
    alert("Congratulations! You promoted the subject.");
} else {
    alert("Sorry, you did not promote the subject.");
}

//* 8 Larger number (2 numbers)

/* Make a program that asks to enter 2 numbers, and show as a result the larger one. 
Once this is done, add the functionality that if one of the numbers is equal to another, 
it should show a message saying so. */

let firstNumber = parseFloat(prompt("Enter the first number:"));
let secondNumber = parseFloat(prompt("Enter the second number:"));

if (firstNumber > secondNumber) {
    alert(`The ${firstNumber} is greater than ${secondNumber}.`);
} else if (secondNumber > firstNumber) {
    alert(`The ${secondNumber} is greater than ${firstNumber}`);
} else {
    alert("The two numbers are equal.");
}

//* 9 Larger number (3 numbers)

/* Make a program that asks to enter 3 numbers, and show as a result the largest one. 
Once this is done, add the functionality that if one of the numbers is equal to another, 
it should show a message saying so. */

let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
let num3 = parseFloat(prompt("Enter the third number:"));

if (num1 > num2 && num1 > num3) {
    alert(`The ${num1} is the largest number.`);
} else if (num2 > num1 && num2 > num3) {
    alert(`The ${num2} is the largest number.`);
} else if (num3 > num1 && num3 > num2) {
    alert(`The ${num3} is the largest number.`);
} else {
    alert("The three numbers are equal.");
}

// ANOTHER WAY TO DO THIS EXERCISE MORE COMPACTLY

let num_1 = parseFloat(prompt("Enter the first number:"));
let num_2 = parseFloat(prompt("Enter the second number:"));
let num_3 = parseFloat(prompt("Enter the third number:"));

let maxNumber = Math.max(num_1, num_2, num_3);

if (num_1 === num_2 && num_2 == num_3) {
    alert("The three numbers are equal");
} else {
    alert(`The ${maxNumber} is the largest number.`)
}

//* 10 Terms and conditions of use

/* Create a program that asks if the user accepts the terms and conditions of use. 
If the user responds yes, it should display a message that says "Continuing with 
the process...". If the user responds no, it should display a message that says 
"Cannot continue with the process if the terms and conditions of use are not accepted." */

let acceptsTerms = prompt("Do you accept the terms and conditions of use? (Enter 'YES' or 'NO')").toUpperCase();

if (acceptsTerms === 'YES') {
    alert("Continuing with the process...");
} else if (acceptsTerms === 'NO') {
    alert("Cannot continue with the process if the terms and conditions of use are not accepted.");
} else {
    alert("Invalid response. Please enter 'YES' or 'NO'.");
}

//* 11 Quiz

/* Create a program that is a quiz with 3 yes or no questions. At the end, 
show a congratulations message if all were answered correctly, or one 
that says the game is lost if at least one was answered incorrectly. */

let question1 = prompt("Is the Sun a star? (Enter 'YES' or 'NO')").toUpperCase();
let question2 = prompt("Does water boil at 100 degrees Celsius at sea level? (Enter 'YES' or 'NO')").toUpperCase();
let question3 = prompt("Does the Moon orbit the Earth? (Enter 'YES' or 'NO')").toUpperCase();

if (
    (question1 === 'YES' || question1 === 'NO') &&
    (question2 === 'YES' || question2 === 'NO') &&
    (question3 === 'YES' || question3 === 'NO')
) {
    if (question1 === 'YES' && question2 === 'YES' && question3 === 'YES') {
        alert("Congratulations! You answered all questions correctly.");
    } else {
        alert("Sorry, you did not answer all questions correctly.");
    }
} else {
    alert("Invalid answers. Please enter 'YES' or 'NO'.");
}

//* 12 Authentication

/* Create a program that prompts to enter the username and password and compares them 
with the username and password stored in variables. If they match, it should show a 
message that says "Authentication successful," and if not, it should show "Incorrect username or password." */

const username_1 = "Juan"
const password_1 = 1234

let enteredUsername_1 = prompt("Enter your username:");
let enteredPassword_1 = parseInt(prompt("Enter your password:"));

if (enteredUsername_1 === username_1 && enteredPassword_1 === password_1) {
    alert(`Authentication successful`);
} else {
    alert("Incorrect username or password");
}

//* 13 Judge of taste

/* Create a program that asks the user to rate from 1 to 10 how much they like X thing 
(of your choice). Depending on the response, it should display a message accordingly. 
Implement at least 4 possible cases. If something other than a number from 1 to 10 is entered, 
display a warning message and ask for the number again. */

let restaurantRating;
let movieRating;
let bookRating; 
let onlineShoppingRating; 

while (true) {
    restaurantRating = parseFloat(prompt("On a scale of 1 to 10, how would you rate the quality of service received at a recent restaurant?"));

    if (!isNaN(restaurantRating) && restaurantRating >= 1 && restaurantRating <= 10) {
        break;
    } else {
        alert("Error: Please enter a valid number from 1 to 10.");
    }
}

while (true) {
    movieRating = parseFloat(prompt("From 1 to 10, what score would you give for your satisfaction level with the last movie you watched?"));

    if (!isNaN(movieRating) && movieRating >= 1 && movieRating <= 10) {
        break;
    } else {
        alert("Error: Please enter a valid number from 1 to 10.");
    }
}

while (true) {
    bookRating = parseFloat(prompt("On a scale of 1 to 10, how much did you enjoy the last book you read?"));

    if (!isNaN(bookRating) && bookRating >= 1 && bookRating <= 10) {
        break;
    } else {
        alert("Error: Please enter a valid number from 1 to 10.");
    }
}

while (true) {
    onlineShoppingRating = parseFloat(prompt("From 1 to 10, how would you rate your recent online shopping experience?"));

    if (!isNaN(onlineShoppingRating) && onlineShoppingRating >= 1 && onlineShoppingRating <= 10) {
        break;
    } else {
        alert("Error: Please enter a valid number from 1 to 10.");
    }
}

alert(`Restaurant Rating: ${restaurantRating}`);
alert(`Movie Rating: ${movieRating}`);
alert(`Book Rating: ${bookRating}`);
alert(`Online Shopping Rating: ${onlineShoppingRating}`);

//* 14 Grade

/* Create a program that allows entering the result of an evaluation with a score 
from 1 to 10 and shows a message that says:

Excellent!, if the grade is 10

Very good!, if the grade is 8 or 9

Approved, if the grade is 6 or 7

Failed, if the grade is less than 6 */

let grade = parseFloat(prompt("Enter the result of the evaluation (from 1 to 10):"));

if (!isNaN(grade) && grade >= 1 && grade <= 10) {
    if (grade === 10) {
        alert("Excellent!");
    } else if (grade >= 8 && grade <= 9) {
        alert("Very good!");
    } else if (grade >= 6 && grade <= 7) {
        alert("Approved");
    } else {
        alert("Failed");
    }
} else {
    alert("Error: Enter a valid number from 1 to 10.");
}

