var filnom=/^(?!.* (?: |$))[a-zA-Z\-]+$/;
var filtercontraseña=/^([a-zA-Z0-9]){6}/;
var filternumero=/^([0-9])*$/;
var filtronum=/^[0-9]+(\.[0-9]{1,2})*$/;
var filtermatricula=/^([0-9]){4}([a-zA-Z]){3}/;
var filterreferencia=/^([a-zA-Z0-9]){12}/;

$('#di2').hide();
$('#di3').hide();


function loging(){//funcion para comprobar nombre y contraseña con formato incorrecto y si es correcto se conecta a bbdd
var x1=$('#i1').val();
x1=x1.toUpperCase();
var x2=$('#i2').val();
if(filnom.test(x1)==false){
    toastr.warning("Nombre con formato incorrecto");
    $('#i1').val('');
    $('#i1').focus();
}
if(filtercontraseña.test(x2)==false){

    toastr.warning("Contraseña con formato incorrecto");
    $('#i2').val('');
    $('#i2').focus();
}
if(filtercontraseña.test(x2)==true&&filnom.test(x1)==true){
            
    //en esta parte se conecta a bbdd y comprueba si esta registrado
    $.ajax({
        type: "POST",
        url: "consulta1.php",
        data: {funcion:1,nombre:x1,contrasena:x2},
        async: true,
        beforeSend: function () {
            
    
        },
        success: function (response) {
    
            console.log(response);
            if (response==1){//esta registrado
                console.log(response);
                toastr.options = {"positionClass": "toast-top-center","timeOut": "1200",}
                toastr.success("Usuario conectado, Cargando pagina");
                $('#di1').hide();
                $('#di2').fadeIn();
                $('#i1').val('');
                $('#i2').val('');
                    
            }
            
            if (response==0){//no esta registrado

                toastr.options = {"positionClass": "toast-top-center","timeOut": "1200",}
                toastr.warning("Usuario no registrado");
                $('#i1').val('');
                $('#i2').val('');
                $('#i1').focus();

            }

            if (response==2){//contraseña incorrecta

                toastr.options = {"positionClass": "toast-top-center","timeOut": "1200",}
                toastr.warning("Contraseña incorrecta");
                $('#i2').val('');
                $('#i2').focus();

            }
        },
    
        error: function (error) {

            toastr.options = {"positionClass": "toast-top-center","timeOut": "1200",}
            toastr.warning(error);
            
            
        }
    });
 }
}
