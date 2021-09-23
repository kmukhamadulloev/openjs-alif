'use strict';

function extractOwnerId(postId) {
	const selector = `[data-id="${postId}"]`;
	const ownerId = document.querySelector(selector).getAttribute('data-ownerid');
	return ownerId;
}

const postId = 1;
extractOwnerId(postId);