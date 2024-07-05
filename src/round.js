
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

const takeTurn = (guess, round) => {
  const roundResult = evaluateGuess(guess, round.currentCard.correctAnswer);
  if (roundResult === 'incorrect!') {
    round.incorrectGuesses.push(round.currentCard.id);
  };

  round.turns++;
  round.currentCard = round.deck[round.turns]
};

const calculatePercentCorrect = (round) => {
  let incorrectGuessCount = round.incorrectGuesses.length;
  let totalGuessCount = round.turns;
  
  let correctGuessCount = totalGuessCount - incorrectGuessCount;
  let percentCorrect = (correctGuessCount / totalGuessCount) * 100;
  return percentCorrect;
};





module.exports = {
  createRound, 
  evaluateGuess,
  takeTurn,
  calculatePercentCorrect,
};