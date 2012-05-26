RubikCube = function(){
	this.orange_face = [
		['o','o','o'],
		['o','o','o'],
		['o','o','o']
    ];
	this.blue_face = [
		['b','b','b'],
		['b','b','b'],
		['b','b','b']
    ];
	this.green_face = [
		['g','g','g'],
		['g','g','g'],
		['g','g','g']
    ];
	this.white_face = [
		['w','w','w'],
		['w','w','w'],
		['w','w','w']
    ];
	this.yellow_face = [
		['y','y','y'],
		['y','y','y'],
		['y','y','y']
    ];
	this.red_face = [
		['r','r','r'],
		['r','r','r'],
		['r','r','r']
    ];
	this.total_fitness_points = 48;
	this.rotate_map = {
		'o' : this.rotateOrange,
		'oi' : this.rotateOrangeInverse,
		'b' : this.rotateBlue,
		'bi' : this.rotateBlueInverse,
		'g' : this.rotateGreen,
		'gi' : this.rotateGreenInverse,
		'y' : this.rotateYellow,
		'yi' : this.rotateYellowInverse,
		'r' : this.rotateRed,
		'ri' : this.rotateRedInverse
	}
};

RubikCube.prototype.rotateOrange = function(inverse){
	if (!inverse){
		var old_orange = Array();
		var old_blue = Array();
		var old_green = Array();
		var old_yellow = Array();
		var old_white = Array();
		old_orange[0] = this.orange_face[0].slice();
		old_orange[1] = this.orange_face[1].slice();
		old_orange[2] = this.orange_face[2].slice();
		
		old_blue[0] = this.blue_face[0].slice();
		old_blue[1] = this.blue_face[1].slice();
		old_blue[2] = this.blue_face[2].slice();
		
		old_green[0] = this.green_face[0].slice();
		old_green[1] = this.green_face[1].slice();
		old_green[2] = this.green_face[2].slice();
		
		old_yellow[0] = this.yellow_face[0].slice();
		old_yellow[1] = this.yellow_face[1].slice();
		old_yellow[2] = this.yellow_face[2].slice();
		
		old_white[0] = this.white_face[0].slice();
		old_white[1] = this.white_face[1].slice();
		old_white[2] = this.white_face[2].slice();

		this.orange_face[0][0] =old_orange[2][0];
		this.orange_face[0][1] =old_orange[1][0];
		this.orange_face[0][2] =old_orange[0][0];
		
		this.orange_face[1][0] =old_orange[2][1];
		/* unchanged this.orange_face[1][1] */
		this.orange_face[1][2] =old_orange[0][1];
		
		this.orange_face[2][0] =old_orange[2][2];
		this.orange_face[2][1] =old_orange[1][2];
		this.orange_face[2][2] =old_orange[0][2];
		
		this.blue_face[2][0] = old_yellow[2][2];
		this.blue_face[2][1] = old_yellow[1][2];
		this.blue_face[2][2] = old_yellow[0][2];

		this.green_face[0][0] = old_white[2][0];
		this.green_face[0][1] = old_white[1][0];
		this.green_face[0][2] = old_white[0][0];

		this.yellow_face[0][2] = old_green[0][0];
		this.yellow_face[1][2] = old_green[0][1];
		this.yellow_face[2][2] = old_green[0][2];
		
		this.white_face[0][0] = old_blue[2][0];
		this.white_face[1][0] = old_blue[2][1];
		this.white_face[2][0] = old_blue[2][2];
		
	}else{
		var old_orange = Array();
		var old_blue = Array();
		var old_green = Array();
		var old_yellow = Array();
		var old_white = Array();
		old_orange[0] = this.orange_face[0].slice();
		old_orange[1] = this.orange_face[1].slice();
		old_orange[2] = this.orange_face[2].slice();
		
		old_blue[0] = this.blue_face[0].slice();
		old_blue[1] = this.blue_face[1].slice();
		old_blue[2] = this.blue_face[2].slice();
		
		old_green[0] = this.green_face[0].slice();
		old_green[1] = this.green_face[1].slice();
		old_green[2] = this.green_face[2].slice();
		
		old_yellow[0] = this.yellow_face[0].slice();
		old_yellow[1] = this.yellow_face[1].slice();
		old_yellow[2] = this.yellow_face[2].slice();
		
		old_white[0] = this.white_face[0].slice();
		old_white[1] = this.white_face[1].slice();
		old_white[2] = this.white_face[2].slice();

		this.orange_face[0][0] =old_orange[0][2];
		this.orange_face[0][1] =old_orange[1][2];
		this.orange_face[0][2] =old_orange[2][2];
		
		this.orange_face[1][0] =old_orange[0][1];
		/* unchanged this.orange_face[1][1] */
		this.orange_face[1][2] =old_orange[2][1];
		
		this.orange_face[2][0] =old_orange[0][0];
		this.orange_face[2][1] =old_orange[1][0];
		this.orange_face[2][2] =old_orange[2][0];
		
		this.blue_face[2][0] = old_white[0][0];
		this.blue_face[2][1] = old_white[1][0];
		this.blue_face[2][2] = old_white[2][0];

		this.green_face[0][0] = old_yellow[0][2];
		this.green_face[0][1] = old_yellow[1][2];
		this.green_face[0][2] = old_yellow[2][2];

		this.yellow_face[0][2] = old_blue[2][2];
		this.yellow_face[1][2] = old_blue[2][1];
		this.yellow_face[2][2] = old_blue[2][0];
		
		this.white_face[0][0] = old_green[0][2];
		this.white_face[1][0] = old_green[0][1];
		this.white_face[2][0] = old_green[0][0];
	}
}
RubikCube.prototype.rotateOrangeInverse = function(){
	this.rotateOrange(true);
}

