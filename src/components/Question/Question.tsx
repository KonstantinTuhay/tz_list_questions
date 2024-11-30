import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuestions } from "../../redux/slice/questionSLice";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import { Options } from "../Options/Options";
import { dataQuestions } from "../../data/dataQuestions";
import "../../styles/Question/Question.css";
import { selectCurrentQuestion } from "../../redux/selectors/questionSelectors";

export const Question = (): JSX.Element => {
  const dispatch = useDispatch();

  const currentQuestion = useSelector(selectCurrentQuestion);

  useEffect(() => {
    dispatch(setQuestions(dataQuestions));
  }, [dispatch]);

  return (
    <>
      {currentQuestion ? (
        <div className="question-container">
          <h2 className="testing-title">Тестирование</h2>

          <div className="questions-box">
            <h3 className="question-text">{currentQuestion.text}</h3>
            <ul className="options-list">
              {currentQuestion.options.map((option) => {
                return <Options option={option} key={crypto.randomUUID()} />;
              })}
            </ul>
          </div>

          <ProgressBar />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
