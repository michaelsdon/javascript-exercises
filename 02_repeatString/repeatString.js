const repeatString = function(string, num) {
  new_string = '';

  if (num < 0) {
    return 'ERROR';
  };

  for (let i = num; i > 0; i--) {
    new_string += string;
  };

  return new_string;
};

// Do not edit below this line
module.exports = repeatString;
