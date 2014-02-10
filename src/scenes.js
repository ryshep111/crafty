Crafty.scene('Loading', function(){
Crafty.load([ prof, 'assets/fail.png', 'assets/player.png', 'assets/sky.jpg', 
'assets/explosion.jpg', 'assets/explosion.mp3', 'assets/gameover.mp3']
, function(){

Crafty.sprite(16, 'assets/stars.png', {
spr_star: [0, 0, Game.map_grid.width, Game.map_grid.height]
});

Crafty.sprite(16, prof, {
spr_prof: [0, 0, 5, 5]
});

Crafty.sprite(16, 'assets/explosion.jpg', {
spr_explosion: [0, 0, 5, 5]
});

Crafty.sprite(16, 'assets/fail.png', {
spr_fail: [0, 0, 2, 2]
});

Crafty.sprite(16, 'assets/gradeC.png', {
spr_c: [0, 0, 2, 2]
});

Crafty.sprite(16, 'assets/gradeA.png', {
spr_a: [0, 0, 3, 4]
});

Crafty.sprite(16, 'assets/player.png', {
spr_player: [0, 0, 5, 5]
});

Crafty.sprite(16, 'assets/bullet.png', {
spr_bullet: [0, 0, 1, 1]
});


Crafty.audio.add({

explosion: [ 'assets/explosion.mp3' ],
gameover: [ 'assets/gameover.mp3']
});

Crafty.background('url(assets/stars.png)');

Crafty.scene('GetReady');
}, 

function() {}, 

function(e) {console.log(e)})
})

Crafty.scene('Level1', function() {

var moving= setInterval(function(){

Crafty.e('star')
.at(0, - Crafty.viewport.height);
console.log(Crafty("star").length);
}, 300);

var professor = Crafty.e('Prof')
.at(Crafty.viewport.width/2 - 40, 0)
.bind("EnterFrame", function(){


	if (Math.random() < 0.1 && Game.pause == false) {
	
		if (professor.grade == "f")
		{
		Crafty.e('Grade, spr_fail')
		.at(professor._x, professor._y + 5);
		}
		else
		{
		Crafty.e('Grade, spr_c')
		.at(professor._x, professor._y + 5);
		}
	}
	
	if (this.health === 0) {
	
	var explosion= Crafty.e('spr_explosion, Actor, Tween')
	.at(professor._x, professor._y)
	.attr({ w: Game.map_grid.tile.width * 5, h: Game.map_grid.tile.height * 5});
	
	Crafty.audio.stop("background");
	Crafty.audio.play('explosion');
	
	Crafty.e('A')
		.at(professor._x, professor._y + 5);
	this.destroy();
	
	explosion.tween({alpha: 0}, 1000); 
	
	Crafty.removeEvent(player, Crafty.stage.elem, "mousedown", player.shoot);
	Game.level = 2;
	
	setTimeout(function() { clearInterval(moving); Crafty.scene("GetReady"); }, 5000);
	}
	
	
});



var player= Crafty.e('Player')
.at(Crafty.viewport.width/2 - 40, Crafty.viewport.height - 80)
.bind("EnterFrame", function(){
	if (this.health === 0)
	{
	clearInterval(moving);
	}
});
player.shoot = function() {

if (Game.shoot = true && Game.pause == false)
{
	Crafty.e("bullet")
	.at(player._x, player._y);
}
};

Crafty.addEvent(player, Crafty.stage.elem, "mousedown", player.shoot);



});

