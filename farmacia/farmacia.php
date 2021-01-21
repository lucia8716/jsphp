<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="farmacia.css">
    <script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
    <link rel="stylesheet" href="toast.css">
    <script src="toastr.js"></script>

    <script>
        $(document).ready(function() {
            $('#btn1').click(function() {
                var datos = $('#form1').serialize();

                alert(datos);
                return false;
                $.ajax({
                    type: "POST",
                    url: "iniciarss.php",
                    data: datos,
                    dataType: "dataType",
                    success: function(response) {

                    }
                });

            });

        });
    </script>

    <title>Document</title>
</head>

<body>


    <div class="dv" id="di1">
        <img id="ima1" src="1.jpg">

        <p>
        <form id="form1" method="POST" action="">
            <input id="i1" type="text" name="nombre" required placeholder="Nombre">
            <input id="i2" type="password" name="clave" required placeholder="Contraseña">
            <button id="btn1" type="submit" name="boton1" onclick="loging()">INICIAR</button>
        </form>
        </p>
    </div>




    <script src="farmacia.js" type="text/javascript"></script>
</body>

</html>