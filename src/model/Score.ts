export default class Score {
  static instance: Score;
  private _totalQuestions: number;
  private _currentQuestion: number;
  private _correctAnswers: number;
  private _incorrectAnswers: number;

  private constructor() {
    // private constructor to prevent direct instantiation with new keyword
    this._totalQuestions = 20;
    this._currentQuestion = 1;
    this._correctAnswers = 0;
    this._incorrectAnswers = 0;
  }

  public static getInstance(): Score {
    if (!Score.instance) {
      Score.instance = new Score();
    }
    return Score.instance;
  }

  // only used for generating clean instances for testing
  public static getCleanInstance(): Score {
    return new Score();
  }

  public get totalQuestions(): number {
    return this._totalQuestions;
  }

  public get currentQuestion(): number {
    return this._currentQuestion;
  }

  public nextQuestion(): number {
    return ++this._currentQuestion;
  }

  public get questionsRemaining(): number {
    return this._totalQuestions - this._currentQuestion;
  }

  public get correctAnswers(): number {
    return this._correctAnswers;
  }

  public addCorrectAnswer(): number {
    return ++this._correctAnswers;
  }

  public get incorrectAnswers(): number {
    return this._incorrectAnswers;
  }

  public addIncorrectAnswer(): number {
    return ++this._incorrectAnswers;
  }
}
