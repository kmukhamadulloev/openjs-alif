'use strict';

const posts = [
    {
        id: 3,
        type: 'text',
        content: 'Final Week!',
    },
    {
        id: 2,
        type: 'image',
        content: './img/logo_js.svg',
    },
    {
        id: 1,
        type: 'video',
        content: './video/video.ogv',
    },
];

function makePostEl(post) {
    const div = document.createElement('div');
    div.setAttribute('data-type', post.type);
    div.setAttribute('data-id', post.id);
    if (post.type === 'text') {
        const elem = document.createElement('div');
        elem.textContent = post.content;
        div.appendChild(elem);
    } else if (post.type === 'image') {
        const elem = document.createElement('img');
        elem.src = post.content;
        div.appendChild(elem);
    } else if (post.type === 'video') {
        const elem = document.createElement('video');
        elem.src = post.content;
        elem.controls = true;
        div.appendChild(elem);
    }

    return div;

}

function makeWall(el, items) {
    items.map(makePostEl).forEach( elem => {
        el.appendChild(elem);
    });
}

const rootEl = document.getElementById('root');
makeWall(rootEl, posts);