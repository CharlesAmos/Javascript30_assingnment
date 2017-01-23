begin = 1;
y = null;
complete = 0;
var audio = new Audio("timersound.mp3");
function timer(x=null) {
	if (y == null){
		y = x;
	}
	if (y >= 0){
		document.getElementById("t").innerHTML = y;
		y = y -1;
		console.log(y);
		if (y == 0){setTimeout(playIt, 1000);}
	}
}

function freeTime(z){
	var dye = z.split(":");
	var zHour = dye[0];
	var zMin = dye[1];

	console.log(dye);
	var now = new Date();
	var hour = now.getHours();
	var min = now.getMinutes();

	var finalHour = zHour - hour;
	var finalMin = zMin - min;
	var finalsec = (finalHour * 60 * 60) + (finalMin * 60);
	complete = finalsec;
}

function realClock() {
	var x = complete;
	//var realmin = Math.floor(x/60);
	var realhour = Math.floor(x/3600);
	document.getElementById('h').innerHTML = realhour;
	console.log(realhour);
	var rawhour = x % 3600;
	console.log(rawhour);
	var realmin = Math.floor(rawhour/60);
	document.getElementById('m').innerHTML = realmin;
	var seconds = x % 60;
	document.getElementById('s').innerHTML = seconds;
	console.log(seconds);
	complete = complete - 1;
	if(complete == 0 ){audio.play();}
	console.log(realmin);

}

function repeatClock() {
	setInterval(realClock, 1000);
}

function myFunction(x) {
	if(begin == 1){
	myVar = setInterval(timer, 1000, x);
	begin = 0;
	}
}

function playIt(){
	audio.play();
	console.log(audio.play());
}

function resetTimer(){
	location.reload();
}

function stopSound() {
	audio.pause();
}
