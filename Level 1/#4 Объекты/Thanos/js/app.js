function filterByThanos(items) {
	return items.filter(item => item % 2 == 0);
}

const posts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filtered = filterByThanos(posts);

console.log(filtered);