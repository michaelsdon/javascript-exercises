const reverseString = function(inputString) {
  
  var backwardsString = "";

  for (let i = inputString.length - 1; i >= 0; i--) {
    backwardsString += inputString[i];
  };

  return backwardsString;
};

// Do not edit below this line
module.exports = reverseString;