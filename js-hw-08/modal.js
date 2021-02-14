// Создай галерею с возможностью клика по ее элементам и просмотра полноразмерного изображения в модальном окне.
//     Разбей задание на несколько подзадач:
//     Создание и рендер разметки по массиву данных и предоставленному шаблону.
//     Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
//     Открытие модального окна по клику на элементе галереи.
//     Подмена значения атрибута src элемента img.lightbox__image.
//     Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].
//     Очистка значения атрибута src элемента img.lightbox__image.
//     Это необходимо для того, чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее.


import galleryItems from "./gallery-items.js";

let refs = {
    gallery : document.querySelector('.js-gallery'),
    lightbox : document.querySelector('.js-lightbox'),
    overlay: document.querySelector('.lightbox__overlay'),
    lightboxImg : document.querySelector('.lightbox__image'),
    closeBtn: document.querySelector('.lightbox__button')
}

let { gallery, lightbox, overlay, lightboxImg, closeBtn } = refs;

function addImages() {
    galleryItems.forEach(({preview, description, original}) => {
        let image = document.createElement('img');
        image.setAttribute('src', preview);
        image.setAttribute('alt', description);
        image.setAttribute('data-source', original);
        image.classList.add('gallery__image');
        gallery.append(image);


    })
}

addImages();

function openModal(event) {
    if (event.target.nodeName !== "IMG") {
        return
    }
    lightbox.classList.add('is-open');
    lightboxImg.setAttribute('src', event.target.getAttribute('data-source'));
    window.addEventListener('keydown', closeModal);
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
    window.addEventListener('keydown', nextPrev);

}

gallery.addEventListener('click', openModal);

function closeModal (event) {
    if (event.target.nodeName === 'BUTTON' || event.code === 'Escape' || event.target.nodeName === 'DIV') {
        lightbox.classList.remove("is-open");
        lightboxImg.src = "";
        window.removeEventListener('keydown', closeModal);
        window.removeEventListener('keydown', nextPrev);
    }
}




function nextPrev(event) {
    if (event.code === 'ArrowRight' || event.code === 'ArrowLeft') {
        let allImage = document.querySelectorAll('.gallery__image');
        let src = [];
        allImage.forEach((image, index) => {
            if (image.getAttribute('data-source') === lightboxImg.getAttribute('src')) {
                if (event.code === 'ArrowRight') {
                    src.push(allImage[index +1].getAttribute('data-source'));
                }
                if (event.code === 'ArrowLeft') {
                    src.push(allImage[index -1].getAttribute('data-source'));
                }
            }
        })
        lightboxImg.setAttribute('src', src.join(''))
    }
}



