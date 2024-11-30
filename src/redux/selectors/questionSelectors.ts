import { createSelector } from "reselect";
import { RootState } from "../store";

const selectQuestionState = (state: RootState) => state.questionSLice;

export const selectCurrentQuestion = createSelector(
  [selectQuestionState],
  (questionSlice) => questionSlice.questions[questionSlice.currentIndex]
);

export const selectQuestions = createSelector(
  [selectQuestionState],
  (questionSlice) => questionSlice.questions
);

export const selectCurrentIndex = createSelector(
  [selectQuestionState],
  (questionSlice) => questionSlice.currentIndex
);

export const selectIsComplete = createSelector(
  [selectQuestionState],
  (questionSlice) => questionSlice.isComplete
);

export const selectAnswers = createSelector(
  [selectQuestionState],
  (questionSlice) => questionSlice.answers
);
