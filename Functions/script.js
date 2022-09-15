'use strict';

//defualt parameters...

const bookings = [];

const airport = function (name = 'air india', passenger = 199, cost = 1500) {
  const booking = {
    name,
    passenger,
    cost,
    };
    
    bookings.push(booking);
    console.log(booking);
};
airport('patel air line', 200, 2000);
airport(250, 1700); //we just cant skip any parameter..
airport('air india', 150, undefined); //cost will be undefind so it just put defualt value...