RubikCube.prototype.rotateBlue = function(inverse){
	if (!inverse){
		var old_orange = Array();
		var old_blue = Array();
		var old_opposite = Array();
		var old_yellow = Array();
		var old_white = Array();
		old_orange[0] = this.orange_face[0].slice();
		old_orange[1] = this.orange_face[1].slice();
		old_orange[2] = this.orange_face[2].slice();
		
		old_blue[0] = this.blue_face[0].slice();
		old_blue[1] = this.blue_face[1].slice();
		old_blue[2] = this.blue_face[2].slice();
		
		old_opposite[0] = this.red_face[0].slice();
		old_opposite[1] = this.red_face[1].slice();
		old_opposite[2] = this.red_face[2].slice();
		
		old_yellow[0] = this.yellow_face[0].slice();
		old_yellow[1] = this.yellow_face[1].slice();
		old_yellow[2] = this.yellow_face[2].slice();
		
		old_white[0] = this.white_face[0].slice();
		old_white[1] = this.white_face[1].slice();
		old_white[2] = this.white_face[2].slice();

		this.blue_face[0][0] =old_blue[2][0];
		this.blue_face[0][1] =old_blue[1][0];
		this.blue_face[0][2] =old_blue[0][0];
		
		this.blue_face[1][0] =old_blue[2][1];
		/* unchanged this.blue_face[1][1] */
		this.blue_face[1][2] =old_blue[0][1];
		
		this.blue_face[2][0] =old_blue[2][2];
		this.blue_face[2][1] =old_blue[1][2];
		this.blue_face[2][2] =old_blue[0][2];
		
		this.yellow_face[0][0] = old_orange[0][0];
		this.yellow_face[0][1] = old_orange[0][1];
		this.yellow_face[0][2] = old_orange[0][2];
			
		this.white_face[0][0] = old_opposite[0][0];
		this.white_face[0][1] = old_opposite[0][1];
		this.white_face[0][2] = old_opposite[0][2];
		
		this.red_face[0][0] = old_yellow[0][0];
		this.red_face[0][1] = old_yellow[0][1];
		this.red_face[0][2] = old_yellow[0][2];

		this.orange_face[0][0] = old_white[0][0];
		this.orange_face[0][1] = old_white[0][1];
		this.orange_face[0][2] = old_white[0][2];
		
	}else{
		var old_orange = Array();
		var old_blue = Array();
		var old_opposite = Array();
		var old_yellow = Array();
		var old_white = Array();
		old_orange[0] = this.orange_face[0].slice();
		old_orange[1] = this.orange_face[1].slice();
		old_orange[2] = this.orange_face[2].slice();
		
		old_blue[0] = this.blue_face[0].slice();
		old_blue[1] = this.blue_face[1].slice();
		old_blue[2] = this.blue_face[2].slice();
		
		old_opposite[0] = this.red_face[0].slice();
		old_opposite[1] = this.red_face[1].slice();
		old_opposite[2] = this.red_face[2].slice();
		
		old_yellow[0] = this.yellow_face[0].slice();
		old_yellow[1] = this.yellow_face[1].slice();
		old_yellow[2] = this.yellow_face[2].slice();
		
		old_white[0] = this.white_face[0].slice();
		old_white[1] = this.white_face[1].slice();
		old_white[2] = this.white_face[2].slice();

		this.blue_face[0][0] =old_blue[0][2];
		this.blue_face[0][1] =old_blue[1][2];
		this.blue_face[0][2] =old_blue[2][2];
		
		this.blue_face[1][0] =old_blue[0][1];
		/* unchanged this.blue_face[1][1] */
		this.blue_face[1][2] =old_blue[2][1];
		
		this.blue_face[2][0] =old_blue[0][0];
		this.blue_face[2][1] =old_blue[1][0];
		this.blue_face[2][2] =old_blue[2][0];
		
		this.yellow_face[0][0] = old_opposite[0][0];
		this.yellow_face[0][1] = old_opposite[0][1];
		this.yellow_face[0][2] = old_opposite[0][2];
			
		this.white_face[0][0] = old_orange[0][0];
		this.white_face[0][1] = old_orange[0][1];
		this.white_face[0][2] = old_orange[0][2];
		
		this.red_face[0][0] = old_white[0][0];
		this.red_face[0][1] = old_white[0][1];
		this.red_face[0][2] = old_white[0][2];

		this.orange_face[0][0] = old_yellow[0][0];
		this.orange_face[0][1] = old_yellow[0][1];
		this.orange_face[0][2] = old_yellow[0][2];
	}
}
RubikCube.prototype.rotateBlueInverse = function(){
	this.rotateBlue(true);
}

