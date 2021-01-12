<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <?php
    $nombre = trim($_POST['nombre']);
    $contraseña = intval($_POST['clave']);

    // Como voy a trabajar con la base de datos, me debo conectar a ella. He creado un archivo para poder hacerlo -> conectar.php
    require_once "conectar_bd.php";

    $alta = 'INSERT INTO nombre  VALUES ("' . $nombre . '")';

    $controlusuario = 'SELECT nombre from nombre where nombre ="' . $nombre . '"';


    $resultado = mysqli_query($conexion, $controlusuario);



    if (mysqli_num_rows($resultado) > 0) { // La variable $conexion proviene del archivo conectar_bd.php

        echo '<script> alert("mario");
        window.location= "parking.html";

        </script>';
    } else {
        echo '<script> alert("no existe usuario");
        window.location= "parking.html"</script>';
    }

    // Cierro la conexión con la Base de datos por si quisieran operar con la BD. Así no bloqueamos el recurso.
    mysqli_close($conexion);



    ?>

</body>

</html>