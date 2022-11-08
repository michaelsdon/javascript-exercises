const palindromes = function (string) {
  let baseString = string.toLowerCase();
  baseString = baseString.replace(/[^a-z0-9]/gi, '');
  baseString = Array.from(baseString)

  for (let i = 0; i < baseString.length/2; i++) {
    if (baseString[i] !== baseString[baseString.length - i - 1]) {
      return false;
    };
  };

  return true;
};

// Do not edit below this line
module.exports = palindromes;
