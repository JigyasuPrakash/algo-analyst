<?php
	$CC="python3";
	$code=$_POST["code"];
	$filename_code="main.py";
	$filename_in="input.txt";
	$filename_error="error.txt";
	$command=$CC." ".$filename_code;
	$command_error=$command." 2>".$filename_error;
	$response = "";

	for ($j = 1; $j < 6; $j++) {
		$input = "";
		$n = pow(10, $j);
		for ($i = 0; $i < $n; $i++) {
			$input .= rand(0, $n*2)."\n";
		}
	
		$file_code = fopen($filename_code, "w+");
		fwrite($file_code, $code);
		fclose($file_code);
		$file_in = fopen($filename_in, "w+");
		fwrite($file_in, $input);
		fclose($file_in);
		exec("chmod 777 $filename_error");
		shell_exec($command_error);
		$error = file_get_contents($filename_error);
		
		if (trim($error) == "") {
	
			$start = microtime(true);
	
			if (trim($input) == "") {
				$output = shell_exec($command);
			} else {
				$command = $command . " < " . $filename_in;
				$output = shell_exec($command);
			}
		
			$end = microtime(true);
			$exeTime = round(($end - $start), 3);
		
			$response = $response.$output."#_#".$exeTime."##__##";
		} else {
			echo "$error";
			break;
		}
	
		exec("rm $filename_code");
		exec("rm *.txt");
	}
	
	echo $response;
?>