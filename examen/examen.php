<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="toast.css">
    <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
    <script src="toastr.js"></script>
    <script>
        $(document).ready(function() {});
    </script>
    <title>Document</title>
</head>

<body>


    <div class="dv" id="di1">
        <img id="ima1" src="1.jpg">


        <p>
            <input id="i1" type="text" name="nombre" required placeholder="Nombre" minlength="3">
            <input id="i2" type="password" name="clave" required placeholder="Contraseña" maxlength="6" minlength="6">
            <button class="bton" id="btn1" type="button" name="boton1" onclick="loging()">INICIAR</button>
        </p>

    </div>

    <div class="dv" id="di2">
        <img id="ima1" src="1.jpg">


        <p>
            <button class="bton" id="btn2" type="button" name="boton2" onclick="accesoacompramedicamentos()">Compra de articulos</button>
            <button class="bton" id="btn3" type="button" name="boton3" onclick="">Venta de articulos</button>
            <button class="bton" id="btn4" type="button" name="boton4" onclick="">Pedidos de articulos</button>
        </p>

    </div>


    <div class="dv" id="di3">
        <img id="ima1" src="1.jpg">


        <p>
            <input id="i3" type="text" name="nombre" required placeholder="Nombre" minlength="3">
            <input id="i4" type="text" name="clave" required placeholder="Contraseña" maxlength="6" minlength="6">
            <input id="i5" type="number" name="clave" required placeholder="numero" min="1" max="600">
            <button class="bton4" id="btn4" type="button" name="boton4" onclick="entradas()">Compra de articulos</button>


        </p>

    </div>




    <link rel="stylesheet" href="examen.css">
    <script src="examen.js" type="text/javascript"></script>
</body>

</html>