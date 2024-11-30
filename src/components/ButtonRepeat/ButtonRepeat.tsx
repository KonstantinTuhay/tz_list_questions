import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { reset } from "../../redux/slice/questionSLice";
import "../../styles/ButtonRepeat/ButtonRepeat.css";

export const ButtonRepeat = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleClick = (): void => {
    dispatch(reset());
    navigate("/");
  };

  return (
    <button onClick={handleClick} className="results__button">
      Пройти ещё раз
    </button>
  );
};
