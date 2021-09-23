'use strict';

function thanosEffect(el) {
	const list = el.querySelectorAll('[data-type="post"]');
	Array.from(list).filter((item, index) => index % 2 == 0).forEach(function(item) { 
		item.style.visibility = 'hidden'; 
	});
}

const postsEl = document.querySelector('[data-id="posts"]');
thanosEffect(postsEl);