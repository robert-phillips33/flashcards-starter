const chai = require('chai');
const expect = chai.expect;

const { evaluateGuess, createRound, takeTurn, calculatePercentCorrect } = require('../src/round');
const { createCard } = require('../src/card');
const { createDeck } = require('../src/deck');

describe('createRound', function() {
  it('should be a function', function() {
    expect(createRound).to.be.a('function');
  });

  it('should create a defaulted round object', function() {
    const card1 = createCard(
      1, 
      "What allows you to define a set of related information using key-value pairs?", 
      ["object", "array", "function"], 
      "object");
    
    const card2 = createCard(
      2, 
      "What is a comma-separated list of related values?", 
      ["array", "object", "function"], 
      "array");
    
    const card3 = createCard(
      3, 
      "What type of prototype method directly modifies the existing array?", 
      ["mutator method", "accessor method", "iteration method"], 
      "mutator method");

    const deck = createDeck([card1, card2, card3]);
    const round = createRound(deck);
    
    expect(round.currentCard).to.equal(card1);
    expect(round.turns).to.equal(0);
    expect(round.incorrectGuesses).to.deep.equal([]);
  });
});


describe('evalateGuess', function() {
  it('should be a function', function() {
    expect(evaluateGuess).to.be.a('function');
  });

  it('should evaluate correct or incorrect on a guess', function () {
    const card = createCard(
      1,
      'What allows you to define a set of related information using key-value pairs?',
      ['object', 'array', 'function'],
      'object'
    );

    const card2 = createCard(
      2,
      "What is a comma-separated list of related values?",
      ["array", "object", "function"],
      "array");

    const card3 = createCard(
      3,
      "What type of prototype method directly modifies the existing array?",
      ["mutator method", "accessor method", "iteration method"],
      "mutator method");

    const turn1 = evaluateGuess('object', card.correctAnswer);
    expect(turn1).to.equal('correct!');

    const turn2 = evaluateGuess('function', card2.correctAnswer);
    expect(turn2).to.equal('incorrect!');

    const turn3 = evaluateGuess('mutator method', card3.correctAnswer);
    expect(turn3).to.equal('correct!')
  });
});

describe('takeTurn', function() {
  it('should be a function', function() {
    expect(takeTurn).to.be.a('function');
  });

  it('should take turns and increment turn counter', function() {
    const card1 = createCard(
      1,
      "What allows you to define a set of related information using key-value pairs?",
      ["object", "array", "function"],
      "object");
    const card2 = createCard(
      2,
      "What is a comma-separated list of related values?",
      ["array", "object", "function"],
      "array");

    const card3 = createCard(
      3,
      "What type of prototype method directly modifies the existing array?",
      ["mutator method", "accessor method", "iteration method"],
      "mutator method");

    const deck = createDeck([card1, card2, card3]);
    const round = createRound(deck);
    
    takeTurn('function', round);
    expect(round.turns).to.equal(1);

    takeTurn('array', round);
    expect(round.turns).to.equal(2);
  });
});

describe ('calculatePercentCorrect', function() {
  it('should be a function', function() {
    expect(calculatePercentCorrect).to.be.a('function');
  });

  it('should display percentage of correct answers given during round', function() {
    const card1 = createCard(
      1,
      "What allows you to define a set of related information using key-value pairs?",
      ["object", "array", "function"],
      "object");
    const card2 = createCard(
      2,
      "What is a comma-separated list of related values?",
      ["array", "object", "function"],
      "array");

    const card3 = createCard(
      3,
      "What type of prototype method directly modifies the existing array?",
      ["mutator method", "accessor method", "iteration method"],
      "mutator method");

      const deck = createDeck([card1, card2, card3]);
      const round = createRound(deck);

      takeTurn('object', round);
      takeTurn('array', round);
      takeTurn('mutator method', round);
      
      const percentCorrect = calculatePercentCorrect(round);
      expect(percentCorrect).to.equal(100);
  });

  it('should display percentage of correct answers given incorrect answers provided', function() {
    const card1 = createCard(
      1,
      "What allows you to define a set of related information using key-value pairs?",
      ["object", "array", "function"],
      "object");
    const card2 = createCard(
      2,
      "What is a comma-separated list of related values?",
      ["array", "object", "function"],
      "array");

    const card3 = createCard(
      3,
      "What type of prototype method directly modifies the existing array?",
      ["mutator method", "accessor method", "iteration method"],
      "mutator method");

      const deck = createDeck([card1, card2, card3]);
      const round = createRound(deck);

      takeTurn('object', round);
      takeTurn('object', round);
      takeTurn('mutator method', round);
      
      const percentCorrect = calculatePercentCorrect(round);
      expect(percentCorrect).to.equal(66);
  });
});





