import "../../styles/ListAnswers/ListAnswers.css";

export const ListAnswers = ({
  isCorrect,
  text,
  index,
  answers,
}: {
  isCorrect: boolean;
  text: string;
  index: number;
  answers: Record<number, string>;
}) => {
  return (
    <li
      className={`results__item ${
        isCorrect ? "results__item--correct" : "results__item--incorrect"
      }`}
    >
      <h3 className="results__item-title">{text}</h3>
      <p className="results__item-text">{answers[index]}</p>
    </li>
  );
};
