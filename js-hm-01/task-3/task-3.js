"use strict"

const ADMIN_PASSWORD = 'adminpass';

let message;

let authentication = prompt('Введіть Ваш пароль');

console.log(authentication);

if (!authentication) {
    message = 'Відмінено користувачем';
} else if (authentication === ADMIN_PASSWORD) {
    message = 'Вітаю Адміністратор!'
} else {
    message = 'Доступ заборонено! Неправильний пароль!'
}

alert(message);