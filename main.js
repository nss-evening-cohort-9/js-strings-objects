const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML += textToPrint;
};

const iAmThursty = (num) => {
  // do some stuff
  // if under 21 'drink some water'
  // else if over 21 AND under 65 'have a beer'
  // else over 65 'take a nap'
  if (num < 21) {
    return 'drink some water';
  } else if (num > 20 && num < 65) {
    return 'have a beer';
  } else {
    return 'take a nap';
  }
};

// Bonus = printToDom function
printToDom('thirsty', iAmThursty(55));
printToDom('thirsty', iAmThursty(11));
printToDom('thirsty', iAmThursty(67));

console.log(1 === '1'); // false
// console.log(1 == '1'); // true
console.log(1 !== '2') //true

console.log('cats'.length) // how many characters in a string

const quote = 'winter is coming';
console.log(quote.indexOf('is'));  // returns 7
console.log(quote.indexOf('bunny'));  // returns -1