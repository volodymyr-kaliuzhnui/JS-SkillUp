// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.
// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
//     Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let counterValue = 0;

function result() {
    document.querySelector('#value').innerText = counterValue;
}

function increment() {
    counterValue += 1;
    result()
}

function decrement() {
    counterValue -= 1;
    result()
}

document.querySelector('button[data-action=increment]').addEventListener('click', increment)
document.querySelector('button[data-action=decrement]').addEventListener('click', decrement);