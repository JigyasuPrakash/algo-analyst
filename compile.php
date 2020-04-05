<?php
	$languageID=$_POST["language"];
	switch($languageID){
		case "c":{
			include("./compilers/c.php");
			break;
		}
		case "java":{
			include("./compilers/java.php");
			break;
		}
		case "python2.7":{
			include("./compilers/python27.php");
			break;
		}
		case "python3.2":{
			include("./compilers/python32.php");
			break;
		}
	}
?>
