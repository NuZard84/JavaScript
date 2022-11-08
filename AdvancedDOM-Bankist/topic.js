'using strict';

console.log(document.documentElement); //entire html code

const header = document.querySelector('.header');
console.log(document.querySelectorAll('.section')); //bunch of NodeLists ..it is preferable
console.log(document.getElementsByTagName('button')); //bunch of HTMLCollection
//==> NodeList can not be manipulated(not update within change) ,unblike HTMLcollection can be manipulated(update within change)  withing browser..

//Creating and Insert element...

const msg = document.createElement('div');
msg.classList.add('cookie-message');
msg.innerHTML =
  'we use cokies for your better experience. <button class="btn btn--close-cookie">got it!</button>';
// header.prepend(msg); //for insert at starting of element
header.append(msg); //for insert at end of element
//==>this is moved element not do coppy
// header.append(msg.cloneNode(true)); //coppying

//==>to insert sibling of any element
// header.before(msg);
// header.after(msg);

//Delete element
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function (e) {
    // msg.remove();
    msg.parentElement.removeChild(msg);
  });

//Styles...

msg.style.backgroundColor = '#37383d';
msg.style.width = '120%';
msg.style.borderRadius = '19%';
//to get antribute of style.css file ..
console.log(getComputedStyle(msg).color);
msg.style.height = Number.parseFloat(getComputedStyle(msg).height) + 33 + 'px';

//change root variable of Style...
// document.documentElement.style.setProperty('--color-primary', 'orangered');

//Antributes...
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src); //http://127.0.0.1:5500/AdvancedDOM-Bankist/img/logo.png
console.log(logo.className);
logo.alt = 'Beautiful minimalist logo';
console.log(logo.getAttribute('src')); //img/logo.png
//set new Attribute...
logo.setAttribute('company', 'banklist');
console.log(logo.getAttribute('company')); //bankist

//dataset attribute...==> to use set data on UI of web...

console.log(logo.dataset.versionNumber); //3.0

const scrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.getElementById('section--1');
scrollTo.addEventListener('click', function (e) {
  const s1Coord = section1.getBoundingClientRect();
  console.log(s1Coord);
  console.log(s1Coord.left); //specific element coordinate
  console.log(s1Coord.top);
  console.log(window.pageXOffset); //current coordinate
  console.log(window.pageYOffset);
  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
  console.log(e.clientX); //coordinate of pointer positions...

  console.log(e.clientY);

  // window.scrollTo({
  //     left: s1Coord.left + window.pageXOffset,
  //     top: s1Coord.top + window.pageYOffset,
  //     behavior: 'smooth',
  // })

  // another Modern way...

  section1.scrollIntoView({
    behavior: 'smooth',
  });
});

// Page navigation...

//==>this will make coppy of same function for diff. elements and it will slow down the site...
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

//==> To solve previous problem we use -> Event Delegation...
// 1. Add event listener to common parent element
// 2. Determine what element originated the event

const navLinks = document.querySelector('.nav__links');

navLinks.addEventListener('click', function (e) {
  e.preventDefault();
  console.log(e.target);
  const id = e.target.getAttribute('href');
  console.log(id);
  document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
});

//==> DOM Traversing...

// const h1 = document.querySelector('h1');

// Going downwards: child..

// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';

// Going upwards: parents..

// console.log(h1.parentNode);
// console.log(h1.parentElement);
// h1.closest('.header').style.background = 'var(--gradient-secondary)';
// h1.closest('h1').style.background = 'var(--gradient-primary)';

// Going sideways: siblings..

// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
// console.log(h1.previousSibling);
// console.log(h1.nextSibling);
// console.log(h1.parentElement.children);

// [...h1.parentElement.children].forEach(function (el) {
// if (el !== h1) el.style.transform = 'scale(0.5)';
// });

//Tabs...

const tabBtn = document.querySelectorAll('.operations__tab');
const tabCont = document.querySelectorAll('.operations__content');
const tabContainer = document.querySelector('.operations__tab-container');

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

//Menu fade animation...
const navItem = document.querySelectorAll('.nav__item');
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

//Passing arguments on event handles...

navLinks.addEventListener('mouseover', handHover.bind(0.6));
navLinks.addEventListener('mouseout', handHover.bind(1));

const hel = function (e) {
  console.log('xx'); // xx
  console.log(this); // Number { 84 } [[Prototype]]: Number[[PrimitiveValue]]:
  console.log(e); //84
};
document
  .querySelector('.nav__logo')
  .addEventListener('click', hel.bind(84, 45));

//sticky Navigation...

const nav = document.querySelector('.nav');

// const iniCoor = section1.getBoundingClientRect();

// window.addEventListener('scroll', function () {

//   if (window.scrollY > iniCoor.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

//==>OR..
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

//Revealing sections...
const allSection = document.querySelectorAll('.section');
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
const lazyImg = document.querySelectorAll('img[data-src]'); //this will select all img with setdata=src anttribute...
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
const slides = document.querySelectorAll('.slide');
const btnSlideLeft = document.querySelector('.slider__btn--left');
const btnSlideRight = document.querySelector('.slider__btn--right');
const dot = document.querySelector('.dots');

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
