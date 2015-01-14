var start = window.confirm("Welcome! Do you want to start play")

while (start === true) {
	var x = Math.floor(Math.random()*2+1)
	var y = Math.floor(Math.random()*2+1)
	var z = Math.floor(Math.random()*2+1)
	console.log(x,y,z);
	if ((x === y) && (x === z)) {
		console.log("YOU WON!!!!! YEEEEEESSSSSSSSS!!!!!!!!!");
	}
	else if (x===1 && y===2 && z===3) {
		console.log("YOU WON 123!!!!! YEEEEEESSSSSSSSS!!!!!!!!!");
	}
	else if (x===3 && y===2 && z===1){
		console.log("YOU WON 321!!!!! YEEEEEESSSSSSSSS!!!!!!!!!");
	}
	else {
		var options = 'Ba da bom, bom, bom. Another one bites the dust.'
		console.log(options);
		
	}

	start = window.confirm('Do you want to play again?')
}

