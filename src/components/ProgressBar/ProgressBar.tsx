import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import "../../styles/ProgressBar/ProgressBar.css";

export const ProgressBar: React.FC = () => {
  const { currentIndex, questions } = useSelector(
    (state: RootState) => state.questionSLice
  );
  const progress = ((currentIndex + 1) / questions.length) * 100;

  return (
    <>
      <div className="progress-container">
        <div className="progress-header">
          <span>0</span>
          <span>{questions.length}</span>
        </div>

        <div className="progress-bar">
          <div
            className="progress-bar__inner"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {currentIndex + 1 < questions.length && (
          <div
            className="progress-number"
            style={{ left: `calc(${progress}% - 5px)` }}
          >
            {currentIndex + 1}
          </div>
        )}
      </div>
    </>
  );
};
