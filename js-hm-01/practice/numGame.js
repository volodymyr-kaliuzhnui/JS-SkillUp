let randomNum = Math.floor(Math.random() * 10) + 1;
console.log(randomNum);

let userNum = prompt('Відгадайте яке число загадав компютер від 1 до 10');


if (userNum == randomNum) {
    alert(`Вітаю, ви виграли, число яке загадав компютер ${randomNum}`);
} else {
    alert(`Ви програли, компютер загадав ${randomNum}`);
}