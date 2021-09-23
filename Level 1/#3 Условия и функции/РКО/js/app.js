function calculateCommission(amount, rate) {
	const minComission = 250;
	const maxComission = 450;
	const percent = 0.2;
	const comission = amount * rate * percent / 100;
	if (comission < minComission) { return minComission; }
	if (comission > maxComission) { return maxComission; }
	return comission;
}

const amount = 1000;
const rate = 11.40;
const result = calculateCommission(amount, rate);
console.log(result);