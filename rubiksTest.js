RubikCubeTest = function(){

}
RubikCubeTest.prototype.runAll = function(){
	return this.rotateFrontTest()
	&& this.rotateFrontInvertTest()
	&& this.rotateTopTest()
	&& this.rotateTopInverseTest()
	&& this.rotateBottomTest()
	&& this.rotateBottomInverseTest()
	&& this.rotateLeftTest()
	&& this.rotateLeftInverseTest()
	&& this.rotateRightTest()
	&& this.rotateRightInverseTest();
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
		['l1','l2','b1'],
		['l4','l5','b2'],
		['l7','l8','b3']
    ];
    cube.t_face = [
		['t1','t2','t3'],
		['t4','t5','t6'],
		['t7','t8','t9']
    ];
    var t_solution = [
		['t1','t2','t3'],
		['t4','t5','t6'],
		['l9','l6','l3']
    ];
	cube.o_face = [
		['r1','r2','r3'],
		['r4','r5','r6'],
		['r7','r8','r9']
    ];
    var o_solution = [
		['r1','r2','r3'],
		['r4','r5','r6'],
		['r7','r8','r9']
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
	&& (cube.o_face[1][0] == o_solution[1][0])
	&& (cube.o_face[1][1] == o_solution[1][1])
    && (cube.o_face[1][2] == o_solution[1][2])
    && (cube.o_face[2][0] == o_solution[2][0])
	&& (cube.o_face[2][1] == o_solution[2][1])
    && (cube.o_face[2][2] == o_solution[2][2])
	&& (cube.t_face[1][0] == t_solution[1][0])
	&& (cube.t_face[1][1] == t_solution[1][1])
    && (cube.t_face[1][2] == t_solution[1][2])
    && (cube.t_face[2][0] == t_solution[2][0])
	&& (cube.t_face[2][1] == t_solution[2][1])
    && (cube.t_face[2][2] == t_solution[2][2])
	&& (cube.l_face[1][0] == l_solution[1][0])
	&& (cube.l_face[1][1] == l_solution[1][1])
    && (cube.l_face[1][2] == l_solution[1][2])
    && (cube.l_face[2][0] == l_solution[2][0])
	&& (cube.l_face[2][1] == l_solution[2][1])
    && (cube.l_face[2][2] == l_solution[2][2])
	
}

RubikCubeTest.prototype.rotateFrontInvertTest = function(){
	cube = new RubikCube();
	cube.f_face = [
		['f1','f2','f3'],
		['f4','f5','f6'],
		['f7','f8','f9']
    ];
    var f_solution = [
		['f3','f6','f9'],
		['f2','f5','f8'],
		['f1','f4','f7']
    ];
    cube.b_face = [
		['b1','b2','b3'],
		['b4','b5','b6'],
		['b7','b8','b9']
    ];
    var b_solution = [
		['l3','l6','l9'],
		['b4','b5','b6'],
		['b7','b8','b9']
    ];
    cube.r_face = [
		['r1','r2','r3'],
		['r4','r5','r6'],
		['r7','r8','r9']
    ];
    var r_solution = [
		['b3','r2','r3'],
		['b2','r5','r6'],
		['b1','r8','r9']
    ];
    cube.l_face = [
		['l1','l2','l3'],
		['l4','l5','l6'],
		['l7','l8','l9']
    ];
    var l_solution = [
		['l1','l2','t9'],
		['l4','l5','t8'],
		['l7','l8','t7']
    ];
    cube.t_face = [
		['t1','t2','t3'],
		['t4','t5','t6'],
		['t7','t8','t9']
    ];
    var t_solution = [
		['t1','t2','t3'],
		['t4','t5','t6'],
		['r1','r4','r7']
    ];
	cube.o_face = [
		['r1','r2','r3'],
		['r4','r5','r6'],
		['r7','r8','r9']
    ];
    var o_solution = [
		['r1','r2','r3'],
		['r4','r5','r6'],
		['r7','r8','r9']
    ];
    
    cube.rotateFront(true);
	
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
	&& (cube.o_face[1][0] == o_solution[1][0])
	&& (cube.o_face[1][1] == o_solution[1][1])
    && (cube.o_face[1][2] == o_solution[1][2])
    && (cube.o_face[2][0] == o_solution[2][0])
	&& (cube.o_face[2][1] == o_solution[2][1])
    && (cube.o_face[2][2] == o_solution[2][2])
	&& (cube.t_face[1][0] == t_solution[1][0])
	&& (cube.t_face[1][1] == t_solution[1][1])
    && (cube.t_face[1][2] == t_solution[1][2])
    && (cube.t_face[2][0] == t_solution[2][0])
	&& (cube.t_face[2][1] == t_solution[2][1])
    && (cube.t_face[2][2] == t_solution[2][2])
	&& (cube.l_face[1][0] == l_solution[1][0])
	&& (cube.l_face[1][1] == l_solution[1][1])
    && (cube.l_face[1][2] == l_solution[1][2])
    && (cube.l_face[2][0] == l_solution[2][0])
	&& (cube.l_face[2][1] == l_solution[2][1])
    && (cube.l_face[2][2] == l_solution[2][2])
}