RubikCube.prototype.rotateGreen = function(inverse){
	if (!inverse){
		var old_orange = Array();
		var old_green = Array();
		var old_opposite = Array();
		var old_yellow = Array();
		var old_white = Array();
		old_orange[0] = this.orange_face[0].slice();
		old_orange[1] = this.orange_face[1].slice();
		old_orange[2] = this.orange_face[2].slice();
		
		old_green[0] = this.green_face[0].slice();
		old_green[1] = this.green_face[1].slice();
		old_green[2] = this.green_face[2].slice();
		
		old_opposite[0] = this.red_face[0].slice();
		old_opposite[1] = this.red_face[1].slice();
		old_opposite[2] = this.red_face[2].slice();
		
		old_yellow[0] = this.yellow_face[0].slice();
		old_yellow[1] = this.yellow_face[1].slice();
		old_yellow[2] = this.yellow_face[2].slice();
		
		old_white[0] = this.white_face[0].slice();
		old_white[1] = this.white_face[1].slice();
		old_white[2] = this.white_face[2].slice();

		this.green_face[0][0] =old_green[2][0];
		this.green_face[0][1] =old_green[1][0];
		this.green_face[0][2] =old_green[0][0];
		
		this.green_face[1][0] =old_green[2][1];
		/* unchanged this.green_face[1][1] */
		this.green_face[1][2] =old_green[0][1];
		
		this.green_face[2][0] =old_green[2][2];
		this.green_face[2][1] =old_green[1][2];
		this.green_face[2][2] =old_green[0][2];
		
		this.yellow_face[2][0] = old_opposite[2][0];
		this.yellow_face[2][1] = old_opposite[2][1];
		this.yellow_face[2][2] = old_opposite[2][2];
			
		this.white_face[2][0] = old_orange[2][0];
		this.white_face[2][1] = old_orange[2][1];
		this.white_face[2][2] = old_orange[2][2];
		
		this.red_face[2][0] = old_white[2][0];
		this.red_face[2][1] = old_white[2][1];
		this.red_face[2][2] = old_white[2][2];

		this.orange_face[2][0] = old_yellow[2][0];
		this.orange_face[2][1] = old_yellow[2][1];
		this.orange_face[2][2] = old_yellow[2][2];
		
	}else{
		var old_orange = Array();
		var old_green = Array();
		var old_opposite = Array();
		var old_yellow = Array();
		var old_white = Array();
		old_orange[0] = this.orange_face[0].slice();
		old_orange[1] = this.orange_face[1].slice();
		old_orange[2] = this.orange_face[2].slice();
		
		old_green[0] = this.green_face[0].slice();
		old_green[1] = this.green_face[1].slice();
		old_green[2] = this.green_face[2].slice();
		
		old_opposite[0] = this.red_face[0].slice();
		old_opposite[1] = this.red_face[1].slice();
		old_opposite[2] = this.red_face[2].slice();
		
		old_yellow[0] = this.yellow_face[0].slice();
		old_yellow[1] = this.yellow_face[1].slice();
		old_yellow[2] = this.yellow_face[2].slice();
		
		old_white[0] = this.white_face[0].slice();
		old_white[1] = this.white_face[1].slice();
		old_white[2] = this.white_face[2].slice();

		this.green_face[0][0] =old_green[0][2];
		this.green_face[0][1] =old_green[1][2];
		this.green_face[0][2] =old_green[2][2];
		
		this.green_face[1][0] =old_green[0][1];
		/* unchanged this.green_face[1][1] */
		this.green_face[1][2] =old_green[2][1];
		
		this.green_face[2][0] =old_green[0][0];
		this.green_face[2][1] =old_green[1][0];
		this.green_face[2][2] =old_green[2][0];
		
		this.yellow_face[2][0] = old_orange[2][0];
		this.yellow_face[2][1] = old_orange[2][1];
		this.yellow_face[2][2] = old_orange[2][2];
			
		this.white_face[2][0] = old_opposite[2][0];
		this.white_face[2][1] = old_opposite[2][1];
		this.white_face[2][2] = old_opposite[2][2];
		
		this.red_face[2][0] = old_yellow[2][0];
		this.red_face[2][1] = old_yellow[2][1];
		this.red_face[2][2] = old_yellow[2][2];

		this.orange_face[2][0] = old_white[2][0];
		this.orange_face[2][1] = old_white[2][1];
		this.orange_face[2][2] = old_white[2][2];
	}
}
RubikCube.prototype.rotateGreenInverse = function(){
	this.rotateGreen(true);
}
RubikCube.prototype.rotateYellow = function(inverse){
	if (!inverse){
		var old_orange = Array();
		var old_green = Array();
		var old_opposite = Array();
		var old_yellow = Array();
		var old_blue = Array();
		old_orange[0] = this.orange_face[0].slice();
		old_orange[1] = this.orange_face[1].slice();
		old_orange[2] = this.orange_face[2].slice();
		
		old_green[0] = this.green_face[0].slice();
		old_green[1] = this.green_face[1].slice();
		old_green[2] = this.green_face[2].slice();
		
		old_opposite[0] = this.red_face[0].slice();
		old_opposite[1] = this.red_face[1].slice();
		old_opposite[2] = this.red_face[2].slice();
		
		old_yellow[0] = this.yellow_face[0].slice();
		old_yellow[1] = this.yellow_face[1].slice();
		old_yellow[2] = this.yellow_face[2].slice();
		
		old_blue[0] = this.blue_face[0].slice();
		old_blue[1] = this.blue_face[1].slice();
		old_blue[2] = this.blue_face[2].slice();

		this.yellow_face[0][0] =old_yellow[2][0];
		this.yellow_face[0][1] =old_yellow[1][0];
		this.yellow_face[0][2] =old_yellow[0][0];
		
		this.yellow_face[1][0] =old_yellow[2][1];
		/* unchanged this.yellow_face[1][1] */
		this.yellow_face[1][2] =old_yellow[0][1];
		
		this.yellow_face[2][0] =old_yellow[2][2];
		this.yellow_face[2][1] =old_yellow[1][2];
		this.yellow_face[2][2] =old_yellow[0][2];
		
		this.green_face[0][0] = old_orange[0][0];
		this.green_face[1][0] = old_orange[1][0];
		this.green_face[2][0] = old_orange[2][0];
			
		this.blue_face[0][0] = old_opposite[2][2];
		this.blue_face[1][0] = old_opposite[1][2];
		this.blue_face[2][0] = old_opposite[0][2];
		
		this.red_face[0][2] = old_green[2][0];
		this.red_face[1][2] = old_green[1][0];
		this.red_face[2][2] = old_green[0][0];

		this.orange_face[0][0] = old_blue[0][0];
		this.orange_face[1][0] = old_blue[1][0];
		this.orange_face[2][0] = old_blue[2][0];
		
	}else{
		var old_orange = Array();
		var old_green = Array();
		var old_opposite = Array();
		var old_yellow = Array();
		var old_blue = Array();
		old_orange[0] = this.orange_face[0].slice();
		old_orange[1] = this.orange_face[1].slice();
		old_orange[2] = this.orange_face[2].slice();
		
		old_green[0] = this.green_face[0].slice();
		old_green[1] = this.green_face[1].slice();
		old_green[2] = this.green_face[2].slice();
		
		old_opposite[0] = this.red_face[0].slice();
		old_opposite[1] = this.red_face[1].slice();
		old_opposite[2] = this.red_face[2].slice();
		
		old_yellow[0] = this.yellow_face[0].slice();
		old_yellow[1] = this.yellow_face[1].slice();
		old_yellow[2] = this.yellow_face[2].slice();
		
		old_blue[0] = this.blue_face[0].slice();
		old_blue[1] = this.blue_face[1].slice();
		old_blue[2] = this.blue_face[2].slice();

		this.yellow_face[0][0] =old_yellow[0][2];
		this.yellow_face[0][1] =old_yellow[1][2];
		this.yellow_face[0][2] =old_yellow[0][2];
		
		this.yellow_face[1][0] =old_yellow[0][1];
		/* unchanged this.yellow_face[1][1] */
		this.yellow_face[1][2] =old_yellow[2][1];
		
		this.yellow_face[2][0] =old_yellow[0][0];
		this.yellow_face[2][1] =old_yellow[1][0];
		this.yellow_face[2][2] =old_yellow[2][0];
		
		this.green_face[0][0] = old_opposite[2][2];
		this.green_face[1][0] = old_opposite[1][2];
		this.green_face[2][0] = old_opposite[0][2];
			
		this.blue_face[0][0] = old_orange[0][0];
		this.blue_face[1][0] = old_orange[1][0];
		this.blue_face[2][0] = old_orange[2][0];
		
		this.red_face[0][2] = old_blue[2][0];
		this.red_face[1][2] = old_blue[1][0];
		this.red_face[2][2] = old_blue[0][0];

		this.orange_face[0][0] = old_green[0][0];
		this.orange_face[1][0] = old_green[1][0];
		this.orange_face[2][0] = old_green[2][0];
	}
}
RubikCube.prototype.rotateYellowInverse = function(){
	this.rotateYellow(true);
}

