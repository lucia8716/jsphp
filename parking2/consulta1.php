<?php

require_once "conectar_bd.php";
$controlusuario = 'SELECT * from usuarios where nombre ="' . $_POST['nombre'] . '" and contrasena =' . $_POST['contrasena'] . '';
$resultado = mysqli_query($conexion, $controlusuario) or die("Problemas en el select" . mysqli_error($conexion));
$controldenombre = mysqli_query($conexion, 'SELECT * from usuarios where nombre ="' . $_POST['nombre'] . '"') or die("Error en la consulta");

if (mysqli_num_rows($controldenombre) > 0) {
    if (mysqli_num_rows($resultado) > 0) { // La variable $conexion proviene del archivo conectar_bd.php

        echo '1';
    } else {
        echo '2';
    }
} else {
    echo '0';
}
mysqli_close($conexion);
