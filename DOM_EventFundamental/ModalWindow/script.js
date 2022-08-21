'use strict';

const modal = document.querySelector('.modal');
const visibleBtn = document.querySelectorAll('.show-modal');
const hiddenBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');    // OverFlow is just for pretty effect to display...

const openLayer = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeLayer = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < 3; i++)
  visibleBtn[i].addEventListener('click', openLayer);

hiddenBtn.addEventListener('click', closeLayer);

document.addEventListener('keydown', function (e) {
  
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    
    closeLayer();
  }
});