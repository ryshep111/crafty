<!DOCTYPE html>
<html>
<head>

<script src="lib/crafty-min.js"></script>
<script src="src/game.js"></script>
<script src="src/components.js"></script>
<script src="src/scenes.js"></script>
<script>
window.addEventListener('load', Game.start);
</script>

</head>
<body>
<?php
$prof = $_POST['prof'];
echo $prof;
?>
<text type="hidden" value="<?php echo $prof ;?> " id="prof" /> 

</body>
</html>