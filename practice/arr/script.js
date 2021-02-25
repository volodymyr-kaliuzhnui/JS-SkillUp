// 1. написати функцію randomNumber(number) яка наповнює масив випадковими
// числами від -100 до 100, де number - довжина масиву
// 1a. через filter вивести масив з числами, які більші 10
// 2. Відсортувати строку lorem по зростанню(по довжині)
// - Перетворити строку на масив
// - відсорткувати масив
// - з'єднати назад в строку
// 4. використовуючи lodash, повернути масив з унікальних елементів масиву [1, 2, 1, 4, 1,
//     3]

let numbers = [];

function randomNumber(number) {
    let max = 100;
    let min = -100;
    for (let i = 0; i < number; i++) {
        numbers.push(Math.floor(Math.random() * (max - min +1) + min));
    }
}

randomNumber(5);
console.log(numbers)

let biggerThan10 = numbers.filter(number => number > 10);
console.log(biggerThan10);

let loremText = document.querySelector('.text').innerHTML;


function sortText (text) {
    return  text.split(/[\s,]+/).sort((a,b) => {
        return a.length - b.length;
    }).join(' ');
}

console.log(sortText(loremText))

let numArr = [1, 2, 1, 4, 1, 3];

function numResult(arr) {
    let result = [];
    arr.forEach(num => {
        if (!result.includes(num)) {
            result.push(num);
        }
    })
    return result;
}

console.log(numResult(numArr));
