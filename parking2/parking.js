var filnom=/^(?!.* (?: |$))[a-z\-]+$/;
var filtercontraseña=/^([a-zA-Z0-9]){6}/;
var filtermatricula=/^([0-9]){4}([a-zA-Z]){3}/;


$('#di3').hide();
$('#di4').hide();
$('#di5').hide();



function contar() {

    $.ajax({
        type: "POST",
        url: "consulta3.php",
        data: "data",
        async: true,
        success: function(response) {

            $('#i12').val(response);
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
                    console.log(response);
                    toastr.options = {"positionClass": "toast-top-center","timeOut": "1200",}
                    toastr.success("coche registrado,se esta abriendo la verja");
                    $('#di4').hide();
                    $('#di3').fadeIn("slow");
                    $('#i3').val('');
                        
                }
                
                if (response==0){//no esta registrado
    
                    toastr.options = {"positionClass": "toast-top-center","timeOut": "1200",}
                    toastr.warning("coche no resgitrado");
                    $('#i4').val(x3);
                    $('#di4').hide();
                    $('#di5').fadeIn("slow");
    
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





    }


    }

  


 function volver3(){//funcion para el boton de volver
    $("#di4").hide();
    $("#di2").hide();
      $("#di3").fadeIn("slow");
      document.getElementById('i3').value='';
  
  
  }