'use strict';

var storeHourArray = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','Total'];
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
  console.log('body works', app);
  var newHeading = document.createElement('h2');
  app.appendChild(newHeading);
  newHeading.innerText = this.name;
  var hourlySales = document.createElement('ul');
  for (var i = 0; i < storeHourArray.length; i++){
    var newEL = document.createElement('li');
    newEL.innerText = storeHourArray[i] + ': ' + this.cookieTotal[i] + ' cookies';
    hourlySales.appendChild(newEL);
  };
  app.appendChild(hourlySales);
};
var pikeStore = new CookieStore('1st and Pike', 65, 23, 6.3);
pikeStore.listItem();
