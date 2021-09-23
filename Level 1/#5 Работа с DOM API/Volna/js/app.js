'use strict';

function bindPartnerToEl(partner, el) {
	const linkEl = el.querySelector('[data-id="partner-link"]');
	const logoEl = el.querySelector('[data-id="logo"]');
	const titleEl = el.querySelector('[data-id="title"]');
	const categoryEl = el.querySelector('[data-id="category"]');

	linkEl.href = partner.url;
	logoEl.src = partner.logoUrl;
	logoEl.alt = partner.id;
	titleEl.textContent = partner.title;
	categoryEl.textContent = partner.category;
}

const partner = {
	id: 'volna',
	url: 'https://salom.alif.tj/#/partners/volna',
	logoUrl: 'https://salom.alif.tj/api/salom/v0/images/bh3ah2805vneb2veo2ig.png',
	title: 'Волна',
	category: 'Бытовая техника',
};

const partnerEl = document.querySelector('[data-block="partner"]');
bindPartnerToEl(partner, partnerEl);