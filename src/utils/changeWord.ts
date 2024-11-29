export const changeWord = (num: number): string => {
  const titles = ["вопрос", "вопроса", "вопросов"];
  const cases = [2, 0, 1, 1, 1, 2];
  const mod100 = num % 100;
  const mod10 = num % 10;

  if (mod100 > 10 && mod100 < 20) {
    return `${num} ${titles[2]}`;
  }

  return `${num} ${titles[mod10 < 5 ? cases[mod10] : cases[5]]}`;
};
