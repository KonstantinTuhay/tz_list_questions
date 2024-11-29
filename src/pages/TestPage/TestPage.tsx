import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Results } from "../Results/Results";
import { Question } from "../../components/Question/Question";
import "../../styles/TestPage/TestPage.css";

export const TestPage = (): JSX.Element => {
  const { isComplete } = useSelector((state: RootState) => state.questionSLice);

  return <div className="app">{isComplete ? <Results /> : <Question />}</div>;
};
