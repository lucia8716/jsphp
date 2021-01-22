<?php

$matricula = $_POST['matricula'];
require_once "conectar_bd.php";
$controldematricula = mysqli_query($conexion, 'SELECT * from coches where matricula ="' . $matricula . '"') or die("Error en la consulta");



if (mysqli_num_rows($controldematricula) > 0) {

    echo json_encode(array('success' => 1));
} else {

    echo json_encode(array('success' => 0));
}
