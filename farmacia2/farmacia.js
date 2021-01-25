var filnom=/^(?!.* (?: |$))[a-z\-]+$/;
var filtercontraseña=/^([a-zA-Z0-9]){6}/;
var filternumero=/^([0-9])*$/;
var filtronum=/^[0-9]+(\.[0-9]{1,2})*$/;
var filtermatricula=/^([0-9]){4}([a-zA-Z]){3}/;
var filterreferencia=/^([a-zA-Z0-9]){12}/;

$('#di2').hide();
$('#di3').hide();
$('#di4').hide();
$('#di5').hide();
$('#di6').hide();
$('#di7').hide();

function loging(){//funcion para comprobar nombre y contraseña con formato incorrecto y si es correcto se conecta a bbdd
var x1=$('#i1').val();
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

function accesoacompramedicamentos() { //muestra y quita div

    $("#di2").hide();
    $("#di3").fadeIn("slow");
  }


  function compramedicamentos(){

    var x3=$('#i3').val();

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

function comprarunidades(){

    x3=$('#i4').val();
    x4=$('#i9').val();
    x5=$('#i16').val();

$.ajax({
    type: "POST",
    url: "consulta1.php",
    data: {funcion:4,referencia:x3,unidades:x4,ucompras:x5},
    async: true,
    success: function (response) {
        
        toastr.options = {"positionClass": "toast-top-center","timeOut": "1200",}
        toastr.success("Medicamento Comprado");
        $('#di3').fadeIn("slow");
        $('#di4').hide();
        $('#i16').val('');



    }
});

}

function comprarunidades2(){
var x1=$('#i10').val();
var x2=$('#i11').val();    
var x3=$('#i12').val();
var x4=parseFloat($('#i13').val()).toFixed(2);
var x5=parseFloat($('#i14').val()).toFixed(2);
var x6=Number($('#i15').val());
var conf;
var ok;


if(filnom.test(x2)==false){
    toastr.warning("Farmaceutica con formato incorrecto");
    $('#i11').val('');
    $('#i11').focus();
}
if(filnom.test(x3)==false){
    toastr.warning("Nombre con formato incorrecto");
    $('#i12').val('');
    $('#i12').focus();
}
if(filtronum.test(x4)==false){
    toastr.warning("Precio compra con formato incorrecto");
    $('#i13').val('');
    $('#i13').focus();
}
if(filtronum.test(x5)==false){
    toastr.warning("Precio venta con formato incorrecto");
    $('#i14').val('');
    $('#i14').focus();
}

if(filternumero.test(x6)==false){
    toastr.warning("Unidades con formato incorrecto");
    $('#i15').val('');
    $('#i15').focus();
}

if(x6<1||x6>1000){
    toastr.warning("Los pedidos tienen que ser inferiores a 1001");
    $('#i15').val('');
    $('#i15').focus();
}else{ok=true;}



if (x5<=x4) {
     conf=false;
     toastr.warning("El precio de venta no puede ser inferior al precio de compra,pongase en contacto con administracion para autorizarlo");
    $('#i14').val('');
    $('#i14').focus();
} else {
   conf=true;
    }


if(filnom.test(x2)==true&&filnom.test(x3)==true&&filtronum.test(x4)==true&&filtronum.test(x5)==true&&filtronum.test(x6)==true&&conf==true&&x6<1001&&ok==true)
{

    alert(x5);
$.ajax({
    type: "POST",
    url: "consulta1.php",
    data: {funcion:5,referencia:x1,farmaceutica:x2,nombre:x3,precio_venta:x5,precio_compra:x4,unidades:x6},
    async: true,
    success: function (response) {


        toastr.options = {"positionClass": "toast-top-center","timeOut": "1200",}
        toastr.success("Medicamento Comprado y registrado");
        $('#di3').fadeIn("slow");
        $('#di5').hide();
        $('#i10').val('');
        $('#i11').val('');
        $('#i12').val('');
        $('#i13').val('');
        $('#i14').val('');
        $('#i15').val('');
        
    }
});

}

}

function listadostock(){
    $('#di3').hide();
    $('#di6').fadeIn("slow");
    $('#di7').fadeIn("slow");

    $.ajax({
        type: "POST",
        url: "consulta1.php",
        data: {funcion:6},
        async: true,
        success: function (response) {

            var info=JSON.parse(response);
            $('#mostrar').html(info);
            
        }
    });





}