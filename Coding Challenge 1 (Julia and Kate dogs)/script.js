'use strict';

const juliaDogs = [9, 16, 6, 8, 3];

const kateDogs = [10, 5, 6, 1, 4];

const newJuliaDogs = juliaDogs.slice(1, -2);
console.log(newJuliaDogs);
console.log([...newJuliaDogs, ...kateDogs]);
const dogInfo = newJuliaDogs.concat(kateDogs);
console.log(dogInfo);

const displayDog = function () {
  dogInfo.forEach(function (age, i) {
    if (age < 3) {
      console.log(`Dog number ${i + 1} is still a Puppy.`);
    } else {
      console.log(`Dog number ${i + 1} is an Adult and is ${age} years old.`);
    }
  });
};
displayDog();