RubikCubeTest.prototype.rotateTopTest = function(){

	cube = new RubikCube();
	cube.f_face = [
		['f1','f2','f3'],
		['f4','f5','f6'],
		['f7','f8','f9']
    ];
    var f_solution = [
		['r1','r2','r3'],
		['f4','f5','f6'],
		['f7','f8','f9']
    ];
	
    cube.r_face = [
		['r1','r2','r3'],
		['r4','r5','r6'],
		['r7','r8','r9']
    ];
    var r_solution = [
		['o1','o2','o3'],
		['r4','r5','r6'],
		['r7','r8','r9']
    ];
    cube.l_face = [
		['l1','l2','l3'],
		['l4','l5','l6'],
		['l7','l8','l9']
    ];
    var l_solution = [
		['f1','f2','f3'],
		['l4','l5','l6'],
		['l7','l8','l9']
    ];
    cube.t_face = [
		['t1','t2','t3'],
		['t4','t5','t6'],
		['t7','t8','t9']
    ];
    var t_solution = [
		['t7','t4','t1'],
		['t8','t5','t2'],
		['t9','t6','t3']
    ];
	cube.o_face = [
		['o1','o2','o3'],
		['o4','o5','o6'],
		['o7','o8','o9']
    ];
    var o_solution = [
		['l1','l2','l3'],
		['o4','o5','o6'],
		['o7','o8','o9']
    ];
	cube.b_face = [
		['b1','b2','b3'],
		['b4','b5','b6'],
		['b7','b8','b9']
    ];
    var b_solution = [
		['b1','b2','b3'],
		['b4','b5','b6'],
		['b7','b8','b9']
    ];
    
    cube.rotateTop(false);
    //console.log(cube.f_face);
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
	&& (cube.o_face[1][0] == o_solution[1][0])
	&& (cube.o_face[1][1] == o_solution[1][1])
    && (cube.o_face[1][2] == o_solution[1][2])
    && (cube.o_face[2][0] == o_solution[2][0])
	&& (cube.o_face[2][1] == o_solution[2][1])
    && (cube.o_face[2][2] == o_solution[2][2])
	&& (cube.t_face[1][0] == t_solution[1][0])
	&& (cube.t_face[1][1] == t_solution[1][1])
    && (cube.t_face[1][2] == t_solution[1][2])
    && (cube.t_face[2][0] == t_solution[2][0])
	&& (cube.t_face[2][1] == t_solution[2][1])
    && (cube.t_face[2][2] == t_solution[2][2])
	&& (cube.l_face[1][0] == l_solution[1][0])
	&& (cube.l_face[1][1] == l_solution[1][1])
    && (cube.l_face[1][2] == l_solution[1][2])
    && (cube.l_face[2][0] == l_solution[2][0])
	&& (cube.l_face[2][1] == l_solution[2][1])
    && (cube.l_face[2][2] == l_solution[2][2])
}

