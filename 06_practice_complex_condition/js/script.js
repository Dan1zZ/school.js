console.log('You are at '+window.location);

const rock = 0;
const scissors = 1;
const paper = 2;

let player = prompt('Your choice: 0 - rock, 1 - scissors, 2 - paper');
let computer = Math.floor(Math.random()*2);

console.log(player);
console.log(computer);

 if(((player=rock)&&(computer=scissors))||((player=scissors)&&(computer=paper))||((player=paper)&&(computer=rock))) {
	console.log('you wins');
} else if(((player=rock)&&(computer=paper))||((player=scissors)&&(computer=rock))||((player=paper)&&(computer=scissors))) {
	console.log('you lose');
} else if(player=computer) {
	console.log('draw')
}