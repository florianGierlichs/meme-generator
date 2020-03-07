import './index.scss';
import { app } from './app';
import { appendContent } from './lib/dom';

const index = app();
appendContent(document.body, index);