RubikCubeTest.prototype.rotateTopInverseTest = function(){

	cube = new RubikCube();
	cube.f_face = [
		['f1','f2','f3'],
		['f4','f5','f6'],
		['f7','f8','f9']
    ];
    var f_solution = [
		['l1','l2','l3'],
		['f4','f5','f6'],
		['f7','f8','f9']
    ];
	
    cube.r_face = [
		['r1','r2','r3'],
		['r4','r5','r6'],
		['r7','r8','r9']
    ];
    var r_solution = [
		['f1','f2','f3'],
		['r4','r5','r6'],
		['r7','r8','r9']
    ];
    cube.l_face = [
		['l1','l2','l3'],
		['l4','l5','l6'],
		['l7','l8','l9']
    ];
    var l_solution = [
		['o1','o2','o3'],
		['l4','l5','l6'],
		['l7','l8','l9']
    ];
    cube.t_face = [
		['t1','t2','t3'],
		['t4','t5','t6'],
		['t7','t8','t9']
    ];
    var t_solution = [
		['t3','t6','t9'],
		['t2','t5','t8'],
		['t1','t4','t7']
    ];
	cube.o_face = [
		['o1','o2','o3'],
		['o4','o5','o6'],
		['o7','o8','o9']
    ];
    var o_solution = [
		['r1','r2','r3'],
		['o4','o5','o6'],
		['o7','o8','o9']
    ];
	cube.b_face = [
		['b1','b2','b3'],
		['b4','b5','b6'],
		['b7','b8','b9']
    ];
    var b_solution = [
		['b1','b2','b3'],
		['b4','b5','b6'],
		['b7','b8','b9']
    ];
    
    cube.rotateTop(true);
    //console.log(cube.f_face);
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
	&& (cube.o_face[1][0] == o_solution[1][0])
	&& (cube.o_face[1][1] == o_solution[1][1])
    && (cube.o_face[1][2] == o_solution[1][2])
    && (cube.o_face[2][0] == o_solution[2][0])
	&& (cube.o_face[2][1] == o_solution[2][1])
    && (cube.o_face[2][2] == o_solution[2][2])
	&& (cube.t_face[1][0] == t_solution[1][0])
	&& (cube.t_face[1][1] == t_solution[1][1])
    && (cube.t_face[1][2] == t_solution[1][2])
    && (cube.t_face[2][0] == t_solution[2][0])
	&& (cube.t_face[2][1] == t_solution[2][1])
    && (cube.t_face[2][2] == t_solution[2][2])
	&& (cube.l_face[1][0] == l_solution[1][0])
	&& (cube.l_face[1][1] == l_solution[1][1])
    && (cube.l_face[1][2] == l_solution[1][2])
    && (cube.l_face[2][0] == l_solution[2][0])
	&& (cube.l_face[2][1] == l_solution[2][1])
    && (cube.l_face[2][2] == l_solution[2][2])
	
}

