<?php
function conectar1()
{

    require_once "conectar_bd.php";
    $controlusuario = 'SELECT nif from usuarios where NIF ="' . $_POST['NIF'] . '"';
    $resultado1 = mysqli_query($conexion, $controlusuario) or die("Problemas en el select" . mysqli_error($conexion));
    $añadir = "insert into usuarios values('$_POST[NIF]','$_POST[nombre]','$_POST[Apellido_1]','$_POST[Apellido_2]','$_POST[Direccion]','$_POST[poblacion]','$_POST[cp]','$_POST[Provincia]','$_POST[telefono]','$_POST[mail]','$_POST[genero]','$_POST[estado_civil]','$_POST[hijos]','$_POST[estado_laboral]','$_POST[Vivienda]','$_POST[coche]');";




    if (mysqli_num_rows($resultado1) > 0) {
        echo '0';
    } else {
        echo '1';
        mysqli_query($conexion, $añadir) or die("Problemas en el select" . mysqli_error($conexion));
    }


    mysqli_close($conexion);
}






if (isset($_POST['funcion']) && !empty($_POST['funcion'])) { //comprobamos que exista ese GET y que no este vacío.
    $funcion = intval($_POST['funcion']); //Asignamos una variable a su contenido y de paso comprobamos que sólo sea numérica.

    if ($funcion == 1) {
        conectar1();
    }
}
