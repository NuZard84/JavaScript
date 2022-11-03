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

const links = document.querySelector('.nav__links');

links.addEventListener('click', function (e) {
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
  const contentNum = tabPBtn.dataset.tab
  console.log(tabPBtn);
  
  if (!tabPBtn) return;
  if (tabPBtn) {

    tabBtn.forEach(b => b.classList.remove('operations__tab--active'));
    tabCont.forEach(c => c.classList.remove('operations__content--active'));

    tabPBtn.classList.add('operations__tab--active');
    console.log(e.target);
    document.querySelector(`.operations__content--${contentNum}`).classList.add('operations__content--active');

  }

});
