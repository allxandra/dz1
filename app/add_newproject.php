<?php

	$name = $_POST['form-input'];
	$data = array();

	$data['mes'] = 'OK';

	if ($name === ''{
		$data['text'] = 'Заполните имя!';
	}else{
		$data['text'] = 'Отлично!';
	}

	header("Content-Type: applacation/json");
	echo json_encode($data);
	exit;

?>