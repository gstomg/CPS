document.addEventListener('DOMContentLoaded', function() {
  const btn = document.querySelector('.brands-container__show-all-btn');
  const icon = document.querySelector('.brands-container__show-all-icon');
  const swiper = document.querySelector('.brands-container__slider');
  let expanded = false;

  function updateButton() {
    btn.textContent = expanded ? 'Скрыть' : 'Показать все';
    icon.src = expanded ? 'img/showall.svg' : 'img/icon.svg';
    icon.alt = expanded ? 'Скрыть' : 'Показать все';
  }

  btn.addEventListener('click', function() {
    expanded = !expanded;
    if (expanded) {
      swiper.classList.add('show-extra');
    } else {
      swiper.classList.remove('show-extra');
    }
    updateButton();
  });

  // cбросить состояние при изменении ширины окна
  window.addEventListener('resize', function() {
    expanded = false;
    swiper.classList.remove('show-extra');
    updateButton();
  });
});