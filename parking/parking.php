<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="parking.css">
    <script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
    <link rel="stylesheet" href="toast.css">
    <script src="toastr.js"></script>
    <script src="parking.js" type="text/javascript"></script>

    <script>
        $(document).ready(function() {


        });
    </script>


    <title>Document</title>
</head>

<body>
    <div id="di5">
        <img id="ima1" src="2.png">
    </div>


    <div class="dv" id="di1">
        <img id="ima1" src="1.png">
        <p>
        <form method="POST" action="">
            <input id="i1" type="text" name="nombre" required placeholder="Nombre">
            <input id="i2" type="password" name="clave" required placeholder="Contraseña" minlength="6" maxlength="6">
            <button id="button1" type="submit" name="boton1" onclick="loging()"><img id="ima2" src="ope.jpg"></button>
        </form>
        </p>
    </div>

    <div class="dv" id="di2">
        <img id="ima1" src="1.png">

        <p>

            <button id="button2" onclick="entrada()">Entradas</button>
            <button id="button3" onclick="salidas1()">Salidas</button>
            <button id="button4" onclick="consultar()">Consultas</button>
        </p>
        <br><br>
        <label id="l1">Nº Coches en parking</label><input id="i12" type="number" readonly>

    </div>



    <?php

    //echo '<script type="text/javascript">$("#di2").hide();</script>';
    if (isset($_POST['boton1'])) {
        $nombre = $_POST['nombre'];
        $contrasena = $_POST['clave'];
        require_once "conectar_bd.php";
        $controlusuario = 'SELECT * from usuarios where nombre ="' . $nombre . '" and contrasena =' . $contrasena . '';
        $resultado = mysqli_query($conexion, $controlusuario) or die("Problemas en el select" . mysqli_error($conexion));

        $controldenombre = mysqli_query($conexion, 'SELECT * from usuarios where nombre ="' . $nombre . '"') or die("Error en la consulta");


        if (mysqli_num_rows($controldenombre) > 0) {
            if (mysqli_num_rows($resultado) > 0) { // La variable $conexion proviene del archivo conectar_bd.php

                echo '<script type="text/javascript">
            toastr.options = {"positionClass": "toast-top-center","timeOut": "1200",}
            toastr.success("Usuario conectado, Cargando pagina")
            document.getElementById("di1").setAttribute("style","display:none;");
            document.getElementById("di2").setAttribute("style","display:block;");
                 
            </script>';
            } else {
                echo '<script type="text/javascript">toastr.warning("Contraseña incorrecta")</script>';
            }
        } else {
            echo '<script type="text/javascript">toastr.warning("Usuario no registrado")</script>';
        }
        mysqli_close($conexion);
    }
    ?>


</body>

</html>