const findTheOldest = function(people) {
  let oldestAge = 0;
  let oldestPerson;

  for (let person of people) {
    let lastYearAlive;
    if ('yearOfDeath' in person) {
      lastYearAlive = person.yearOfDeath;
    } else {
      lastYearAlive = new Date().getFullYear();
    }
    if (lastYearAlive - person.yearOfBirth > oldestAge) {
      oldestAge = lastYearAlive - person.yearOfBirth;
      oldestPerson = person;
    }
  }

  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
