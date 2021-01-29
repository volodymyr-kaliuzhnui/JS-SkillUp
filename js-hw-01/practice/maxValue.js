let userValueOne = prompt('Введіть перше число');
let userValueTwo = prompt('Введіть друге число');
let userValueThree = prompt('Введіть третє число');
let maxValue;



if ((userValueOne == '' || isNaN(userValueOne)) || (userValueTwo == '' || isNaN(userValueTwo))
    || (userValueThree =='' || isNaN(userValueThree))) {
    alert('Введено не коректні дані');
}  else {
    maxValue = Math.max(userValueOne, userValueTwo, userValueThree);
    alert(`Ви ввели три числа: перше - ${userValueOne}, друге - ${userValueTwo}, третє - ${userValueThree}.
           Найбільше число з введених вами це ${maxValue}`)
}