import "../../styles/ResultMessage/ResultMessage.css";

type ResultMessageProps = {
  title: string;
  message: string;
};

export const ResultMessage: React.FC<ResultMessageProps> = ({
  title,
  message,
}) => {
  return (
    <>
      <h2 className="results__title">{title}</h2>
      <div className="results__text">
        <p>{message}</p>
      </div>
    </>
  );
};
