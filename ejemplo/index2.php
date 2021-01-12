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
                <input type="text" name="nombre" placeholder="Nombre..." maxlength="20" size="20" tabindex="1" pattern="[A-Za-z]{2,20}" autofocus required/>
                <input type="text" name="ape1" placeholder="Primer Apellido..." maxlength="20" size="20" pattern="[A-Za-z]{2,20}" tabindex="2" required/>
                <input type="text" name="ape2" placeholder="Segundo Apellido..." maxlength="20" size="20" pattern="[A-Za-z]{2,20}" tabindex="3" required />
                <input type="submit" value="ENVIAR" name="btSubmit" tabindex="4"/>
            </fieldset>
        </form>
        <?php

            if(isset($_POST['btSubmit'])){
                if ($_SERVER["REQUEST_METHOD"] == "POST") {
                if ($_POST['nombre'] == '') {
                    echo 'Ha olvidado introducir su nombre'; // Como lo hemos definido como required, no hace falta si se quiere
                }else if($_POST['ape1']==''){
                    echo 'Ha olvidado introducir su primer apellido'; // Idem caso anterior
                }else if($_POST['ape2']==''){
                    echo 'Ha olvidado introducir su segundo apellido'; // Idem caso anterior
                }else{
                    echo '<p style="margin-left:10%"> Hola ' . $_POST['nombre']." " . $_POST['ape1']." " . $_POST['ape2'] . '</p>';
                    // En este caso, he optado por utilizar un párrafo, pero se puede utilizar cualquier elemento HTML tipo tabla,...
                }
            }
        }
    ?>
</body>
</html>