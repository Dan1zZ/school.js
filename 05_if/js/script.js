console.log('You are at '+window.location);

const Image = document.querySelector('.imageBlock');
let answer = prompt("Возраст");
answer = parseInt(answer);

if(answer<18) {
	Image.style.backgroundImage = "url(img/school.png)";
}else if(answer<=25) {
	Image.style.backgroundImage = "url(img/logo1.jpg)";
}else if(answer<=50) {
	Image.style.backgroundImage = "url(img/logo2.jpg)";
}else {
	Image.style.backgroundImage = "url(img/work.jpg)";
}