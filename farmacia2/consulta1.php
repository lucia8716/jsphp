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

function conectar3()
{
    require_once "conectar_bd.php";
    $controlmedicamentos = 'SELECT * from medicamentos where referencia ="' . $_POST['referencia'] . '";';
    $resultado = mysqli_query($conexion, $controlmedicamentos) or die("Problemas en el select" . mysqli_error($conexion));
    if (mysqli_num_rows($resultado) > 0) { // La variable $conexion proviene del archivo conectar_bd.php

        $arraydatos = mysqli_fetch_assoc($resultado);

        echo json_encode($arraydatos, JSON_UNESCAPED_UNICODE);
    }
    mysqli_close($conexion);
}


function conectar4()
{
    require_once "conectar_bd.php";
    $cantidadactual = intval($_POST['unidades']);
    $cantidadcompra = intval($_POST['ucompras']);
    $resultado = $cantidadactual + $cantidadcompra;
    echo $resultado;

    mysqli_query($conexion, "update medicamentos set unidades =$resultado where referencia='" . $_POST['referencia'] . "'") or die("Problemas en el select" . mysqli_error($conexion));


    mysqli_close($conexion);
}



function conectar5()
{
    require_once "conectar_bd.php";
    $referencia = $_POST['referencia'];
    $nombre = $_POST['nombre'];
    $farmaceutica = $_POST['farmaceutica'];
    $precio_compra = $_POST['precio_compra'];
    $precio_venta = $_POST['precio_venta'];
    $unidades = intval($_POST['unidades']);
    mysqli_query($conexion, "insert into medicamentos values('$referencia','$farmaceutica','$nombre',$precio_compra,$precio_venta,$unidades)") or die("Problemas en el select" . mysqli_error($conexion));
    mysqli_close($conexion);
}


function conectar6()
{

    require_once "conectar_bd.php";
    $actualizacionestancia = 'select * from medicamentos';
    $busqueda = mysqli_query($conexion, $actualizacionestancia) or die("Problemas en el select" . mysqli_error($conexion));

    $htmltable = '';

    while ($arrayresultados = mysqli_fetch_assoc($busqueda)) {

        $htmltable .= '
            <tr>
                <th>' . $arrayresultados['referencia'] . '</th>
                <th>' . $arrayresultados['farmaceutica'] . '</th>
                <th>' . $arrayresultados['nombre'] . '</th>
                <th>' . $arrayresultados['precio_compra'] . '</th>
                <th>' . $arrayresultados['precio_venta'] . '</th>
                <th>' . $arrayresultados['unidades'] . '</th>
            </tr>
        ';
    };
    $json = json_encode($htmltable, JSON_UNESCAPED_UNICODE);
    echo $json;
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
    if ($funcion == 3) {
        conectar3();
    }

    if ($funcion == 4) {
        conectar4();
    }
    if ($funcion == 5) {
        conectar5();
    }

    if ($funcion == 6) {
        conectar6();
    }
}
