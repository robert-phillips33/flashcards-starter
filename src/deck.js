const { createCard } = require ('./card');


const createDeck = (cards) => {
  let deck = cards
  return deck;
};

const countCards = (deck) => {
  let cardCounter = deck.length
  return cardCounter
};

module.exports = {
  createDeck,
  countCards
};