import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { ButtonRepeat } from "../../components/ButtonRepeat/ButtonRepeat";
import { ListAnswers } from "../../components/ListAnswers/ListAnswers";
import { ResultMessage } from "../../components/ResultMessage/ResultMessage";
import { changeWord } from "../../utils/changeWord";
import "../../styles/Results/Results.css";

export const Results: React.FC = () => {
  const { questions, answers } = useSelector(
    (state: RootState) => state.questionSLice
  );

  const isCorrect = useMemo(
    () =>
      questions.map(
        (question, index) => question.correctAnswer === answers[index]
      ),
    [questions, answers]
  );

  const quantityCorrectAnswer = useMemo(
    () => isCorrect.filter((item) => item).length,
    [isCorrect]
  );

  const { title, message } = useMemo(() => {
    if (isCorrect.every((item) => !item)) {
      return {
        title: "УПС :(",
        message:
          "Вы неправильно ответили на все вопросы. Нужно подучить теорию.",
      };
    }

    if (isCorrect.some((item) => !item)) {
      return {
        title: "Хороший результат",
        message: `Вы ответили правильно на ${changeWord(
          quantityCorrectAnswer
        )}. Так держать!`,
      };
    }

    return {
      title: "Поздравляем!",
      message:
        "Вы правильно ответили на все вопросы. Вы действительно отлично разбираетесь в IT.",
    };
  }, [isCorrect, quantityCorrectAnswer]);

  return (
    <div className="results">
      <ResultMessage title={title} message={message} />

      <ul className="results__list">
        {questions.map(({ correctAnswer, text }, index) => {
          const isAnswerCorrect = correctAnswer === answers[index];

          return (
            <ListAnswers
              key={crypto.randomUUID()}
              isCorrect={isAnswerCorrect}
              text={text}
              index={index}
              answers={answers}
            />
          );
        })}
      </ul>

      <ButtonRepeat />
    </div>
  );
};
