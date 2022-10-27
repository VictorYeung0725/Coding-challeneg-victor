//BUG fundemental 2 Coding Challeneg 1
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

//BUG  fundemental 2 Coding Challeneg 2

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
const calcTip = (bill) => {
  for (let i = 0; i < bill.length; i++) {
    if (bill[i] <= 300 && bill[i] >= 50) {
      bill[i] *= 0.15;
    } else {
      bill[i] *= 0.2;
    }
  }
  return bill;
};
console.log(calcTip(bill));

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
