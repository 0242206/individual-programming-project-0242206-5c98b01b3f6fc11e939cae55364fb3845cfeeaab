export function displayResults(output) {
  const outputDiv = document.querySelector("#output");
  outputDiv.innerHTML = `
    <h2>Financial Overview</h2>
    <p>Athlete Name: ${output.athleteName}</p>
    <p>Training Plan: ${output.trainingPlan}</p>
    <p>Weight Category: ${output.weightCategory}</p>
    <p>Private Coaching Hours: ${output.privateCoachingHours || 0} hours</p>
    <p>Competitions Entered: ${output.competitionsEntered || 0}</p>
    <p>Competition Costs: $${output.competitionCosts}</p>
    <p>Private Tuition Cost: $${output.privTuitionCost}</p>
    <p>Cost Per Week: $${output.costPerWeek}</p>
    <p>Total Cost: $${output.totalCost}</p>
  `;
}

