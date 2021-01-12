<?php
    

    $ident=intval($_POST['ident']); // Convierto el valor a nmumérico porque en la tabla lo hemos definido como INT(4).

    
    // Como voy a trabajar con la base de datos, me debo conectar a ella. He creado un archivo para poder hacerlo -> conectar.php
    require_once "conectar_bd.php";
                

    // Configuro la consulta para observar si hay coincidencias

    $sql = 'SELECT * FROM clientes WHERE id="'.$ident.'"';

    $resultados=mysqli_query($conexion, $sql);  // La variable $conexion proviene del archivo conectar_bd.php

    echo '<br>' .  mysqli_num_rows($resultados); // Visualizo el nº de coincidencias en la búsqueda

    //Compruebo si ha habido coincidencias

    if(mysqli_num_rows($resultados) == 0){
        echo '<p style="margin-left:10%"> Identificador inexistente en la Base de datos </p>';
    }else{
        echo '<p style="margin-left:10%"> Identificador existe en la Base de datos </p>';
        
        $fila = mysqli_fetch_array($resultados);
                
            $Ident = $fila['id'];   //Indicamos los nombres de las columnas de la Tabla de Base de datos.
            $Nombre = $fila['nombre'];
            $Apel1 = $fila['apellido1'];
            $Apel2 = $fila['apellido2'];
            echo '<p>' . $Ident . ' '. $Nombre . ' '. $Apel1 . ' ' . $Apel2 . '</p>';
    }
    // Cierro la conexión con la Base de datos por si quisieran operar con la BD. Así no bloqueamos el recurso.
    mysqli_close($conexion);
?>
 