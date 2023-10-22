import { score } from '../../model/Score';

const updateCorrectScore = (): void => {
  score.addCorrectAnswer();
  score.nextQuestion();
};

export default updateCorrectScore;
