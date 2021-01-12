<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    $ident = intval($_POST['ident']); // Convierto el valor a nmumérico porque en la tabla lo hemos definido como INT(4).
    $nombre = trim($_POST['nombre']);
    $ape1 = trim($_POST['ape1']);
    $ape2 = trim($_POST['ape2']);

    // Como voy a trabajar con la base de datos, me debo conectar a ella. He creado un archivo para poder hacerlo -> conectar.php
    require_once "conectar_bd.php";


    // Configuro la consulta para observar si hay coincidencias

    $sql = 'SELECT * FROM clientes WHERE id="' . $ident . '"';

    $resultados = mysqli_query($conexion, $sql);  // La variable $conexion proviene del archivo conectar_bd.php

    //Compruebo si ha habido coincidencias

    if (mysqli_num_rows($resultados) != 0) {
        echo '<p style="margin-left:10%"> Identificador existe en la Base de datos. No es posible dar de alta</p>';
    } else {
        $alta = 'INSERT INTO CLIENTES (id, nombre, apellido1, apellido2) VALUES ("' . $ident . '", "' . $nombre . '","' . $ape1 . '","' . $ape2 . '")';

        if (mysqli_query($conexion, $alta)) {
            echo '<script> alert("mario");
            window.location= "index4.php";

            </script>';
        } else {
            echo "Error: " . $sql . "<br>" . mysqli_error($conexion);
        }
    }

    // Cierro la conexión con la Base de datos por si quisieran operar con la BD. Así no bloqueamos el recurso.
    mysqli_close($conexion);


    ?>
</body>

</html>