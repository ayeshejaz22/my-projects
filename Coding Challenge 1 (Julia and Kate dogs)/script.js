'use strict';

// const juliaDogs = [9, 16, 6, 8, 3];

// const kateDogs = [10, 5, 6, 1, 4];

// const newJuliaDogs = juliaDogs.slice(1, -2);
// console.log(newJuliaDogs);
// console.log([...newJuliaDogs, ...kateDogs]);
// const dogInfo = newJuliaDogs.concat(kateDogs);
// console.log(dogInfo);

// const displayDog = function () {
//   dogInfo.forEach(function (age, i) {
//     if (age < 3) {
//       console.log(`Dog number ${i + 1} is still a Puppy.`);
//     } else {
//       console.log(`Dog number ${i + 1} is an Adult and is ${age} years old.`);
//     }
//   });
// };
// displayDog();

// const checkDogs = function (juliaDogs, kateDogs) {
//   const juliaDogsCorrected = juliaDogs.slice();
//   juliaDogsCorrected.splice(0, 1);
//   juliaDogsCorrected.splice(-2);
//   console.log(juliaDogsCorrected);

//   const dogs = juliaDogsCorrected.concat(kateDogs);
//   console.log(dogs);

//   dogs.forEach(function (age, i) {
//     if (age < 3) {
//       console.log(`Dog number ${i + 1} is still a Puppy.`);
//     } else {
//       console.log(`Dog number ${i + 1} is an Adult and is ${age} years old.`);
//     }
//   });
// };
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

// console.log('----------------------------------------------------------------');

// const calcAverageHumanAge = function (ages) {
//   //map()
//   const humanAges = ages.map(age => (age <= 2 ? age * 2 : 16 + age * 2));
//   console.log(humanAges);

//   //filter()
//   const dogsAbove18 = humanAges.filter(age => age > 18);
//   console.log(dogsAbove18);

//   //reduce()
//   const averageHumanAge =
//     dogsAbove18.reduce((acc, age) => acc + age, 0) / dogsAbove18.length;
//   return averageHumanAge;
// };

// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// console.log(avg1);

// console.log(
//   '---------------------Chaininng Methods----------------------------'
// );

// const calcAverageHumanAge = ages =>
//   ages
//     .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// console.log(avg1);

//////////////////////////////////////////////////////////////////////////////////////
//Coding Challenge # 4

/* Tasks:
1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
the recommended food portion and add it to the object as a new property. Do
not create a new array, simply loop over the array. Forumla:
recommendedFood = weight ** 0.75 * 28. (The result is in grams of
food, and the weight needs to be in kg)

2. Find Sarah's dog and log to the console whether it's eating too much or too
little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
the owners array, and so this one is a bit tricky (on purpose)

3. Create an array containing all owners of dogs who eat too much
('ownersEatTooMuch') and an array with all owners of dogs who eat too little
('ownersEatTooLittle').

4. Log a string to the console for each array created in 3., like this: "Matilda and
Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
too little!"

5. Log to the console whether there is any dog eating an okay amount of food
(just true or false)

6.Log to the console whether there is any dog eating exactly the amount of food
that is recommended (just true or false)

7. Create an array containing the dogs that are eating an okay amount of food (try
to reuse the condition used in 5.)

8. Create a shallow copy of the 'dogs' array and sort it by recommended food
portion in an ascending order (keep in mind that the portions are inside the
array's objects 😉)
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.
dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs);

// 2.
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(
  dogSarah.curFood > dogSarah.recFood
    ? `Sarah's dog is eating too much.`
    : `Sarah's dog is eating too little.`
);

// 3.
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

// 4.
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// 5.
console.log(
  dogs.some(
    dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
  )
);
//current > (recommended * 0.90) && current < (recommended * 1.10).

// 6.
console.log(dogs.some(dog => dogs.curFood === dogs.recFood));

console.log('----------');

// 7.
console.log(
  dogs.map(
    dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
  )
);

// 8.
// dogs.sort((a, b) => {
//   if (a.recFood - b.recFood) console.log(dogs);
//   if (b.recFood - a.recFood) console.log(dogs);
// });
const dogsCopy = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsCopy);
