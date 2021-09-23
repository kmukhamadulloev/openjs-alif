'use strict';

const photos = [
    { id: 1, src: './img/001.jpg', alt: '001'},
    { id: 2, src: './img/002.jpg', alt: '002'},
    { id: 3, src: './img/003.jpg', alt: '003'},
    { id: 4, src: './img/004.jpg', alt: '004'},
];

const prevImg = document.querySelector('[data-action="prev"]');
const nextImg = document.querySelector('[data-action="next"]');
const imgPlac = document.querySelector('[data-id="photo"');


function bindPhotoToViewer(photo, el) {
    el.src = photo.src;
    el.alt = photo.alt;
}

let index = 1;

function checkState() {
    if (index > 1) {
        prevImg.disabled = false;
    } else if (index <= 1 ) {
        prevImg.disabled = true;
    }
    if (index >= photos.length) {
        nextImg.disabled = true;
    } else {
        nextImg.disabled = false;
    }
}

prevImg.onclick = function() {
    index--;
    bindPhotoToViewer(photos[index - 1], imgPlac);
    checkState();
};

nextImg.onclick = function() {
    index++;
    bindPhotoToViewer(photos[index - 1], imgPlac);
    checkState();
};

bindPhotoToViewer(photos[index - 1], imgPlac);
checkState();