let firstNum = prompt('Введіть перше число');
let mathSing = prompt ('Введіть + або - або / або *');
let secondNum = prompt('Введіть друге число');

if (isNaN(firstNum) || isNaN(secondNum) || firstNum == '' || secondNum == '') {
    alert('Введено некоректні дані');
} else {
    switch (mathSing) {
        case '+':
            let sum = Number(firstNum) + Number(secondNum);
            alert(`${firstNum} + ${secondNum} = ${sum}`);
            break;
        case '-':
            let minus = Number(firstNum) - Number(secondNum);
            alert(`${firstNum} - ${secondNum} = ${minus}`);
            break;
        case '/':
            let division = Number(firstNum) / Number(secondNum);
            alert(`${firstNum} / ${secondNum} = ${division}`);
            break;
        case '*':
            let multiplication = Number(firstNum) * Number(secondNum);
            alert(`${firstNum} * ${secondNum} = ${multiplication}`);
            break;
        default:
            alert(`Введені неправильні дані`)
    }
}