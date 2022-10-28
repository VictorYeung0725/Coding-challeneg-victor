//BUG fundemental 2 Coding Challeneg #1

// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!
// Your tasks:
// 1. Createanarrowfunction'calcAverage'tocalculatetheaverageof3scores
// 2. Usethefunctiontocalculatetheaverageforbothteams
// 3. Createafunction'checkWinner'thattakestheaveragescoreofeachteam
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)"
// 4. Usethe'checkWinner'functiontodeterminethewinnerforbothData1and Data 2
// 5. Ignoredrawsthistime
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49 § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores 😉 GOOD LUCK 😀

// Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

let dolphins = [44, 23, 71];
let koalas = [65, 54, 49];

const data1 = [{ dolphins: [44, 23, 71] }, { koalas: [65, 54, 49] }];

const checkWinner = function (avgDolhins, avgKoalas) {
  if (avgDolhins > avgKoalas) {
    if (avgDolhins >= 2 * avgKoalas) {
      console.log(`dolphins win (${avgDolhins} vs. ${avgKoalas})`);
    }
  } else if (avgDolhins < avgKoalas) {
    if (avgKoalas >= 2 * avgDolhins) {
      console.log(`dolphins win (${avgDolhins} vs. ${avgKoalas})`);
    }
  }
  console.log(`Draw`);
};

const calcAverage = (team1, team2) => {
  console.log(team1);
  console.log(team2);
  let team1_sum = 0;
  let team2_sum = 0;
  let team1_average = 0;
  let team2_average = 0;
  for (let i = 0; i < team1.length; i++) {
    team1_sum = team1_sum + team1[i];
  }
  for (let i = 0; i < team2.length; i++) {
    team2_sum = team2_sum + team2[i];
  }
  team1_average = team1_sum / team1.length;
  team2_average = team2_sum / team2.length;
  console.log(team1_average, team2_average);
  checkWinner(team1_average, team2_average);
};

dolphins = [85, 54, 41];
koalas = [23, 34, 27];
calcAverage(dolphins, koalas);

// "Koalas win (30 vs. 13)"

// SECTION const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));

// // Test 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     console.log('No team wins...');
//   }
// }
// checkWinner(scoreDolphins, scoreKoalas);

// checkWinner(576, 111);

//BUG  fundemental 2 Coding Challeneg #2

// Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
// Your tasks:
// 1. Writeafunction'calcTip'thattakesanybillvalueasaninputandreturns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100
// 2. Andnowlet'susearrays!Socreateanarray'bills'containingthetestdata below
// 3. Createanarray'tips'containingthetipvalueforeachbill,calculatedfrom the function you created before
// 4. Bonus:Createanarray'total'containingthetotalvalues,sothebill+tip Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉
// GOOD LUCK 😀

const bill = [125, 555, 44];

// const billCal = bill.forEach((tip) => {
//   tip <= 300 && tip >= 50 ? (tip *= 0.15) : (tip *= 0.2);
//   console.log(tip);
// });

// .reduce((accu, ti) => accu + ti, 0);

// // NOTE1 simple solution
// let tips = [];
// for (let i = 0; i < bill.length; i++) {
//   if (bill[i] <= 300 && bill[i] >= 50) {
//     bill[i] *= 0.15;
//   } else {
//     bill[i] *= 0.2;
//   }
// }
// tips.push(...bill);
// console.log(tips);

// const total = [...bill, ...tips].reduce((acc, tip) => acc + tip, 0);
// console.log(total);

// NOTE2
// const calcTip = (bill) => {
//   for (let i = 0; i < bill.length; i++) {
//     if (bill[i] <= 300 && bill[i] >= 50) {
//       bill[i] *= 0.15;
//     } else {
//       bill[i] *= 0.2;
//     }
//   }
//   return bill;
// };
// console.log(calcTip(bill));

// BUG Coding Challeneg #3

// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. Foreachofthem,createanobjectwithpropertiesfortheirfullname,mass,and height (Mark Miller and John Smith)
// 2. Createa'calcBMI'methodoneachobjecttocalculatetheBMI(thesame method on both objects). Store the BMI value to a property, and also return it from the method
// 3. LogtotheconsolewhohasthehigherBMI,togetherwiththefullnameandthe respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// GOOD LUCK 😀

//Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

// const BMI = [
//   {
//     name: 'Marks',
//     weight: 78,
//     height: 1.69,
//   },
//   {
//     name: 'John',
//     weight: 92,
//     height: 1.95,
//   },
// ];

// let test = (78 * 1.69) / (1.69 * 1.69);
// console.log(test);
// let total = 0;
// // BMI = mass / height ** 2
// function cal(weight, height) {
//   let mass = weight * height;
//   total = mass / (height * height);
//   console.log(total);
// }

// BMI.forEach((bmi) => {
//   cal(bmi.weight, bmi.height);
// });

//SECTION
const marks = {
  name: 'Marks',
  mass: 78,
  height: 1.69,
  calc: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  name: 'John',
  mass: 92,
  height: 1.95,
  calc: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

marks.calc();
// BUG  forgot to call the method inside the object
// the object function will not work
// because the function does not invoked itself
console.log(marks.bmi, john.bmi);

// BUG
//  28/10/2022
// Coding Challenge #4

// Let's improve Steven's tip calculator even more, this time using loops!
// Your tasks:
// 1. Create an array 'bills' containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!
// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
// tips and totals arrays 😉 Bonus:
// 4. Bonus:Writeafunction'calcAverage'whichtakesanarraycalled'arr'as an argument. This function calculates the average of all numbers in the given array. This is a difficult challenge (we haven't done this before)! Here is how to solve it:
// 4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
// 4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
// 4.3. Call the function with the 'totals' array
// GOOD LUCK 😀

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let total = [];

const calcTip = (bill) => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  total.push(tip + bills[i]);
}

console.log(bills, tips, total);

const calcAverage2 = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  console.log(sum);
  return sum / arr.length;
};
console.log(calcAverage2([2, 3, 7]));
console.log(calcAverage2(total));
