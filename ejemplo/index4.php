<!DOCTYPE html>
<html lang="es">
    <meta charset="UTF-8">
	<title>Alta de datos en una BD con PHP</title>
</head>
<body>    
        <form action="alta.php" method="post">
            <fieldset style="margin-left:10% ; width:80%">
                <legend>Datos personales</legend>
                <input type="text" name="ident" id="ident" placeholder="Ident..." maxlength="4" size="4" tabindex="1" pattern="[0-9]{4}" autofocus required/>
                <input type="text" name="nombre" id="nombre" placeholder="Nombre..." maxlength="20" size="20" tabindex="2" pattern="[A-Za-z]{2,20}" required/>
                <input type="text" name="ape1" id="ape1" placeholder="Primer Apellido..." maxlength="20" size="20" pattern="[A-Za-z]{2,20}" tabindex="3" required/>
                <input type="text" name="ape2" id="ape2" placeholder="Segundo Apellido..." maxlength="20" size="20" pattern="[A-Za-z]{2,20}" tabindex="4" required />

                <input type="submit" value="REALIZAR ALTA" name="btSubmit" tabindex="5"/>
            </fieldset>
        </form>
            
</body>
</html>