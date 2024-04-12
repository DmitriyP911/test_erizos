// eslint-disable-next-line no-extend-native
String.prototype.toNumber = function () {
  const arrayNumbers = [...this].map((char) => {
    const code = char.charCodeAt();
    if (code < 48 || code > 57) {
      return NaN;
    }
    return char.charCodeAt() - '0'.charCodeAt();
  });

  if (arrayNumbers.some(isNaN)) {
    return NaN;
  }

  const parsedNumber = arrayNumbers.reduce((acc, el) => {
    return acc * 10 + el;
  }, 0);

  return parsedNumber;
};

// or

function parseInteger(string) {
  const arrayNumbers = [...string].map((char) => {
    const code = char.charCodeAt();
    if (code < 48 || code > 57) {
      return NaN;
    }
    return char.charCodeAt() - '0'.charCodeAt();
  });

  if (arrayNumbers.some(isNaN)) {
    return NaN;
  }

  const parsedNumber = arrayNumbers.reduce((acc, el) => {
    return acc * 10 + el;
  }, 0);

  return parsedNumber;
}

console.log('12300'.toNumber() + 50);
console.log(parseInteger('12300') + 50);
