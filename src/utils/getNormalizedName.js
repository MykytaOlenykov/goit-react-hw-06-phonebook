export const getNormalizedName = name => {
  return name
    .split(' ')
    .reduce((acc, word) => {
      const normalizedWord = word.trim();

      if (normalizedWord) {
        return (acc += normalizedWord + ' ');
      }

      return acc;
    }, '')
    .trim();
};
