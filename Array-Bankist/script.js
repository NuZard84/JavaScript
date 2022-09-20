'using strict';

const acc1 = {
  owner: 'het varasada',
  username: 'hett',
  pin: 0849,
  intrestRate: 0.84, //%
  movements: [],
};

const acc2 = {
  owner: 'vaibhav sanepra',
  pin: 2003,
  intrestRate: 0.9, //%
  movements: [],
};

const acc3 = {
  owner: 'nishchit malasna',
  pin: 9648,
  intrestRate: 1.2, //%
  movements: [],
};

const acc4 = {
  owner: 'krish chaniyara',
  pin: 1111,
  intrestRate: 1, //%
  movements: [],
};

const accounts = [acc1, acc2, acc3, acc4];

//DOM..
const wlcm = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelValue = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumIntrest = document.querySelector('.summary__value--interest');
const lableTimer = document.querySelector('.timer');
const containerApp = document.querySelector('.app');
const containerMovement = document.querySelector('.movement');

//buttons..
const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--tranfer');
const btnForLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

//input..
const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//logics..

btnLogin.addEventListener('click', function () {
  inputLoginPin === acc1.pin ? console.log('loged in' : console.log('wrong pass'););
});
