// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.

const markHeight = 1.69;
const markWeight = 78;

const johnHeight = 1.88;
const johnWeight = 92;

const calculateBMI = (weight, height) => {
  return (weight / height ** 2).toFixed(2);
};

const markBMI = calculateBMI(markWeight, markHeight);
const johnBMI = calculateBMI(johnWeight, johnHeight);

const markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);

// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"

markHigherBMI
  ? console.log(
      `Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})!`
    )
  : console.log(
      `John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})!`
    );

// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks 😉
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy

// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

const dolphinAvgScore = ((96 + 108 + 89) / 3).toFixed(2);
const koalasAvgScore = ((88 + 91 + 110) / 3).toFixed(2);

console.log(`Dolphin's Average Score : ${dolphinAvgScore}`);
console.log(`Koalas's Average Score : ${koalasAvgScore}`);

if (dolphinAvgScore > koalasAvgScore) {
  console.log("Dolphin's are Winners.");
} else if (dolphinAvgScore < koalasAvgScore) {
  console.log("Koalsas's are Winners.");
} else {
  console.log("Draw between Dolphin's & Koalsas's");
}

// for Test Data 1 & part 3
const dolphinAvgScoreData1 = ((97 + 112 + 101) / 3).toFixed(2);
const koalasAvgScoreData1 = ((109 + 95 + 123) / 3).toFixed(2);

console.log(`Dolphin's Average Score : ${dolphinAvgScoreData1}`);
console.log(`Koalas's Average Score : ${koalasAvgScoreData1}`);

if (dolphinAvgScoreData1 > koalasAvgScoreData1 && dolphinAvgScoreData1 >= 100) {
  console.log("Dolphin's are Winners.");
} else if (
  dolphinAvgScoreData1 < koalasAvgScoreData1 &&
  koalasAvgScoreData1 >= 100
) {
  console.log("Koalsas's are Winners.");
} else {
  console.log("Draw between Dolphin's & Koalsas's");
}

// for Test Data 2 & part 4
const dolphinAvgScoreData2 = ((97 + 112 + 101) / 3).toFixed(2);
const koalasAvgScoreData2 = ((109 + 95 + 106) / 3).toFixed(2);

console.log(`Dolphin's Average Score : ${dolphinAvgScoreData2}`);
console.log(`Koalas's Average Score : ${koalasAvgScoreData2}`);

if (dolphinAvgScoreData2 > koalasAvgScoreData2 && dolphinAvgScoreData2 >= 100) {
  console.log("Dolphin's are Winners.");
} else if (
  dolphinAvgScoreData2 < koalasAvgScoreData2 &&
  koalasAvgScoreData2 >= 100
) {
  console.log("Koalsas's are Winners.");
} else if (
  dolphinAvgScoreData2 == koalasAvgScoreData2 &&
  dolphinAvgScoreData2 >= 100 &&
  koalasAvgScoreData2 >= 100
) {
  console.log("Draw between Dolphin's & Koalsas's");
}

// Coding Challenge #4
// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430

const billAmount = 275;

const countTip = (amount) => {
  const tip = amount >= 50 && amount <= 300 ? 0.15 : 0.2;
  return billAmount * tip;
};

console.log(`Total Bill Amount: ${billAmount + countTip(billAmount)}`);
