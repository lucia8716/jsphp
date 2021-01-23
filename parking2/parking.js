var filnom=/^(?!.* (?: |$))[a-z\-]+$/;
var filtercontraseña=/^([a-zA-Z0-9]){6}/;
var filtermatricula=/^([0-9]){4}([a-zA-Z]){3}/;
var filteremail=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var filtermarca=/^([a-zA-Z])*$/;

var contador;


$('#di3').hide();
$('#di4').hide();
$('#di5').hide();
$('#di6').hide();



function contar() {

    $.ajax({
        type: "POST",
        url: "consulta3.php",
        data: "data",
        async: true,
        success: function(response) {

            $('#i12').val(response);
            contador=$('#i12').val();
        }
    });




  }



function loging(){

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
        data: {nombre:x1,contrasena:x2},
        async: true,
        beforeSend: function () {
            
    
        },
        success: function (response) {
    
            console.log(response);
            if (response==1){//esta registrado
                console.log(response);
                toastr.options = {"positionClass": "toast-top-center","timeOut": "1200",}
                toastr.success("Usuario conectado, Cargando pagina");
                $('#di2').hide();
                $('#di3').fadeIn("slow");
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

function entrada() { //muestra y quita div

    $("#di3").hide();
    $("#di4").fadeIn("slow");
  }

function matriculacion(){

    x3=$('#i3').val();
    x3=x3.toUpperCase();
    var confirmar=false;


    if(filtermatricula.test(x3)==false){

        toastr.warning("Matricula con formato incorrecto");
        $('#i3').val('');
        $('#i3').focus();
               
    }else{

        $.ajax({
            type: "POST",
            url: "consulta2.php",
            data: {matricula:x3},
            async: true,
            beforeSend: function () {
                
        
            },
            success: function (response) {
        
                console.log(response);
                if (response==1){//esta registrado pero no esta en el parking

                    if(contador<400){
               
                    console.log(response);
                    toastr.options = {"positionClass": "toast-top-center","timeOut": "1200",}
                    toastr.success("coche registrado,se esta abriendo la verja");
                    $('#di4').hide();
                    $('#di3').fadeIn("slow");
                    $('#i3').val('');
                    contador++;
                    $('#i12').val(contador);
$.ajax({
    type: "POST",
    url: "consulta6.php",
    data: {matricula:x3},
    async: true,
    success: function (response) {
        console.log("ok")
    }
});




                    }else{

                        toastr.options = {"positionClass": "toast-top-center","timeOut": "1200",}
                        toastr.success("coche registrado,pero parking lleno espere a una plaza libre");
                        $('#di4').hide();
                        $('#di3').fadeIn("slow");
                        $('#i3').val('');

                    }
                }
                
                if (response==0){//no esta registrado
    
                    if(contador<400){
                    toastr.options = {"positionClass": "toast-top-center","timeOut": "1200",}
                    toastr.warning("coche no resgitrado");
                    $('#i4').val(x3);
                    $('#di4').hide();
                    $('#di5').fadeIn("slow");
                }else{
                    toastr.options = {"positionClass": "toast-top-center","timeOut": "1200",}
                    toastr.warning("coche no registrado y parking lleno espere a una plaza libre");
                    $('#i3').focus();
                    $('#i3').val('');


                }
    
                }
    
                if (response==2){//ya esta en el parking
    
                    toastr.options = {"positionClass": "toast-top-center","timeOut": "1200",}
                    toastr.warning("El coche ya se encuentra en el parking");
                    $('#i3').val('');
                    $('#i3').focus();
    
                }
            },
        
            error: function (error) {
    
                toastr.options = {"positionClass": "toast-top-center","timeOut": "1200",}
                toastr.warning(error);
                
                
            }

            
        });
        $('#i3').val('');
    }


    }

  


 function volver3(){//funcion para el boton de volver
    $("#di4").hide();
    $("#di2").hide();
      $("#di3").fadeIn("slow");
        $('#i3').val('');
  
  }

  function resgitrocoches() { 

    x4=$('#i4').val();
    x5=$('#i5').val();
    x6=$('#i6').val();
    x7=$('#i7').val();
    x8=$('#i8').val();
    x9=$('#i9').val();
    x10=$('#i10').val();
    x11=$('#i11').val();
    var comprobar=false;
    


    if (filtermarca.test(x5)==false) {
        $('#i5').val('');
        $('#i5').focus();
        
        toastr.warning("marca con formato incorrecto");
        
        
      }
      
      
      if (filtermarca.test(x6)==false) {
        $('#i6').val('');
        $('#i6').focus();
        toastr.warning("modelo con formato incorrecto");
        
      }
      
      if (filnom.test(x7)==false) {
        $('#i7').val('');
        $('#i7').focus();
        toastr.warning("color con formato incorrecto");
        
      }
      
      if (filnom.test(x8)==false) {
        $('#i8').val('');
        $('#i8').focus();
        
        toastr.warning("nombre con formato incorrecto");
        
      }
      
      if (filnom.test(x9)==false) {
        $('#i9').val('');
        $('#i9').focus();
                toastr.warning("apellido1 con formato incorrecto");
        
      }
      
      if (filnom.test(x10)==false) {
        $('#i10').val('');
        $('#i10').focus();
                toastr.warning("apellido2 con formato incorrecto");
        
      }
      
      if (filteremail.test(x11)==false) {
        $('#i11').val('');
        $('#i11').focus();
                toastr.warning("email con formato incorrecto");
        
      }


      if (filtermarca.test(x5)==true&&filtermarca.test(x6)==true&&filnom.test(x7)&&filnom.test(x8)&&filnom.test(x9)&&filnom.test(x10)&&filteremail.test(x11)) {
          
        comprobar=true;
        $('#i4').val('');
        $('#i5').val('');
        $('#i6').val('');
        $('#i7').val('');
        $('#i8').val('');
        $('#i9').val('');
        $('#i10').val('');
        $('#i11').val('');
      }

      if (comprobar==true) {

        $.ajax({
            type: "POST",
            url: "consulta4.php",
            data: {matricula: x4,marca:x5,modelo:x6,color:x7,nombre:x8,apellido_1:x9,apellido_2:x10,email:x11},
            async: true,
            success: function (response) {
                toastr.options = {"positionClass": "toast-top-center","timeOut": "1200",}
                toastr.success("Coche dado de alta, puede pasar al garaje");
                $('#di5').hide();
                $('#di3').fadeIn("slow");
                                
            },
    
            error: function (error) {
    
                toastr.options = {"positionClass": "toast-top-center","timeOut": "1200",}
                toastr.warning(error);
                
                
            }
        });
          contador++;
          $('#i12').val(contador);
        
      }










   }

   function salidacoches(){
    $("#di3").hide();
    $("#di6").fadeIn("slow");
    
   }

   function volver(){//funcion para el boton de volver
    $("#di6").hide();
    $("#di2").hide();
    $("#di3").fadeIn("slow");
    $('#i13').val('');
  }

  function matriculacionsalida(){

x13=$('#i13').val();
x13=x13.toUpperCase();

if(filtermatricula.test(x13)==false){

    toastr.warning("Matricula con formato incorrecto");
    $('#i3').val('');
    $('#i3').focus();
           
}else{

    $.ajax({
        type: "POST",
        url: "consulta5.php",
        data: {matricula:x13},
        async: true,
        success: function (response) {
            
if (response==1) {

    toastr.options = {"positionClass": "toast-top-center","timeOut": "1200",}
                    toastr.success("coche puede salir,se esta abriendo la verja");
                    $('#di6').hide();
                    $('#di3').fadeIn("slow");
                    $('#i13').val('');
                    contador--;
                    $('#i12').val(contador);
}

if (response==2) {

    toastr.options = {"positionClass": "toast-top-center","timeOut": "1200",}
                    toastr.warning("el coche no se encuentra en el parking");
                    $('#i13').val('');
                  
}

if (response==0) {

    toastr.options = {"positionClass": "toast-top-center","timeOut": "1200",}
                    toastr.warning("Coche no regitrado");
                    
                    $('#i13').val('');
                  
}



        }
    });

}

  }