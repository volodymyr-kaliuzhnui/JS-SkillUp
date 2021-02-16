// Создай галерею с возможностью клика по ее элементам и просмотра полноразмерного изображения в модальном окне.
//     Разбей задание на несколько подзадач:
//     Создание и рендер разметки по массиву данных и предоставленному шаблону.
//     Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
//     Открытие модального окна по клику на элементе галереи.
//     Подмена значения атрибута src элемента img.lightbox__image.
//     Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].
//     Очистка значения атрибута src элемента img.lightbox__image.
//     Это необходимо для того, чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее.


// import galleryItems from "./gallery-items.js";

// let refs = {
//     gallery : document.querySelector('.js-gallery'),
//     lightbox : document.querySelector('.js-lightbox'),
//     overlay: document.querySelector('.lightbox__overlay'),
//     lightboxImg : document.querySelector('.lightbox__image'),
//     closeBtn: document.querySelector('.lightbox__button')
// }

// let { gallery, lightbox, overlay, lightboxImg, closeBtn } = refs;
//
// function addImages() {
//     galleryItems.forEach(({preview, description, original}) => {
//         let liItem = document.createElement('li')
//         let image = document.createElement('img');
//         image.setAttribute('src', preview);
//         image.setAttribute('alt', description);
//         image.setAttribute('data-source', original);
//         image.classList.add('gallery__image');
//         gallery.appendChild(liItem);
//         liItem.appendChild(image);
//
//
//     })
// }
//
// addImages();
//
// function openModal(event) {
//     if (event.target.nodeName !== "IMG") {
//         return
//     }
//     lightbox.classList.add('is-open');
//     lightboxImg.setAttribute('src', event.target.getAttribute('data-source'));
//     window.addEventListener('keydown', closeModal);
//     closeBtn.addEventListener('click', closeModal);
//     overlay.addEventListener('click', closeModal);
//     window.addEventListener('keydown', nextPrev);
//
// }
//
// gallery.addEventListener('click', openModal);
//
// function closeModal (event) {
//     if (event.target.nodeName === 'BUTTON' || event.code === 'Escape' || event.target.nodeName === 'DIV') {
//         lightbox.classList.remove("is-open");
//         lightboxImg.src = "";
//         window.removeEventListener('keydown', closeModal);
//         window.removeEventListener('keydown', nextPrev);
//     }
// }
//
//
//
//
// function nextPrev(event) {
//     if (event.code === 'ArrowRight' || event.code === 'ArrowLeft') {
//         let allImage = document.querySelectorAll('.gallery__image');
//         let src = [];
//         allImage.forEach((image, index) => {
//             if (image.getAttribute('data-source') === lightboxImg.getAttribute('src')) {
//                 if (event.code === 'ArrowRight') {
//                     src.push(allImage[index +1].getAttribute('data-source'));
//                 }
//                 if (event.code === 'ArrowLeft') {
//                     src.push(allImage[index -1].getAttribute('data-source'));
//                 }
//             }
//         })
//         lightboxImg.setAttribute('src', src.join(''))
//     }
// }

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

import galleryItems from "./gallery-items.js";


let refs = {
    gallery: document.querySelector('.js-gallery'),
    lightbox: document.querySelector('.js-lightbox'),
    overlay: document.querySelector('.lightbox__overlay'),
    lightboxImg: document.querySelector('.lightbox__image'),
    closeBtn: document.querySelector('.lightbox__button')
}

class Gallery {
    constructor(refs) {
        this.gallery = refs.gallery;
        this.lightbox = refs.lightbox;
        this.overlay = refs.overlay;
        this.lightboxImg = refs.lightboxImg;
        this.closeBtn = refs.closeBtn;
    }

    originImg = [];
    index = 0;

    readyGallery () {
        this.gallery.addEventListener('click', this.openModal.bind(this));
        this.closeBtn.addEventListener('click', this.closeModal.bind(this));
        galleryItems.forEach((img) => {
            let li = `
              <li class="gallery__item">
                <a
                  class="gallery__link"
                  href="${img.original}"
                >
                  <img
                    class="gallery__image"
                    src="${img.preview}"
                    data-source="${img.original}"
                    alt="${img.description}"
                  />
                </a>
              </li>
              `;
            this.originImg.push(img.original);
            this.gallery.insertAdjacentHTML("beforeend", li);
        });
    }



    openModal (event) {
        event.preventDefault();
        if (event.target.nodeName !== "IMG") return;
        this.index = this.originImg.indexOf(event.target.dataset.source);
        // console.log(this.index)
        this.updateImg(this.index);
        this.lightbox.classList.add("is-open");
        window.addEventListener('keydown', this.keyAction.bind(this));
    }

    updateImg (index) {
        this.lightboxImg.src = this.originImg[index];
    }

    closeModal () {
        this.lightbox.classList.remove("is-open");
        this.lightboxImg.src = "";
        window.removeEventListener('keydown', this.keyAction.bind(this));
    }


    keyAction (event) {
        if (event.code === 'Escape') {
            this.closeModal();
        }
        if (event.code === 'ArrowRight') {
            this.index += 1;
            console.log(event.code)
            this.index === this.originImg.length ? (this.index = 0) : this.index;
        }
        if (event.code === 'ArrowLeft') {
            console.log(event.code)
            this.index -= 1;
            this.index < 0 ? (this.index = this.originImg.length -1) : this.index;
        }
        this.updateImg(this.index);
    }

}

let gallery = new Gallery(refs);
gallery.readyGallery();

