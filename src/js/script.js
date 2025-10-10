// Получаем элементы
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const itemsList = document.querySelector('.uslugi-list');
const items = document.querySelectorAll('.uslugi-list .item');

// Переменные для управления слайдером
let currentIndex = 0;
const itemsToShow = 3; // Количество видимых элементов
const totalItems = items.length;

// Функция для обновления позиции слайдера
function updateSlider() {
    const translateX = -(currentIndex * (100 / itemsToShow));
    itemsList.style.transform = `translateX(${translateX}%)`;
    
    // Управление активностью кнопок
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex >= totalItems - itemsToShow;
}

// Обработчик для кнопки "Next"
nextBtn.addEventListener('click', () => {
    if (currentIndex < totalItems - itemsToShow) {
        currentIndex++;
        updateSlider();
    }
});

// Обработчик для кнопки "Prev"
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

// Инициализация слайдера
updateSlider();


// FAQ
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    item.classList.toggle('active');
    document.querySelectorAll('.faq-item').forEach(other => {
      if (other !== item) other.classList.remove('active');
    });
    // Меняем "−" и "+" в .faq-toggle
    document.querySelectorAll('.faq-toggle').forEach(span => span.textContent = '+');
    if(item.classList.contains('active')) {
      item.querySelector('.faq-toggle').textContent = '−';
    }
  });
});


const details = document.querySelector('details'); // если details всего один, иначе уточни селектор
const screenText = document.querySelector('.screen-text'); // уточни селектор если их несколько

if (details && screenText) {
  details.addEventListener('toggle', function() {
    if (details.open) {
      screenText.style.position = 'static';
    } else {
      // Вернуть прежнее значение (например, absolute или то, что нужно по дизайну)
      screenText.style.position = 'relative';
    }
  });
}
