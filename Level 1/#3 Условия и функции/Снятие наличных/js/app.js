function calculateCommission(amount, total) {
	const percent = 0.7;
	const minComission = 0.35;
	const maxTotal = 5000;
	if ((total + amount) > maxTotal) {
		const comission = (amount + total - maxTotal) * percent / 100;
		if (comission < minComission) {
			return minComission;
		}
		return comission;
	}
	return 0;
}

const amount = 2000;
const total = 4000;
const result = calculateCommission(amount, total);
console.log(result);