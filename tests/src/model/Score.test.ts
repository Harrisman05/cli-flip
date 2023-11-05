import Score from '../../../src/model/Score';

describe('Score Class tests', () => {
  let scoreInstance: Score;

  beforeEach(() => {
    // must get clean instance because singleton pattern prevents more than 1 object being created, contaminating tests
    scoreInstance = Score.getCleanInstance();
  });

  it('should instiante an instance of the Score class', () => {
    expect(scoreInstance).toBeInstanceOf(Score);
  });

  it('should contain total number of questions in quiz', () => {
    expect(scoreInstance.totalQuestions).toEqual(20);
  });

  it('should contain first question in quiz', () => {
    expect(scoreInstance.currentQuestion).toEqual(0);
  });

  it('should contain next question in quiz', () => {
    expect(scoreInstance.currentQuestion).toEqual(0);
    expect(scoreInstance.nextQuestion()).toEqual(1);
    expect(scoreInstance.currentQuestion).toEqual(1);
  });

  it('should contain the remaining questions in quiz', () => {
    // Simulate answering 3 questions in the quiz (start on 0)
    scoreInstance.nextQuestion();
    scoreInstance.nextQuestion();
    scoreInstance.nextQuestion();

    // Start with 20 questions and 4 questions answered in total, so 16 remain
    expect(scoreInstance.currentQuestion).toEqual(3);
    expect(scoreInstance.questionsRemaining).toEqual(17);
  });

  it('should contain number of correct answers', () => {
    expect(scoreInstance.correctAnswers).toEqual(0);
  });

  it('should increment number of correct answers', () => {
    // add a correct answer 3 times
    scoreInstance.addCorrectAnswer();
    scoreInstance.addCorrectAnswer();
    scoreInstance.addCorrectAnswer();

    expect(scoreInstance.correctAnswers).toEqual(3);
  });

  it('should contain number of incorrect answers', () => {
    expect(scoreInstance.incorrectAnswers).toEqual(0);
  });

  it('should increment number of incorrect answers', () => {
    // add a correct answer 3 times
    scoreInstance.addIncorrectAnswer();
    scoreInstance.addIncorrectAnswer();
    scoreInstance.addIncorrectAnswer();

    expect(scoreInstance.incorrectAnswers).toEqual(3);
  });
});
