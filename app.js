'use strict';

var storeHourArray = ['','6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','Total'];
var app = document.getElementById('app');
console.log(app);

// var firstAndPike = {
//   mincustomer: 23,
//   maxcustomer: 65,
//   avgCookieHour: 6.3,
//   cookieTotal: [],
//   name: '1st and Pike',
//   getRandomCustomer: function() {
//     return Math.floor(Math.random() * (this.maxcustomer - this.mincustomer + 1)) + this.mincustomer;
//   },
//   cookiePerHour: function(){
//     return Math.ceil(this.getRandomCustomer() * this.avgCookieHour);
//   },
//   fillTotal: function(){
//     var total = 0;
//     this.cookieTotal.length = 15;
//     for (var i = 0; i < 15; i++){
//       var thisHour = this.cookiePerHour();
//       total += thisHour;
//       this.cookieTotal[i] = thisHour;
//     }
//     this.cookieTotal.push(total);
//   },
//   listItem: function(){
//     this.fillTotal();
//     var newHeading = document.createElement('h2');
//     body.appendChild(newHeading);
//     newHeading.innerText = this.name;
//     var hourlySales = document.createElement('ul');
//     for (var i = 0; i < storeHourArray.length; i++){
//       var newEL = document.createElement('li');
//       newEL.innerText = storeHourArray[i] + ': ' + this.cookieTotal[i] + ' cookies';
//       hourlySales.appendChild(newEL);
//     };
//     body.appendChild(hourlySales);
//   }
// };
// firstAndPike.listItem();

// starting my constructor function
function CookieStore(name, maxCustomer, minCustomer, avgCookiePerHour) {
  this.name = name;
  this.maxCustomer = maxCustomer;
  this.minCustomer = minCustomer;
  this.avgCookiePerHour = avgCookiePerHour;
  this.cookieTotal = [];
  console.log('constructor works', CookieStore);
}
CookieStore.prototype.getRandomCustomer = function(){
  return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
};
CookieStore.prototype.cookiePerHour = function(){
  return Math.ceil(this.getRandomCustomer() * this.avgCookiePerHour);
};
CookieStore.prototype.fillTotal = function(){
  var total = 0;
  this.cookieTotal.length = 15;
  for (var i = 0; i < 15; i++){
    var thisHour = this.cookiePerHour();
    total += thisHour;
    this.cookieTotal[i] = thisHour;
  }
  this.cookieTotal.push(total);
};
CookieStore.prototype.listItem = function(){
  this.fillTotal();
  var table = document.getElementsByTagName('table')[0];
  var tableRow = document.createElement('tr');
  var tableBody = document.getElementsByTagName('tbody')[0];
  var newTH = document.createElement('th');
  newTH.innerText = this.name;
  tableRow.appendChild(newTH);
  for (var i = 0; i < this.cookieTotal.length; i++){
    var hourlyTD = document.createElement('td');
    hourlyTD.innerText = this.cookieTotal[i];
    tableRow.appendChild(hourlyTD);
  };
  tableBody.appendChild(tableRow);
  table.appendChild(tableBody);
};

function createTable(){
  var table = document.createElement('table');
  app.appendChild(table);
  var tablehead = document.createElement('thead');
  table.appendChild(tablehead);
  var tableRow = document.createElement('tr');
  tablehead.appendChild(tableRow);
  var tableBody = document.createElement('tbody');
  table.appendChild(tableBody);
  for (var i = 0; i < storeHourArray.length; i++){
    var th = document.createElement('th');
    tableRow.appendChild(th);
    th.innerText = storeHourArray[i];
  }
}
createTable();




var pikeStore = new CookieStore('1st and Pike', 65, 23, 6.3);
pikeStore.listItem();
var seaTacStore = new CookieStore('SeaTac',24,3,1.2);
seaTacStore.listItem();
var seattleCenterStore = new CookieStore('Seattle Center',38,11,3.7);
seattleCenterStore.listItem();
var capitolHillStore = new CookieStore('Capitol Hill',38,20,2.3);
capitolHillStore.listItem();
var alkiStore = new CookieStore('Alki',16,2,4.6);
alkiStore.listItem();
