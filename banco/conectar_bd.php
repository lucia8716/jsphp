<?php
// Definición de los parámetros de conexión con la Base de Datos que llamaremos bdClientes
// La tabla de la Base de datos dbClientes la llamaré Clientes
// La tabla de clientes va a disponer de 4 campos que son id (único), nombre, apellido1 y apellido2
define('SERVIDOR', 'localhost');
define('USUARIO', 'root');
define('CONTRASENIA', '');
define('BASEDATOS', 'bbdd_banco');


//Realizamos la conexión con la Base de Datos
$conexion = mysqli_connect(SERVIDOR, USUARIO, CONTRASENIA, BASEDATOS);


// Controlamos si se ha producido un error a la hora de conectar con la BD. Se puede utilizar mysqli_connect ... or
if ($conexion === false) {
    die("ERROR: No se ha podido conectar con la Base de Datos " . mysqli_connect_error());
}
