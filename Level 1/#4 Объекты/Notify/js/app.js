function hasUnread(items) {
	return items.some(item => !item.read);
}

const posts = [
{
	id: 1,
	read: true,
},
{
	id: 2,
	read: true,
},
{
	id: 3,
	read: false,
},
];

const notify = hasUnread(posts);
console.log(notify);