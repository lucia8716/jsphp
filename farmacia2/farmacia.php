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
            <button class="bton" id="btn3" type="button" name="boton3" onclick="aventas()">Venta de articulos</button>
            <button class="bton" id="btn4" type="button" name="boton4" onclick="">Pedidos de articulos</button>
        </p>

    </div>


    <div class="dv" id="di3">
        <img id="ima1" src="1.jpg">


        <p>
            <input id="i3" type="text" name="referencia" required placeholder="Nº Referencia" minlength="12" maxlength="12">
            <button class="bton" id="btn5" type="button" name="boton5" onclick="compramedicamentos()">Compra Medicamentos</button>
            <button class="bton" id="btn6" type="button" name="boton6" onclick="volve3()">Salir</button>
            <button class="bton" id="btn7" type="button" name="boton7" onclick="listadostock()">Listado de stock</button>
        </p>

    </div>


    <div class="dv" id="di4">
        <img id="ima1" src="1.jpg">


        <p>
            <label>Nº referencia</label><input id="i4" type="text" name="referencia" readonly>
            <label>Farmaceutica</label><input id="i5" type="text" name="farmaceutica" readonly>
            <label>Nombre</label><input id="i6" type="text" name="nombre" readonly>
            <label>Precio de Compra</label><input id="i7" type="number" name="precio_compra" readonly>
            <label>Precio de Venta</label><input id="i8" type="number" name="precio_venta" readonly>
            <label>Unidades en Stock</label> <input id="i9" type="number" name="unidades" readonly>
            <label>Unidades de Compra</label> <input id="i16" type="number" name="unidades_compra" required placeholder="unidades" minlength="1" maxlength="4" step="0">
            <button class="bton" id="btn8" type="button" name="boton8" onclick="comprarunidades()">Comprar</button>
            <button class="bton" id="btn9" type="button" name="boton9" onclick="volver()">Salir</button>
        </p>

    </div>


    <div class="dv" id="di5">
        <img id="ima1" src="1.jpg">


        <p>
            <input id="i10" type="text" name="referencia" readonly>
            <input id="i11" type="text" name="farmaceutica" required placeholder="farmaceutica" minlength="2" maxlength="20">
            <input id="i12" type="text" name="nombre" required placeholder="nombre" minlength="2" maxlength="15">
            <input id="i13" type="number" name="precio_compra" required placeholder="precio compra" min="0.01" step="0.01">
            <input id="i14" type="number" name="precio_venta" required placeholder="precio venta" min="0.01" step="0.01">
            <input id="i15" type="number" name="unidades" required placeholder="unidades" step="0" min="1" max="1000" step="0">
            <button class="bton" id="btn10" type="button" name="boton10" onclick="comprarunidades2()">Comprar</button>
            <button class="bton" id="btn11" type="button" name="boton11" onclick="volver()">Salir</button>
        </p>

    </div>


    <div class="dv" id="di8">
        <p>

            <button class="bton" id="btn12" type="button" name="boton12" onclick="volve2()">Salir</button>
        </p>
    </div>
    <div id="di6">
        <table id="tabla">
            <thead>
                <tr>
                    <th id="t1">Nº Ref</th>
                    <th id="t2">Farmaceutica</th>
                    <th id="t3">Nombre</th>
                    <th id="t4">Precio de Compra</th>
                    <th id="t5"> Precio de Venta</th>
                    <th id="t6">Stock</th>
                </tr>
            </thead>
        </table>
    </div>
    <div id="di7">
        <table id="tabla2">
            <thead id="mostrar">
                <tr>
                    <th id="ma"></th>
                    <th id="mar"></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
        </table>
    </div>

    <div class="dv" id="di9">
        <img id="ima1" src="1.jpg">


        <p>
            <input id="i17" type="text" name="referencia" placeholder="Numero de referencia del medicamento" required maxlength="12">
            <button class="bton" id="btn13" type="button" name="boton13" onclick="ventas()">Venta</button>
            <button class="bton" id="btn14" type="button" name="boton14" onclick="volve4()">Salir</button>
        </p>

    </div>


    <div class="dv" id="di10">
        <img id="ima1" src="1.jpg">

        <p>
            <input id="i18" type="text" name="referencia" readonly>
            <label>Unidades en Stock</label><input id="i20" type="text" name="cantidadactual" readonly>
            <input id="i19" type="number" name="cantidad" placeholder="Cantidad a comprar" required max="10000">
            <button class="bton" id="btn14" type="button" name="boton14" onclick="ventas2()">Venta</button>
            <button class="bton" id="btn15" type="button" name="boton15" onclick="volve5()">Salir</button>
        </p>

    </div>






    <link rel="stylesheet" href="farmacia.css">
    <script src="farmacia.js" type="text/javascript"></script>
</body>

</html>