/* When the exercise asks to input something, do it through a prompt, and when it asks to display a message, do it through an alert. Use const, let, and template strings.

//* 1 Greeting

Create a program that asks the user to enter a first name and a last name separately,
and then display a message that says, "Hello {first name} {last name}, welcome to Ada".*/

let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");

let greetingMessage = `Hello ${firstName} ${lastName}, welcome to Ada`;

alert(greetingMessage);

//* 2 Ice Cream Shop

/* Create a program that asks the user to enter, separately,
three ice cream flavors, and then display a message that says, for example,
"Here is your chocolate, dulce de leche, and mint ice cream".*/

let firstFlavor = prompt('Enter the first flavor of your ice cream:');
let secondFlavor = prompt('Enter the second flavor of your ice cream:');
let thirdFlavor = prompt('Enter the third flavor of your ice cream:');

let iceCreamMessage = `Here is your ice cream with ${firstFlavor}, ${secondFlavor}, and ${thirdFlavor}.`;

alert(iceCreamMessage);

//* 3 Personal Information

/* Create a program that asks the user to enter, separately,
first name, last name, age, nationality, and document, and then display
a message that says: "New user added to the system:" and list all the data together. */

let userFirstName = prompt('Enter your first name:');
let userLastName = prompt('Enter your last name:');
let userAge = prompt('Enter your age:');
let userNationality = prompt('Enter your nationality:');
let userDocument = prompt('Enter your document number:');

let userInformation = `New user added to the system:
    First Name: ${userFirstName}
    Last Name: ${userLastName}
    Age: ${userAge}
    Nationality: ${userNationality}
    Document: ${userDocument}`;

alert(userInformation);


//* 4 Playlist

/* Create a program that asks the user to enter, separately,
the name of a playlist and the title of three songs, and at the end
display a message that says, for example, "The '80s Hits' playlist has
the songs 'Africa', 'Maniac', 'Final Countdown'". */

let playlistName = prompt('Enter a playlist:');
let song1 = prompt('Enter the first song:');
let song2 = prompt('Enter the second song:');
let song3 = prompt('Enter the third song:');

let playlistMessage = `The '${playlistName}' playlist has the songs '${song1}', '${song2}', '${song3}'`;

alert(playlistMessage);

//* 5 Full Address

/* Create a program that asks the user to enter, separately, the street,
the number, the apartment, the postal code, the city, and the country,
and display a message with the complete address, e.g., "The address you entered
is: Fake Street 123 3C, 1414, City, Country". */

let street = prompt('Enter the street name:');
let streetNumber = prompt('Enter the street number:');
let apartment = prompt('Enter the apartment:');
let postalCode = prompt('Enter the postal code:');
let city = prompt('Enter your city:');
let country = prompt('Enter your country');

let fullAddressMessage = `The address you entered is: ${street} ${streetNumber}, ${apartment}, ${postalCode}, ${city}, ${country}.`;

alert(fullAddressMessage);

//* 6 Months per Day

/* Create variables containing arrays of strings with the names of months,
an array for months with 31 days, one for 30, and another for 29. Complete each
array with the corresponding names. Display them in a message indicating which
is which, e.g.: "Months with 31 days: January, March, May...". */

let monthsWith31Days = ["January", "March", "May", "July", "August", "October", "December"];
let monthsWith30Days = ["April", "June", "September", "November"];
let monthsWith29Days = ["February"];

let message31Days = "Months with 31 days: " + monthsWith31Days.join(", ");
let message30Days = "Months with 30 days: " + monthsWith30Days.join(", ");
let message29Days = "Months with 29 days: " + monthsWith29Days.join(", ");

console.log(message31Days);
console.log(message30Days);
console.log(message29Days);

// ANOTHER WAY TO CREATE THE MESSAGE

let completeMessage =
    `Months with 31 days: ${monthsWith31Days.join(", ")}.\n` +
    `Months with 30 days: ${monthsWith30Days.join(", ")}.\n` +
    `Months with 29 days: ${monthsWith29Days.join(", ")}.`;

console.log(completeMessage);

//* 7 Family Members

/* Create a variable that contains an array of strings with the names of
family members and complete it with all or some names. Display them in a message
listing them. */

let familyMembers = ["Ferran", "Sarai", "Iron"];

let familyMessage = `Family members: ${familyMembers.join(", ")}.`;

