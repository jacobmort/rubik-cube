RubikCubeSolver = function(fromStorage){
	if(typeof(window.localStorage) != 'undefined'){ 
		window['localStorage'].localeStorageCubeKey = "rubikscubesave";
	} 
	else{ 
		alert('localStorage needed for application, upgrade your browser');
	}
	
	if (!fromStorage){
		this.cube = new RubikCube();
		this.cube.shuffle();
		window['localStorage'].setItem(window['localStorage'].localeStorageKey,this.cube);
	}else{
		this.cube = window['localStorage'].getItem(window['localStorage'].localeStorageCubeKey);
		
	}
	this.base_score = this.cube.fitnessMeasure(); 	//initial score for the cube
	this.generation = 0;							//which round of generation we are on
	
	this.lastgen_score = 0.0;						//last generation cube score
	this.lastgen_scores = [];						//scores for each of the moves of last generation
	this.score_history = [];						//scores for the best found score in last rounds- is this increasing?						
	this.score_history.push(this.base_score);		//store for generation=0
	
	this.lastgen_moves = [];						//the computed moves of last round
	this.next_moves = [];							//moves to try next generation
	this.total_gen_moves = [];						
	
	
	this.cube_history = [];
	this.cube_history.push(this.cube);
	/*
		how it works:
		generation 0:
		generate X number of moves to lastgen_moves
		apply X number of lastgen_moves and calculate scores stored in lastgen_scores
		loop through lastgen_moves to find find best from lastgen_scores
	
		generation 1:
		grab X moves from last round up to the best score
		generate 20-X new moves
	*/
}
RubikCubeSolver.prototype.applyMoves = function(){
	for (var i=0; i<this.lastgen_moves.length; i++){
		//console.log(this.lastgen_moves[i]);
		var move = this.lastgen_moves[i];
		if (move === 1){
			this.cube.rotateOrange();
		}else if (move === 2){
			this.cube.rotateOrangeInverse();
		}else if (move === 3){
			this.cube.rotateBlue();
		}else if (move === 4){
			this.cube.rotateBlueInverse();
		}else if (move == 5){
			this.cube.rotateGreen();
		}else if (move === 6){
			this.cube.rotateGreenInverse();
		}else if (move === 7){
			this.cube.rotateWhite();
		}else if (move === 8){
			this.cube.rotateWhiteInverse();
		}else if (move === 9){
			this.cube.rotateYellow();
		}else if (move === 10){
			this.cube.rotateYellowInverse();
		}else if (move === 11){
			this.cube.rotateRed();
		}else if (move === 12){
			this.cube.rotateRedInverse();
		}
		this.lastgen_scores[i] = this.cube.fitnessMeasure();
		console.log(this.lastgen_scores[i]);
	}
}

RubikCubeSolver.prototype.genMoves = function(num_moves){
	for (var i=0; i<num_moves; i++){
		move = Math.floor((Math.random()*12)+1);
		this.lastgen_moves.push(move);
		/*
		if (move === 1){
			this.lastgen_moves.push(that.cube.rotateOrange);
		}else if (move === 2){
			this.lastgen_moves.push(that.cube.rotateOrangeInverse);
		}else if (move === 3){
			this.lastgen_moves.push(that.cube.rotateBlue);
		}else if (move === 4){
			this.lastgen_moves.push(this.cube.rotateBlueInverse);
		}else if (move == 5){
			this.lastgen_moves.push(this.cube.rotateGreen);
		}else if (move === 6){
			this.lastgen_moves.push(this.cube.rotateGreenInverse);
		}else if (move === 7){
			this.lastgen_moves.push(this.cube.rotateWhite);
		}else if (move === 8){
			this.lastgen_moves.push(this.cube.rotateWhiteInverse);
		}else if (move === 9){
			this.lastgen_moves.push(this.cube.rotateYellow);
		}else if (move === 10){
			this.lastgen_moves.push(this.cube.rotateYellowInverse);
		}else if (move === 11){
			this.lastgen_moves.push(this.cube.rotateRed);
		}else if (move === 12){
			this.lastgen_moves.push(this.cube.rotateRedInverse);
		}*/
	}
	
	this.lastgen_score = this.cube.fitnessMeasure();
	console.log('from start:'+this.cube.fitnessMeasure());
	this.generation += 1;
}

RubikCubeSolver.prototype.calcRoundWinners = function(){
	var best_score = 0.0;
	var best_score_loc = 0;
	console.log("start calcRoundWinners");
	for (var i=0; i<20; i++){
		if (this.lastgen_scores[i] > best_score){
			best_score = this.lastgen_scores[i];
			best_score_loc = i;
		}
	}
	console.log('high score:'+best_score+' located at:'+best_score_loc);
	for (var i=0; i<=best_score_loc; i++){
		this.next_moves.push(this.lastgen_moves[i]);
	}
	
	console.log(this.next_moves.length);
	if (best_score === 0.0){
		alert('no winners this round');
	}
}

RubikCubeSolver.prototype.nextRound = function(){
	this.lastgen_moves = [];
	this.genMoves(20-this.next_moves.length);
	this.total_gen_moves[this.generations] = [this.next_moves,this.lastgen_moves];
}