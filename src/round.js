
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
  const correctAnswer = round.currentCard.correctAnswer;
  const roundResult = evaluateGuess(guess, correctAnswer);
  
  if (roundResult === 'incorrect!') {
    round.incorrectGuesses.push(round.currentCard.id);
  };

  round.turns++;
  round.currentCard = round.deck[round.turns];
  return roundResult;
};

const calculatePercentCorrect = (round) => {
  if (round.turns === 0) {
    return 0;
  };
  
  let incorrectGuessCount = round.incorrectGuesses.length;
  let totalGuessCount = round.turns;
  
  let correctGuessCount = totalGuessCount - incorrectGuessCount;
  let percentCorrect = parseInt((correctGuessCount / totalGuessCount) * 100);
  return percentCorrect;
};

const endRound = (round) => {
  console.log(`** Round over! ** You answered <${calculatePercentCorrect(round)}>% of the questions correctly!`)
};

module.exports = {
  createRound, 
  evaluateGuess,
  takeTurn,
  calculatePercentCorrect,
  endRound
};