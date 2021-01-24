var filnom=/^(?!.* (?: |$))[a-z\-]+$/;
var filtercontraseña=/^([a-zA-Z0-9]){6}/;
var filtermatricula=/^([0-9]){4}([a-zA-Z]){3}/;
var filterreferencia=/^([a-zA-Z0-9]){12}/;

$('#di2').hide();
$('#di3').hide();
$('#di4').hide();
$('#di5').hide();

function loging(){//funcion para comprobar nombre y contraseña con formato incorrecto y si es correcto se conecta a bbdd
x1=$('#i1').val();
x2=$('#i2').val();
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

function accesoacompramedicamentos() { //muestra y quita div

    $("#di2").hide();
    $("#di3").fadeIn("slow");
  }


  function compramedicamentos(){

    x3=$('#i3').val();

    if(filterreferencia.test(x3)==false){
        toastr.warning("Nº Ref con formato incorrecto");
        $('#i3').val('');
        $('#i3').focus();
    }

    if(filterreferencia.test(x3)==true){
       
$.ajax({
    type: "POST",
    url: "consulta1.php",
    data: {funcion:2,referencia:x3},
    async: true,
    success: function (response) {

        
        console.log(response);
        if (response==1){//esta registrado
            console.log(response);
            toastr.options = {"positionClass": "toast-top-center","timeOut": "1200",}
            toastr.success("Medicamento Registrado, cargando pagina de compra");
            $('#i4').val(x3);
            $('#di3').hide();
            $('#di4').fadeIn();
            $('#i3').val('');

$.ajax({
    type: "POST",
    url: "consulta1.php",
    data: {funcion:3,referencia:x3},
    async: true,
    success: function (response) {

var info=JSON.parse(response);
$('#i5').val(info.farmaceutica);
$('#i6').val(info.nombre);
$('#i7').val(info.precio_compra);
$('#i8').val(info.precio_venta);
$('#i9').val(info.unidades);
      
    }
});


                
        }
        
        if (response==0){//no esta registrado

            toastr.options = {"positionClass": "toast-top-center","timeOut": "1200",}
            toastr.warning("Medicamento no registado, cargando pagina de registro");
            $('#i10').val(x3);
            $('#di3').hide();
            $('#di5').fadeIn();
            $('#i3').val('');

        }
        
        
    }
});


    }


  }

  function volver(){

    $('#di3').fadeIn();
    $('#di4').hide();
    $('#di5').hide();

  }

  function volve2(){

    $('#di2').fadeIn();
    $('#di3').hide();
      }

