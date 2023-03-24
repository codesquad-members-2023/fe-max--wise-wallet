import { gnbElements } from '../utils/elements.js';

export default function navClickHandler() {
  const { $$tabButtons, $$tabContents } = gnbElements;

  $$tabButtons.forEach((target) => {
    target.addEventListener('click', () => {
      openTab(target);
    });
  });

  function openTab(target) {
    const tabId = target.dataset.tab;
    console.log(tabId);

    $$tabContents.forEach((tabContent) => {
      tabContent.classList.remove('active');
    });

    $$tabButtons.forEach((btn) => {
      btn.classList.remove('tab--active');
    });

    target.classList.add('tab--active');
    document.getElementById(tabId).classList.add('active');
  }
}
