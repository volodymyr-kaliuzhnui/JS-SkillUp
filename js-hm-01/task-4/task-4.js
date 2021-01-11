"use strict"

let credits = 35500;

const pricePerDroid  = 3000;

let numDroid = prompt('Сколько дроидов Вы хотите купить?');

let totalPrice;
let balance;

if (!numDroid) {
    console.log ('Отменено пользователем!')
} else {
    totalPrice = pricePerDroid * numDroid;
    if (totalPrice > credits) {
        console.log('Недостаточно средств на счету!')
    } else {
        balance = credits - totalPrice;
        alert('Вы купили ' + numDroid + ' дроидов, на счету осталось ' + balance + ' кредитов');
    }
}