'use strict';

const post = {
    id: 0,
    liked: './img/liked.svg',
    unliked: './img/unliked.svg',
    userLiked: false,
};

const like = document.querySelector('[data-action="like"]');
like.onclick = function() {
    const idPost = like.querySelector('p');
    const imagePost = like.querySelector('img');
    if (!post.userLiked) {
        imagePost.src = post.liked;
        idPost.textContent = post.id++;
        post.userLiked = true;
    } else if (post.userLiked) {
        imagePost.src = post.unliked;
        idPost.textContent = post.id--;
        post.userLiked = false;
    }
};