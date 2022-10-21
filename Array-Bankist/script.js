'using strict';

const acc1 = {
  owner: 'Het varasada 8',
  pin: '0849',
  intrestRate: 0.84, //%
  movements: [1000, -1399, -45, 1400, -849, 1499, 2000, -1279],
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-07-26T17:01:17.194Z',
    '2020-07-28T23:36:17.929Z',
    '2020-08-01T10:51:36.790Z',
  ],
  currency: 'INR',
  locale: 'gu-IN',
};

const acc2 = {
  owner: 'Nishchit malasna 9',
  pin: '9648',
  intrestRate: 1.2, //%
  movements: [899, 1100, -450, -789, -849, 1150, 350, -1099],
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'INR',
  locale: 'hi-IN',
};

const acc3 = {
  owner: 'Vaibhav sanepra 2',
  pin: '2003',
  intrestRate: 0.9, //%
  movements: [-1040, 1199, -200, 240, -2049, 1699, 2200, -1090],
  movementsDates: [
    '2019-01-25T21:31:17.178Z',
    '2019-08-13T07:42:02.383Z',
    '2020-11-07T09:15:04.904Z',
    '2020-12-22T10:17:24.185Z',
    '2020-09-03T14:11:59.604Z',
    '2020-04-12T17:01:17.194Z',
    '2020-02-09T23:36:17.929Z',
    '2020-10-31T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const acc4 = {
  owner: 'Krish chaniyara 3',
  pin: '1111',
  intrestRate: 1, //%
  movements: [-499, 1779, -450, 1299, 500, -999, 1500, 2500],
  movementsDates: [
    '2019-05-31T13:15:33.035Z',
    '2019-10-18T09:48:16.867Z',
    '2019-09-21T06:04:23.907Z',
    '2020-12-25T14:18:46.235Z',
    '2020-08-09T16:33:06.386Z',
    '2022-10-12T14:43:26.374Z',
    '2022-10-16T18:49:59.371Z',
    '2022-10-17T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
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

let enterAcc,timing = false,timer;

//Functions...

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


const updateUI = function (enterAcc) {
  calcDisplayBalance(enterAcc);

  displaySummary(enterAcc);

  displayMovements(enterAcc.movements);
};

const formateDate = function (date, locale) {
  const calcDateDiff = (date1, date2) =>
    Math.round(Math.abs((date1 - date2) / (1000 * 60 * 60 * 24)));

  const dayPassed = calcDateDiff(new Date(), date);

  if (dayPassed === 0) return 'Today';
  if (dayPassed === 1) return 'Yesterday';
  if (dayPassed <= 7) return `${dayPassed} Days ago`;

  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth()}`.padStart(2, 0);
  // const year = date.getFullYear();

  return new Intl.DateTimeFormat(locale).format(date);
};
const logoutTime = function () {
  let sec = 60;
  let min = 4;

  function tick() {
    if (sec === 0 && min === 0) {
      wlcm.textContent = 'Log in to get started';
      containerApp.style.opacity = '0';
      console.log('logout');
      clearInterval(time);
      timing = false;
      alert('you have been Logout due to TimeOut !');
    }
    else {
      sec = sec - 1;
      if (sec === 0 && min !== 0) {
        min = min - 1;
        sec = 60;
      }
      lableTimer.textContent =
        `${min}`.padStart(2, 0) + ':' + `${sec}`.padStart(2, 0);
      timing = true;
    }
  }
  tick();
  timer = setInterval(tick, 1000);
};

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const MovDate = new Date(enterAcc.movementsDates[i]);

    const displayMovDate = formateDate(MovDate, enterAcc.locale);
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__date">${displayMovDate}</div>
        <div class="movements__value">${mov}$</div>
        
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
const resetTimer = function () {
  clearInterval(timer);
  logoutTime();
}
//Buttons' Functionallity...

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  enterAcc = accounts.find(acc => acc.username === inputLoginUsername.value);
  console.log(enterAcc);
  if (enterAcc) {
    if (!timing) {
      logoutTime();
    }
    else {
      resetTimer();
    }
    
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    };

    labelDate.textContent = new Intl.DateTimeFormat(
      enterAcc.locale,
      options
    ).format(now);
    // const LoginDT = new Date();
    // const lblDate = formateDate(LoginDT);
    // const hour = `${LoginDT.getHours()}`.padStart(2, 0);
    // const minutes = `${LoginDT.getMinutes()}`.padStart(2, 0);
    // const seconds = `${LoginDT.getSeconds()}`.padStart(2, 0);
    // let ampm = 'PM';
    // ampm = hour > 11 ? 'PM' : 'AM';
    // console.log(labelDate,hour,minutes,seconds,ampm);
    // labelDate.textContent = `${lblDate} ${
    //   hour > 11 ? hour - 12 : hour
    // }:${minutes}:${seconds} ${ampm}`;
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
  resetTimer();
  const amount = Number(inputTransferAmount.value);
  const toAcc = accounts.find(acc => inputTransferTo.value === acc.username);

  inputTransferAmount.value = inputTransferTo.value = '';
  if (amount > 0 && toAcc && toAcc?.username !== enterAcc.username) {
    if (amount < enterAcc.balance - 199) {
      enterAcc.movements.push(-amount);
      toAcc.movements.push(amount);

      enterAcc.movementsDates.push(new Date().toISOString());
      toAcc.movementsDates.push(new Date().toISOString());

      updateUI(enterAcc);
    } else {
      alert('you must keep at least 200$ in your bank account !');
    }
  } else {
    alert("please check your input 'Transfer To' UserName !");
  }
});

let isSorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();

  displayMovements(enterAcc.movements, !isSorted);
  isSorted = !isSorted;
});


btnForLoan.addEventListener('click', function (e) {
  e.preventDefault();
  resetTimer();
  const amount = Number(inputLoanAmount.value);
  console.log(amount);
  if (amount > 0 && enterAcc.movements.some(mov => mov > amount * 1.3)) {
    enterAcc.movements.push(amount);
    enterAcc.movementsDates.push(new Date().toISOString());

    updateUI(enterAcc);
  } else {
    alert(
      'To claim the loan you need credited at least 13% of your desired amount'
    );
  }
  inputLoanAmount.value = '';
});

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

