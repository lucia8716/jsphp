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
        <div class="form-group">
            <input id="i1" type="text" placeholder="Nombre" required>
            <input id="i2" type="password" placeholder="Contraseña" required>
            <button id="b1" type="button" class="btn btn-primary btn-lg" maxlength="6" minlength="6" onclick="loging()">INICIAR</button>
        </div>
        </p>

    </div>

    <link rel="stylesheet" href="banco.css">
    <script src="banco.js" type="text/javascript"></script>

</body>

</html>