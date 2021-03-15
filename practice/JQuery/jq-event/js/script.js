$(document).ready(function () {
    // 2 способи навішати обробник подій

    // __________________________________________________________
    // 1 - через метод on після чого назва події та функція.

    // $('#btn_check').on('click', function (event) {
    //     console.log('JQuery is work!')
    // })
    // __________________________________________________________
    //2 - старий синтаксис через метод click
    // $('#btn_check').click(function (event) {
    //         console.log('JQuery is work!')
    // })
    // __________________________________________________________

    // зробим декілька кнопок, одна буде довавати текст на нашу сторінку, ще одна буде міняті його колір тексту, і ще одна буде міняти його фон
    $('#addText').on('click', function () {
        $('.container').append(`<p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Accusantium alias consequatur dignissimos dolor enim ex exercitationem illum iusto minus nobis quibusdam quidem quo reiciendis,
             repellendus sed tempore vel, vitae voluptatem.</p>`)
    })

    // тепер будем тоглити коліл
    $('#changeColor').on('click', function () {
        $('.text').toggleClass('color-text');
    })

    // зробим тоглик бекграунд
    $('#ChangeBg'). on ('click', function () {
        $('.text').toggleClass('bg-color');
    })

    // кнопка яка видалятиме наш перший текст
    $ ('#delFirstElem').on('click', function () {
        $('.text')[0].remove()
    })

    // також зробим кнопку яка буде видаляти наш останній текст
    $('#delLastElem').on('click', function () {
        let arrText = $('.text');
        arrText[arrText.length - 1].remove()
    })

})