RubikCube.prototype.rotateWhite = function(inverse){
	if (!inverse){
		var old_orange = Array();
		var old_green = Array();
		var old_opposite = Array();
		var old_white = Array();
		var old_blue = Array();
		old_orange[0] = this.orange_face[0].slice();
		old_orange[1] = this.orange_face[1].slice();
		old_orange[2] = this.orange_face[2].slice();
		
		old_green[0] = this.green_face[0].slice();
		old_green[1] = this.green_face[1].slice();
		old_green[2] = this.green_face[2].slice();
		
		old_opposite[0] = this.red_face[0].slice();
		old_opposite[1] = this.red_face[1].slice();
		old_opposite[2] = this.red_face[2].slice();
		
		old_white[0] = this.white_face[0].slice();
		old_white[1] = this.white_face[1].slice();
		old_white[2] = this.white_face[2].slice();
		
		old_blue[0] = this.blue_face[0].slice();
		old_blue[1] = this.blue_face[1].slice();
		old_blue[2] = this.blue_face[2].slice();

		this.white_face[0][0] =old_white[2][0];
		this.white_face[0][1] =old_white[1][0];
		this.white_face[0][2] =old_white[0][0];
		
		this.white_face[1][0] =old_white[2][1];
		/* unchanged this.yellow_face[1][1] */
		this.white_face[1][2] =old_white[0][1];
		
		this.white_face[2][0] =old_white[2][2];
		this.white_face[2][1] =old_white[1][2];
		this.white_face[2][2] =old_white[0][2];
		
		this.green_face[0][2] = old_opposite[0][0];
		this.green_face[1][2] = old_opposite[1][0];
		this.green_face[2][2] = old_opposite[2][0];
			
		this.blue_face[0][2] = old_orange[0][2];
		this.blue_face[1][2] = old_orange[1][2];
		this.blue_face[2][2] = old_orange[2][2];
		
		this.red_face[0][0] = old_blue[2][2];
		this.red_face[1][0] = old_blue[1][2];
		this.red_face[2][0] = old_blue[0][2];

		this.orange_face[0][2] = old_green[0][2];
		this.orange_face[1][2] = old_green[1][2];
		this.orange_face[2][2] = old_green[2][2];
		
	}else{
		var old_orange = Array();
		var old_green = Array();
		var old_opposite = Array();
		var old_white = Array();
		var old_blue = Array();
		old_orange[0] = this.orange_face[0].slice();
		old_orange[1] = this.orange_face[1].slice();
		old_orange[2] = this.orange_face[2].slice();
		
		old_green[0] = this.green_face[0].slice();
		old_green[1] = this.green_face[1].slice();
		old_green[2] = this.green_face[2].slice();
		
		old_opposite[0] = this.red_face[0].slice();
		old_opposite[1] = this.red_face[1].slice();
		old_opposite[2] = this.red_face[2].slice();
		
		old_white[0] = this.white_face[0].slice();
		old_white[1] = this.white_face[1].slice();
		old_white[2] = this.white_face[2].slice();
		
		old_blue[0] = this.blue_face[0].slice();
		old_blue[1] = this.blue_face[1].slice();
		old_blue[2] = this.blue_face[2].slice();

		this.white_face[0][0] =old_white[0][2];
		this.white_face[0][1] =old_white[1][2];
		this.white_face[0][2] =old_white[2][2];
		
		this.white_face[1][0] =old_white[0][1];
		/* unchanged this.white_face[1][1] */
		this.white_face[1][2] =old_white[2][1];
		
		this.white_face[2][0] =old_white[0][0];
		this.white_face[2][1] =old_white[1][0];
		this.white_face[2][2] =old_white[2][0];
		
		this.green_face[0][2] = old_orange[0][2];
		this.green_face[1][2] = old_orange[1][2];
		this.green_face[2][2] = old_orange[2][2];
			
		this.blue_face[0][2] = old_opposite[2][0];
		this.blue_face[1][2] = old_opposite[1][0];
		this.blue_face[2][2] = old_opposite[0][0];
		
		this.red_face[0][0] = old_green[2][2];
		this.red_face[1][0] = old_green[1][2];
		this.red_face[2][0] = old_green[0][2];

		this.orange_face[0][2] = old_blue[0][2];
		this.orange_face[1][2] = old_blue[1][2];
		this.orange_face[2][2] = old_blue[2][2];
	}
}
RubikCube.prototype.rotateWhiteInverse = function(){
	this.rotateWhite(true);
}

