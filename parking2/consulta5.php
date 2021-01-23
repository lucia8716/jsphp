<?php

require_once "conectar_bd.php";
$controlusuario = 'SELECT * from coches where matricula ="' . $_POST['matricula'] . '"';
$controlestancia = 'SELECT * from coches where matricula ="' . $_POST['matricula'] . '" and estancia =1';
$actualizacionestancia = 'UPDATE coches SET estancia =0 where matricula ="' . $_POST['matricula'] . '"';
$resultado = mysqli_query($conexion, $controlusuario) or die("Problemas en el select" . mysqli_error($conexion));
$resultado2 = mysqli_query($conexion, $controlestancia) or die("Problemas en el select" . mysqli_error($conexion));

if (mysqli_num_rows($resultado) > 0) {
    if (mysqli_num_rows($resultado2) > 0) { // La variable $conexion proviene del archivo conectar_bd.php

        echo '1';
        mysqli_query($conexion, $actualizacionestancia) or die("Problemas en el select" . mysqli_error($conexion));
    } else {
        echo '2';
    }
} else {
    echo '0';
}
mysqli_close($conexion);
