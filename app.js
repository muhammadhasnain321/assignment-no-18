// chapter 9-11
// q 1
var cityName = prompt("Please enter your city name:");
if( cityName.toLowerCase ()== "karachi"){
    document.write("“Welcome to city of lights”");
}
else{
    document.write("Welcome!");
}


// q 2
var gender = prompt("Please enter your gender (Male And Female):");
if(gender.toLowerCase ()== "male"){
    document.write("Good Morning Sir")
}
else if(gender.toLowerCase ()== "female"){
    document.write("<br>Good Morning Madam")
}
else{
    document.write("<br>Invalid Your Gender")
}

// q3
var signalColor = prompt("Please enter the color of the road traffic signal");
switch (signalColor.toLowerCase ()){
    case "red":
        document.write("<br>Must Stop.");
        break;

        case "yellow":
            document.write("<br>Ready to move.");
            break

            case "green":
                document.write("<br>Move now");
                break;
                default:
                    document.write("<br>Invalid color")
}
// q4
var fule = prompt("Please enter the remaining fuel in your car (in litres):");
if(fule < 0.25){
    document.write("“<br>Please refill the fuel in your car”");
}
else {
    document.write("<br>You have enough fuel in your car.");

}
// q5
// a
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
// b
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
// c.
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
// d.
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
// e.
if (true){
alert("True");
}
if (false){
alert("False");
}
// f. 
if("car" < "cat"){
    alert("car is smaller than cat");
    }
// q6
var subject1 = 76;
var subject2 = 73;
var subject3 = 70;
var totalMarks = 300;

var totalObtainMarks = subject1 + subject2 + subject3;
var percentage = (totalObtainMarks / totalMarks) * 100;

var grade, remarks;
if(percentage >= 80){
    grade = "A+"
    remarks = "Excellent"
    
}
else if(percentage <= 70 ){
    grade = "A"
    remarks = "Good"

    
}
else if(percentage >= 60){
    grade = "B"
    remarks = "You need to improve"

    
}
else if(percentage >= 0){
    grade = "Fail"
    remarks = "Sorry"  
}


document.write("<br><h1>Mark Sheet</h1><br>" + "Total Marks :" + totalMarks + "<br>Mark Obtained :" + totalObtainMarks + "<br>Percentage :" + percentage + "%" +"<br>Grade :" + grade + "<br>Remarks :" + remarks);

// q7
var secretNumber = Math.floor(Math.random() * 10) + 1;
var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));
if (userGuess === secretNumber) {
    console.log("Bingo! Correct answer.");
} else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
    console.log("Close enough to the correct answer.");
} else {
    console.log("Sorry, incorrect guess. The correct answer was " + secretNumber + ".");
}
// q8

function isDivisibleBy3(number) {
    return number % 3 === 0;
}


var userInput = parseInt(prompt("Enter a number:"));


if (isDivisibleBy3(userInput)) {
    console.log(userInput + " is divisible by 3.");
} else {
    console.log(userInput + " is not divisible by 3.");
}
// q9


function isEven(number) {
    return number % 2 === 0;
}


var userInput = parseInt(prompt("Enter a number:"));


if (isEven(userInput)) {
    console.log(userInput + " is an even number.");
} else {
    console.log(userInput + " is an odd number.");
}
// q10
var temperature = prompt("Enter the temperature:");
if (temperature > 40) {
    console.log("It is too hot outside.");
} else if (temperature > 30) {
    console.log("The Weather today is Normal.");
} else if (temperature > 20) {
    console.log("Today’s Weather is cool.");
} else if (temperature > 10) {
    console.log("OMG! Today’s weather is so Cool.");
} else {
    console.log("Temperature is too low to display message.");
}

// q11
var firstNumber = (prompt("Enter the first number:"));
var secondNumber = parseFloat(prompt("Enter the second number:"));
var operation = prompt("Enter the operation (+, -, *, /, %):");
let result;
if (operation === '+') {
    result = firstNumber + secondNumber;
} else if (operation === '-') {
    result = firstNumber - secondNumber;
} else if (operation === '*') {
    result = firstNumber * secondNumber;
} else if (operation === '/') {
    if (secondNumber !== 0) {
        result = firstNumber / secondNumber;
    } else {
        result = "Cannot divide by zero!";
    }
} else if (operation === '%') {
    result = firstNumber % secondNumber;
} else {
    result = "Invalid operation!";
}

// chapter 12-13
// q1

function checkInput(inputChar) {
    const charCode = inputChar.charCodeAt(0);

    if (charCode >= 48 && charCode <= 57) {
        console.log(inputChar + " is a number.");
    } else if (charCode >= 65 && charCode <= 90) {
        console.log(inputChar + " is an uppercase letter.");
    } else if (charCode >= 97 && charCode <= 122) {
        console.log(inputChar + " is a lowercase letter.");
    } else {
        console.log(inputChar + " is not a number or letter.");
    }
}

const inputChar = prompt("Enter a character: ");

// q2

function compareIntegers(num1, num2) {
    if (num1 > num2) {
        console.log(num1 + " is larger than " + num2);
    } else if (num1 < num2) {
        console.log(num2 + " is larger than " + num1);
    } else {
        console.log("Both numbers are equal.");
    }
}

const input1 = parseInt(prompt("Enter the first integer: "));
const input2 = parseInt(prompt("Enter the second integer: "));

