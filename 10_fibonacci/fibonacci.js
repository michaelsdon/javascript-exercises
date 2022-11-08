const fibonacci = function(num) {
  if (typeof num === 'string') {
    num = +num;
  }

  if (num < 0) {
    return "OOPS"
  }
  
  let iter = 0;
  let last = 1;
  let beforeLast = 1;
  let next;


  if (num === 1 || num === 2) {
    return 1;
  } else {
    while (iter < num - 2) {
      next = last + beforeLast;
      beforeLast = last;
      last = next;
      iter++;
    }
  }

  return next;
};

console.log(fibonacci(10));

// Do not edit below this line
module.exports = fibonacci;
