const sumAll = function(start, finish) {

  let sum = 0;

  if (!(typeof start === 'number' && typeof finish === 'number') || !(start > 0 && finish > 0)) {
    return 'ERROR';
  } else {
    let startSum = start * (start + 1)/2;
    let finishSum = finish * (finish + 1)/2;

    console.log(startSum); 
    console.log(finishSum);

    sum = Math.max(startSum, finishSum) - Math.min(startSum, finishSum) + Math.min(start, finish);
  }

  return sum;

};

console.log

// Do not edit below this line
module.exports = sumAll;
