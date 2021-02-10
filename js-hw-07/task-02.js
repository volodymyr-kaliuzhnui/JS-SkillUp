// Задание 2
// В HTML есть пустой список ul#ingredients.
// <ul id="ingredients"></ul>
// В JS есть массив строк.
//     const ingredients = [
//     'Картошка',
//     'Грибы',
//     'Чеснок',
//     'Помидоры',
//     'Зелень',
//     'Приправы',
// ];
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

let ingredientsList = document.querySelector('#ingredients');

let addContent = function () {
    for (let i = 0; i < ingredients.length; i += 1) {
        let liItem = document.createElement('li');
        liItem.innerText = ingredients[i];
        ingredientsList.appendChild(liItem);
    }
}


addContent();

console.log(ingredientsList)

