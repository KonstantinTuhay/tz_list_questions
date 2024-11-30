import { useSelector } from "react-redux";
import { selectIsComplete } from "../../redux/selectors/questionSelectors";
import { Results } from "../Results/Results";
import { Question } from "../../components/Question/Question";
import "../../styles/TestPage/TestPage.css";

export const TestPage = (): JSX.Element => {
  const isComplete = useSelector(selectIsComplete);

  return <div className="app">{isComplete ? <Results /> : <Question />}</div>;
};
