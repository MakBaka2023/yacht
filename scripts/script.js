let darkThemeButton = document.querySelector('.theme-button-dark');
let lightThemeButton = document.querySelector('.theme-button-light');
let sefirFontButton = document.querySelector('.font-button-sans-serif');
let sansSerifFontButton = document.querySelector('.font-button-serif');
let blogArticles = document.querySelectorAll('.blog-article.short');
let cardViewButtonGrid = document.querySelector('.card-view-button-grid');
let cardViewButtonList = document.querySelector('.card-view-button-list');
let cards = document.querySelector('.cards');

darkThemeButton.onclick = function () {
    document.body.classList.add('dark');
    darkThemeButton.classList.add ('active');
    lightThemeButton.classList.remove('active');
};
lightThemeButton.onclick = function () {
    document.body.classList.remove('dark');
    darkThemeButton.classList.remove ('active');
    lightThemeButton.classList.add('active');
};
sansSerifFontButton.onclick = function () {
    document.body.classList.add('serif');
    sefirFontButton.classList.remove('active');
    sansSerifFontButton.classList.add('active');
};
sefirFontButton.onclick = function () {
    document.body.classList.remove('serif');
    sefirFontButton.classList.add('active');
    sansSerifFontButton.classList.remove('active');

};
for(let blogArticle of blogArticles) {
    let moreButton = blogArticle.querySelector('.more');
    moreButton.onclick = function () {
    blogArticle.classList.remove('short');
}
};
cardViewButtonList.onclick = function () {
    cards.classList.add('list');
    cardViewButtonGrid.classList.remove('active');
    cardViewButtonList.classList.add('active');
};
cardViewButtonGrid.onclick = function () {
    cards.classList.remove('list');
    cardViewButtonGrid.classList.add('active');
    cardViewButtonList.classList.remove('active');
};

let activePhoto = document.querySelector('.active-photo');
let previews = document.querySelectorAll('.preview-list a');

for(let preview of previews) {
    preview.onclick = function (evt) {
    evt.preventDefault();
    activePhoto.src = preview.href ;
    let activeItem = document.querySelector('.preview-list .active-item');
    activeItem.classList.remove('active-item');
    preview.classList.add('active-item');
    }
};