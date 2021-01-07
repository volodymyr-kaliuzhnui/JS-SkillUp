let userYear = prompt ('Введите ваш год рождения.');


    if (isNaN(userYear) || userYear == '') {
        alert('Вы ввели не число!')
    } else {
        if(userYear % 4 == 0) {
            alert('Вы родились в высокосном году!')
        } else {
            alert('Вы родились не в высокосном году!')
        }
    }
