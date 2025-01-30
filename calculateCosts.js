export function calculateCosts(data) {
  const levelCosts = {
    beginner: 25.0,
    intermediate: 30.0,
    elite: 35.0,
  };

  // Default to 0 if fields are not filled
  let competitionCosts = (data.competitionsEntered || 0) * 22;
  let costPerWeek = levelCosts[data.trainingPlan] * 4;
  let privTuitionCost = (data.privateCoachingHours || 0) * 9.5;
  let totalCost = (costPerWeek * 4) +  competitionCosts+ privTuitionCost;

  const output = {
    competitionCosts: competitionCosts.toFixed(2),
    costPerWeek: costPerWeek.toFixed(2),
    privTuitionCost: privTuitionCost.toFixed(2),
    totalCost: totalCost.toFixed(2),
  };
  return output;
}
