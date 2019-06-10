console.log('You are at '+window.location);

const Image = document.querySelector('.imageBlock');
let answer = prompt("Возраст");
answer = parseInt(answer);

(answer >= 18) ? Image.style.backgroundImage = "url(img/school.png)" : Image.style.backgroundImage = "url(img/logo1.jpg)";