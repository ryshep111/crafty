<!DOCTYPE html>
<?PHP
header( 'Expires: Sat, 26 Jul 1997 05:00:00 GMT' );
header( 'Last-Modified: ' . gmdate( 'D, d M Y H:i:s' ) . ' GMT' );
header( 'Cache-Control: no-store, no-cache, must-revalidate' );
header( 'Cache-Control: post-check=0, pre-check=0', false );
header( 'Pragma: no-cache' );

?>
<html>
<head>
<script src="lib/crafty-min.js"></script>
<script src="src/game.js"></script>
<script src="src/components.js"></script>
<script src="src/scenes.js"></script>
<script>

function onClick(prof)
{
	var table = document.getElementById('table');
	var div = document.getElementById('div');
	document.body.removeChild(table);
	document.body.removeChild(div);
	Crafty.audio.stop("background");
	Game.start();
}
function playMusic()
{		
		Crafty.audio.add({
		background: [ 'assets/finalD.mp3']
		})
		Crafty.audio.play('background', -1);
	
}

window.addEventListener('load', playMusic());
</script>
</head>
<body>
<?php
$f = fopen("C:/xampp/htdocs/crafty/HighScore.txt", "r");

?>
<div id= 'div' align= 'center'>
<img src= "assets/Aced.png">
</div>
<table id= "table" align= "center">
<tr>
<td colspan = 5 align = 'center'>High Score: <?php echo fgets($f); fclose($f); ?></td>
</tr>
<tr>
<td><button value = "assets/teate.jpg" onclick= "onClick(this)"><img src = "assets/teate.jpg"></button></td>
<td><button value = "assets/benton.jpg" onclick= "onClick(this)"><img src = "assets/benton.jpg"></button></td>
<td><button value = "assets/rad.jpg" onclick= "onClick(this)"><img src = "assets/rad.jpg"></button></td>
<td><button value = "assets/anne.jpg" onclick= "onClick(this)"><img src = "assets/anne.jpg"></button></td>
<td><button value = "assets/altaii.jpg" onclick= "onClick(this)"><img src = "assets/altaii.jpg"></button></td>
</tr>
<tr>
<td colspan = 5 align = 'center'>Click a Professor to Start</td>
</tr>
<tr>
<td colspan = 5 align = 'center'>Move with the Arrow Keys. Shoot with the Mouse Button.</td>
</tr>
<tr>
<td colspan = 5 align = 'center'>Get the 'A' at the End of Each Level! </td>
</tr>
</table>
</body>
</html>