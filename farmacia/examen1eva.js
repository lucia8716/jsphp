

//https://www.um.es/docencia/barzana/DAWEB/Desarrollo-de-aplicaciones-web-teoria-formularios-ejemplo-1.html


/* En esta primera parte se define los objetos para tener stock y una array que los contiene

ademas de varios filtros para controlar numeros y letras que deseamos  en los inputs

*/

var pro ={refpro:1,nombrecomun:'primperan',composicion:'Metoclopramida',laboratorio:'Sanofi',preciocompra:3.74,precioventa:3.87,unidades:9};
var pro2 ={refpro:2,nombrecomun:'ibuprofeno',composicion:'ibuprofeno',laboratorio:'Piffer',preciocompra:5.74,precioventa:6.87,unidades:3};
var pro3 ={refpro:3,nombrecomun:'fosrenol',composicion:'lantano',laboratorio:'shire',preciocompra:6.74,precioventa:9.87,unidades:45};
var pro4 ={refpro:4,nombrecomun:'finasterina',composicion:'finasterida',laboratorio:'Piffer',preciocompra:13.74,precioventa:23.87,unidades:14};
var productos =[pro,pro2,pro3,pro4];
var referencia=[1,2,3,4];
var contfuncioncompras=0;
var filtronum=/^[0-9]+(\.[0-9]{1,2})*$/;
var filtrolet=/^(?!.* (?: |$))[a-z ]+$/;
var filnumenteros=/^([0-9])*$/;

function iracompras(){// utilizado para quitar y poner capas y poder entrar en la parte de comras

    document.getElementById("f1").style.visibility = "hidden";
    document.getElementById("f2").style.visibility = "visible";
    document.getElementById("i1").value="";
    document.getElementById("i1").focus();
}

function iraltanueva(){// utilizado para quitar y poner capas para dar un alta nueva
    document.getElementById("f1").style.visibility = "hidden";
    document.getElementById("f2").style.visibility = "hidden";
    document.getElementById("f3").style.visibility = "visible";
}
function compras (){// utilizado para validar la parte de compras, añadir los datos a los inputs con valores del objeto
    // y por ultimo añadir un stock al producto
var x1=document.getElementById("i1").value;
var verx1=filnumenteros.test(x1);


if (verx1==true) {
    
} else {
    document.getElementById("i1").value="";
    document.getElementById("i1").focus();
    alert("Nº Referencia no valido");
    
}


if(x1>0&&x1<999999999999&&verx1==true){
var comprobar=false;
    for ( i = 0; i < referencia.length; i++) {
        if (x1==referencia[i]) {//en esta parte  se comprueba si existe previamente el producto
            //al estarlo se pasan los valores al input a la parte en la que se  puede manipular las compras
            
        alert("Nº Referencia se encuentra en bbdd");
        comprobar=true;
        document.getElementById("i9").value=productos[i].refpro;
        document.getElementById("i10").value=productos[i].nombrecomun;
        document.getElementById("i11").value=productos[i].composicion;
        document.getElementById("i12").value=productos[i].laboratorio;
        document.getElementById("i13").value=productos[i].preciocompra;
        document.getElementById("i14").value=productos[i].precioventa;
        document.getElementById("i15").value=productos[i].unidades;        
        i=referencia.length;
        document.getElementById("f1").style.visibility = "hidden";
        document.getElementById("f2").style.visibility = "hidden";
        document.getElementById("f3").style.visibility = "hidden";
        document.getElementById("f4").style.visibility = "visible";


        } 
        }

        if(comprobar==false){// al no estarlo esta parte lo manda a la funcion alta nueva, para añadir un nuevo producto

            alert("Nº Referencia no se encuentra en bbdd");
            referencia.push(x1);//he creado un array de numero de ref para controlarlo mejor
            iraltanueva();
            document.getElementById("i2").value=document.getElementById("i1").value;
        }

}else{document.getElementById("i1").value="";
document.getElementById("i1").focus();
alert("Nº Referencia no valido");}
}

