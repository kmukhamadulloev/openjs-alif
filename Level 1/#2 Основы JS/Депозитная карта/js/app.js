const input = 1000;
const min = 4;
const max = 6;
const maxMonthly = input * max / 100 / 12;
const minMonthly = input * min / 100 / 12;
const maxYearly = input * max / 100;
const minYearly = input * min / 100;

console.log(maxMonthly);
console.log(minMonthly);
console.log(maxYearly);
console.log(minYearly);