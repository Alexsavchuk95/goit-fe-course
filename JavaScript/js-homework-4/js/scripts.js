"use strict"


/* Есть база данных товаров, в формате "имя-товара":"цена за одну единицу" */
const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  chicken: 50,
  cheese: 40
};


/* Заказ пользователя */
const order = {
  bread: 2,
  milk: 2,
  apples: 1,
  cheese: 1
};


// Кассир Mango
const mango = new Cashier("Mango", products);

// Функция конструктор Cashier
function Cashier(name, productDatabase) {
  this.name = name;
  this.productDatabase = productDatabase;
  this.customerMoney = 0;
  this.setCustomerMoney = function(value) {
    this.customerMoney = value;
  };
  this.countTotalPrice = function(order) {
    const keys = Object.keys(order);
    let totalPrice = 0;
    for (let key of keys) {
      totalPrice += order[key] * productDatabase[key];
    }
    return totalPrice;
  };
  this.countChange = function(totalPrice) {
    return this.customerMoney >= totalPrice
      ? this.customerMoney - totalPrice
      : null;
  };
  this.onSuccess = function(change) {
    console.log(`Спасибо за покупку, ваша сдача ${change}!`);
  };
  this.onError = function() {
    console.log("Очень жаль, вам не хватает денег на покупки");
  };
  this.reset = function() {
    this.customerMoney = 0;
  };
}

// Проверяем исходные значения полей
console.log(mango.name); // Mango
console.log(mango.productDatabase); // ссылка на базу данных продуктов (объект products)
console.log(mango.customerMoney); // 0
