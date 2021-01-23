<?php

require_once "conectar_bd.php";
$actualizacionestancia = 'UPDATE coches SET estancia =1 where matricula ="' . $_POST['matricula'] . '"';
mysqli_query($conexion, $actualizacionestancia) or die("Problemas en el select" . mysqli_error($conexion));
mysqli_close($conexion);
