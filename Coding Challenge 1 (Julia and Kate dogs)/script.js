'use strict';

const julia = {
  dogInfo: [3, 5, 2, 12, 7],
};
const kate = {
  dogInfo: [4, 1, 15, 8, 3],
};

const displayDog = function () {
  kate.dogInfo.forEach(function (age, i) {
    if (age < 3) {
      console.log(`${i + 1}: Puppy`);
    } else {
      console.log(`${i + 1}: Adult Dog`);
    }
  });
};
displayDog();
