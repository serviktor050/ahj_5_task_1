import Popovers from '../classes/Popovers.js';

test('Отрисовка', () => {
  const popover = new Popovers(document.body);
  popover.bindToDOM();
  const popup = document.getElementById('popup');

  expect(popup.innerHTML).toEqual(popover.htmlElement);
});

test('Показ поповера', () => {
  const popover = new Popovers(document.body);
  popover.bindToDOM();
  const popup = document.getElementById('popup');

  document.body.addEventListener('click', () => {
    popover.positionPopup(document.body);
  });
  document.body.click();

  expect(popup.classList.contains('hidden')).toBeFalsy();
});
