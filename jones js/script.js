// function checkName(name) {
//   console.log(name, " ", "Fullstack Developer");
// }
// checkName("Manikandan");

// const name1 = "Madhesh";
// const name2 = "waran";
// console.log(name1.concat( name2));

// let age = 20;
// let maniAge = 18;
// console.log(age > maniAge);

// #challenge 1

// let massMark, heightMark;
// massMark = 88;
// heightMark = 1.78;
// let massJohn, heightJohn;
// massJohn = 92;
// heightJohn = 1.95;

// let BMIMark = Math.floor(massMark / (heightMark * heightMark));
// let BMIJohn = Math.floor(massJohn / (heightJohn * heightJohn));

// let markHeigherBMI = BMIMark > BMIJohn;

// console.log("Marks's BMI :", BMIMark);
// console.log("John's BMI :", BMIJohn);
// console.log(markHeigherBMI);

// document.write("Marks's BMI :", BMIMark);
// document.write("John's BMI:", BMIJohn);
// document.write(markHeigherBMI);

// Function to calculate BMI category
function calculateBMICategory(bmi) {
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    return "Normal weight";
  } else if (bmi >= 25 && bmi < 29.9) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

// Get user inputs for weight and height
let userWeight = prompt("Enter your weight in kilograms:");
let userHeight = prompt("Enter your height in meters:");

// Convert user inputs to numbers
let weight = parseFloat(userWeight);
let height = parseFloat(userHeight);

// Check if inputs are valid numbers
if (!isNaN(weight) && !isNaN(height) && height > 0) {
  // Calculate BMI
  let bmi = weight / (height * height);

  // Get BMI category
  let bmiCategory = calculateBMICategory(bmi);

  // Display the result
  document.write("Your BMI: " + bmi.toFixed(2) + "<br>");
  document.write("BMI Category: " + bmiCategory);
} else {
  // Alert the user if inputs are not valid
  alert("Please enter valid numbers for weight and height.");
}
