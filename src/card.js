const createCard = (id, question, answers, correctAnswer) => {
  if (!id || !question || !answers || !correctAnswer) {
    throw new Error('All four parameters are required for card creation.');
  };
  
  const card = {
    id: id,
    question: question,
    answers: answers,
    correctAnswer: correctAnswer,
  };
  return card
};


module.exports = {
  createCard
};