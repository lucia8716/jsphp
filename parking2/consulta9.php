<?php

require_once "conectar_bd.php";
$actualizacionestancia = 'select * from coches where estancia=0;';
$busqueda = mysqli_query($conexion, $actualizacionestancia) or die("Problemas en el select" . mysqli_error($conexion));

$htmltable = '';

while ($arrayresultados = mysqli_fetch_assoc($busqueda)) {

    $htmltable .= '
        <tr>
            <th>' . $arrayresultados['matricula'] . '</th>
            <th>' . $arrayresultados['marca'] . '</th>
            <th>' . $arrayresultados['modelo'] . '</th>
            <th>' . $arrayresultados['color'] . '</th>
            <th>' . $arrayresultados['nombre'] . '</th>
            <th>' . $arrayresultados['apellido_1'] . '</th>
            <th>' . $arrayresultados['apellido_2'] . '</th>
            <th>' . $arrayresultados['email'] . '</th>
            <th>' . $arrayresultados['estancia'] . '</th>
        </tr>
    ';
};
$json = json_encode($htmltable, JSON_UNESCAPED_UNICODE);
echo $json;
mysqli_close($conexion);