RubikCubeTest.prototype.rotateBottomTest = function(){

	cube = new RubikCube();
	cube.f_face = [
		['f1','f2','f3'],
		['f4','f5','f6'],
		['f7','f8','f9']
    ];
    var f_solution = [
		['f1','f2','f3'],
		['f4','f5','f6'],
		['l7','l8','l9']
    ];
	
    cube.r_face = [
		['r1','r2','r3'],
		['r4','r5','r6'],
		['r7','r8','r9']
    ];
    var r_solution = [
		['r1','r2','r3'],
		['r4','r5','r6'],
		['f7','f8','f9']
    ];
    cube.l_face = [
		['l1','l2','l3'],
		['l4','l5','l6'],
		['l7','l8','l9']
    ];
    var l_solution = [
		['l1','l2','l3'],
		['l4','l5','l6'],
		['o7','o8','o9']
    ];
    cube.t_face = [
		['t1','t2','t3'],
		['t4','t5','t6'],
		['t7','t8','t9']
    ];
    var t_solution = [
		['t1','t2','t3'],
		['t4','t5','t6'],
		['t7','t8','t9']
    ];
	cube.o_face = [
		['o1','o2','o3'],
		['o4','o5','o6'],
		['o7','o8','o9']
    ];
    var o_solution = [
		['l1','l2','l3'],
		['o4','o5','o6'],
		['r7','r8','r9']
    ];
	cube.b_face = [
		['b1','b2','b3'],
		['b4','b5','b6'],
		['b7','b8','b9']
    ];
    var b_solution = [
		['b7','b4','b1'],
		['b8','b5','b2'],
		['b9','b6','b3']
    ];
    
    cube.rotateBottom(false);
	
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
	&& (cube.o_face[1][0] == o_solution[1][0])
	&& (cube.o_face[1][1] == o_solution[1][1])
    && (cube.o_face[1][2] == o_solution[1][2])
    && (cube.o_face[2][0] == o_solution[2][0])
	&& (cube.o_face[2][1] == o_solution[2][1])
    && (cube.o_face[2][2] == o_solution[2][2])
	&& (cube.t_face[1][0] == t_solution[1][0])
	&& (cube.t_face[1][1] == t_solution[1][1])
    && (cube.t_face[1][2] == t_solution[1][2])
    && (cube.t_face[2][0] == t_solution[2][0])
	&& (cube.t_face[2][1] == t_solution[2][1])
    && (cube.t_face[2][2] == t_solution[2][2])
	&& (cube.l_face[1][0] == l_solution[1][0])
	&& (cube.l_face[1][1] == l_solution[1][1])
    && (cube.l_face[1][2] == l_solution[1][2])
    && (cube.l_face[2][0] == l_solution[2][0])
	&& (cube.l_face[2][1] == l_solution[2][1])
    && (cube.l_face[2][2] == l_solution[2][2])
	
}

RubikCubeTest.prototype.rotateBottomInverseTest = function(){

	cube = new RubikCube();
	cube.f_face = [
		['f1','f2','f3'],
		['f4','f5','f6'],
		['f7','f8','f9']
    ];
    var f_solution = [
		['f1','f2','f3'],
		['f4','f5','f6'],
		['r7','r8','r9']
    ];
	
    cube.r_face = [
		['r1','r2','r3'],
		['r4','r5','r6'],
		['r7','r8','r9']
    ];
    var r_solution = [
		['r1','r2','r3'],
		['r4','r5','r6'],
		['o7','o8','o9']
    ];
    cube.l_face = [
		['l1','l2','l3'],
		['l4','l5','l6'],
		['l7','l8','l9']
    ];
    var l_solution = [
		['l1','l2','l3'],
		['l4','l5','l6'],
		['f7','f8','f9']
    ];
    cube.t_face = [
		['t1','t2','t3'],
		['t4','t5','t6'],
		['t7','t8','t9']
    ];
    var t_solution = [
		['t1','t2','t3'],
		['t4','t5','t6'],
		['t7','t8','t9']
    ];
	cube.o_face = [
		['o1','o2','o3'],
		['o4','o5','o6'],
		['o7','o8','o9']
    ];
    var o_solution = [
		['l1','l2','l3'],
		['o4','o5','o6'],
		['l7','l8','l9']
    ];
	cube.b_face = [
		['b1','b2','b3'],
		['b4','b5','b6'],
		['b7','b8','b9']
    ];
    var b_solution = [
		['b3','b6','b9'],
		['b2','b5','b8'],
		['b1','b4','b7']
    ];
    
    cube.rotateBottom(true);
	
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
	&& (cube.o_face[1][0] == o_solution[1][0])
	&& (cube.o_face[1][1] == o_solution[1][1])
    && (cube.o_face[1][2] == o_solution[1][2])
    && (cube.o_face[2][0] == o_solution[2][0])
	&& (cube.o_face[2][1] == o_solution[2][1])
    && (cube.o_face[2][2] == o_solution[2][2])
	&& (cube.t_face[1][0] == t_solution[1][0])
	&& (cube.t_face[1][1] == t_solution[1][1])
    && (cube.t_face[1][2] == t_solution[1][2])
    && (cube.t_face[2][0] == t_solution[2][0])
	&& (cube.t_face[2][1] == t_solution[2][1])
    && (cube.t_face[2][2] == t_solution[2][2])
	&& (cube.l_face[1][0] == l_solution[1][0])
	&& (cube.l_face[1][1] == l_solution[1][1])
    && (cube.l_face[1][2] == l_solution[1][2])
    && (cube.l_face[2][0] == l_solution[2][0])
	&& (cube.l_face[2][1] == l_solution[2][1])
    && (cube.l_face[2][2] == l_solution[2][2])
	
}

