RubikCube = function(){
	this.f_face = [
		['b','b','b'],
		['b','b','b'],
		['b','b','b']
    ];
	this.t_face = [
		['w','w','w'],
		['w','w','w'],
		['w','w','w']
    ];
	this.b_face = [
		['g','g','g'],
		['g','g','g'],
		['g','g','g']
    ];
	this.r_face = [
		['o','o','o'],
		['o','o','o'],
		['o','o','o']
    ];
	this.l_face = [
		['r','r','r'],
		['r','r','r'],
		['r','r','r']
    ];

};

RubikCube.prototype.rotateFront = function(inverse){
	if (!inverse){
		var old_front = Array();
		var old_top = Array();
		var old_bottom = Array();
		var old_left = Array();
		var old_right = Array();
		old_front[0] = this.f_face[0].slice();
		old_front[1] = this.f_face[1].slice();
		old_front[2] = this.f_face[2].slice();
		
		old_top[0] = this.t_face[0].slice();
		old_top[1] = this.t_face[1].slice();
		old_top[2] = this.t_face[2].slice();
		
		old_bottom[0] = this.b_face[0].slice();
		old_bottom[1] = this.b_face[1].slice();
		old_bottom[2] = this.b_face[2].slice();
		
		old_left[0] = this.l_face[0].slice();
		old_left[1] = this.l_face[1].slice();
		old_left[2] = this.l_face[2].slice();
		
		old_right[0] = this.r_face[0].slice();
		old_right[1] = this.r_face[1].slice();
		old_right[2] = this.r_face[2].slice();

		this.f_face[0][0] =old_front[2][0];
		this.f_face[0][1] =old_front[1][0];
		this.f_face[0][2] =old_front[0][0];
		
		this.f_face[1][0] =old_front[2][1];
		/* unchanged this.f_face[1][1] */
		this.f_face[1][2] =old_front[0][1];
		
		this.f_face[2][0] =old_front[2][2];
		this.f_face[2][1] =old_front[1][2];
		this.f_face[2][2] =old_front[0][2];
		
		this.t_face[2][0] = old_left[2][2];
		this.t_face[2][1] = old_left[1][2];
		this.t_face[2][2] = old_left[0][2];

		this.b_face[0][0] = old_right[2][0];
		this.b_face[0][1] = old_right[1][0];
		this.b_face[0][2] = old_right[0][0];

		this.l_face[0][2] = old_bottom[0][0];
		this.l_face[1][2] = old_bottom[0][1];
		this.l_face[2][2] = old_bottom[0][2];
		
		this.r_face[0][0] = old_top[2][0];
		this.r_face[1][0] = old_top[2][1];
		this.r_face[2][0] = old_top[2][2];
		
	}else{
	
	}
}

RubikCube.prototype.rotateTop = function(inverse){
}

RubikCube.prototype.rotateBottom = function(inverse){
}

RubikCube.prototype.rotateLeft = function(inverse){
}

RubikCube.prototype.rotateRight = function(inverse){
}

RubikCube.prototype.shuffle = function(){
}