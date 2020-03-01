function Player(x, y) {
	
	this.timeAlive = 0;
	this.w = grid;
	this.h = grid;
	this.hp = 50;
	this.maxHP = this.hp;
	this.x = x + this.w/2;
	this.maxBreath = 60;
	this.breath = this.maxBreath;
	// this.y = h/2 - this.h/2;
	this.y = y + this.h/2;
	this.velx = 0;
	this.vely = 0;
	this.color = "#4171f4";
	//this.color = "red";
	this.sx = 2;
	this.sCapx = 10;
	this.sy = 9;
	this.grounded = false;
	this.angle = 0;
	this.stroke = this.w/10;
	this.color2 = "#34ff2d";
	//this.sCapy = 10;
	this.draw = function() {

		ctx1.lineWidth = this.stroke;
		rotate(ctx1,this.x - camX,this.y,this.w,this.h,this.angle);
		ctx1.strokeStyle = this.color;
		ctx1.strokeRect(this.x - camX + this.stroke/2 + this.stroke, this.y + this.stroke/2 + this.stroke, this.w - this.stroke - 2*this.stroke, this.h - this.stroke - 2*this.stroke);
		ctx1.strokeStyle = "white";
		ctx1.strokeRect(this.x - camX + this.stroke/2, this.y + this.stroke/2, this.w - this.stroke, this.h - this.stroke);
		ctx1.fillStyle = this.color2;
		ctx1.fillRect(this.x - camX + this.w/2 - (this.stroke), this.y + this.h/2 - this.stroke, 2*this.stroke, 2*this.stroke);
		ctx1.restore();
	}

	this.respawn = function() {

		
		camsX = camsXd;
		player = "";
		player = new Player(level[levelNo].startX(), level[levelNo].startY());
		camX = 0;
	}

	this.update = function() {

	}

}