Crafty.scene('Level2', function() {

var moving= setInterval(function(){

Crafty.e('star')
.at(0, - Crafty.viewport.height);
console.log(Crafty("star").length);
}, 300);
Crafty.audio.play("background", -1);
var professor = Crafty.e('Prof')
.at(Crafty.viewport.width/2 - 40, 0)
.bind("EnterFrame", function(){

	

	if (Math.random() < 0.1 && Game.pause == false) {
	
	 if (professor.grade == "f")
		{
		Crafty.e('Grade, spr_fail')
		.at(professor._x, professor._y + 5);
		}
		else
		{
		Crafty.e('Grade, spr_c')
		.at(professor._x, professor._y + 5);
		}
	}
	
	if (this.health === 0) {
	
	var explosion= Crafty.e('spr_explosion, Actor, Tween')
	.at(professor._x, professor._y)
	.attr({ w: Game.map_grid.tile.width * 5, h: Game.map_grid.tile.height * 5});
	
	Crafty.audio.stop("background");
	Crafty.audio.play('explosion');
	
	Crafty.e('A')
		.at(professor._x, professor._y + 5);
	this.destroy();
	
	explosion.tween({alpha: 0}, 1000); 
	
	Crafty.removeEvent(player, Crafty.stage.elem, "mousedown", player.shoot);
	Game.level = 3;
	setTimeout(function() { clearInterval(moving); Crafty.scene("GetReady"); }, 5000);
	}
});



var player= Crafty.e('Player')
.at(Crafty.viewport.width/2 - 40, Crafty.viewport.height - 80 )
.bind("EnterFrame", function(){
	if (this.health === 0)
	{
	clearInterval(moving);
	}
});
player.shoot = function() {
if (Game.shoot = true && Game.pause == false)
{
Crafty.e("bullet")
.at(player._x, player._y);
}
};

Crafty.addEvent(player, Crafty.stage.elem, "mousedown", player.shoot);


 

});

Crafty.scene('Level3', function() {

var moving= setInterval(function(){

Crafty.e('star')
.at(0, - Crafty.viewport.height);
console.log(Crafty("star").length);
}, 300);

Crafty.audio.play("background", -1);
var professor = Crafty.e('Prof')
.at(Crafty.viewport.width/2 - 40, 0)
.bind("EnterFrame", function(){

	

	if (Math.random() < 0.1 && Game.pause == false) {
	
	 if (professor.grade == "f")
		{
		Crafty.e('Grade, spr_fail')
		.at(professor._x, professor._y + 5);
		}
		else
		{
		Crafty.e('Grade, spr_c')
		.at(professor._x, professor._y + 5);
		}
	}
	
	if (this.health === 0) {
	
	var explosion= Crafty.e('spr_explosion, Actor, Tween')
	.at(professor._x, professor._y)
	.attr({ w: Game.map_grid.tile.width * 5, h: Game.map_grid.tile.height * 5});
	
	Crafty.audio.stop("background");
	Crafty.audio.play('explosion');
	
	Crafty.removeEvent(player, Crafty.stage.elem, "mousedown", player.shoot);
	Crafty.e('A')
		.at(professor._x, professor._y + 5);
	this.destroy();
	
	explosion.tween({alpha: 0}, 1000); 

	}
});



var player= Crafty.e('Player')
.at(Crafty.viewport.width/2 - 40, Crafty.viewport.height - 80)
.bind("EnterFrame", function(){
	if (this.health === 0)
	{
	clearInterval(moving);
	}
});

player.shoot = function() {
if (Game.shoot == true && Game.pause == false )
{

Crafty.e("bullet")
.at(player._x, player._y);
Game.shoot = false;
}
}

Crafty.addEvent(player, Crafty.stage.elem, "mousedown", player.shoot);
})

Crafty.scene("GetReady", function ()
{
Crafty.e('2D, DOM, Text')
		.text('Level' + ' ' + Game.level)
		.attr({ x: 0, y: Game.height()/2 - 40, w: Game.width() })
		.textFont($text_css)
		.textColor('#FFCC33')
		.css("text-align", "center");
setTimeout(function(){Crafty.scene("Level"+Game.level)}, 3000);

})

Crafty.scene("GameOver", function ()
{

Crafty.e('2D, DOM, Text')
		.text('You flunked out you idiot! <br>' + 'Press any key to play again')
		.attr({ x: 0, y: Game.height()/2 - 40, w: Game.width() })
		.textFont($text_css)
		.textColor('#FF0000')
		.css("text-align", "center");
var delay = true;
setTimeout(function() { delay = false; }, 2000);

this.bind('KeyDown', function() {
    if (!delay){
	Crafty.audio.play("background", -1);
	Crafty.scene('Level'+ Game.level);
	}
});
},
function() {
this.unbind('KeyDown');
})






