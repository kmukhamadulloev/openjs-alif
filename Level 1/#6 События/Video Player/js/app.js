'use strict';

const videoPlayer = document.querySelector('[data-id="video"]');
const play = document.querySelector('[data-action="play"]');
const pause = document.querySelector('[data-action="pause"]');
const volUp = document.querySelector('[data-action="volume-plus"]');
const volDw = document.querySelector('[data-action="volume-minus"]');

const volumePoint = 0.1;
const volumeMax = 1;
const volumeMute = 0;

play.onclick = () => {
    videoPlayer.play();
};

pause.onclick = () => {
    videoPlayer.pause();
};

volUp.onclick = () => {
    videoPlayer.volume = (videoPlayer.volume >= 1) ? volumeMax : videoPlayer.volume + volumePoint;
};

volDw.onclick = () => {
    videoPlayer.volume = (videoPlayer.volume <= 0) ? volumeMute : videoPlayer.volume - volumePoint;
};