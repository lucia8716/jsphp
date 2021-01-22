<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="parking.css">
    <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="toast.css">
    <script src="toastr.js"></script>
    <script>
        $(document).ready(function() {

            contar();

        });
    </script>


    <title>Document</title>
</head>


<body>
    <div id="di1">
        <img id="ima1" src="2.png">
    </div>


    <div class="dv" id="di2">
        <img id="ima1" src="1.png">
        <p>
            <input id="i1" type="text" name="nombre" required placeholder="Nombre">
            <input id="i2" type="password" name="contrasena" required placeholder="Contraseña" minlength="6" maxlength="6">
            <button id="button1" type="submit" name="boton1" onclick="loging()"><img id="ima2" src="ope.jpg"></button>
        </p>
    </div>

    <div class="dv" id="di3">
        <img id="ima1" src="1.png">
        <p>
            <button id="button2" onclick="entrada()">Entradas</button>
            <button id="button3" onclick="salidas1()">Salidas</button>
            <button id="button4" onclick="consultar()">Consultas</button>
        </p>
        <br><br>
        <label id="l1">Nº Coches en parking</label><input id="i12" readonly>

    </div>

    <div class="dv" id="di4">
        <img id="ima1" src="1.png">

        <p>
            <input id="i3" type="text" name="matricula" required placeholder="Numero de matricula" maxlength="7" minlength="7">
            <button id="button5" type="submit" name="boton5" onclick="matriculacion()">Comprobar</button>
            <button id="button8" onclick="volver3()">Salir</button>
        </p>
    </div>


    <div class="dv" id="di5">
        <img id="ima1" src="1.png">

        <p>

            <input id="i4" type="text" name="matricula" required placeholder="Numero de matricula" maxlength="7" minlength="7" readonly>
            <input id="i5" type="text" name="marca" required placeholder="Marca">
            <input id="i6" type="text" name="modelo" required placeholder="Modelo">
            <input id="i11" type="text" name="color" required placeholder="Color">
            <input id="i7" type="text" name="nombre" required placeholder="Nombre Propietario">
            <input id="i8" type="text" name="ape1" required placeholder="Apellido 1 Propietario">
            <input id="i9" type="text" name="ape2" required placeholder="Apellido 2 Propietario">
            <input id="i10" type="text" name="email" required placeholder="Email">

            <button id="button9" onclick="altanueva()">Registrar</button>

        </p>
    </div>
</body>

<script src="parking.js" type="text/javascript"></script>

</html>