function altanueva(){// esta parte se controla el alta nueva de producto
    
    x2=document.getElementById("i2").value;
    x3=document.getElementById("i3").value;
    x4=document.getElementById("i4").value;
    x5=document.getElementById("i5").value;
    x6=document.getElementById("i6").value;
    x7=document.getElementById("i7").value;
    x8=document.getElementById("i8").value;

    
    x3=x3.toLowerCase(); //para controlar los valores correctamente
    verx3=filtrolet.test(x3);
    x4=x4.toLowerCase();
    verx4=filtrolet.test(x4);
    x5=x5.toLowerCase();
    verx5=filtrolet.test(x5);
    verx6=filtronum.test(x6);
    verx7=filtronum.test(x7);
    verx8=filnumenteros.test(x8);
    
    if (verx3==true) {// en esta parte vemos si son correcto o no, si no lo son borramos el valor
        
    } else {
        document.getElementById("i3").value="";
     }

     if (verx4==true) {
        
    } else {
        document.getElementById("i4").value="";
     }

     if (verx5==true) {
        
    } else {
        document.getElementById("i5").value="";
     }
     
     if (verx6==true) {
        
    } else {
        document.getElementById("i6").value="";
     }

     if (verx7==true) {
        
    } else {
        document.getElementById("i7").value="";
     }

     if (verx8==true) {
        
    } else {
        document.getElementById("i8").value="";
     }


     x7=parseFloat(x7).toFixed(2);
     x6=parseFloat(x6).toFixed(2);
// para controlar valores y que no sean incongruentes
if (Number(document.getElementById("i7").value)<=Number(document.getElementById("i6").value)) {
    alert("El precio de venta no puede ser menor o igual al precio de compra")
    document.getElementById("i7").value="";
}

if (document.getElementById("i8").value<=0) {
    alert("Las unidades de compra tienen que ser superiores a 0")
    document.getElementById("i8").value="";
}



//controlan valores vacios
if ((x8.length==0||document.getElementById("i8").value<=0)||(x7.length==0||document.getElementById("i7").value<=0)||(x6.length==0||document.getElementById("i6").value<=0)||(x5.length==0||verx5==false)||(x4.length==0||verx4==false)||(x3.length==0||verx3==false)) {

alert("Faltan campos por rellenar correctamente");

} else {

    //al pasar todos los valores por lo filtros correctamente los añade al array de objetos
var pro4 ={refpro:x2,nombrecomun:x3,composicion:x4,laboratorio:x5,preciocompra:x6,precioventa:x7,unidades:x8};

productos.push(pro4);

//tras añadir objetos, los valores se borran
alert("Compra del medicamento realizada correctamente");
document.getElementById("i2").value="";
document.getElementById("i3").value="";
document.getElementById("i4").value="";
document.getElementById("i5").value="";
document.getElementById("i6").value="";
document.getElementById("i7").value="";
document.getElementById("i8").value="";
document.getElementById("i1").value="";
document.getElementById("i1").focus();
document.getElementById("f1").style.visibility = "hidden";
    document.getElementById("f2").style.visibility = "visible";
    document.getElementById("f3").style.visibility = "hidden";

}

}


function salir(){//boton de salir
    document.getElementById("f1").style.visibility = "visible";
    document.getElementById("f2").style.visibility = "hidden";
    document.getElementById("f3").style.visibility = "hidden";
    document.getElementById("f7").style.visibility = "hidden";


}


function compraryaregistrado(){ // En esta parte se realiza la compra

    //controla si son valores correctos y si los se valida la compra
var x1=document.getElementById("i9").value;  
var x16=document.getElementById("i16").value;
varvalx16=filnumenteros.test(x16);



if ((x16.length==0||varvalx16==false||x16<1)) {

    document.getElementById("i16").value="";
document.getElementById("i16").focus();

alert("Introduzca un numero valido")
    
} else {

var z;
var f=document.getElementById("i1").value;
var h=document.getElementById("i16").value;

    for (i = 0; i < referencia.length; i++) {
    
        if (f==productos[i].refpro) {

            z=productos[i].unidades;
                                
            productos[i].unidades=Number(h)+Number(z);
            
            i=referencia.length;
        }
    }

alert("Compra realizada con existo");

document.getElementById("i9").value="";
document.getElementById("i10").value="";
document.getElementById("i11").value="";
document.getElementById("i12").value="";
document.getElementById("i13").value="";
document.getElementById("i14").value="";
document.getElementById("i15").value="";
document.getElementById("i16").value="";
document.getElementById("i1").value="";
document.getElementById("i1").focus();

document.getElementById("f1").style.visibility = "hidden";
document.getElementById("f2").style.visibility = "visible";
document.getElementById("f3").style.visibility = "hidden";
document.getElementById("f4").style.visibility = "hidden";



   
    
}

}

function volver (){// se utiliza para salir de la parte ver listado de objetos en la parte de compras
    document.getElementById("f1").style.visibility = "hidden";
    document.getElementById("f2").style.visibility = "visible";
    document.getElementById("f3").style.visibility = "hidden";
    document.getElementById("f4").style.visibility = "hidden";
    document.getElementById("f5").style.visibility = "hidden";
    document.getElementById("f6").style.visibility = "hidden";
    document.getElementById("f7").style.visibility = "hidden";
    document.getElementById("f6").innerHTML ='';//se utiliza para limpiar la pagina y no duplique resultados
    
}

