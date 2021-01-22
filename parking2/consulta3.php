<?php

require_once "conectar_bd.php";

$controlestancia = 'SELECT count(*) from coches where estancia =1;';
$resultado = mysqli_query($conexion, $controlestancia) or die("Problemas en el select" . mysqli_error($conexion));

$row = mysqli_fetch_array($resultado);

echo $row;
mysqli_close($conexion);
