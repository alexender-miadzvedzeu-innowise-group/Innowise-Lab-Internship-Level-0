import { buttonEvent } from './events.js';
import '../css/style.css';

const buttons = document.querySelectorAll('.buttons_wrapper__button');

buttons.forEach(button => button.onclick = (e) => buttonEvent(e));