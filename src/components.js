// The Grid component allows an element to be located
// on a grid of tiles
Crafty.c('Grid', {
init: function() {
this.attr({
w: Game.map_grid.tile.width,
h: Game.map_grid.tile.height
})
},
 
// Locate this entity at the given position on the grid
at: function(x, y) {
if (x === undefined && y === undefined) {
return { x: this.x/Game.map_grid.tile.width, y: this.y/Game.map_grid.tile.height }
} else {
this.attr({ x: x * Game.map_grid.tile.width, y: y * Game.map_grid.tile.height });
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

this.requires('Actor, Collision, spr_prof');

this.v = 5;  // 5 pixels per frame
this.leftBorder = 0;
this.rightBorder = Crafty.viewport.width;
this.bind("EnterFrame", this.doMotion);
this.onHit('bullet', function(data) {
this.health -= 10;
bullet = data[0].obj;
bullet.destroy();
Game.shoot = true;
});
this.health = 30;
	},

doMotion: function(frameData){
this.x = this.x + this.v 

	if (this.x + this.w > this.rightBorder){
	this.x  = this.rightBorder - this.w;
	this.v = - this.v ;
	}

	if (this.x<0){
	this.x = 0;
	this.v = - this.v;
	}
	
	
  }

  
});




Crafty.c('Fail', {

init: function() {

this.requires('Actor, spr_fail, Gravity');
this.bind("EnterFrame", this.gone);
this.gravity();
},


gone: function() {
if (this.y > Crafty.viewport.height)

this.destroy();} 
});

Crafty.c('Player', {

init: function() {

this.requires('Actor, Collision, Twoway, spr_player')
.twoway(10, 0)
.onHit('Fail', function() {

this.health -= 10
	
	if (this.health === 0) {

	this.destroy(); }
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




