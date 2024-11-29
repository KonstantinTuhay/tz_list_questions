import { useDispatch, useSelector } from "react-redux";
import { setAnswer } from "../../redux/slice/questionSLice";
import { RootState } from "../../redux/store";
import "../../styles/Options/Options.css";

export const Options = ({ option }: { option: string }) => {
  const { currentIndex } = useSelector(
    (state: RootState) => state.questionSLice
  );

  const dispatch = useDispatch();

  const handleChange = (option: string) => {
    setTimeout(() => {
      dispatch(setAnswer({ questionIndex: currentIndex, answer: option }));
    }, 1000);
  };

  return (
    <>
      <li className="option-item">
        <input
          type="radio"
          className="option-input"
          onChange={() => handleChange(option)}
        />
        <p className="option-text">{option}</p>
      </li>
    </>
  );
};
