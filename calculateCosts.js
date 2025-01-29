export function calculateCosts(data) {
  const levelCosts = {
    beginner: 25.0,
    intermediate: 30.0,
    elite: 35.0,
  };

  let competitionCosts = data.competitionsEntered * 22;
  let costPerWeek = levelCosts[data.selectedPlan] * 4;
  let privTuitionCost = data.coachingHours * 9.5;
  let totalCost = competitionCosts + costPerWeek + privTuitionCost;

  const output = {
    competitionCosts: competitionCosts.toFixed(2),
    costPerWeek: costPerWeek.toFixed(2),
    privTuitionCost: privTuitionCost.toFixed(2),
    totalCost: totalCost.toFixed(2),
  };
  return output;
}
