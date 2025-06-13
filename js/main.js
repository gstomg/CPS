let swiperInstance = null;

function initSwiper() {
  if (window.innerWidth < 768 && !swiperInstance) {
    swiperInstance = new Swiper('.brands-container__slider', {
      slidesPerView: 'auto',
      spaceBetween: 14,
      slidesOffsetBefore: 16,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      a11y: { clicked: true },
    });
  } else if (window.innerWidth >= 768 && swiperInstance) {
    swiperInstance.destroy(true, true);
    swiperInstance = null;

    // Сбросить стили, которые Swiper мог добавить
    const wrapper = document.querySelector('.brands-container__wrapper');
    if (wrapper) {
      wrapper.style.transform = '';
      wrapper.style.transition = '';
    }
    document.querySelectorAll('.swiper-slide').forEach(slide => {
      slide.style.transform = '';
      slide.style.transition = '';
    });
  }
}

// Инициализация при загрузке
window.addEventListener('load', initSwiper);
// И при изменении размера окна
window.addEventListener('resize', initSwiper);


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
