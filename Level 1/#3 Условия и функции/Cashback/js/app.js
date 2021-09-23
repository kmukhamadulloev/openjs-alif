function calculateCashback(amount, percent) {
	const cashback = amount/100 * percent;
	return cashback;
}

const amount = 1000;
const percent = 50;
const result = calculateCashback(amount, percent);
console.log(result);