console.log(familyMessage);

//* 8 Lists of Preferences

/* Create variables that contain arrays of strings with the names of different categories
of preferences, for example, movies, singers, books. Complete each array with some values.
Display them in a message indicating which is which. */

let movies = ["The Godfather", "Titanic", "Inception", "Coco"];
let singers = ["Michael Jackson", "Adele", "Queen", "Ed Sheeran"];
let books = ["One Hundred Years of Solitude", "Harry Potter", "The Lord of the Rings", "1984"];

let moviesMessage = "Favorite movies: " + movies.join(", ");
let singersMessage = "Favorite singers: " + singers.join(", ");
let booksMessage = "Favorite books: " + books.join(", ");

console.log(moviesMessage);
console.log(singersMessage);
console.log(booksMessage);


//* 9 Dog Years

/* Create a program that asks to enter an age and returns the equivalent of that age in dog years. */

let humanYears = parseFloat(prompt("Enter your age to know the dog years:"));

const dogYears = humanYears * 7;

let dogYearsMessage = `Your dog age is ${dogYears} years.`;

alert(dogYearsMessage);

//* 10 Minutes to Seconds

/* Create a program that asks to enter an amount in minutes and display a message with 
the result of the conversion to seconds. */

let minutes = parseFloat(prompt("Enter the amount in minutes:"));

let seconds = minutes * 60;

let secondsMessage = `${minutes} minutes are equivalent to ${seconds} seconds.`;

alert(secondsMessage);

//* 11 Days to Seconds

/* Create a program that asks to enter an amount of days and display a message 
with the result of the conversion to seconds. */

let days = parseFloat(prompt("Enter the number of days to know the total seconds:"));

let daysInSeconds = days * 86.400;

alert(`A day has 24 hours, 24 hours have 1,440 minutes, so ${days} days have ${daysInSeconds} seconds.`);

//* 12 Kilometers to Miles

/* Create a program that asks to enter an amount of kilometers and display a message 
with the result of the conversion to miles. */

let kilometers = parseFloat(prompt("Enter the kilometers to know the miles:"));

let miles = kilometers * 0.621371;

alert(`The ${kilometers} km are equivalent to ${miles} miles.`);

//* 13 Triangle Area

/* Create a program that asks the user to enter the value of the base and the value of the height of a triangle, 
calculate its area, and display it in a message. */

let base = parseFloat(prompt("Enter the base of the triangle:"));
let height = parseFloat(prompt("Enter the height of the triangle:"));

let area = 0.5 * base * height;

alert(`The area of the triangle with base ${base} and height ${height} is ${area} square units.`);

//* 14 Rectangle Perimeter

/* Create a program that asks the user to enter the value of the height and the value of the width 
of a rectangle, calculate its perimeter, and display it in a message. */

let heightValue = parseFloat(prompt("Enter the height value:"));
let widthValue = parseFloat(prompt("Enter the width value:"));

let perimeter = 2 * (widthValue + heightValue);

let perimeterMessage = `The perimeter of the rectangle is ${perimeter}.`;

alert(perimeterMessage);

//* 15 Percentage

/* Create a program that asks the user to enter a number and then the percentage they want to obtain from it. 
Return a message showing the percentage of that number. */

let part = parseFloat(prompt("Enter a number:"));
let total = parseFloat(prompt("Enter the total:"));

let percentage = (part / total) * 100;

let percentageMessage = `The result is ${percentage}% because ${part} represents ${total}%.`;

alert(percentageMessage);


//* 16 Travel Time

/* Create a program that asks the user for the distance of their journey and display a message
indicating how much time it would take to complete the journey using different modes of transport,
defining in advance different speeds for different means of transport (e.g., walking: 5 km/h, bike: 10 km/h, etc.). */

const walkingSpeed = 5;
const bikingSpeed = 10;
const scooterSpeed = 15;
const busSpeed = 90;
const carSpeed = 120;
const lamboSpeed = 300;

let distance = parseFloat(prompt("Enter the distance of the journey in km: "));

let timeOnFoot = distance / walkingSpeed;
let timeOnBike = distance / bikingSpeed;
let timeOnScooter = distance / scooterSpeed;
let timeOnBus = distance / busSpeed;
let timeInCar = distance / carSpeed;
let timeInLambo = distance / lamboSpeed;

