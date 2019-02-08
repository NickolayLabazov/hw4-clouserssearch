export const findBy = (key, value) => function (element) {
  for (const keys in element) {
    if (keys === key) {
      return element[keys] === value;
    }
  }
};
