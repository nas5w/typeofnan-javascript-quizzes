export const persistAnswer = (
    title,
    selectedAnswer,
    correctAnswer
  ) => {
    typeof window !== 'undefined' &&
      localStorage.setItem(
        title,
        JSON.stringify({ selectedAnswer, correctAnswer })
      );
  };
  
  export const getPersistedAnswer = title => {
    const item =
      typeof window !== 'undefined' &&
      localStorage.getItem(title);
    if (!item) {
      return { selectedAnswer: null, correctAnswer: null };
    }
    return JSON.parse(item);
  };
  
  export const clearPersistedAnswer = title => {
    typeof window !== 'undefined' &&
      localStorage.removeItem(title);
  };

export const clearAllPersistedAnswer = () => {
    typeof window !== 'undefined' &&
        localStorage.clear();
};