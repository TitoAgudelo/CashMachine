<?php
    
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $cash = $request->param1;
    
	$result = array();
	$notes = array(100, 50, 20, 10);
	$count = 0;
	
	if($cash < 10 || ($cash % 10) > 0){
		echo "throw InvalidArgumentException";
	} 
	else {
		do {
			if(($cash / $notes[$count]) < 1) {
				++$count;
				continue;
			};
			$result[$notes[$count]] = floor($cash / $notes[$count]);
			$cash = $cash % $notes[$count];
			++$count;
		}

		while($cash > 0);
		foreach($result as $note => $position)
		{
			echo $position . ' notes of ' . $note . ', ';
		}
	}
?>