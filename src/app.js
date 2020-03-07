import './app.scss';
import { createElement, appendContent } from './lib/dom';
import trollface from './assets/trollface.jpg';

export function app() {
  const header = createElement('header', {
    className: 'header'
  });
  const logo = createElement('img', {
    className: 'logo',
    src: trollface
  });
  appendContent(header, logo);

  const main = createElement('main', {
    className: 'main'
  });

  return [header, main];
}
