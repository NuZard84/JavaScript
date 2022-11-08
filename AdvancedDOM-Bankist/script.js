'using strict';

//DOM...

const header = document.querySelector('.header');
const scrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.getElementById('section--1');
const navLinks = document.querySelector('.nav__links');
const tabBtn = document.querySelectorAll('.operations__tab');
const tabCont = document.querySelectorAll('.operations__content');
const tabContainer = document.querySelector('.operations__tab-container');
const navItem = document.querySelectorAll('.nav__item');
const nav = document.querySelector('.nav');
const allSection = document.querySelectorAll('.section');
const lazyImg = document.querySelectorAll('img[data-src]'); //this will select all img with setdata=src anttribute...
const slides = document.querySelectorAll('.slide');
const btnSlideLeft = document.querySelector('.slider__btn--left');
const btnSlideRight = document.querySelector('.slider__btn--right');
const dot = document.querySelector('.dots');

//Creating and Delete Cookie element...

const msg = document.createElement('div');
msg.classList.add('cookie-message');
msg.innerHTML =
  'we use cokies for your better experience. <button class="btn btn--close-cookie">got it!</button>';

header.append(msg);

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function (e) {
    // msg.remove();
    msg.parentElement.removeChild(msg);
  });

//Menu Fade animation...

const handHover = function (e) {
  // console.log(this);

  if (e.target.classList.contains('nav__link')) {
    const el = e.target;
    const item = el.closest('.nav__item');
    const elP = el.closest('.nav__links').querySelectorAll('.nav__link');

    elP.forEach(e => {
      if (e !== el) {
        e.style.opacity = this;
      }
    });

    if (!item.classList.contains('underline')) item.classList.add('underline');
    else item.classList.remove('underline');
  }
};

navLinks.addEventListener('mouseover', handHover.bind(0.6));
navLinks.addEventListener('mouseout', handHover.bind(1));

//Sticky Navigation...
const navHeight = document.querySelector('.nav').getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry); //all element to help to impliment what we want to...
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
const headerObserverAPi = new IntersectionObserver(stickyNav, {
  root: null,
  rootmargin: `-${navHeight}px`,
  threshold: 0, //intersectoing ratio
});
headerObserverAPi.observe(header);

//Scroll to Specific Section...

navLinks.addEventListener('click', function (e) {
  e.preventDefault();
  console.log(e.target);
  const id = e.target.getAttribute('href');
  console.log(id);
  document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
});

//Display specific information of certain Tab...

tabContainer.addEventListener('click', function (e) {
  const tabPBtn = e.target.closest('.operations__tab');
  const contentNum = tabPBtn.dataset.tab;
  console.log(tabPBtn);

  if (!tabPBtn) return;
  if (tabPBtn) {
    tabBtn.forEach(b => b.classList.remove('operations__tab--active'));
    tabCont.forEach(c => c.classList.remove('operations__content--active'));

    tabPBtn.classList.add('operations__tab--active');
    console.log(e.target);
    document
      .querySelector(`.operations__content--${contentNum}`)
      .classList.add('operations__content--active');
  }
});

//Revealing sections...

const revealSec = function (entries, observer) {
  const [entry] = entries;

  if (entry.isIntersecting) entry.target.classList.remove('section--hidden');
  else return;
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSec, {
  root: null,
  threshold: 0.2,
});

allSection.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

//lazy LOad img...

console.log(lazyImg);
const loadImage = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;

  //==>here replacing src IMG is work in behind the scene and while this operation occur , 'LOAD' event occur to load the image...
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const lazyObeserver = new IntersectionObserver(loadImage, {
  root: null,
  threshold: 0.13,
});

lazyImg.forEach(img => lazyObeserver.observe(img));

//Slider...

let curSlide = 0;
const maxSlide = slides.length;

const creatDotEle = function () {
  slides.forEach(function (_, i) {
    dot.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};

const activeDot = function (slide) {
  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));

  //select specific slide to active which is current slide...
  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
};

const gotoSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};

const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else curSlide++;

  gotoSlide(curSlide);
  activeDot(curSlide);
};
const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else curSlide--;

  gotoSlide(curSlide);
  activeDot(curSlide);
};

const init = function () {
  gotoSlide(0);
  creatDotEle();
  activeDot(0);
};
init();

btnSlideLeft.addEventListener('click', prevSlide);
btnSlideRight.addEventListener('click', nextSlide);
document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft') prevSlide();
  e.key === 'ArrowRight' && nextSlide();
});

dot.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    const { slide } = e.target.dataset;
    gotoSlide(slide);
    activeDot(slide);
  }
});
