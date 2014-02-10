// The Grid component allows an element to be located
// on a grid of tiles
Crafty.c('Grid', {
init: function() {
this.attr({
//w: Game.map_grid.tile.width,
//h: Game.map_grid.tile.height,
z: 2
})
},
 
// Locate this entity at the given position on the grid
at: function(x, y) {
if (x === undefined && y === undefined) {
return { x: this.x/Game.map_grid.tile.width, y: this.y/Game.map_grid.tile.height }
} else {
this.attr({ x: x , y: y  });
return this;
}
}
});
 
// An "Actor" is an entity that is drawn in 2D on canvas
// via our logical coordinate grid
Crafty.c('Actor', {
init: function() {
this.requires('2D, Canvas, Grid');
},
});

Crafty.c('Prof', {

init: function() {

this.requires('Actor, Collision, spr_prof, Tween');

this.velX = 5;  // 5 pixels per frame
this.velY = 2;
this.leftBorder = 0;
this.rightBorder = Crafty.viewport.width;
this.grade = "f"

	if (Game.level == 1 || Game.level == 3)
	{
	this.bind("EnterFrame", this.doMotion);
	}
	else if (Game.level == 2)
	{
	this.bind("EnterFrame", this.doMotion2);
	}
this.bind("EnterFrame", this.pausePlay);
this.onHit('bullet', function(data) {
this.health -= 10;
bullet = data[0].obj;
bullet.destroy();
Game.shoot = true;
});
this.initHealth = 200;
this.health = this.initHealth;
	},

doMotion: function(frameData){
	
	this.x = this.x + this.velX

		if (this.x + this.w > this.rightBorder){
		this.x  = this.rightBorder - this.w;
		this.velX = - this.velX ;
		}

		if (this.x < 0){
		this.x = 0;
		this.velX = - this.velX;
		}			
},

doMotion2: function(frameData)
{
	this.x = this.x + this.velX
	this.y = this.y + this.velY
		if (this.x + this.w > this.rightBorder)
		{
			this.velX = -this.velX;
		}
		else if (this.x + 40 < Crafty.viewport.width/2 && this.velY > 0)
		{
			this.velY = -this.velY;
		}
		else if (this.x < 0)
		{
			this.velX = -this.velX;
		}
		else if (this.y < 0)
		{
			this.velY = -this.velY;
		}
},

pausePlay: function()
{
	if (this.health == this.initHealth/2)
	{
		this.health -= 10;
		Game.pause = true;
		this.grade = "c";
		if (Game.level == 2)
		{
			this.unbind("EnterFrame", this.doMotion2);
		}
		else
		{
			this.unbind("EnterFrame", this.doMotion);
		}
		
		
		this.origin("center");
		this.tween({rotation: 360}, 2000);
		this.timeout(function(){
		if (Game.level == 2)
		{
			this.bind("EnterFrame", this.doMotion2);
		}
		else
		{
			this.bind("EnterFrame", this.doMotion);
		}
			Game.pause = false;
		}, 2000);
	}
		//Crafty("bullet").each(function() { this.destroy(); });
	
},

  
});




Crafty.c('Grade', {

init: function() {

this.requires('Actor, Gravity');
this.bind("EnterFrame", this.gone);
this.gravity();
},


gone: function() {
if (this.y > Crafty.viewport.height)

this.destroy();} 
});

Crafty.c('A', {

init: function() {

this.requires('Actor, Gravity, spr_a');
this.gravity();
this.gravityConst(0.1);
},
})

Crafty.c('Player', {

init: function() {

this.requires('Actor, Collision, Twoway, spr_player, Tween')
.twoway(10, 0)
.onHit('Grade', function() {

this.health -= 10
	
	if (this.health === 0) 
	{
	
	Crafty.removeEvent(this, Crafty.stage.elem, "mousedown", this.shoot);
	this.removeComponent('Twoway');
	Crafty.audio.stop('background');
	Crafty.audio.play('gameover');
	this.tween({alpha: 0.0}, 1000);
	this.timeout(function(){ Crafty.scene('GameOver')}, 2000);	
	}
});
this.health = 30;
this.bind("EnterFrame", this.stopAtEdge);

},
stopAtEdge: function() {
	if (this.x + this.w > Crafty.viewport.width)
	{
	this.x = Crafty.viewport.width - this.w;
	}
	else if (this.x < 0)
	{
	this.x = 0;
	}
}
});


Crafty.c('bullet', {

init: function() {

this.requires('Actor, Collision, spr_bullet');

this.v = 10;

this.bind("EnterFrame", function() {

this.y -= this.v;

	if (this.y < 0)
	{
	this.destroy();
	Game.shoot = true;
	}
});



}
});

Crafty.c('star', {

init: function() {
this.requires('Gravity, Actor, spr_star');
this.gravityConst(0.05);
this.z = 1;
this.gravity();
this.bind("EnterFrame", this.gone);
},

gone: function() {
if (this.y > Crafty.viewport.height)
{
this.destroy();
} 
}
});





