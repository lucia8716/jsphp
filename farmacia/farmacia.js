var filnom=/^(?!.* (?: |$))[a-z\-]+$/;
var filtercontraseña=/^([a-zA-Z0-9]){6}/;
var filtermatricula=/^([0-9]){4}([a-zA-Z]){3}/;

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

    





}












}
function entrada() { //muestra y quita div

    $("#di2").hide();
    $("#di3").fadeIn("slow");
  }

function matriculacion(){

    x3=$('#i3').val();
    x3=x3.toUpperCase();
console.log(x3);

    if(filtermatricula.test(x3)==false){

        toastr.warning("Matricula con formato incorrecto");
        $('#i3').val('');
        $('#i3').focus();
        
    }

  }


 function volver3(){//funcion para el boton de volver
    $("#di3").hide();
      $("#di2").fadeIn("slow");
      document.getElementById('i3').value='';
  
  
  }