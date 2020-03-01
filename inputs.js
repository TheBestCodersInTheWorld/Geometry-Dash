//keyboard
function keyPressed(key) {

}
function keyUnPressed(key) {

}

keys = {
	active : [],
	up : 38,
	down : 40,
	right : 39,
	left : 37,
	up2 : 87,
	down2 : 83,
	right2 : 68,
	left2 : 65,
	space : 32,
	esc : 27,
};

document.body.addEventListener("keydown", function(e) {

	keyPressed(e.keyCode);
    keys.active[e.keyCode] = true;
});
 
document.body.addEventListener("keyup", function(e) {

	keyUnPressed(e.keyCode);
    keys.active[e.keyCode] = false;
});

//mouse
mouse = {
	x:0,
	y:0,
	down:false,
	button:-1
};