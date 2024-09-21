const palindromes = function (str) {
  const regex = /[^a-z0-9]/gi;

  const noPunctuationString = str
    .split("")
    .filter((char) => !char.match(regex))
    .join("")
    .toLowerCase();

  const reversed = noPunctuationString.split("").reverse().join("");

  return noPunctuationString === reversed;
};

// Do not edit below this line
module.exports = palindromes;
