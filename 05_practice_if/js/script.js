console.log('You are at '+window.location);

let answer = prompt("0 или больше 0?");
answer = parseInt(answer);

if(answer=0) {
	document.body.innerHTML = '0';
}else if(answer>0) {
	console.log(answer);
}