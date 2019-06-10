console.log('You are at '+window.location);

const byTag = document.getElementsByTagName('div');
const byClass = document.getElementsByClassName('myClass');
const byId = document.getElementById('myID');

console.log(byTag, byClass, byId);

const allBySelector = document.querySelectorAll('.coolClass.mine');
const firstBySelector = document.querySelectorAll('div');
console.log(allBySelector, firstBySelector);

const quest = prompt('Что хотите написать на странице?');

byId.innerHTML = quest;
firstBySelector.innerHTML = "Hello"