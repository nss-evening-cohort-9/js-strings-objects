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