function volver2 (){//se utiliza para salir de la parte ver listado de objetos en la parte de ventas
    document.getElementById("f1").style.visibility = "hidden";
    document.getElementById("f2").style.visibility = "hidden";
    document.getElementById("f3").style.visibility = "hidden";
    document.getElementById("f4").style.visibility = "hidden";
    document.getElementById("f5").style.visibility = "hidden";
    document.getElementById("f6").style.visibility = "hidden";
    document.getElementById("f7").style.visibility = "visible";
    document.getElementById("f8").style.visibility = "hidden";
    document.getElementById("f9").style.visibility = "hidden";
    document.getElementById("f10").style.visibility = "hidden";
    document.getElementById("f10").innerHTML ='';
    
}








var cont=0;
var pruen;

function visualizar (){//boton de que muestra los productos, tengo un problema con las unidades ya que no muestra las actulizaciones productos

    document.getElementById("f1").style.visibility = "hidden";
    document.getElementById("f2").style.visibility = "hidden";
    document.getElementById("f3").style.visibility = "hidden";
    document.getElementById("f4").style.visibility = "hidden";
    document.getElementById("f7").style.visibility = "hidden";
    document.getElementById("f5").style.visibility = "visible";
    document.getElementById("f6").style.visibility = "visible";


    for(i=0;i<productos.length;i++){

        pruen="<table><tr>"+"<td>"+"<strong>Nº Referencia</strong>"+" "+productos[i].refpro+"</td>" +" "+"<td>"+"<strong>Nombre comun</strong>"+productos[i].nombrecomun+ " "+"</td>"+"<td>"+"<strong>Composicion</strong>"+productos[i].composicion+"</td>"+" "+"<td>"+"<strong>Laboratorio</strong>"+productos[i].laboratorio+"</td>"+ " "+"<td>"+"<strong>Precio Compra</strong>"+productos[i].preciocompra+"</td>"+ " "+"<td>"+"<strong>Precio venta</strong>"+ " "+productos[i].precioventa+"</td>"+ " "+"<td>"+"<strong>Unidades en stock</strong>"+productos[i].unidades+"</td>"+"</tr></table>"+"</br>";
        document.getElementById("f6").innerHTML +=pruen;
    cont++;
    }
   
}

function visualizar2 (){//boton de que muestra los productos (basicamente es un listado)

    document.getElementById("f1").style.visibility = "hidden";
    document.getElementById("f2").style.visibility = "hidden";
    document.getElementById("f3").style.visibility = "hidden";
    document.getElementById("f4").style.visibility = "hidden";
    document.getElementById("f7").style.visibility = "hidden";
    document.getElementById("f9").style.visibility = "visible";
    document.getElementById("f10").style.visibility = "visible";


    for(i=0;i<productos.length;i++){

        pruen="<table><tr>"+"<td>"+"<strong>Nº Referencia</strong>"+" "+productos[i].refpro+"</td>" +" "+"<td>"+"<strong>Nombre comun</strong>"+productos[i].nombrecomun+ " "+"</td>"+"<td>"+"<strong>Composicion</strong>"+productos[i].composicion+"</td>"+" "+"<td>"+"<strong>Laboratorio</strong>"+productos[i].laboratorio+"</td>"+ " "+"<td>"+"<strong>Precio Compra</strong>"+productos[i].preciocompra+"</td>"+ " "+"<td>"+"<strong>Precio venta</strong>"+ " "+productos[i].precioventa+"</td>"+ " "+"<td>"+"<strong>Unidades en stock</strong>"+productos[i].unidades+"</td>"+"</tr></table>"+"</br>";
        document.getElementById("f10").innerHTML +=pruen; //añade las busqueda al html
    cont++;
    }
   
}





function iraventas(){//para ir a ventas

    
    document.getElementById("f1").style.visibility = "hidden";
    document.getElementById("f7").style.visibility = "visible";
    document.getElementById("i17").value="";
    document.getElementById("i17").focus();

}


