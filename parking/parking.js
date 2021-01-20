var filnom=/^(?!.* (?: |$))[a-z\-]+$/;

function loging(){

x1=$('#i1').val();

if(filnom.test(x1)==false){

    toastr.warning("mal")
    $('#i1').val('');
    $('#i1').focus();
    
}

}