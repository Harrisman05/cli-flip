import { score } from '../../model/Score';

const updateWrongScore = (): void => {
  score.addIncorrectAnswer();
  score.nextQuestion();
};

export default updateWrongScore;
