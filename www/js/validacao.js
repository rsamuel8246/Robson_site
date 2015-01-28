  
$(document).ready(function(){
    $('#alerta').css('display', 'none');

    validacao();

})

function validacao(){
    $('form').submit(function(){
        if($('#inputNome').val() == ""){
            $('#alerta').text('Por Favor Preencha o campo NOME').css('display', 'block');
            $('#inputNome').focus();
            return false;
        }        

        if($('#inputNome').length > 3){
            $('#alerta').text('O campo nome deve conter no mínimo 3 caracteres.').css('display', 'block');
            $('#inputNome').focus();
            return false;
        }   

         if($('#inputEmail').val() == ""){
            $('#alerta').text('Por Favor Preencha o campo e-mail').css('display', 'block');
            $('#inputEmail').focus();
            return false;
        } 

         if($('#inputMensagem').val() == ""){
            $('#alerta').text('Por Favor Preencha o campo MENSAGEM').css('display', 'block');
            $('#inputMensagem').focus();
            return false;
        } 



    })
}



/*function validacao(){

var div = document.getElementById("alerta")


    if(document.form.nomeremetente.value==""){
        div.innerHTML="Por Favor Preencha o campo NOME corretamente!!!";
        return false;
    }
    if(document.form.nomeremetente.value.length < 8){
        div.innerHTML="O campo NOME deve conter mais de 8 caractéres !!!";
        return false;
    }

    if(document.form.nomeremetente.value.length < 8){
        div.innerHTML="O campo NOME deve conter mais de 8 caractéres !!!";
        return false;
    }

     if(document.form.emailremetente.value=="" || document.form.emailremetente.value.indexOf('@')==-1 || document.form.emailremetente.value.indexOf('.')==-1){
        div.innerHTML="Email Inválido !!!";
        return false;
    }

    if(document.form.telefone.value==""){
        div.innerHTML="Por Favor Preencha o campo TELEFONE corretamente!!!";
        return false;
    }

      if(document.form.telefone.value.length < 11){
        div.innerHTML="O campo TELEFONE deve conter mais de 11 caractéres!!!";
        return false;
    }

   if(document.form.assunto.value.length < 8){
        div.innerHTML="Por favor preencha o campo com o Assunto que deseja saber!!!";
        return false;
    }

      if(document.form.mensagem.value==""){
        div.innerHTML="Por Favor Preencha o Campo MENSAGEM!!!";
        return false;
    }

 
}*/ 

