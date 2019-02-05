export const findBy = (key, value) => {
  return function (element) {
    for (const keys in element) {
      if ((keys === key) && (element[keys] === value)) {
        return true;
      }
    }
  };
}
