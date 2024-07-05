const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const { createCard } = require('./card');
const { createRound } = require('./round');
const { createDeck } = require('./deck');

function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${countCards(deck)} cards.
  -----------------------------------------------------------------------`);
};

function printQuestion(round) {
  util.main(round);
};

const start = (deck, round) => {
  const deck = createDeck(prototypeQuestions);
  const round = createRound(deck);

  printMessage(deck);
  printQuestion(round);
}

module.exports = {
  printMessage,
  printQuestion,
  start,
};
