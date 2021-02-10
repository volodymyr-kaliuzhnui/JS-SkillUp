// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.
//     При нажатии на кнопку Очистить, коллекция элементов очищается.
//     Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.
//     Каждый созданный div:
//     Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

let createBoxesBtn = document.querySelector('button[data-action=render]');
let removeBoxesBtn = document.querySelector('button[data-action=destroy]');
let boxesRef = document.querySelector('#boxes');

function createBoxes(amount) {
    amount = Number(document.querySelector('input').value);
    let height = 20;
    let width = 20;

    for (let i = 0; i < amount; i += 1) {
        let bgX = Math.floor(Math.random() * 256);
        let bgY = Math.floor(Math.random() * 256);
        let bgZ = Math.floor(Math.random() * 256);
        height +=10;
        width += 10;
        let newDiv = document.createElement('div');
        newDiv.style.height = `${height}px`;
        newDiv.style.width = `${width}px`;
        newDiv.style.backgroundColor = `rgb(${bgX},${bgY},${bgZ})`;
        boxesRef.appendChild(newDiv);
    }
}

function destroyBoxes() {
    boxesRef.innerHTML = '';
}


createBoxesBtn.addEventListener('click', createBoxes);
removeBoxesBtn.addEventListener('click', destroyBoxes);

