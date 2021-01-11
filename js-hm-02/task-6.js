let input;
const numbers = [];
let total = 0;

while (true) {
    input = prompt('Введіть число');
    if (input == '' || isNaN(input)) {
        alert('Введено не коректні дані');
    } else {
        numbers.push(Number(input)); 
    }
    if (input == null) break;
}

for (let number of numbers) {
    total += number
}

console.log(`Сума введених вами чисел дорівнює ${total}`);

// console.log(numbers);
// console.log(total);