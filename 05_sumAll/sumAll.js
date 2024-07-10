const sumAll = function (num, num2) {
  if (num < 0 || num2 < 0) return "ERROR";
  if (typeof num !== "number" || typeof num2 !== "number") return "ERROR";
  
  let sum = 0;
  if (num > num2) {
    for (let i = num; i >= num2; i--) {
      sum += i;
    }
  } else {
    for (let i = num; i <= num2; i++) {
      sum += i;
    }
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
