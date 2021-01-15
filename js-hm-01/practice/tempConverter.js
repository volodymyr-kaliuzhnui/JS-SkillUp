// celsiusConverter

let tempCel = prompt('Введіть число температури градусів Celsius');
let tempFahr;

if (tempCel === '' || isNaN(tempCel)) {
    alert('Введені дані не коректні!')
} else {
    tempFahr = (Number(tempCel)*1.8) + 32;
    alert(`${tempCel}℃ = ${tempFahr}℉`);
}



// fahrenheitConverter

// let temFahr = prompt('Введіть число температури градусів Fahrenheit');
// let tempCel;

// if (temFahr == '' || isNaN(temFahr)) {
//     alert('Введені дані не коректні!')
// } else {
//     tempCel = (Number(temFahr) - 32) / 1.8;
//     alert(`${temFahr}℉ = ${tempCel}℃`);
// }

