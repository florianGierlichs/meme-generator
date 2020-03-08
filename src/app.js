import './app.scss';
import { createElement, appendContent } from './lib/dom';
import { generateRandomMeme } from './components/api';

export function app() {
  const main = createElement('main', {
    className: 'main'
  });
  const startButton = createElement('button', {
    className: 'startButton'
  });

  const wrapper = createElement('div', {
    className: 'wrapper'
  });

  appendContent(main, [startButton, wrapper]);

  startButton.addEventListener('click', async () => {
    wrapper.innerHTML = '';
    const randomMeme = await generateRandomMeme();

    const memePicture = await createElement('img', {
      className: 'memePicture',
      src: randomMeme
    });

    appendContent(wrapper, memePicture);
  });

  return [main];
}