compareIntegers(input1, input2);

// q3
function checkNumber(num) {
    if (num > 0) {
        console.log("The number is positive.");
    } else if (num < 0) {
        console.log("The number is negative.");
    } else {
        console.log("The number is zero.");
    }
}

var userInput = parseFloat(prompt("Enter a number: "));

checkNumber(userInput);

// q4

function isVowel(character) {
        character = character.toLowerCase();

    
    return character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u';
}

var userInput = prompt("Enter a character: ");

// Check if the input is a single character
if (userInput.length === 1) {
    const result = isVowel(userInput);
    console.log(result);
} else {
    console.log("Please enter a single character.");
}

// q 5


const correctPassword = "password123";


const userPassword = prompt("Enter your password: ");


if (!userPassword) {
    console.log("Please enter your password.");
} else if (userPassword === correctPassword) {
    console.log("Correct! The password you entered matches the original password.");
} else {
    console.log("Incorrect password.");
}

    // q 6

    var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
// q7
const userInput = parseInt(prompt("Enter the time in 24-hour clock format (e.g., 1900 for 7pm): "));

if (userInput >= 0 && userInput <= 1159) {
    console.log("Good morning!");
} else if (userInput >= 1200 && userInput <= 1759) {
    console.log("Good afternoon!");
} else if (userInput >= 1800 && userInput <= 2359) {
    console.log("Good evening!");
} else {
    console.log("Invalid input! Please enter a time in the 24-hour clock format.");
}

// chapter 10
// q1

var city = karachi
if (city === "karachi"){
    document.write("The city of light")
}
// q2

if (x === y){
    var z =prompt("Enter the value of z");
    document.write("The value of z is: " + z);
}

// q3
var zipCoad ="10010";
if (zipCoad === "10010"){
    alert("Karachi");
}
else{
    alert("Please write correct city");
}

// q4

var x = 5; // Initial value of x


if (x === 5) {
   
    x = 10; 
}

console.log("The value of x is now: " + x); 

// chapter 11
// q1

if (variable1 !== variable2) {
    // Rest of the code...
}
// q2
if (variable1 >= variable2) {
    // Rest of the code...
}
// q3
var x = 10; 


if (x !== 5) {
    
    x = 7; 
}

console.log("The value of x is now: " + x); 

// q4

var number1 = 10;
var number2 = 5;
if (number1 !== number2) {
    
    alert("Congratulations!");
}

// q5

var firstName = prompt("Please enter your first name:");

if (firstName !== "John") {
    
    alert("No match");
}

// chapter 12
// q1
var variable1 = 10;
var variable2 = 5;


if (variable1 >= variable2) {
   
    alert("The value represented by variable1 is greater than or equal to the value represented by variable2.");
} else {
   
    alert("The value represented by variable1 is less than the value represented by variable2.");
}
// q2

var subject1 = parseFloat(prompt("Enter marks for Subject 1:"));
var subject2 = parseFloat(prompt("Enter marks for Subject 2:"));
var subject3 = parseFloat(prompt("Enter marks for Subject 3:"));
var subject4 = parseFloat(prompt("Enter marks for Subject 4:"));
var subject5 = parseFloat(prompt("Enter marks for Subject 5:"));


var totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;


var percentage = (totalMarks / 500) * 100;


console.log("Your Percentage: " + percentage + "%");


if (percentage >= 90) {
    console.log("Grade: A+");
} else if (percentage >= 80) {
    console.log("Grade: A");
} else if (percentage >= 70) {
    console.log("Grade: B");
} else if (percentage >= 60) {
    console.log("Grade: C");
} else if (percentage >= 50) {
    console.log("Grade: D");
} else {
    console.log("Grade: Fail");
}

// q3
var a = 10


if (a === 10) {
    alert("a is 10");
} else {
    alert("The correct value of a is " + a);
}

// q4
var city = prompt("Enter a city:");
if (city === "Karachi") {
    alert("Yes, it is Karachi!");
}
if (city === "Lahore") {
    alert("Yes, it is Lahore!");
}
else {
    alert("It's neither Karachi nor Lahore.");
}

// chaapter 13
// q1
if (a === b && c === d) {
    a = 10
    c = 25
}

// q2
if (a === b || c !== d){

}
// q3

if ((name === "Hamza" || name === "Arsalan") && age < 60) {
}
// q4

var num1 = 10;
var num2 = 20;


if (num1 < num2 || num1 > num2) {
    
    alert("The first variable is either less than or greater than the second variable.");
}
// q5

var firstName = "John";
var lastName = "Doe";


var inputFirstName = prompt("Please enter your first name:");


var inputLastName = prompt("Please enter your last name:");


if (inputFirstName === firstName && inputLastName === lastName) {

    alert("Welcome, " + firstName + " " + lastName + "!");
}

// chapter 14
// q1
if (password !== "") {

    if (password.length <= 5) {

        alert("Password must be greater than 5");
    } else {

        alert("OK");
    }
}
// q2
if(a === 1){if (c === "max")
    alert("ok");
}

// q3
if (a === 1 && c === "Max") {
    alert("OK");
}
// q4

var num1 = 10;
var num2 = 10;


if (num1 === num2) {
    if (num1 <= num2) {
        alert("The first variable equals the second variable and is less than or equal to it.");
    }
}




