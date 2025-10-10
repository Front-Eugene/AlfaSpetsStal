// ФОРМА ЗАЯВКИ

// Открытие и закрытие модального окна
const openBtns = document.querySelectorAll('.openModalBtn');
const modal = document.getElementById('modal');
const overlay = document.getElementById('modalOverlay');
const closeBtn = document.getElementById('closeModalBtn');
const modalContent = document.getElementById('modalContent');

openBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    modal.classList.add('active');
  });
});

function closeModal() {
  modal.classList.remove('active');
}

closeBtn.onclick = closeModal;

// Закрытие по клику на overlay (вне окна)
overlay.onclick = closeModal;

// Остановить всплытие, если клик по форме
modalContent.onclick = e => e.stopPropagation();