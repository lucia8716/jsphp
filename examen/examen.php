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



        <p>

            <button class="bton" id="btn1" type="button" name="boton1" onclick="accesoaltas()">ALTAS</button>
            <button class="bton" id="btn2" type="button" name="boton2" onclick="bajas()">BAJAS</button>
            <button class="bton" id="btn3" type="button" name="boton3" onclick="modificaciones()">MODIFICACIONES</button>
            <button class="bton" id="btn4" type="button" name="boton4" onclick="consultas()">CONSULTAS</button>
        </p>

    </div>

    <div class="dv" id="di2">

        <p>
            <input id="i2" type="hidden" name="nifcompleto">
            <input id="i3" type="text" name="NIF" required placeholder="NIF" max="99999999">
            <input id="i4" type="text" name="Letra" readonly placeholder="letra" minlength="1">
            <button class="bton" id="btn6" type="button" name="boton6" onclick="calculoletra()">Calculo letra</button>
            <input id="i5" type="text" name="nombre" required placeholder="nombre" maxlength="20" minlength="2">
            <input id="i6" type="text" name="Apellido_1" required placeholder="Apellido 1" maxlength="20" minlength="2">
            <input id="i7" type="text" name="Apellido_2" required placeholder="Apellido 2" maxlength="20" minlength="2">
            <input id="i8" type="text" name="Direccion" required placeholder="Direccion 2" maxlength="30" minlength="3">
            <input id="i9" type="text" name="Poblacion" required placeholder="Poblacion" maxlength="15" minlength="2">
            <input id="i10" type="number" name="CodigoPostal" required placeholder="Codigo Postal" max="99999">
            <input id="i11" type="text" name="Provincia" required placeholder="Provincia" maxlength="15" minlength="2">
            <input id="i12" type="number" name="Telefono" required placeholder="Telefono" maxlength="9" minlength="9">
            <input id="i13" type="text" name="mail" required placeholder="email" minlength="3">
            GENERO<select name="select" id="s1">
                <option value="0" selected>-</option>
                <option value="H">Hombre</option>
                <option value="M">Mujer</option>
                <option value="O">Otro</option>
            </select>
            E.CIVIL<select name="select" id="s2">
                <option value="0" selected>-</option>
                <option value="S">Soltero</option>
                <option value="C">Casado</option>
                <option value="SE">Separado</option>
                <option value="D">Divorciado</option>
                <option value="P">PAreja</option>
            </select>
            HIJOS<select name="select" id="s3">
                <option value="0" selected>-</option>
                <option value="S">SI</option>
                <option value="N">NO</option>

            </select>

            E.LABORAL<select name="select" id="s4">
                <option value="0" selected>-</option>
                <option value="O">OCUPADO</option>
                <option value="D">NO</option>
                <option value="E">SI</option>
                <option value="N">NO</option>

            </select>
            </select>
            VIVIENDA<select name="select" id="s5">
                <option value="0" selected>-</option>
                <option value="S">SI</option>
                <option value="N">NO</option>

            </select>
            </select>
            COCHES<select name="select" id="s6">
                <option value="0" selected>-</option>
                <option value="S">SI</option>
                <option value="N">NO</option>

            </select>

            <button class="bton" id="btn5" type="button" name="boton5" onclick="altas()">AlTA</button>
            <button class="bton" id="btn5" type="button" name="boton5" onclick="salir()">SALIR</button>
        </p>

    </div>






    <link rel="stylesheet" href="examen.css">
    <script src="examen.js" type="text/javascript"></script>
</body>

</html>