RubikCubeSolver = function(fromStorage){
	try {
		('localStorage' in window && window['localStorage'] !== null)
		this.localeStorageCubeKey = "rubikscubesave";
		this.localeStorageSolutionKey = "rubikscubesolve";
	} catch (e) {
		alert('localStorage needed for application, upgrade your browser');
	}
	if (!fromStorage){
		this.cube = new RubikCube();
		this.cube.shuffle();
		localeStorage.setItem(this.localeStorageKey,this.cube);
	}else{
		this.cube = localStorage.getItem(this.localeStorageCubeKey);
	}
	this.base_score = this.cube.fitnessMeasure();
	this.lastgen_score = 0.0;
	this.generation = 0;
	this.lastgen_moves = [];
}
RubikCubeSolver.prototype.applyMoves = function(){
	for (i=1; i<=this.lastgenmoves.len; i++){
		this.lastgenmoves[0]();
	}
}

RubikCubeSolver.prototype.initGenetic = function(){
	for (i=1; i<20; i++){
		move = Math.floor((Math.random()*12)+1);
		if (move === 1){
			this.lastgen_moves.append[this.rotateOrange];
		}else if (move === 2){
			this.lastgen_moves.append[this.rotateOrangeInverse];
		}else if (move === 3){
			this.lastgen_moves.append[this.rotateBlue];
		}else if (move === 4){
			this.lastgen_moves.append[this.rotateBlueInverse];
		}else if (move == 5){
			this.lastgen_moves.append[this.rotateGreen];
		}else if (move === 6){
			this.lastgen_moves.append[this.rotateGreenInverse];
		}else if (move === 7){
			this.lastgen_moves.append[this.rotateWhite];
		}else if (move === 8){
			this.lastgen_moves.append[this.rotateWhiteInverse];
		}else if (move === 9){
			this.lastgen_moves.append[this.rotateYellow];
		}else if (move === 10){
			this.lastgen_moves.append[this.rotateYellowInverse];
		}else if (move === 11){
			this.lastgen_moves.append[this.rotateRed];
		}else if (move === 12){
			this.lastgen_moves.append[this.rotateRedInverse];
		}
	}
	this.applyMoves();
	this.lastgen_score = this.cube.fitnessMeasure();
	this.generation += 1;
}