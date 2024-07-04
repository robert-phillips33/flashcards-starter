
const createRound = (deck) => {
  let round = {
    deck: deck,
    currentCard: deck[0],
    turns: 0,
    incorrectGuesses: []
  };
  return round;
};

const evaluateGuess = (guess, correctAnswer) => {
  if (guess === correctAnswer) {
    return 'correct!'
  } else {
    return 'incorrect!'
  };
};



module.exports = {
  createRound, 
  evaluateGuess
};