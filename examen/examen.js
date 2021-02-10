// hola jesus, solo me ha dado tiempo a hacer las altas en la bbdd, no he podido hacer mas, seguramente tenga fallos en la

var filnom=/^(?!.* (?: |$))[a-zA-Z\-]+$/;
var filtercontraseña=/^([a-zA-Z0-9]){6}/;
var filternumero=/^([0-9])*$/;
var filtronum=/^[0-9]+(\.[0-9]{1,2})*$/;
var filtermatricula=/^([0-9]){4}([a-zA-Z]){3}/;
var filterdni=/^([0-9]){8}/;
var filtertelefono=/^([0-9]){9}/;
var filtercp=/^([0-9]){5}/;
var filterreferencia=/^([a-zA-Z0-9]){12}/;
var filterreferencia2=/^([a-zA-Z0-9\-\*]){12}/;
var filterdni2=/^([0-9]){8}([a-zA-Z]){1}/;
var filteremail=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

$('#di2').hide();



function accesoaltas(){

    $('#di1').hide();
    $('#di2').fadeIn();

}

function salir(){

    $('#di2').hide();
    $('#di1').fadeIn();

}



function calculoletra(){
    var nom=$('#i3').val();
    var t;
    var resto=23;
    var letra=['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];
     var x1;
    if(filterdni.test(nom)==false||nom>99999999){
        toastr.warning("DNI con formato incorrecto");
        $('#i3').val('');
        $('#i3').focus();
    }else{

        t=nom%resto;
        x1=letra[t];
        $('#i4').val(x1);
        var dni=nom+x1;
        $('#i2').val(dni);
          }

}




function altas(){

x1=$('#i2').val();
x2=$('#i5').val();
x3=$('#i6').val();
x4=$('#i7').val();
x5=$('#i8').val();
x6=$('#i9').val();
x7=$('#i10').val();
x8=$('#i11').val();
x9=$('#i12').val();
x10=$('#i13').val();
x11=$('#s1').val();
x12=$('#s2').val();
x13=$('#s3').val();
x14=$('#s4').val();
x15=$('#s5').val();
x16=$('#s6').val();
var insert=false;

if(filterdni2.test(x1)==false){
    toastr.warning("Rellene DNI");
   
}

if(filnom.test(x2)==false){
    toastr.warning("Nombre con formato incorrecto");
    $('#i5').val('');
    $('#i5').focus();
}

if(filnom.test(x3)==false){
    toastr.warning("Apellido 1 con formato incorrecto");
    $('#i6').val('');
    $('#i6').focus();
}

if(filnom.test(x4)==false){
    toastr.warning("Apellido 2 con formato incorrecto");
    $('#i7').val('');
    $('#i7').focus();
}

if(filnom.test(x5)==false){
    toastr.warning("Direccion con formato incorrecto");
    $('#i8').val('');
    $('#i8').focus();
}

if(filnom.test(x6)==false){
    toastr.warning("Poblacion con formato incorrecto");
    $('#i9').val('');
    $('#i9').focus();
}

if(filtercp.test(x7)==false||x7>99999){
    toastr.warning("CP con formato incorrecto");
    $('#i10').val('');
    $('#i10').focus();
}

if(filnom.test(x8)==false){
    toastr.warning("Provincia con formato incorrecto");
    $('#i11').val('');
    $('#i11').focus();
}

if(filtertelefono.test(x9)==false){
    toastr.warning("telefono con formato incorrecto");
    $('#i12').val('');
    $('#i12').focus();
}

if(filteremail.test(x10)==false){
    toastr.warning("email con formato incorrecto");
    $('#i13').val('');
    $('#i13').focus();
}


if (x11==0) {
toastr.warning("genero incorrecto");
    
}

if (x12==0) {
    toastr.warning("estado civil incorrecto");
        
    }
    if (x13==0) {
        toastr.warning("hijos incorrecto");
            
        }

        if (x14==0) {
            toastr.warning("estado laboral incorrecto");
                

            if (x15==0) {
                toastr.warning("vivienda incorrecto");
                    
                }

                if (x16==0) {
                    toastr.warning("coches incorrecto");
                        
                    }


}

if (filterdni2.test(x1)==false||filnom.test(x2)==false||filnom.test(x3)==false||filnom.test(x4)==false||filnom.test(x5)==false||filnom.test(x6)==false||filtercp.test(x7)==false||x7>99999||filnom.test(x8)==false||filtertelefono.test(x9)==false||filteremail.test(x10)==false||x11==0||x12==0||x13==0||x14==0||x15==0||x16==0) {
    toastr.warning("faltan elementos por rellenar");
} else {


$.ajax({
    type: "POST",
    url: "consulta1.php",
    data: {funcion:1,NIF:x1,nombre:x2,Apellido_1:x3,Apellido_2:x4,Direccion:x5,poblacion:x6,cp:x7,Provincia:x8,telefono:x9,mail:x10,genero:x11,estado_civil:x12,hijos:x13,estado_laboral:x14,Vivienda:x15,coche:x16},
    async: true,
    success: function (response) {

        if (response==1){//esta registrado
            console.log(response);
            toastr.options = {"positionClass": "toast-top-center","timeOut": "1200",}
            toastr.success("Usuario registrado");
            $('#di2').hide();
            $('#di1').fadeIn();
            
            $('#i2').val('');
            $('#i3').val('');
            $('#i4').val('');
            $('#i5').val('');
            $('#i6').val('');
            $('#i7').val('');
            $('#i8').val('');
            $('#i9').val('');
            $('#i10').val('');
            $('#i11').val('');
            $('#i12').val('');
            $('#i13').val('');
            $('#s1').val(0);
            $('#s2').val(0);
            $('#s3').val(0);
            $('#s4').val(0);
            $('#s5').val(0);
            $('#s6').val(0);
                
        }


        if (response==0){//esta registrado
            console.log(response);
            toastr.options = {"positionClass": "toast-top-center","timeOut": "1200",}
            toastr.warning("Usuario ya registrado en bbdd");
            $('#di2').hide();
            $('#di1').fadeIn();
            
                
        }
        
    }
});



    
}



}



