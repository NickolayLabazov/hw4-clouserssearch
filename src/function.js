export default function findBy(key, value) {
  return function (element) {
    return element[key] === value;
  };
}
