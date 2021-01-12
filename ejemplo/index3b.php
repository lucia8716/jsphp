<!DOCTYPE html>
<html lang="es">
    <meta charset="UTF-8">
	<title>Captura de datos en HTML y visualizción en PHP</title>
</head>
<body>

        <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF'])?>" method="post">
            <!-- Utilizo la sentencia action= ... para indicar que hacemos referencia al mismo archivo-->
            <!-- Utilizo el método POST porque lo considero más seguro que el GET-->
            <fieldset style="margin-left:10% ; width:80%">
                <legend>Datos personales</legend>
                <input type="text" name="ident" placeholder="Ident..." maxlength="4" size="4" tabindex="1" pattern="[0-9]{4}" autofocus required/>
                <input type="text" name="nombre" placeholder="Nombre..." maxlength="20" size="20" tabindex="2" pattern="[A-Za-z]{2,20}" required/>
                <input type="text" name="ape1" placeholder="Primer Apellido..." maxlength="20" size="20" pattern="[A-Za-z]{2,20}" tabindex="3" required/>
                <input type="text" name="ape2" placeholder="Segundo Apellido..." maxlength="20" size="20" pattern="[A-Za-z]{2,20}" tabindex="4" required />
                <input type="button" value="ENVIAR" name="btSubmit" tabindex="5" onclick="comprobacion"/>
            </fieldset>
        </form>
        <?php



                
            // ******Comprobación de que los datos recogidos son correctos. Lo edito para que no se visualice*****

            /*if(isset($_POST['btSubmit'])){
                if ($_SERVER["REQUEST_METHOD"] == "POST") {
                    $ident = trim($_POST['ident']); 
                    $nombre = trim($_POST['nombre']);
                    $ape1 = trim($_POST['ape1']);
                    $ape2 = trim($_POST['ape2']);

                    echo '<br>';
                    echo '<p style="margin-left:10%">' .$ident . ' '. $nombre . ' '. $ape1 . ' '. $ape2 .'</p>';
                }
            }*/

            //**************************************************


            
                
            

            function comprobacion(){

                // Voy a comprobar si existe en la base de datos y para ello, me debo conectar a la base de datos
                require_once "conectar_bd.php";

            // Configuro la consulta para observar si hay coincidencias

            $sql = 'SELECT * FROM Clientes';
            $resultados=mysqli_query($conexion, $sql);  // La variable $conexion proviene del archivo conectar_bd.php

            //Compruebo si ha habido coincidencias

            if(mysqli_num_rows($resultados) == 0){
                echo '<p style="margin-left:10%"> Identificador inexistente en la Base de datos </p>';
            }else{
                echo '<p style="margin-left:10%"> Identificador existe en la Base de datos </p>';
            }

        }
/*

        // Comprobación del dato recogido en la variable
        echo '<p style="margin-left:10%">' . $ident . '</p>';

        // Consulto en la Tabla de Base de Datos para saber si hay coincidencias
        $sql = 'SELECT * FROM Clientes';
        $resultados=mysqli_query($conexion, $sql);

        if(mysqli_num_rows($resultados) == 0){
            echo '<p style="margin-left:10%"> No hay registros </p>';
        }else{

            $fila = mysqli_fetch_array($resultados, MYSQLI_ASSOC);
                
            // almacenamiento de los datos de la BS en variables
            $Id = $fila['id'];
            $Nombre = $fila['nombre'];
            $Apel1 = $fila['ape1'];
            $Apel2 = $fila['ape2'];
            echo '<p>' . $Id . ' '. $Nombre . ' '. $Ape1 . ' ' . $Ape2 . '</p>';
        }
       
        */

        
        /* Visualización de datos en forma de tabla

        $sql = "SELECT * FROM Clientes WHERE id=$id";
        if($result = mysqli_query($link, $sql)){
            if(mysqli_num_rows($result) > 0){
                echo "<table>";
                echo "<thead>";
                echo "<tr>";
                echo "<th>Identif</th>";
                echo "<th>Nombre</th>";
                echo "<th>Apellido 1</th>";
                echo "<th>Apellido 2</th>";
                echo "</tr>";
                echo "</thead>";
                echo "<tbody>";
                while($row = mysqli_fetch_array($result)){
                    echo "<tr>";
                    echo "<td>" . $row['id'] . "</td>";
                    echo "<td>" . $row['nombre'] . "</td>";
                    echo "<td>" . $row['ape1'] . "</td>";
                    echo "<td>" . $row['ape2'] . "</td>";
                    echo "</tr>";
                }
                echo "</tbody>";                            
                echo "</table>";
                
                // Caso en el que no hay resultados
                mysqli_free_result($result);
            } else{
                echo "<p>No hay registros en la Tabla de Base de Datos</p>";
            }
        }*/
         
        // Cierro la conexión con la Base de datos por si quisieran operar con la BD. Así no bloqueamos el recurso.
        mysqli_close($conexion);

    ?>
</body>
</html>




<script>
        function f_comprobar(){
            var parametros = {
                    ident: document.getElementById("ident").value,
                    nombre: document.getElementById("nombre").value,
                    ape1: document.getElementById("ape1").value,
                    ape2: document.getElementById("ape2").value
            };

            $.ajax({
                data: parametros,
                url: "comprobar.php",
                method: "post",
                success: function(data) {
                    //alert('Datos dados de alta de forma correcta');
                }
            });
        }
</script>