const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(args) {
  let total = 0;
  for (let num of args) {
    total += num;
  }
	
  return total;
};

const multiply = function(args) {
  let total = 1;
  for (let i of args) {
    total *= i;
  }
  return total;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	let total = 1;
  for (let i = a; i > 0; i--) {
    total *= i;
  }
  
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
