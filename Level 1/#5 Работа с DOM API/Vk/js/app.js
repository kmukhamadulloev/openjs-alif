'use strict';

const selector = document.querySelector('[data-id="counter"]');

setInterval(() => {
	selector.__counterValue = parseInt(selector.textContent);
	selector.__counterValue += 10;
	selector.textContent = selector.__counterValue;
}, 1000);