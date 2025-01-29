export function costFromObject() {
  const userLevel = trainingPlan;

  const levelToCost = {
    beginner: 25,
    intermediate: 30,
    elite: 35,
  };

  const weeklyCost = levelToCost[userLevel];

  return weeklyCost;
}