RubikCube.prototype.rotateRed = function(inverse){
	if (!inverse){
		var old_opposite = Array();
		var old_blue = Array();
		var old_green = Array();
		var old_yellow = Array();
		var old_white = Array();
		old_opposite[0] = this.red_face[0].slice();
		old_opposite[1] = this.red_face[1].slice();
		old_opposite[2] = this.red_face[2].slice();
		
		old_blue[0] = this.blue_face[0].slice();
		old_blue[1] = this.blue_face[1].slice();
		old_blue[2] = this.blue_face[2].slice();
		
		old_green[0] = this.green_face[0].slice();
		old_green[1] = this.green_face[1].slice();
		old_green[2] = this.green_face[2].slice();
		
		old_yellow[0] = this.yellow_face[0].slice();
		old_yellow[1] = this.yellow_face[1].slice();
		old_yellow[2] = this.yellow_face[2].slice();
		
		old_white[0] = this.white_face[0].slice();
		old_white[1] = this.white_face[1].slice();
		old_white[2] = this.white_face[2].slice();

		this.red_face[0][0] =old_opposite[2][0];
		this.red_face[0][1] =old_opposite[1][0];
		this.red_face[0][2] =old_opposite[0][0];
		
		this.red_face[1][0] =old_opposite[2][1];
		/* unchanged this.orange_face[1][1] */
		this.red_face[1][2] =old_opposite[0][1];
		
		this.red_face[2][0] =old_opposite[2][2];
		this.red_face[2][1] =old_opposite[1][2];
		this.red_face[2][2] =old_opposite[0][2];
		
		this.blue_face[0][0] = old_white[0][2];
		this.blue_face[0][1] = old_white[1][2];
		this.blue_face[0][2] = old_white[2][2];

		this.green_face[2][0] = old_yellow[0][0];
		this.green_face[2][1] = old_yellow[1][0];
		this.green_face[2][2] = old_yellow[2][0];

		this.yellow_face[0][0] = old_blue[0][2];
		this.yellow_face[1][0] = old_blue[0][1];
		this.yellow_face[2][0] = old_blue[0][0];
		
		this.white_face[0][2] = old_green[2][2];
		this.white_face[1][2] = old_green[2][1];
		this.white_face[2][2] = old_green[2][0];
		
	}else{
		var old_opposite = Array();
		var old_blue = Array();
		var old_green = Array();
		var old_yellow = Array();
		var old_white = Array();
		old_opposite[0] = this.red_face[0].slice();
		old_opposite[1] = this.red_face[1].slice();
		old_opposite[2] = this.red_face[2].slice();
		
		old_blue[0] = this.blue_face[0].slice();
		old_blue[1] = this.blue_face[1].slice();
		old_blue[2] = this.blue_face[2].slice();
		
		old_green[0] = this.green_face[0].slice();
		old_green[1] = this.green_face[1].slice();
		old_green[2] = this.green_face[2].slice();
		
		old_yellow[0] = this.yellow_face[0].slice();
		old_yellow[1] = this.yellow_face[1].slice();
		old_yellow[2] = this.yellow_face[2].slice();
		
		old_white[0] = this.white_face[0].slice();
		old_white[1] = this.white_face[1].slice();
		old_white[2] = this.white_face[2].slice();

		this.red_face[0][0] =old_opposite[0][2];
		this.red_face[0][1] =old_opposite[1][2];
		this.red_face[0][2] =old_opposite[2][2];
		
		this.red_face[1][0] =old_opposite[0][1];
		/* unchanged this.orange_face[1][1] */
		this.red_face[1][2] =old_opposite[2][1];
		
		this.red_face[2][0] =old_opposite[0][0];
		this.red_face[2][1] =old_opposite[1][0];
		this.red_face[2][2] =old_opposite[2][0];
		
		this.blue_face[0][0] = old_yellow[0][0];
		this.blue_face[0][1] = old_yellow[1][0];
		this.blue_face[0][2] = old_yellow[2][0];

		this.green_face[2][0] = old_white[2][2];
		this.green_face[2][1] = old_white[1][2];
		this.green_face[2][2] = old_white[0][2];

		this.yellow_face[0][0] = old_green[2][0];
		this.yellow_face[1][0] = old_green[2][1];
		this.yellow_face[2][0] = old_green[2][2];
		
		this.white_face[0][2] = old_blue[0][0];
		this.white_face[1][2] = old_blue[0][1];
		this.white_face[2][2] = old_blue[0][2];
	}
}
RubikCube.prototype.rotateRedInverse = function(){
	this.rotateRed(true);
}
RubikCube.prototype.shuffle = function(){
	moves = Math.floor((Math.random()*10)+10);
	for (i=0; i<moves; i++){
		move = Math.floor((Math.random()*12)+1);
		if (move === 1){
			this.rotateOrange(false);
		}else if (move === 2){
			this.rotateOrange(true);
		}else if (move === 3){
			this.rotateBlue(false);
		}else if (move === 4){
			this.rotateBlue(true);
		}else if (move == 5){
			this.rotateGreen(false);
		}else if (move === 6){
			this.rotateGreen(true);
		}else if (move === 7){
			this.rotateWhite(false);
		}else if (move === 8){
			this.rotateWhite(true);
		}else if (move === 9){
			this.rotateYellow(false);
		}else if (move === 10){
			this.rotateYellow(true);
		}else if (move === 11){
			this.rotateRed(false);
		}else if (move === 12){
			this.rotateRed(true);
		}
	}
}

RubikCube.prototype.fitnessMeasure = function(){
	var fitness_score = 0;
	fitness_score = fitness_score + this.fitnessMeasureSide(this.orange_face);
	fitness_score = fitness_score + this.fitnessMeasureSide(this.blue_face);
	fitness_score = fitness_score + this.fitnessMeasureSide(this.green_face);
	fitness_score = fitness_score + this.fitnessMeasureSide(this.white_face);
	fitness_score = fitness_score + this.fitnessMeasureSide(this.yellow_face);
	fitness_score = fitness_score + this.fitnessMeasureSide(this.red_face);
	return fitness_score/this.total_fitness_points;
}
RubikCube.prototype.fitnessMeasureSide = function(side){
	var score = 0;
	var color = side[1][1];
	if (side[0][0] === color)
		score += 1;
	if (side[0][1] === color)
		score += 1;
	if (side[0][2] === color)
		score += 1;
	if (side[1][0] === color)
		score += 1;
	if (side[1][2] === color)
		score += 1;
	if (side[2][0] === color)
		score += 1;
	if (side[2][1] === color)
		score += 1;
	if (side[2][2] === color)
		score += 1;
	return score;
}
