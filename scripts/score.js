export function calculateScore(questions, selectedAnswers) {
  let score = 0;

  for (let i = 0; i < questions.length; i++) {
    if (questions[i].answer === selectedAnswers[i]) {
      score++;
    }
  }

  return {
    score: score.toString(),
    total: questions.length.toString(),
  };
}
