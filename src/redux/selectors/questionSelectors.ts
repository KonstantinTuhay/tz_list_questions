import { createSelector } from "reselect";
import { RootState } from "../store";

// Базовый селектор для получения данных из стейта
const selectQuestionState = (state: RootState) => state.questionSLice;

// Селектор для получения текущего вопроса
export const selectCurrentQuestion = createSelector(
  [selectQuestionState],
  (questionSlice) => questionSlice.questions[questionSlice.currentIndex]
);

// Селектор для получения всех вопросов
export const selectQuestions = createSelector(
  [selectQuestionState],
  (questionSlice) => questionSlice.questions
);

// Селектор для получения текущего индекса
export const selectCurrentIndex = createSelector(
  [selectQuestionState],
  (questionSlice) => questionSlice.currentIndex
);

export const selectIsComplete = createSelector(
  [selectQuestionState],
  (questionSlice) => questionSlice.isComplete
);
