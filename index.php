<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<link rel="shortcut icon" href="./styles/favicon.png" />
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
	<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
	<script type="text/javascript" src="./js/compile.js"></script>
	<script type="text/javascript" src="./js/tab.js"></script>
	<title>Algo Analyst</title>
</head>

<body>
	<center>
		<h1>Algo Analyst</h1>
	</center>
	<div class="container">
		<form action="compile.php" method="post" id="form">
			Select Language:
			<select name="language" id="language">
				<option value="c">C</option>
				<option value="cpp">C++</option>
				<option value="java">Java</option>
				<option value="python2.7">Python</option>
				<option value="python3.2">Python3</option>
			</select>
			<br />
			<div class="row">
				<div class="col-xl-8">
					<strong>Enter Your code here:<br /></strong>
					<textarea name="code" rows=10 cols=70 onkeydown=insertTab(this,event) id="code"></textarea><br />
					<span id="errorCode" class="error"></span><br />
					<strong>Sample Input please:<br /></strong>
					<textarea name="input" rows=7 cols=70 id="input"></textarea><br /><br />
					<input type="submit" value="Submit" id="submit">
					<input type="reset" value="Reset"><br />
				</div>
				<div class="col-xl-4">
					<strong>Output:</strong>
					<span id="output"></span>
				</div>
			</div>
		</form>
	</div>
</body>

</html>