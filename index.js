// # [JSL04] Submission: Monster Ternary Operator

// #### Challenge 1: Flavor Selection

let userPreference = "Sugar-free"; // Possible values: 'Regular', 'Sugar-free', or undefined
function checkPreferred() {
  return userPreference === "Regular"
    ? `${userPreference}`
    : userPreference === "Sugar-free"
    ? `${userPreference}`
    : "Unknown-flavor";
}

console.log(`User prefers: ${checkPreferred()}`);

// #### Challenge 2: Stock Check

let cansLeft = 3; // Any number of cans
const canStock = cansLeft <= 5 ? "Time to restock!" : "We're stocked!";
console.log(`${canStock}`);

// #### Challenge 3: Workout Intensity

let heartRate = 95; // Current heart rate in bpm
const bpm = heartRate < 100 ? "Boost needed!" : "Energy levels are high!";
console.log(`${bpm}`);

// #### Challenge 4: Temperature Suitability

let currentTemp = 4; // Current temperature in °C
const temperatureSuitability =
  currentTemp >= 5 ? "Needs a cooler!" : "Chilled to perfection!";
console.log(`${temperatureSuitability}`);

// #### Challenge 5: Late Night Coding Session

const currentDate = new Date(); // This was a little bit extra
let currentHour = currentDate.getHours();

const monsterTime =
  currentHour >= 7 && currentHour <= 23
    ? "Unleash the beast!"
    : "Better stick to water.";
console.log(`${monsterTime}`);

// It works like an if statement but different
