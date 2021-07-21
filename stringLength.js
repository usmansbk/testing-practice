function stringLength(inputString) {
  const length = inputString.length;

  if (length > 0 && length <= 10) {
    return length;
  }

  throw new Error(
    "String should be at least 1 character long and not longer than 10 characters"
  );
}

module.exports = stringLength;