RubikCubeTest.prototype.rotateLeftTest = function(){

	cube = new RubikCube();
	cube.f_face = [
		['f1','f2','f3'],
		['f4','f5','f6'],
		['f7','f8','f9']
    ];
    var f_solution = [
		['t1','f2','f3'],
		['t4','f5','f6'],
		['t7','f8','f9']
    ];
    cube.r_face = [
		['r1','r2','r3'],
		['r4','r5','r6'],
		['r7','r8','r9']
    ];
    var r_solution = [
		['r1','r2','r3'],
		['r4','r5','r6'],
		['r7','r8','r9']
    ];
    cube.l_face = [
		['l1','l2','l3'],
		['l4','l5','l6'],
		['l7','l8','l9']
    ];
    var l_solution = [
		['l7','l4','l1'],
		['l8','l5','l2'],
		['l9','l6','l3']
    ];
    cube.t_face = [
		['t1','t2','t3'],
		['t4','t5','t6'],
		['t7','t8','t9']
    ];
    var t_solution = [
		['o9','t2','t3'],
		['o6','t5','t6'],
		['o3','t8','t9']
    ];
	cube.o_face = [
		['o1','o2','o3'],
		['o4','o5','o6'],
		['o7','o8','o9']
    ];
    var o_solution = [
		['o1','o2','b7'],
		['o4','o5','b4'],
		['o7','o8','b1']
    ];
	cube.b_face = [
		['b1','b2','b3'],
		['b4','b5','b6'],
		['b7','b8','b9']
    ];
    var b_solution = [
		['f1','b2','b3'],
		['f4','b5','b6'],
		['f7','b8','b9']
    ];
    
    cube.rotateLeft(false);
	
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
	
	&& (cube.o_face[1][0] == o_solution[1][0])
	&& (cube.o_face[1][1] == o_solution[1][1])
    && (cube.o_face[1][2] == o_solution[1][2])
    && (cube.o_face[2][0] == o_solution[2][0])
	&& (cube.o_face[2][1] == o_solution[2][1])
    && (cube.o_face[2][2] == o_solution[2][2])
	&& (cube.t_face[1][0] == t_solution[1][0])
	&& (cube.t_face[1][1] == t_solution[1][1])
    && (cube.t_face[1][2] == t_solution[1][2])
    && (cube.t_face[2][0] == t_solution[2][0])
	&& (cube.t_face[2][1] == t_solution[2][1])
    && (cube.t_face[2][2] == t_solution[2][2])
	
	&& (cube.l_face[1][0] == l_solution[1][0])
	&& (cube.l_face[1][1] == l_solution[1][1])
    && (cube.l_face[1][2] == l_solution[1][2])
    && (cube.l_face[2][0] == l_solution[2][0])
	&& (cube.l_face[2][1] == l_solution[2][1])
    && (cube.l_face[2][2] == l_solution[2][2])
	
}

