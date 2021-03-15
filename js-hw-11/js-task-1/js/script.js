const colors = [
    'red',
    'green',
    'violet',
    'gray',
    'blue',
    'yellow',
];

const refs = {
    start: document.querySelector('[data-action="start"]'),
    stop: document.querySelector('[data-action="stop"]'),
    body: document.querySelector('body')
}

let {start, stop, body} = refs;

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

stop.setAttribute('disabled', 'disabled')

let startId;

function startChange() {
    startId = setInterval(function () {
        console.log(body.style.backgroundColor = colors[randomIntegerFromInterval(1, 5)])
    }, 1000)
    start.setAttribute('disabled', 'disabled')
    stop.removeAttribute('disabled')
}


function stopChange() {
    clearInterval(startId)
    start.removeAttribute('disabled');
    stop.setAttribute('disabled', 'disabled')
}


start.addEventListener('click', startChange)
stop.addEventListener('click', stopChange)