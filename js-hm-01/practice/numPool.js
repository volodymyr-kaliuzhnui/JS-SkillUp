let userNum = prompt('Введіть число в діапазоні від 55 до 100 включно.')

if (userNum == '' || isNaN(userNum)) {
    alert('Введено не вірні дані')
} else {
    if (userNum >= 55 && userNum <=100) {
        alert(`Число ${userNum} входить у діапазон чисел від 55 до 100 включно.`);
    } else {
        alert(`Число ${userNum} не входить у діапазон чисел від 55 до 100 включно`);
    }
}