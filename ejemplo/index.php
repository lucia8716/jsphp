<!DOCTYPE html>
<html lang="es">
    <meta charset="UTF-8">
	<title>Pasar datos HTML a PHP en el mismo</title>
</head>
<body>
    <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            if ($_POST['controlformulario'] == 'si') {
                if ($_POST['nombre'] != '') {
                    echo 'Hola ' . $_POST['nombre'];
                }else{
                    echo 'Ha olvidado poner su nombre';
                }
            }
        }else{
    ?>
        <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF'])?>" method="post">
            <!-- Utilizo la sentencia action= ... para indicar que hacemos referencia al mismo archivo-->
            <!-- Utilizo el método POST porque lo considero más seguro que el GET-->
            <input type="hidden" name="controlformulario" value="si" />
            <input type="text" placeholder="Nombre" name="nombre" value="" />
            <input type="submit" value="ENVIAR" />
        </form>
    <?php } ?>
    </body>
    </html>

</body>
</html>