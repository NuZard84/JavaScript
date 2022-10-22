'use strict';

const seeModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

function openModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function shutModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

for (let i = 0; i < 3; i++) {
  seeModal[i].addEventListener('click', openModal);
}

closeModal.addEventListener('click', shutModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    shutModal();
  }
});
