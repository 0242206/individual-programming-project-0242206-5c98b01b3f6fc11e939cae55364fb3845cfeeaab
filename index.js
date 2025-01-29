import { calculateCosts } from "./calculateCosts.js";
import { displayResults } from "./displayResults.js";
import { validateForm } from "./validateForm.js";
/* Refer to the README.md for instructions on what you need to do in this project */
let form = document.querySelector("#form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Validate the user's input
  const validatedData = validateForm();

  if (validatedData) {
    // Calculate the total cost
    const output = calculateCosts(validatedData);
    console.log({ output });
  }
  // Display the total cost to the user
  displayResults({});
});