RubikCubeTest.prototype.rotateLeftInverseTest = function(){

	cube = new RubikCube();
	cube.f_face = [
		['f1','f2','f3'],
		['f4','f5','f6'],
		['f7','f8','f9']
    ];
    var f_solution = [
		['b1','f2','f3'],
		['b4','f5','f6'],
		['b7','f8','f9']
    ];
    cube.r_face = [
		['r1','r2','r3'],
		['r4','r5','r6'],
		['r7','r8','r9']
    ];
    var r_solution = [
		['r1','r2','r3'],
		['r4','r5','r6'],
		['r7','r8','r9']
    ];
    cube.l_face = [
		['l1','l2','l3'],
		['l4','l5','l6'],
		['l7','l8','l9']
    ];
    var l_solution = [
		['l3','l6','l9'],
		['l2','l5','l8'],
		['l1','l4','l7']
    ];
    cube.t_face = [
		['t1','t2','t3'],
		['t4','t5','t6'],
		['t7','t8','t9']
    ];
    var t_solution = [
		['f1','t2','t3'],
		['f4','t5','t6'],
		['f7','t8','t9']
    ];
	cube.o_face = [
		['o1','o2','o3'],
		['o4','o5','o6'],
		['o7','o8','o9']
    ];
    var o_solution = [
		['o1','o2','t7'],
		['o4','o5','t4'],
		['o7','o8','t1']
    ];
	cube.b_face = [
		['b1','b2','b3'],
		['b4','b5','b6'],
		['b7','b8','b9']
    ];
    var b_solution = [
		['o9','b2','b3'],
		['o6','b5','b6'],
		['o3','b8','b9']
    ];
    
    cube.rotateLeft(true);
	
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
	&& (cube.o_face[1][0] == o_solution[1][0])
	&& (cube.o_face[1][1] == o_solution[1][1])
    && (cube.o_face[1][2] == o_solution[1][2])
    && (cube.o_face[2][0] == o_solution[2][0])
	&& (cube.o_face[2][1] == o_solution[2][1])
    && (cube.o_face[2][2] == o_solution[2][2])
	&& (cube.t_face[1][0] == t_solution[1][0])
	&& (cube.t_face[1][1] == t_solution[1][1])
    && (cube.t_face[1][2] == t_solution[1][2])
    && (cube.t_face[2][0] == t_solution[2][0])
	&& (cube.t_face[2][1] == t_solution[2][1])
    && (cube.t_face[2][2] == t_solution[2][2])
	&& (cube.l_face[1][0] == l_solution[1][0])
	&& (cube.l_face[1][1] == l_solution[1][1])
    && (cube.l_face[1][2] == l_solution[1][2])
    && (cube.l_face[2][0] == l_solution[2][0])
	&& (cube.l_face[2][1] == l_solution[2][1])
    && (cube.l_face[2][2] == l_solution[2][2])
	
}

RubikCubeTest.prototype.rotateRightTest = function(){

	cube = new RubikCube();
	cube.f_face = [
		['f1','f2','f3'],
		['f4','f5','f6'],
		['f7','f8','f9']
    ];
    var f_solution = [
		['f1','f2','b3'],
		['f4','f5','b6'],
		['f7','f8','b9']
    ];
    cube.r_face = [
		['r1','r2','r3'],
		['r4','r5','r6'],
		['r7','r8','r9']
    ];
    var r_solution = [
		['r7','r4','r1'],
		['r8','r5','r2'],
		['r9','r6','r3']
    ];
    cube.l_face = [
		['l1','l2','l3'],
		['l4','l5','l6'],
		['l7','l8','l9']
    ];
    var l_solution = [
		['l1','l2','l3'],
		['l4','l5','l6'],
		['l7','l8','l9']
    ];
    cube.t_face = [
		['t1','t2','t3'],
		['t4','t5','t6'],
		['t7','t8','t9']
    ];
    var t_solution = [
		['t1','t2','f3'],
		['t4','t5','f6'],
		['t7','t8','f9']
    ];
	cube.o_face = [
		['o1','o2','o3'],
		['o4','o5','o6'],
		['o7','o8','o9']
    ];
    var o_solution = [
		['t9','o2','o3'],
		['t6','o5','o6'],
		['t3','o8','o9']
    ];
	cube.b_face = [
		['b1','b2','b3'],
		['b4','b5','b6'],
		['b7','b8','b9']
    ];
    var b_solution = [
		['b1','b2','o1'],
		['b4','b5','o4'],
		['b7','b8','o7']
    ];
    
    cube.rotateRight(false);
	
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
	
	&& (cube.o_face[1][0] == o_solution[1][0])
	&& (cube.o_face[1][1] == o_solution[1][1])
    && (cube.o_face[1][2] == o_solution[1][2])
    && (cube.o_face[2][0] == o_solution[2][0])
	&& (cube.o_face[2][1] == o_solution[2][1])
    && (cube.o_face[2][2] == o_solution[2][2])
	&& (cube.t_face[1][0] == t_solution[1][0])
	&& (cube.t_face[1][1] == t_solution[1][1])
    && (cube.t_face[1][2] == t_solution[1][2])
    && (cube.t_face[2][0] == t_solution[2][0])
	&& (cube.t_face[2][1] == t_solution[2][1])
    && (cube.t_face[2][2] == t_solution[2][2])
	
	&& (cube.l_face[1][0] == l_solution[1][0])
	&& (cube.l_face[1][1] == l_solution[1][1])
    && (cube.l_face[1][2] == l_solution[1][2])
    && (cube.l_face[2][0] == l_solution[2][0])
	&& (cube.l_face[2][1] == l_solution[2][1])
    && (cube.l_face[2][2] == l_solution[2][2])
	
}

