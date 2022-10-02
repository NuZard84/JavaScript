'using strict';

const acc1 = {
  owner: 'Het varasada 8',
  pin: '0849',
  intrestRate: 0.84, //%
  movements: [1000, -1399, -45, 1400, -849, 1499, 2000, -1279],
};

const acc2 = {
  owner: 'Nishchit malasna 9',
  pin: '9648',
  intrestRate: 1.2, //%
  movements: [899, 1100, -450, -789, -849, 1150, 350, -1099],
};

const acc3 = {
  owner: 'Vaibhav sanepra 2',
  pin: '2003',
  intrestRate: 0.9, //%
  movements: [-1040, 1199, -200, 240, -2049, 1699, 2200, -1090],
};

const acc4 = {
  owner: 'Krish chaniyara 3',
  pin: '1111',
  intrestRate: 1, //%
  movements: [-499, 1779, -450, 1299, 500, -999, 1500, 2500],
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
const btnTransfer = document.querySelector('.form__btn--transfer');
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
let isSorted = false;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  let enterAcc = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  wlcm.textContent = `Welcome Back, ${enterAcc.owner.split(' ')[0]}`;
  if (inputLoginPin.value === enterAcc.pin) {
    containerApp.style.opacity = '100%';
    inputLoginPin.placeholder = 'PIN';
    inputLoginPin.value = inputLoginUsername.value = '';
    inputLoginPin.blur();
    inputLoginUsername.blur();
  } else {
    inputLoginPin.placeholder = 'WrongPIN';
    alert('Your PIN is wrong, Please try again');
    inputLoginPin.value = '';
    inputLoginPin.blur();
  }

  btnTransfer.addEventListener('click', function (e) {
    e.preventDefault();
    transferToAcc(enterAcc);
  });

  displayMovements(enterAcc.movements);
  displaySummary(enterAcc.movements, enterAcc.intrestRate);
  displayTotalBalance(enterAcc);

  btnSort.addEventListener('click', function () {
    console.log('sorted');
    sorting(enterAcc);
  });
});

const transferToAcc = function (eAcc) {
  let toAcc = accounts.find(acc => acc.username === inputTransferTo.value);

  let amount = Number(inputTransferAmount.value);
  toAcc.movements.push(amount);
  eAcc.movements.push(Math.abs(amount) * -1);
  console.log(eAcc.movements);
  console.log(toAcc.movements);

  inputTransferAmount.blur();
  displayMovements(eAcc.movements);
  displaySummary(eAcc.movements, eAcc.intrestRate);
  displayTotalBalance(eAcc);

  btnSort.addEventListener('click', function () {
    console.log('sorted');
    sorting(eAcc);
  });
};

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

    containerMovements.insertAdjacentHTML('beforeend', html);
  });
};

const creatUserName = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('');
  });
};
creatUserName(accounts);

const displayTotalBalance = function (eAcc) {
  const sumTransaction = function () {
    const total = eAcc.movements.reduce(function (acc, cur) {
      return acc + cur;
    }, 0);
    return total;
  };

  labelValue.innerHTML = sumTransaction() + ' $';
};

const displaySummary = function (mov, rate) {
  const income = mov
    .filter(movs => movs > 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumIn.textContent = `${income}$`;

  const expence = mov
    .filter(movs => movs < 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumOut.textContent = `${Math.abs(expence)}$`;

  const intrest = mov
    .map((p, index, arr, i, r = rate, n = 1) => {
      i = (Math.abs(p) * r * n) / 100;
      // console.log(Math.abs(p), r, n, i, arr);
      return i;
    })
    .reduce((acc, cur, i, arr) => {
      const x = Number(acc + cur);
      return x;
    }, 0);
  labelSumIntrest.textContent = `${intrest.toFixed(2)}$`;
};

const sorting = function (acc) {
  let tempArray = [];
  acc.movements.forEach(function (cur) {
    tempArray.push(cur);
  });
  if (!isSorted) {
    acc.movements.sort((x, y) => y - x);
    console.log(acc.movements);
    displayMovements(acc.movements);
    isSorted = true;
  } else {
    console.log(tempArray);
    displayMovements(tempArray);
    isSorted = false;
  }
};

