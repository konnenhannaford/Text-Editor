import { Workbox } from 'workbox-window';
import Editor from './editor';
import './database';
import '../css/style.css';

const main = document.querySelector('#main');
main.innerHTML = '';

const loadSpinner = () => {
  const spinner = document.createElement('div');
  spinner.classList.add('spinner');
  spinner.innerHTML = `
  <div class="loading-container">
  <div class="loading-spinner" />
  </div>
  `;
  main.appendChild(spinner);
};

const editor = new Editor();

if (typeof editor === 'undefined') {
  loadSpinner();
}

// https://developers.google.com/web/tools/workbox/modules/workbox-window
// Check if service workers are supported
if ('serviceWorker' in navigator) {
  // register workbox service worker
  const workboxSW = new Workbox('/src-sw.js');
  workboxSW.register();
} else {
  console.error('Service workers are not supported in this browser.');
}

// written different on site 
// import {Workbox} from 'workbox-window';

// if ('serviceWorker' in navigator) {
//   const wb = new Workbox('/sw.js');

//   wb.register();
// }import {Workbox} from 'workbox-window';

// if ('serviceWorker' in navigator) {
//   const wb = new Workbox('/sw.js');

//   wb.register();
// }