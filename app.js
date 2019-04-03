const thumbs = document.querySelector('.thumbs');
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.btnPrev');
const next = document.querySelector('.btnNext');

for (let i = 1; i <= slides.length; i++) {
    let img = document.createElement('IMG');
    img.setAttribute('src', `images/img${i}.jpg`);
    thumbs.appendChild(img);
}
thumbs.children[0].classList.add('thumb-active');

next.addEventListener('click', () => {
    const currentImg = document.querySelector('.active');
    const currentThumb = document.querySelector('.thumb-active');
    currentImg.classList.remove('active');
    currentThumb.classList = '';
    if(currentImg.nextElementSibling) {
        currentImg.nextElementSibling.classList.add('active');
        currentThumb.nextElementSibling.classList.add('thumb-active');
    } else {
        slides[0].classList.add('active');
        thumbs.children[0].classList.add('thumb-active');
    }
})

prev.addEventListener('click', () => {
    const currentImg = document.querySelector('.active');
    const currentThumb = document.querySelector('.thumb-active');
    currentImg.classList.remove('active');
    currentThumb.classList = '';
    if(currentImg.previousElementSibling) {
        currentImg.previousElementSibling.classList.add('active');
        currentThumb.previousElementSibling.classList.add('thumb-active');
    } else {
        slides[slides.length - 1].classList.add('active');
        thumbs.children[slides.length -1].classList.add('thumb-active');
    }
})

thumbs.addEventListener('click', (e) => {
    const thumbsArr = Array.from(thumbs.children);
    let currentIndex = thumbsArr.indexOf(e.target);
    const currentImg = document.querySelector('.active');
    const currentThumb = document.querySelector('.thumb-active');
    currentImg.classList.remove('active');
    currentThumb.classList = '';
    slides[currentIndex].classList.add('active');
    thumbs.children[currentIndex].classList.add('thumb-active');
})