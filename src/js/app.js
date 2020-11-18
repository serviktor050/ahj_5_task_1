import Popovers from './classes/Popovers.js';

const button = document.getElementById('button');
const popover = new Popovers(document.body, 'Popover title', 'And here`s some amazing content. It`s very engaging. Right?');
console.log(popover);
popover.bindToDOM();

button.addEventListener('click', () => {
  popover.positionPopup(button);
});
