
export function validateForm() {
  let athleteName = document.querySelector("#athlete-name").value;

  // Function to get the selected training plan
  function getSelectedTrainingPlan() {
    const trainingPlans = document.querySelectorAll(
      'input[name="training-plan"]'
    );

    for (const plan of trainingPlans) {
      if (plan.checked) {
        return plan.value; // Return the value of the checked radio button
      }
    }

    return null; // Return null if no radio button is checked
  }

  // Example usage
  const trainingPlan = getSelectedTrainingPlan();

  let currentWeight = parseInt(document.querySelector("#current-weight").value);
  let competitionsEntered = parseInt(
    document.querySelector("#competitions-entered").value
  );
  let privateCoachingHours = parseInt(
    document.querySelector("#private-coaching-hours").value
  );

  console.log({
    athleteName,
    trainingPlan,
    currentWeight,
    competitionsEntered,
    privateCoachingHours,
  });

  let errors = {};

  // Helper function to add error messages
  function addError(field, message) {
    if (!errors[field]) {
      errors[field] = { messages: [] };
    }
    errors[field].messages.push(message);
  }

  // Only validate and add errors if the form is submitted
  if (athleteName === "") {
    addError("athlete-name", "Please input your name");
  }
  if (isNaN(currentWeight) || currentWeight <= 0) {
    addError("current-weight", "Please input a valid current weight");
  }
  if (privateCoachingHours > 5) {
    addError("private-coaching-hours", "Maximum of 5 hours a week");
  }

  // Check if competitions are entered by Beginners
  if (trainingPlan === "beginner" && competitionsEntered > 0) {
    addError("competitions-entered", "Beginners cannot enter competitions.");
  }

  // Clear previous error messages
  document
    .querySelectorAll(".error-message")
    .forEach((div) => (div.innerHTML = ""));

  // Process and display errors only if there are any
  for (let field in errors) {
    let inputElement = document.querySelector(`#${field}`);
    let labelElement = document.querySelector(`label[for=${field}]`);

    if (inputElement) {
      inputElement.classList.add("error-input"); // Add error class
    }
    if (labelElement) {
      labelElement.style.color = "red"; // Change label color to red on error
    }

    let errorDiv = document.querySelector(`#${field}-error`);

    if (errorDiv) {
      errorDiv.classList.add("error-message");
      let ul = document.createElement("ul");

      errors[field].messages.forEach((message) => {
        let li = document.createElement("li");
        li.textContent = message;
        ul.appendChild(li);
      });

      errorDiv.innerHTML = ""; // Clear any existing content
      errorDiv.appendChild(ul);
    }
  }

  // Return early if there are any errors
  if (Object.keys(errors).length > 0) {
    return false;
  }

  return {
    athleteName,
    trainingPlan,
    currentWeight,
    competitionsEntered,
    privateCoachingHours,
  };
}





// Clear error messages and reset styles on input change
export function clearErrorStyles(inputId, errorId) {
  let inputElement = document.querySelector(inputId);
  let errorDiv = document.querySelector(errorId);

  if (errorDiv) {
    errorDiv.innerHTML = ""; // Clear error message when user starts typing

    // Remove error highlight and reset label color
    if (inputElement) {
      inputElement.classList.remove("error-input"); // Remove error highlight
      let labelElement = document.querySelector(
        `label[for=${inputElement.id}]`
      );
      if (labelElement) {
        labelElement.style.color = ""; // Reset label color to default
      }
    }
  }
}

// Attach event listeners for form submission and input changes
document.addEventListener("DOMContentLoaded", function () {
  let form = document.querySelector("#form");

  form.addEventListener("submit", validateForm);

  document
    .querySelector("#athlete-name")
    .addEventListener("input", function () {
      clearErrorStyles("#athlete-name", "#athlete-name-error");
    });

  document
    .querySelector("#current-weight")
    .addEventListener("input", function () {
      clearErrorStyles("#current-weight", "#current-weight-error");
    });

  document
    .querySelector("#private-coaching-hours")
    .addEventListener("input", function () {
      clearErrorStyles(
        "#private-coaching-hours",
        "#private-coaching-hours-error"
      );
    });
    
    document
    .querySelector("#training-plan")
    .addEventListener("input", function () {
      clearErrorStyles(
        "#training-plan",
        "#training-plan-error"
      );
    });
    
    document
    .querySelector("#beginner")
    .addEventListener("input", function () {
      clearErrorStyles(
        "#beginner",
        "#beginner-error"
      );
    });
    
    document
    .querySelector("#intermediate")
    .addEventListener("input", function () {
      clearErrorStyles(
        "#intermediate",
        "#intermediate-error"
      );
    });
  
    document
    .querySelector("#elite")
    .addEventListener("input", function () {
      clearErrorStyles(
        "#elite",
        "#elite-error"
      );
    });
    
    document
    .querySelector("#competitions-entered")
    .addEventListener("input", function () {
      clearErrorStyles(
        "#competitions-entered",
        "#competitions-entered-error"
      );
    });
});
