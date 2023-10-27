import inquirer from 'inquirer';
import * as main from '../../src/main';
import * as showRules from '../../src/utils/showRules';
import * as startGif from '../../src/utils/quizControl/startGif';

describe('Main test suites', () => {
  describe('main test', () => {
    afterEach(() => {
      jest.resetAllMocks();
    });

    it('should call start quiz once', () => {
      const startQuizMock = jest.spyOn(main, 'startQuiz').mockImplementation(() => Promise.resolve());
      main.main();
      expect(startQuizMock).toHaveBeenCalledTimes(1);

      // restore startQuiz so it can be used for next test
      startQuizMock.mockRestore();
    });
  });
  describe('startQuiz test', () => {
    it('should call console.log, inquirer.prompt, showRules and startGif all once inside startQuiz', async () => {
      const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
      const inquirerSpy = jest.spyOn(inquirer, 'prompt').mockImplementation(() => Promise.resolve({}));
      const showRulesSpy = jest.spyOn(showRules, 'default').mockImplementation(() => Promise.resolve());
      const startGifSpy = jest.spyOn(startGif, 'default').mockImplementation(() => {});

      await main.startQuiz();

      expect(consoleLogSpy).toHaveBeenCalledTimes(1);
      expect(consoleLogSpy).toHaveBeenCalledWith(expect.any(String));
      expect(inquirerSpy).toHaveBeenCalledTimes(1);
      expect(inquirerSpy).toHaveBeenCalledWith(expect.any(Array));
      expect(showRulesSpy).toHaveBeenCalledTimes(1);
      expect(startGifSpy).toHaveBeenCalledTimes(1);
    });
  });
});
