import './app.scss';
import { createElement, appendContent, waitFor } from './lib/dom';
import { getRandomMeme } from './components/api';

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
    wrapper.innerHTML = 'Wait, Im on the toilet';
    const randomMeme = await getRandomMeme();
    await waitFor(3000);
    wrapper.classList.add('poop');
    await waitFor(3000);
    wrapper.innerHTML = 'OK, go!';
    await waitFor(2000);
    wrapper.classList.remove('poop');
    wrapper.innerHTML = '';
    const memePicture = await createElement('img', {
      className: 'memePicture',
      src: randomMeme
    });

    appendContent(wrapper, memePicture);
  });

  return [main];
}