let timeMessage = `Estimated time to complete the journey of ${distance}km:
    - On foot: ${timeOnFoot.toFixed(2)} hours
    - On a bike: ${timeOnBike.toFixed(2)} hours
    - On a scooter: ${timeOnScooter.toFixed(2)} hours
    - By bus: ${timeOnBus.toFixed(2)} hours
    - By car: ${timeInCar.toFixed(2)} hours
    - In a Lambo: ${timeInLambo.toFixed(2)} hours`;

alert(timeMessage);

//* 17 Flight Duration

/* Create a program that asks the user to enter, separately, 3 destinations of the
layovers of a flight, and the duration of each one. Finally, display a message
listing all layovers with their duration and the total duration of the flight. */

let layover1 = prompt("Enter the first destination of the layover:");
let duration1 = parseFloat(prompt("Enter the duration of the first layover in hours:"));

let layover2 = prompt("Enter the second destination of the layover:");
let duration2 = parseFloat(prompt("Enter the duration of the second layover in hours:"));

let layover3 = prompt("Enter the third destination of the layover:");
let duration3 = parseFloat(prompt("Enter the duration of the third layover in hours:"));

let totalDuration = duration1 + duration2 + duration3;

let layoverMessage = `Flight layovers:
    1 - ${layover1} - Duration: ${duration1} hours
    2 - ${layover2} - Duration: ${duration2} hours
    3 - ${layover3} - Duration: ${duration3} hours
    
    Total flight duration: ${totalDuration} hours`;

alert(layoverMessage);

//* 18 Increment

/* Create a program that asks to enter a starting number and an increment amount
and show five consecutive messages that show the number of the message
and the total incremented so far (e.g., starting with 5 and incrementing by 5,
"Increment 1) Total: 10", "Increment 2) Total: 15", "Increment 3) Total: 20", etc.). */

let startingNumber = parseFloat(prompt("Enter the starting number:"));
let incrementAmount = parseFloat(prompt("Enter the increment amount:"));

let totalNumber = startingNumber;

for (let i = 1; i <= 5; i++) {
    totalNumber += incrementAmount;
    let incrementMessage = `Increment ${i}) Total: ${totalNumber}`;
    alert(incrementMessage);
}

//* 19 Celsius to Fahrenheit

/* Create a program that asks to enter an amount of Celsius and display a message
with the result of the conversion to Fahrenheit. */

let celsiusDegrees = parseFloat(prompt("Enter the Celsius degrees:"));

let fahrenheitDegrees = (celsiusDegrees * 9/5) + 32;

let fahrenheitMessage = `The conversion from ${celsiusDegrees} degrees Celsius to Fahrenheit is ${fahrenheitDegrees}F.`;

alert(fahrenheitMessage);

//* 20 Multiples

/* Create a program that asks the user for a number, then another, and display a message
if the first value is a multiple of the second. */

let firstNumber = parseFloat(prompt("Enter the first number:"));
let secondNumber = parseFloat(prompt("Enter the second number:"));

if (firstNumber % secondNumber === 0) {
    console.log(`${firstNumber} is a multiple of ${secondNumber}`);
} else {
    console.log(`${firstNumber} is not a multiple of ${secondNumber}`);
}

//* 21 Seconds to Hours, Minutes, and Seconds

/* Create a program that prompts the user to enter an amount in seconds and displays 
a message with the result of the conversion into hours, minutes, and seconds that 
corresponds to that amount (e.g., 3602 seconds = 1 hour 2 seconds). (Use the modulo operator) */

let secondsAmount = parseFloat(prompt("Enter an amount in seconds:"));

let hours = Math.floor(secondsAmount / 3600);
let minute = Math.floor((secondsAmount % 3600) / 60);
let remainingSeconds = secondsAmount % 60;

let conversionMessage = `${secondsAmount} seconds correspond to: ${hours} hours, ${minute} minutes, and ${remainingSeconds} seconds.`;

alert(conversionMessage);

//* 22 Number of Characters

/* Create a program that prompts the user to enter a text and displays a message with the 
number of characters in that text. */

let text = prompt("Enter a text to find out how many characters it has:");

let charactersCount = text.length;

let messageText = `Your text has ${charactersCount} characters.`;

alert(messageText);

//* 23 Vacation Days

