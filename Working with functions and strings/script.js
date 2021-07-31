'use strict';

// // Func 1
// const oneWord = function (str) {
//   return str.replaceAll(' ', '').toLowerCase();
// };

// Func 2
// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // Func 3: Higher-Order function
// const transformation = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };
// transformation('Ayesha is a hardworking individual.', upperFirstWord);
// transformation('Ayesha is a hard working individual.', oneWord);

// const high5 = function () {
//   console.log('👋');
// };
// document.body.addEventListener('click', high5);

// ['Ayesha', 'Hamna', 'Saira'].forEach(high5);

// Func returning func
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey('Ayesha');

// greet('Hello')('Ayesha');

// const greet = greeting => {
//   return name => {
//     console.log(`${greeting} ${name}`);
//   };
// };

// greet('Hey')('Ayesha');

// Call and Apply methods
// const pakistanAirline = {
//   airline: 'PIA',
//   iataCode: 'PK',
//   bookings: [],

//   //func
//   book: function (flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}-${flightNum}.`
//     );
//     this.bookings.push({ flight: `${this.airline} ${this.iataCode}`, name });
//   },
// };

// pakistanAirline.book(333, 'Ayesha Ejaz');
// pakistanAirline.book(454, 'Mahad');

// const eurowings = {
//   airline: 'eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = pakistanAirline.book;
// book.call(eurowings, 222, 'Ayesha');
// book.call(pakistanAirline, 111, 'Mahad');
// console.log(pakistanAirline);

// const swissAirlines = {
//   airline: 'Swiss',
//   iataCode: 'SA',
//   bookings: [],
// };
// book.call(swissAirlines, 666, 'Mahnoor');
// console.log(swissAirlines);

// // Bind() method
// const bookEW = book.bind(eurowings);
// bookEW(412, 'Sahar');

// const bookPK = book.bind(pakistanAirline);
// bookPK(123, 'Ejaz');

// const bookSA = book.bind(swissAirlines);
// bookSA(666, 'Saadat');

// pakistanAirline.planes = 300;
// pakistanAirline.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', pakistanAirline.buyPlane.bind(pakistanAirline));

// //partial application
// const addTax = function (rate, value) {
//   return value + value * rate;
// };
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(100));

// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };
// console.log(addTaxRate(0.1)(200));

// Coding Challenge # 1
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],

  answers: new Array(4).fill(0),

  registerNewAnswer: function () {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')} \n (Write option number)`
      )
    );

    console.log(answer);
    //register answer
    typeof answer === 'number' &&
      answer < this.options.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },
  displayResults: function (type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll result is this ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));
