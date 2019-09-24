export const persistAnswer = (title, selectedAnswer, correctAnswer) => {
  localStorage.setItem(
    title,
    JSON.stringify({ selectedAnswer, correctAnswer })
  );
};

export const getPersistedAnswer = title => {
  const item = localStorage.getItem(title);
  if (!item) {
    return { selectedAnswer: null, correctAnswer: null };
  }
  return JSON.parse(item);
};

export const clearPersistedAnswer = title => {
  localStorage.removeItem(title);
};
