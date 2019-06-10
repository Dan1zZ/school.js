console.log('You are at '+window.location);

const rock = 0;
const scissors = 1;
const paper = 2;

let player = parseInt(prompt('Your choice: 0 - rock, 1 - scissors, 2 - paper'));
let computer = Math.floor(Math.random() * 3);

if(player>computer) {
	console.log('player win')
} else (player<computer) {
	console.log('computer win')
} else {
	console.log('i dont undestand u, dude')
}