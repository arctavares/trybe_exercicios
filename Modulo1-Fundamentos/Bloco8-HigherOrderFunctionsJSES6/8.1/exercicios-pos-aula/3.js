const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

function result(rightAnswers, studentAnswers) {
  let count = 0;
  for (let i = 0; i < rightAnswers.length; i += 1) {
    (rightAnswers[i] === studentAnswers[i]) ?  count += 1 : (studentAnswers[i] !== 'N.A') && (count -= 0.5);
  }
  return count;
}

function checkAnswers(rightAnswers, studentAnswers, result) {
  return result(rightAnswers, studentAnswers);
}

console.log(checkAnswers(RIGHT_ANSWERS, STUDENT_ANSWERS, result));