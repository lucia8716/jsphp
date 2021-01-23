<?php

require_once "conectar_bd.php";

$registro = 'INSERT into coches values ("' . $_POST['matricula'] . '","' . $_POST['marca'] . '","' . $_POST['modelo'] . '","' . $_POST['color'] . '","' . $_POST['nombre'] . '","' . $_POST['apellido_1'] . '","' . $_POST['apellido_2'] . '","' . $_POST['email'] . '",1)';
$resultado = mysqli_query($conexion, $registro) or die("Problemas en el select" . mysqli_error($conexion));

mysqli_close($conexion);
