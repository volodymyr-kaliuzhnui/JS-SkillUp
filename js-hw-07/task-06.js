// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
//     Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
//     Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
//     Для добавления стилей, используй CSS-классы valid и invalid.

let inputRef = document.querySelector('input');

function inputValidation() {
    let inputLength = inputRef.value.length;
    let validLength = Number(inputRef.getAttribute('data-length'));
    if (inputLength <= validLength) {
        inputRef.className = 'valid';
    }

    if (inputLength > validLength) {
        inputRef.className = 'invalid';
    }

}

inputRef.addEventListener('change', inputValidation)