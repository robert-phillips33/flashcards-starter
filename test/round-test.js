const chai = require('chai');
const expect = chai.expect;

const { evaluateGuess } = require('../src/round');
const { createCard } = require('../src/card');

describe('evalateGuess', function () {
  it('should be a function', function () {
    expect(evaluateGuess).to.be.a('function');
  });

  it('should evaluate correct or incorrect on a guess', function () {
    const card = createCard(
      1,
      'What allows you to define a set of related information using key-value pairs?',
      ['object', 'array', 'function'],
      'object'
    );

    const turn1 = evaluateGuess('object', card.correctAnswer);
    expect(turn1).to.equal('correct!');

    const turn2 = evaluateGuess('array', card.correctAnswer);
    expect(turn2).to.equal('incorrect!');
  });
});



