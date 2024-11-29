import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { mixQuestion } from "../../utils/mixQuestion";

interface Question {
  text: string;
  options: string[];
  correctAnswer: string;
}

interface StateTest {
  questions: Question[];
  answers: Record<number, string>;
  isComplete: boolean;
  currentIndex: 0;
}

interface Answer {
  answer: string;
  questionIndex: number;
}

const initialState: StateTest = {
  questions: [],
  answers: {},
  isComplete: false,
  currentIndex: 0,
};

const questionSLice = createSlice({
  name: "questionSLice",
  initialState,
  reducers: {
    setQuestions: (state, action: PayloadAction<Question[]>) => {
      state.questions = mixQuestion(
        action.payload.map((question, questionIndex) => {
          return { ...question, index: questionIndex };
        })
      );
    },

    setAnswer: (state, action: PayloadAction<Answer>) => {
      state.answers[action.payload.questionIndex] = action.payload.answer;
      if (state.currentIndex < state.questions.length - 1) {
        state.currentIndex += 1;
      } else {
        state.isComplete = true;
      }
    },

    reset: (state) => {
      state.questions = mixQuestion(state.questions);
      state.isComplete = false;
      state.answers = {};
      state.currentIndex = 0;
    },
  },
});

export const { setQuestions, setAnswer, reset } = questionSLice.actions;
export default questionSLice.reducer;
