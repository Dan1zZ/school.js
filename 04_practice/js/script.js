console.log('You are at '+window.location);

const Color = document.querySelector('.page');
const TextColorHeader = document.querySelector('.header');
const TextColorP = document.querySelector('.shortBio');
const Name = document.querySelector('.name');
const Image = document.querySelector('img');
const PageText = document.querySelector('.shortBio');
const Animation = document.querySelector('.shortBio');

let quest1 = prompt('Какой будет фон у страницы?');
Color.style['background-color'] = quest1;

let quest2 = prompt('Какой будет цвет текста на странице?');
TextColorHeader.style['color'] = quest2;
TextColorP.style['color'] = quest2;

let quest3 = prompt('Как зовут человека, который вас вдохновляет?')
Name.innerHTML = quest3;

let quest4 = prompt('Введите адрес картинки');
Image.setAttribute('src', quest4);

let quest5 = prompt('Введите текст страницы');
PageText.innerHTML = quest5;

Animation.className += ' animated';