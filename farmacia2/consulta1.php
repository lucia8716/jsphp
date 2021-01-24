<?php
function conectar1()
{

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
}

function conectar2()
{
    require_once "conectar_bd.php";
    $controlmedicamentos = 'SELECT * from medicamentos where referencia ="' . $_POST['referencia'] . '";';
    $resultado = mysqli_query($conexion, $controlmedicamentos) or die("Problemas en el select" . mysqli_error($conexion));
    if (mysqli_num_rows($resultado) > 0) { // La variable $conexion proviene del archivo conectar_bd.php

        echo '1';
    } else {
        echo '0';
    }
    mysqli_close($conexion);
}

if (isset($_POST['funcion']) && !empty($_POST['funcion'])) { //comprobamos que exista ese GET y que no este vacío.
    $funcion = intval($_POST['funcion']); //Asignamos una variable a su contenido y de paso comprobamos que sólo sea numérica.

    if ($funcion == 1) {
        conectar1();
    }

    if ($funcion == 2) {
        conectar2();
    }
}
