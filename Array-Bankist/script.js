'using strict';

const acc1 = {
  owner: 'het varasada',
  username: 'hett',
  pin: '0849',
  intrestRate: 0.84, //%
  movements: [1000, -1399, -45, 1400, -849, 1499, 2000, -1279],
};

const acc2 = {
  owner: 'vaibhav sanepra',
  pin: '2003',
  intrestRate: 0.9, //%
  movements: [-1040, 1199, -450, 240, -2049, 1699, 2200, -1090],
};

const acc3 = {
  owner: 'nishchit malasna',
  pin: '9648',
  intrestRate: 1.2, //%
  movements: [899, 1100, -450, -789, -849, 1150, 350, -1099],
};

const acc4 = {
  owner: 'krish chaniyara',
  pin: '1111',
  intrestRate: 1, //%
  movements: [-499, -1779, -450, 1299, 500, -999, -1500, 2500],
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
const containerMovements = document.querySelector('.movements');

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

const displayMovements = function (m) {
  containerMovements.innerHTML = '';
  m.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${Math.abs(mov)}$</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(acc4.movements);
