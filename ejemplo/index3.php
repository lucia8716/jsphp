<!DOCTYPE html>
<html lang="es">
    <meta charset="UTF-8">
	<title>Consultar regsitro en Base de Datos</title>
</head>
<body>    
        <form action="comprobar.php" method="post">
            <fieldset style="margin-left:10% ; width:80%">
                <legend>Datos personales</legend>
                <input type="text" name="ident" id="ident" placeholder="Ident..." maxlength="4" size="4" tabindex="1" pattern="[0-9]{4}" autofocus required/>

                <!--El resto de los campos los voy a editar puesto que las consultas las voy a realizar utilizando solo el campo ident

                <input type="text" name="nombre" id="nombre" placeholder="Nombre..." maxlength="20" size="20" tabindex="2" pattern="[A-Za-z]{2,20}" required/>
                <input type="text" name="ape1" id="ape1" placeholder="Primer Apellido..." maxlength="20" size="20" pattern="[A-Za-z]{2,20}" tabindex="3" required/>
                <input type="text" name="ape2" id="ape2" placeholder="Segundo Apellido..." maxlength="20" size="20" pattern="[A-Za-z]{2,20}" tabindex="4" required /> -->

                <input type="submit" value="ENVIAR" name="btSubmit" tabindex="5"/>
                <input type="button" value=LISTAR" name=listar" tabindex="6"/>
            </fieldset>
        </form>
            
</body>
</html>