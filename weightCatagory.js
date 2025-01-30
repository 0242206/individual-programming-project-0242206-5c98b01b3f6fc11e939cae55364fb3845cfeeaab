/**
 * getWeightCategory
 *
 * Determines the weight category of an athlete based on their current weight.
 * Returns a string corresponding to the appropriate weight class.
 *
 * @param {number} currentWeight - The current weight of the athlete.
 * @returns {string} - The weight category.
 */
export function getWeightCategory(currentWeight) {
  // Validate weight input: Ensure weight is a number and non-negative
  if (isNaN(currentWeight) || currentWeight <= 0) {
    console.warn("Invalid weight input. Defaulting to 'Unknown Category'.");
    return "Unknown Category";
  }

  // Determine weight category based on the given weight ranges
  if (currentWeight <= 66) {
    return "Flyweight";
  } else if (currentWeight <= 73) {
    return "Lightweight";
  } else if (currentWeight <= 81) {
    return "Light-Middleweight";
  } else if (currentWeight <= 90) {
    return "Middleweight";
  } else if (currentWeight <= 100) {
    return "Light-Heavyweight";
  } else {
    return "Heavyweight";
  }
}
