Crafty.scene('Loading', function(){
Crafty.load([ prof, 'assets/fail.jpg', 'assets/player.png', 'assets/sky.jpg', 
'assets/explosion.jpg', 'assets/explosion.mp3']
, function(){

//console.log(prof);
Crafty.sprite(16, prof, {
spr_prof: [0, 0, 5, 5]
});

Crafty.sprite(16, 'assets/explosion.jpg', {
spr_explosion: [0, 0, 5, 5]
});

Crafty.sprite(16, 'assets/fail.jpg', {
spr_fail: [0, 0, 2, 2]
});

Crafty.sprite(16, 'assets/player.png', {
spr_player: [0, 0, 5, 5]
});

Crafty.sprite(16, 'assets/bullet.png', {
spr_bullet: [0, 0, 1, 1]
});


Crafty.audio.add({

explosion: [ 'assets/explosion.mp3' ]
});

Crafty.background('url(assets/sky.jpg)');

Crafty.scene('Level1');
}, 

function() {}, 

function(e) {console.log(e)})
})

Crafty.scene('Level1', function() {

var professor = Crafty.e('Prof')
.at(21,0)
.bind("EnterFrame", function(){

	

	if (Math.random() < 0.1) {
	
	 Crafty.e('Fail')
	.at(professor._x/Game.map_grid.tile.width, 5);
	}
	
	if (this.health === 0) {
	
	var explosion= Crafty.e('spr_explosion, Actor, Tween')
	.attr({ w: Game.map_grid.tile.width * 5, h: Game.map_grid.tile.height * 5})
	.at(professor._x/Game.map_grid.tile.width, 0);
	
	Crafty.audio.play('explosion');
	
	this.destroy();
	
	explosion.tween({alpha: 0}, 1000); 
	
	Crafty.removeEvent(player, Crafty.stage.elem, "mousedown", player.shoot);
	
	setTimeout(function() { Crafty.scene("Level2"); }, 5000);
	}
});



var player= Crafty.e('Player')
.at(21, 27);

player.shoot = function() {

Crafty.e("bullet")
.at(player._x/Game.map_grid.tile.width, player._y/Game.map_grid.tile.height);
};

Crafty.addEvent(player, Crafty.stage.elem, "mousedown", player.shoot);

 

});

Crafty.scene('Level2', function() {

var professor = Crafty.e('Prof')
.at(21,0)
.bind("EnterFrame", function(){

	

	if (Math.random() < 0.1) {
	
	 Crafty.e('Fail')
	.at(professor._x/Game.map_grid.tile.width, 5);
	}
	
	if (this.health === 0) {
	
	var explosion= Crafty.e('spr_explosion, Actor, Tween')
	.attr({ w: Game.map_grid.tile.width * 5, h: Game.map_grid.tile.height * 5})
	.at(professor._x/Game.map_grid.tile.width, 0);
	
	Crafty.audio.play('explosion');
	
	this.destroy();
	
	explosion.tween({alpha: 0}, 1000); 

	}
});



var player= Crafty.e('Player')
.at(21, 27);
Crafty.addEvent(this, Crafty.stage.elem, "mousedown", function(e) {
if (Game.shoot)
{

Crafty.e("bullet")
.at(player._x/Game.map_grid.tile.width, player._y/Game.map_grid.tile.height);
Game.shoot = false;
}
}); 

})


