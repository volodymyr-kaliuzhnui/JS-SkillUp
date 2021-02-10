// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

let inputName = document.querySelector('#name-input');
let outputName = document.querySelector('#name-output');
console.log(inputName);
console.log(outputName)

function setName () {
    outputName.textContent = inputName.value;
    if (inputName.value === '') {
        outputName.textContent = 'незнакомец';
    }
}

inputName.addEventListener('input', setName)