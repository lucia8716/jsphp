<?php

require_once "conectar_bd.php";

$controlestancia = 'INSERT into coches values ("' . $_POST['nombre'] . '","' . $_POST['nombre'] . '","' . $_POST['nombre'] . '","' . $_POST['nombre'] . '","' . $_POST['nombre'] . '","' . $_POST['nombre'] . '",)';
$resultado = mysqli_query($conexion, $controlestancia) or die("Problemas en el select" . mysqli_error($conexion));

$cuenta = mysqli_fetch_row($resultado)[0];

echo $cuenta;
mysqli_close($conexion);
