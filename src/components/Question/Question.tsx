import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuestions } from "../../redux/slice/questionSLice";
import { RootState } from "../../redux/store";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import { Options } from "../Options/Options";
import { dataQuestions } from "../../data/dataQuestions";
import "../../styles/Question/Question.css";

export const Question = (): JSX.Element => {
  const dispatch = useDispatch();

  const { questions, currentIndex } = useSelector(
    (state: RootState) => state.questionSLice
  );

  useEffect(() => {
    dispatch(setQuestions(dataQuestions));
  }, [dispatch]);

  return (
    <>
      {questions[currentIndex] ? (
        <div className="question-container">
          <h2 className="testing-title">Тестирование</h2>

          <div className="questions-box">
            <h3 className="question-text">{questions[currentIndex].text}</h3>
            <ul className="options-list">
              {questions[currentIndex].options.map((option) => {
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