RubikCubeTest.prototype.rotateRightInverseTest = function(){

	cube = new RubikCube();
	cube.f_face = [
		['f1','f2','f3'],
		['f4','f5','f6'],
		['f7','f8','f9']
    ];
    var f_solution = [
		['f1','f2','t3'],
		['f4','f5','t6'],
		['f7','f8','t9']
    ];
    cube.r_face = [
		['r1','r2','r3'],
		['r4','r5','r6'],
		['r7','r8','r9']
    ];
    var r_solution = [
		['r3','r6','r9'],
		['r2','r5','r8'],
		['r1','r4','r7']
    ];
    cube.l_face = [
		['l1','l2','l3'],
		['l4','l5','l6'],
		['l7','l8','l9']
    ];
    var l_solution = [
		['l1','l2','l3'],
		['l4','l5','l6'],
		['l7','l8','l9']
    ];
    cube.t_face = [
		['t1','t2','t3'],
		['t4','t5','t6'],
		['t7','t8','t9']
    ];
    var t_solution = [
		['t1','t2','o7'],
		['t4','t5','o4'],
		['t7','t8','o1']    
		      
    ];
	cube.o_face = [
		['o1','o2','o3'],
		['o4','o5','o6'],
		['o7','o8','o9']
    ];
    var o_solution = [
		['o1','o2','b9'],
		['o4','o5','b6'],
		['o7','o8','b3']
    ];
	cube.b_face = [
		['b1','b2','b3'],
		['b4','b5','b6'],
		['b7','b8','b9']
    ];
    var b_solution = [
		['b1','b2','f3'],
		['b4','b5','f6'],
		['b7','b8','f9']
    ];
    
    cube.rotateRight(true);

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
	
	/*&& (cube.o_face[1][0] == o_solution[1][0])
	&& (cube.o_face[1][1] == o_solution[1][1])
    && (cube.o_face[1][2] == o_solution[1][2])
    && (cube.o_face[2][0] == o_solution[2][0])
	&& (cube.o_face[2][1] == o_solution[2][1])
    && (cube.o_face[2][2] == o_solution[2][2])
	&& (cube.t_face[1][0] == t_solution[1][0])
	&& (cube.t_face[1][1] == t_solution[1][1])
    && (cube.t_face[1][2] == t_solution[1][2])
    && (cube.t_face[2][0] == t_solution[2][0])
	&& (cube.t_face[2][1] == t_solution[2][1])
    && (cube.t_face[2][2] == t_solution[2][2])
	
	&& (cube.l_face[1][0] == l_solution[1][0])
	&& (cube.l_face[1][1] == l_solution[1][1])
    && (cube.l_face[1][2] == l_solution[1][2])
    && (cube.l_face[2][0] == l_solution[2][0])
	&& (cube.l_face[2][1] == l_solution[2][1])
    && (cube.l_face[2][2] == l_solution[2][2])
	*/
}