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

let enterAcc;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  enterAcc = accounts.find(acc => acc.username === inputLoginUsername.value);
  console.log(enterAcc);
  if (enterAcc) {
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
    updateUI(enterAcc);
  } else alert('Please cheack your UserName!');
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const toAcc = accounts.find(acc => inputTransferTo.value === acc.username);

  inputTransferAmount.value = inputTransferTo.value = '';
  if (amount > 0 && toAcc && toAcc?.username !== enterAcc.username) {
    if (amount < enterAcc.balance - 199) {
      enterAcc.movements.push(-amount);
      toAcc.movements.push(amount);

      updateUI(enterAcc);
    } else {
      alert('you must keep at least 200$ in your bank account !');
    }
  } else {
    alert("please check your input 'Transfer To' UserName !");
  }
});

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}$</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
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

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelValue.textContent = `${acc.balance}$`;
};

const displaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}$`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}$`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.intrestRate) / 100)
    .filter((int, i, arr) => {
      //
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumIntrest.textContent = `${interest.toFixed(2)}$`;
};

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (inputCloseUsername.value === enterAcc.username) {
    if (inputClosePin.value === enterAcc.pin) {
      inputClosePin.placeholder = 'PIN';
      const index = accounts.findIndex(
        acc => inputCloseUsername.value === acc.username
      );

      accounts.splice(index, 1);

      containerApp.style.opacity = '0';
      wlcm.textContent = 'Log in to get started';
    } else {
      inputClosePin.placeholder = 'WrongPIN';
      alert('Your PIN is wrong, Please try again');
      inputClosePin.value = '';
      inputClosePin.blur();
    }
  } else {
    alert('please enter Right UserName !');
  }

  inputClosePin.value = inputCloseUsername.value = '';
});
let isSorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();

  displayMovements(enterAcc.movements, !isSorted);
  isSorted = !isSorted;
});

btnForLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  console.log(amount);
  if (amount > 0 && enterAcc.movements.some(mov => mov > amount * 1.3)) {
    enterAcc.movements.push(amount);

    updateUI(enterAcc);
  } else {
    alert(
      'To claim the loan you need credited at least 13% of your desired amount'
    );
  }
  inputLoanAmount.value = '';
});
const updateUI = function (enterAcc) {
  calcDisplayBalance(enterAcc);

  displaySummary(enterAcc);

  displayMovements(enterAcc.movements);
};