function ventas(){// para realizar las ventas de los productos

    

    var x17=document.getElementById("i17").value;
    var verx17=filnumenteros.test(x17);
    
    
    if (verx17==true) {//para controlar valores correctos
        
    } else {
        document.getElementById("i17").value="";
        document.getElementById("i17").focus();
        alert("Nº Referencia no valido");
        
    }
    
    
    if(x17>0&&x17<999999999999&&verx17==true){//para comprobar que el nº referencia sea correcto
    var comprobar=false;
        for ( i = 0; i < referencia.length; i++) {
            if (x17==referencia[i]) {
                

            if (Number(productos[i].unidades)==0) {// si no hay stock, no te deja vender
                comprobar=true;
                alert("No hay stock de este producto compre mas unidades");
                document.getElementById("f7").style.visibility = "visible";
                    document.getElementById("f8").style.visibility = "hidden";
                    document.getElementById("i24").value="";
                document.getElementById("i17").focus();
                document.getElementById("i17").value="";
                
            } else {
                
            

            alert("Nº Referencia se encuentra en bbdd");//si hay stock mandan los valores al div de ventas 
            
            //se abre el div de ventas y se cargan los valores
            comprobar=true;
            document.getElementById("i25").value=productos[i].refpro;
            document.getElementById("i18").value=productos[i].nombrecomun;
            document.getElementById("i19").value=productos[i].composicion;
            document.getElementById("i20").value=productos[i].laboratorio;
            document.getElementById("i21").value=productos[i].preciocompra;
            document.getElementById("i22").value=productos[i].precioventa;
            document.getElementById("i23").value=productos[i].unidades;        
            i=referencia.length;
            
            document.getElementById("f7").style.visibility = "hidden";
            document.getElementById("f8").style.visibility = "visible";

            }
    
            }    
}
if(comprobar==false){//para que se salte el mensaje de que no hay datos con esa ref

    alert("Nº Referencia no se encuentra en bbdd");
    document.getElementById("i17").value="";
    document.getElementById("i17").focus();
}

}else{document.getElementById("i17").value="";// borra valores si no es correcto
document.getElementById("i17").focus();
alert("Introduzca un valor");}
}

function ventaunidades(){ //en este div se realiza la venta

    var x23=document.getElementById("i23").value;  
    var x24=document.getElementById("i24").value;
    
    varvalx24=filnumenteros.test(x24);
    
    
    
    if ((x24.length==0||varvalx24==false||x24<1)) {// se controla los valores correcto
    
        document.getElementById("i24").value="";
    document.getElementById("i24").focus();
    
    alert("Introduzca un numero valido")
        
    } else {
        
    if (Number(x23)<Number(x24)) {// para que no se vendan mas de lo que se tiene

        alert("Introduzca un numero igual o inferior al stock de unidades del producto");
        document.getElementById("i24").value="";
        document.getElementById("i24").focus();
        
    } else {

        var z;
        var f=document.getElementById("i25").value;
        var h=document.getElementById("i24").value;
        
            for (i = 0; i < referencia.length; i++) {
            
                if (f==productos[i].refpro) {
        
                    z=productos[i].unidades;
                                        
                    productos[i].unidades=Number(z)-Number(h);
                    
                    i=referencia.length;
                }
            }
        
        alert("Venta realizada con existo");
        
        document.getElementById("i25").value="";
        document.getElementById("i18").value="";
        document.getElementById("i19").value="";
        document.getElementById("i20").value="";
        document.getElementById("i21").value="";
        document.getElementById("i22").value="";
        document.getElementById("i23").value="";
        document.getElementById("i24").value="";
        document.getElementById("i17").value="";
        document.getElementById("i17").focus();
        
        document.getElementById("f7").style.visibility = "visible";
        document.getElementById("f8").style.visibility = "hidden";
       
    }
    



       
        
       
    }

}


function irapedidos(){//  en sta parte se muestra el listado de objetos con menos de 5 elementos

    var productos2=productos.slice();
    
    document.getElementById("f1").style.visibility = "hidden";
    document.getElementById("f11").style.visibility = "visible";
    document.getElementById("f12").style.visibility = "visible";

    
    productos2.sort(function (a, b) {//funcion para ordenar po laboratorio
        return ('' + a.laboratorio).localeCompare(b.laboratorio);
    })
    

    for(i=0;i<productos2.length;i++){

        if (productos2[i].unidades<6&&productos2[i].unidades>0) {

           
                        
      pruen="<table><tr>"+"<td>"+"<strong>Nº Referencia</strong>"+" "+productos2[i].refpro+"</td>" +" "+"<td>"+"<strong>Nombre comun</strong>"+productos2[i].nombrecomun+ " "+"</td>"+"<td>"+"<strong>Composicion</strong>"+productos2[i].composicion+"</td>"+" "+"<td>"+"<strong>Laboratorio</strong>"+productos2[i].laboratorio+"</td>"+ " "+"<td>"+"<strong>Precio Compra</strong>"+productos2[i].preciocompra+"</td>"+ " "+"<td>"+"<strong>Precio venta</strong>"+ " "+productos2[i].precioventa+"</td>"+ " "+"<td>"+"<strong>Unidades en stock</strong>"+productos2[i].unidades+"</td>"+"</tr></table>"+"</br>";
              
        document.getElementById("f12").innerHTML += pruen
        }
    }
    
}

function volver3(){
    document.getElementById("f1").style.visibility = "visible";
    document.getElementById("f11").style.visibility = "hidden";
    document.getElementById("f12").style.visibility = "hidden";
    document.getElementById("f12").innerHTML ='';


}