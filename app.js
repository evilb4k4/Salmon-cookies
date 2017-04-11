'use strict';

var storeHourArray = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','Total'];
var body = document.getElementsByTagName('body')[0];
var firstAndPike = {
  mincustomer: 23,
  maxcustomer: 65,
  avgCookieHour: 6.3,
  cookieTotal: [],
  name: '1st and Pike',
  getRandomCustomer: function() {
    return Math.floor(Math.random() * (this.maxcustomer - this.mincustomer + 1)) + this.mincustomer;
  },
  cookiePerHour: function(){
    return Math.ceil(this.getRandomCustomer() * this.avgCookieHour);
  },
  fillTotal: function(){
    var total = 0;
    this.cookieTotal.length = 15;
    for (var i = 0; i < 15; i++){
      var thisHour = this.cookiePerHour();
      total += thisHour;
      this.cookieTotal[i] = thisHour;
    }
    this.cookieTotal.push(total);
  },
  listItem: function(){
    this.fillTotal();
    var newHeading = document.createElement('h2');
    body.appendChild(newHeading);
    newHeading.innerText = this.name;
    var hourlySales = document.createElement('ul');
    for (var i = 0; i < storeHourArray.length; i++){
      var newEL = document.createElement('li');
      newEL.innerText = storeHourArray[i] + ': ' + this.cookieTotal[i] + 'cookies';
      hourlySales.appendChild(newEL);
    };
    body.appendChild(hourlySales);
  }
};
firstAndPike.listItem();

var seaTac = {
  mincustomer: 3,
  maxcustomer: 24,
  avgCookieHour: 1.2,
  cookieTotal: [],
  name: 'SeaTac',
  getRandomCustomer: function() {
    return Math.floor(Math.random() * (this.maxcustomer - this.mincustomer + 1)) + this.mincustomer;
  },
  cookiePerHour: function(){
    return Math.ceil(this.getRandomCustomer() * this.avgCookieHour);
  },
  fillTotal: function(){
    var total = 0;
    this.cookieTotal.length = 15;
    for (var i = 0; i < 15; i++){
      var thisHour = this.cookiePerHour();
      total += thisHour;
      this.cookieTotal[i] = thisHour;
    }
    this.cookieTotal.push(total);
  },
  listItem: function(){
    this.fillTotal();
    var newHeading = document.createElement('h2');
    body.appendChild(newHeading);
    newHeading.innerText = this.name;
    var hourlySales = document.createElement('ul');
    for (var i = 0; i < storeHourArray.length; i++){
      var newEL = document.createElement('li');
      newEL.innerText = storeHourArray[i] + ': ' + this.cookieTotal[i] + 'cookies';
      hourlySales.appendChild(newEL);
    };
    body.appendChild(hourlySales);
  }
};
seaTac.listItem();
var seattleCenter = {
  mincustomer: 11,
  maxcustomer: 38,
  avgCookieHour: 3.7,
  cookieTotal: [],
  name: 'Seattle Center',
  getRandomCustomer: function() {
    return Math.floor(Math.random() * (this.maxcustomer - this.mincustomer + 1)) + this.mincustomer;
  },
  cookiePerHour: function(){
    return Math.ceil(this.getRandomCustomer() * this.avgCookieHour);
  },
  fillTotal: function(){
    var total = 0;
    this.cookieTotal.length = 15;
    for (var i = 0; i < 15; i++){
      var thisHour = this.cookiePerHour();
      total += thisHour;
      this.cookieTotal[i] = thisHour;
    }
    this.cookieTotal.push(total);
  },
  listItem: function(){
    this.fillTotal();
    var newHeading = document.createElement('h2');
    body.appendChild(newHeading);
    newHeading.innerText = this.name;
    var hourlySales = document.createElement('ul');
    /*hourlySales.innerText = 'Sales per hours';*/
    for (var i = 0; i < storeHourArray.length; i++){
      var newEL = document.createElement('li');
      newEL.innerText = storeHourArray[i] + ': ' + this.cookieTotal[i] + 'cookies';
      hourlySales.appendChild(newEL);
    };
    body.appendChild(hourlySales);
  }
};
seattleCenter.listItem();
var capitolHill = {
  mincustomer: 20,
  maxcustomer: 38,
  avgCookieHour: 2.3,
  cookieTotal: [],
  name: 'Capitol Hill',
  getRandomCustomer: function() {
    return Math.floor(Math.random() * (this.maxcustomer - this.mincustomer + 1)) + this.mincustomer;
  },
  cookiePerHour: function(){
    return Math.ceil(this.getRandomCustomer() * this.avgCookieHour);
  },
  fillTotal: function(){
    var total = 0;
    this.cookieTotal.length = 15;
    for (var i = 0; i < 15; i++){
      var thisHour = this.cookiePerHour();
      total += thisHour;
      this.cookieTotal[i] = thisHour;
    }
    this.cookieTotal.push(total);
  },
  listItem: function(){
    this.fillTotal();
    var newHeading = document.createElement('h2');
    body.appendChild(newHeading);
    newHeading.innerText = this.name;
    var hourlySales = document.createElement('ul');
    /*hourlySales.innerText = 'Sales per hours';*/
    for (var i = 0; i < storeHourArray.length; i++){
      var newEL = document.createElement('li');
      newEL.innerText = storeHourArray[i] + ': ' + this.cookieTotal[i] + 'cookies';
      hourlySales.appendChild(newEL);
    };
    body.appendChild(hourlySales);
  }
};
capitolHill.listItem();
var alkiStore = {
  mincustomer: 2,
  maxcustomer: 16,
  avgCookieHour: 4.6,
  cookieTotal: [],
  name: 'Alki Store',
  getRandomCustomer: function() {
    return Math.floor(Math.random() * (this.maxcustomer - this.mincustomer + 1)) + this.mincustomer;
  },
  cookiePerHour: function(){
    return Math.ceil(this.getRandomCustomer() * this.avgCookieHour);
  },
  fillTotal: function(){
    var total = 0;
    this.cookieTotal.length = 15;
    for (var i = 0; i < 15; i++){
      var thisHour = this.cookiePerHour();
      total += thisHour;
      this.cookieTotal[i] = thisHour;
    }
    this.cookieTotal.push(total);
  },
  listItem: function(){
    this.fillTotal();
    var newHeading = document.createElement('h2');
    body.appendChild(newHeading);
    newHeading.innerText = this.name;
    var hourlySales = document.createElement('ul');
    for (var i = 0; i < storeHourArray.length; i++){
      var newEL = document.createElement('li');
      newEL.innerText = storeHourArray[i] + ': ' + this.cookieTotal[i] + 'cookies';
      hourlySales.appendChild(newEL);
    };
    body.appendChild(hourlySales);
  }
};
alkiStore.listItem();