/* Create a program that prompts the user to enter how many years they have been working 
at a company and returns the number of vacation days per year they are entitled to, 
with 15 days up to 3 years and an additional 2 days for each extra year (e.g., 6 years correspond 
to 21 days). */

let yearsWorked = parseFloat(prompt("Enter how many years you have been working:"));

let vacationDays;

if (yearsWorked <= 3){
    vacationDays = 15;
} else {
    vacationDays = 15 + 2 * (yearsWorked - 3);
}

let vacationMessage = `You have been working for ${yearsWorked} years and are entitled to ${vacationDays} vacation days per year.`;

alert(vacationMessage);

//* 24 Number of Guests

/* Create a program that prompts the user to enter, one at a time, the number of rooms 
a hotel has for 2, 3, and 4 people, and displays the maximum number of guests it can accommodate.*/

let roomsFor2People = parseFloat(prompt("Enter the number of rooms for 2 people:"));
let roomsFor3People = parseFloat(prompt("Enter the number of rooms for 3 people:"));
let roomsFor4People = parseFloat(prompt("Enter the number of rooms for 4 people:"));

let maxGuests = (roomsFor2People * 2) + (roomsFor3People * 3) + (roomsFor4People * 4);

let maxGuestsMessage = `The hotel can accommodate a maximum of ${maxGuests} guests.`;

alert(maxGuestsMessage);

//* 25 Expense Calculator

/* Create a program that prompts the user for the available amount of money, 
and asks how much they have to pay for each service one by one, 
requesting the name of the service and the amount to pay, one at a time.
Each time a new service is requested, the message should show how many services are 
left to enter, using a variable, and display how much money is still available. 
In the end, it should display a list with all the services to be paid and the amount of each one, 
as well as the remaining available money. Do it with 3 services. */

let availableMoney = parseFloat(prompt("Enter the available amount of money:"));

let remainingServices = 3;
let services = [];

for (let i = 1; i <= 3; i++) {
    let serviceName = prompt(`Enter the name of service ${i}:`);
    let paymentAmount = parseFloat(prompt(`Enter the amount to pay for ${serviceName}:`));

    if (paymentAmount > availableMoney) {
        alert("There is not enough money to pay for this service. Enter a smaller amount.");
    } else {
        services.push({name: serviceName, amount: paymentAmount});
        availableMoney -= paymentAmount;
        remainingServices--;

        alert(`Remaining services: ${remainingServices}\nAvailable money: ${availableMoney}`);
    }
}

let servicesMessage = "List of services to be paid:\n";
for (let service of services){
    servicesMessage += `${service.name}: ${service.amount}\n`;
}
servicesMessage += `Remaining available money: ${availableMoney}`;

alert(servicesMessage);

//* 26 Purchase Order

/* Create a program that takes the purchase order from a store. Ask the user to 
enter the quantity they want to buy for three different products, one at a time,
display the total value of the purchase, and ask in how many installments they want to make
the payment. Show a final message with the details and the total value of the purchase,
number of installments, and value of each installment. The prices of the products 
should be predefined in variables. */

const product1Price = 25;
const product2Price = 45;
const product3Price = 55;

let quantityProduct1 = parseInt(prompt("Enter the quantity of Product 1:"));
let quantityProduct2 = parseInt(prompt("Enter the quantity of Product 2:"));
let quantityProduct3 = parseInt(prompt("Enter the quantity of Product 3:"));

let totalPurchaseValue = (quantityProduct1 * product1Price) + (quantityProduct2 * product2Price) + (quantityProduct3 * product3Price);

let installmentQuantity = parseInt(prompt("In how many installments do you want to make the payment"));

let installmentValue = totalPurchaseValue / installmentQuantity;

let finalMessage = `Purchase details:
Product 1 - Quantity ${quantityProduct1} - Unit Price ${product1Price} - Subtotal ${quantityProduct1 * product1Price}
Product 2 - Quantity ${quantityProduct2} - Unit Price ${product2Price} - Subtotal ${quantityProduct2 * product2Price}
Product 3 - Quantity ${quantityProduct3} - Unit Price ${product3Price} - Subtotal ${quantityProduct3 * product3Price}

Total Purchase Value: ${totalPurchaseValue}
Number of installments: ${installmentQuantity}
Value of each installment: ${installmentValue.toFixed(2)}`;

alert(finalMessage);

