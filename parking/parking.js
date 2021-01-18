//https://www.youtube.com/watch?v=GeCNShiLdpc

//https://www.cablenaranja.com/ajax-sencillo-con-php-y-jquery/
var num;
$("#button1").click(function (e) { 
    var num = $("#i2").val();
     
});

var params = {
    "numFactorial" : num
};


$.ajax({
    type: "POST",
    url: "pantallaprincipal.php",
    data: params,
    dataType: "html",
    success: function (response) {

        $("resultado").value(response);
        
    }
});