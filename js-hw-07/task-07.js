// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input)
// и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

let inputSize = document.querySelector('#font-size-control');
let text = document.querySelector('#text');

function setSize() {
    let sizeNum = Number(inputSize.value);
    text.style.fontSize = `${sizeNum}px`
}

inputSize.addEventListener('input', setSize);