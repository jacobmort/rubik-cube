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

RubikCube.prototype.shuffle = function(){
}
