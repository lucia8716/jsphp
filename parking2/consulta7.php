<?php

require_once "conectar_bd.php";
$actualizacionestancia = 'select * from coches';
$busqueda = mysqli_query($conexion, $actualizacionestancia) or die("Problemas en el select" . mysqli_error($conexion));
$arrayresultados = mysqli_fetch_assoc($busqueda);
$json = json_encode($arrayresultados, JSON_UNESCAPED_UNICODE);
echo $json;
mysqli_close($conexion);
