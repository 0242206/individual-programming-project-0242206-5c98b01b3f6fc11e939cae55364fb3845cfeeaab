import { calculateCosts } from "./calculateCosts.js";
import { displayResults } from "./displayResults.js";
import { validateForm } from "./validateForm.js";
import { getWeightCategory } from "./weightCatagory.js";

/* Refer to the README.md for instructions on what you need to do in this project */
let form = document.querySelector("#form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevents the default form submission behavior

  // Validate the user's input
  const validatedData = validateForm();

  if (validatedData) {
    // Calculate the total cost
    const output = calculateCosts(validatedData);
    console.log({ output });

        // Determine the weight category
    const weightCategory = getWeightCategory(validatedData.currentWeight);

    // Display the total cost to the user
    displayResults({...output, ...validatedData, weightCategory});
  }
});




// Display a form to the user
// Include input fields for the athlete's name, training plan, current weight, competition weight category, optional number of competitions entered, and optional private coaching hours
// Capture user's input on form submission
// Validate the user's input
// Check if the athlete's name is provided
// Check if the training plan is selected
// Check if the current weight is a valid number
// Check if the number of competitions entered is a valid number
// only allow for competitions if user training plan is intermediate or elite
// Check if private coaching hours do not exceed five per week
// Calculate costs
// Calculate the monthly training fee based on the training plan
// Calculate competition entry fees based on the number of competitions entered
// Calculate private coaching fees based on the number of hours
// Display results
// Show the athlete's name
// Provide an itemized list of all costs for the month
// Display the total cost of training and competitions for the month
// Compare the athlete's current weight to their competition weight category
// Additional features
// Provide a basic design for the user interface, which can be improved upon

