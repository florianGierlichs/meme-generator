import './app.scss';
import { createElement, appendContent } from './lib/dom';
//import { generateRandomMeme } from './components/api';

export function app() {
  const main = createElement('main', {
    className: 'main'
  });
  const startButton = createElement('button', {
    className: 'startButton'
  });
  appendContent(main, startButton);

  return [main];
}
