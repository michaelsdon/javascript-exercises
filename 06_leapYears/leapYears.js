const leapYears = function(year) {

  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0) 

};

leapYears(2001);

// Do not edit below this line
module.exports = leapYears;
