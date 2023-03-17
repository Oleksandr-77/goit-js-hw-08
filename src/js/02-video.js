import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

player.getVideoTitle().then(function(title) {
  console.log('title:', title);
});

function onPlay({ seconds }) {
  localStorage.setItem(STORAGE_KEY, seconds);
}

player.on('timeupdate', throttle(onPlay, 1000));

let seconds = localStorage.getItem(STORAGE_KEY);
if (seconds) {
  player.setCurrentTime(seconds);
}
