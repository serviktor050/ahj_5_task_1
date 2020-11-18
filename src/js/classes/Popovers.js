export default class Popovers {
  constructor(parentElement, title = '', text = '') {
    this.parentElement = parentElement;
    this.title = title;
    this.text = text;
    this.popupElement = document.createElement('div');
  }

  get htmlElement() {
    return `
        <p class="title-popup">${this.title}</p>
        <p class="text-popup">${this.text}</p>
        `;
  }

  bindToDOM() {
    this.popupElement.id = 'popup';
    this.popupElement.className = 'popup hidden';
    this.popupElement.innerHTML = this.htmlElement;
    this.parentElement.appendChild(this.popupElement);
  }

  positionPopup(element) {
    const popup = document.getElementById('popup');
    popup.classList.remove('hidden');
    popup.style.bottom = `${element.offsetTop + 15}px`;
    popup.style.left = `${element.offsetLeft
        - ((popup.offsetWidth - element.offsetWidth) / 5, 5)}px`;
  }
}
