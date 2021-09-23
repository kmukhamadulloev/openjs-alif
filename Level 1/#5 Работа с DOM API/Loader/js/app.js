'use strict';

const timer = 5000;

setTimeout(() => {
	const el = document.querySelector('[data-id="loader"]');
	el.style.display = 'none';
}, timer);