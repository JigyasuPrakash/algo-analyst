<?php
	$CC="javac";
	$out="java Main";
	$code=$_POST["code"];
	$filename_code="main.java";
	$filename_in="input.txt";
	$filename_error="error.txt";
	$runtime_file="runtime.txt";
	$executable="*.class";
	$command=$CC." ".$filename_code;	
	$command_error=$command." 2>".$filename_error;
	$runtime_error_command=$out." 2>".$runtime_file;
	$response = "";

	for ($j = 1; $j < 4; $j++) {
		$input = "";
		$n = pow(100, $j);
		$input .= $n."\n";
		for ($i = 0; $i < $n; $i++) {
			$input .= rand(0, $n*2)."\n";
		}

		$file_code=fopen($filename_code,"w+");
		fwrite($file_code,$code);
		fclose($file_code);
		$file_in=fopen($filename_in,"w+");
		fwrite($file_in,$input);
		fclose($file_in);
		exec("chmod 777 $executable"); 
		exec("chmod 777 $filename_error");	

		shell_exec($command_error);
		$error=file_get_contents($filename_error);

		if(trim($error)==""){

			$start = microtime(true);

			if(trim($input)==""){
				shell_exec($runtime_error_command);
				$runtime_error=file_get_contents($runtime_file);
				$output=shell_exec($out);
			}else{
			shell_exec($runtime_error_command);
			$runtime_error=file_get_contents($runtime_file);
			$out=$out." < ".$filename_in;
			$output=shell_exec($out);
		}

		$end = microtime(true);
		$exeTime = round(($end-$start), 3);

		$response = $response.$output."#_#".$exeTime."##__##";	
	}else if(!strpos($error,"error")){
		echo "<pre>$error</pre>";
		if(trim($input)==""){
			$output=shell_exec($out);
		}else{
			$out=$out." < ".$filename_in;
			$output=shell_exec($out);
		}
		echo "<pre>$output</pre>";
	}else{
		echo "<pre>$error</pre>";
	}
	exec("rm $filename_code");
	exec("rm *.txt");
	exec("rm $executable");
}
echo $response;
?>