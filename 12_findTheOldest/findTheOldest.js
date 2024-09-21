const findTheOldest = function (arr) {
  let oldestPerson = {};
  let oldestAge = 0;

  arr.forEach((element) => {
    if (!element.yearOfDeath) {
      element.yearOfDeath = new Date().getFullYear();
    }

    const personAge = element.yearOfDeath - element.yearOfBirth;
    if (personAge > oldestAge) {
      oldestAge = personAge;
      oldestPerson = element;
    }
  });

  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
