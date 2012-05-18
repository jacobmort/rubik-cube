RubikCubeTest = function(){

}

RubikCubeTest.prototype.rotateFrontTest = function(){
	cube = new RubikCube();
	cube.f_face = [
		['f1','f2','f3'],
		['f4','f5','f6'],
		['f7','f8','f9']
    ];
    var f_solution = [
		['f7','f4','f1'],
		['f8','f5','f2'],
		['f9','f6','f3']
    ];
    cube.b_face = [
		['b1','b2','b3'],
		['b4','b5','b6'],
		['b7','b8','b9']
    ];
    var b_solution = [
		['r7','r4','r1'],
		['b4','b5','b6'],
		['b7','b8','b9']
    ];
    cube.r_face = [
		['r1','r2','r3'],
		['r4','r5','r6'],
		['r7','r8','r9']
    ];
    var r_solution = [
		['t7','r2','r3'],
		['t8','r5','r6'],
		['t9','r8','r9']
    ];
    cube.l_face = [
		['l1','l2','l3'],
		['l4','l5','l6'],
		['l7','l8','l9']
    ];
    var l_solution = [
		['l1','l2','b7'],
		['l4','l5','b8'],
		['l7','l8','b9']
    ];
    cube.t_face = [
		['t1','t2','t3'],
		['t4','t5','t6'],
		['t7','t8','t9']
    ];
    var t_solution = [
		['t1','t2','t3'],
		['t4','t5','t6'],
		['r3','r6','r9']
    ];
    
    cube.rotateFront(false);
    
    return (cube.f_face[0][0] == f_solution[0][0])
	&& (cube.f_face[0][1] == f_solution[0][1])
    && (cube.f_face[0][2] == f_solution[0][2])
    && (cube.f_face[1][0] == f_solution[1][0])
	&& (cube.f_face[1][1] == f_solution[1][1])
    && (cube.f_face[1][2] == f_solution[1][2])
    && (cube.f_face[2][0] == f_solution[2][0])
	&& (cube.f_face[2][1] == f_solution[2][1])
    && (cube.f_face[2][2] == f_solution[2][2])
    && (cube.b_face[0][1] == b_solution[0][1])
    && (cube.b_face[0][2] == b_solution[0][2])
    && (cube.b_face[1][0] == b_solution[1][0])
	&& (cube.b_face[1][1] == b_solution[1][1])
    && (cube.b_face[1][2] == b_solution[1][2])
    && (cube.b_face[2][0] == b_solution[2][0])
	&& (cube.b_face[2][1] == b_solution[2][1])
    && (cube.b_face[2][2] == b_solution[2][2])
    && (cube.r_face[0][1] == r_solution[0][1])
    && (cube.r_face[0][2] == r_solution[0][2])
    && (cube.r_face[1][0] == r_solution[1][0])
	&& (cube.r_face[1][1] == r_solution[1][1])
    && (cube.r_face[1][2] == r_solution[1][2])
    && (cube.r_face[2][0] == r_solution[2][0])
	&& (cube.r_face[2][1] == r_solution[2][1])
    && (cube.r_face[2][2] == r_solution[2][2])
}