<?php

// Passando os dados obtidos pelo formulário para as variáveis abaixo
$nome     = $_POST['nome'];
$email    = trim($_POST['email']);
$emaildestinatario = 'contato@robsonsamuel.com.br'; // Digite seu e-mail aqui, lembrando que o e-mail deve estar em seu servidor web
$ddd      	   	   = $_POST['ddd'];
$telefone      	   = $_POST['telefone'];
$assunto          = $_POST['assunto'];
$outros          = $_POST['outros'];
$mensagem          = $_POST['mensagem'];
 
 
/* Montando a mensagem a ser enviada no corpo do e-mail. */
$mensagemHTML = '<P>FORMULARIO PREENCHIDO NO SITE WWW.ROBSONSAMUEL.COM.BR</P>
<p><b>Nome:</b> '.$nome.'</p>
<p><b>E-Mail:</b> '.$email.'</p>
<p><b>DDD:</b> '.$ddd.'</p>
<p><b>Telefone:</b> '.$telefone.'</p>
<p><b>Assunto:</b> '.$assunto.'</p>
<p><b>Mensagem:</b> '.$mensagem.'</p>
<hr>';


// O remetente deve ser um e-mail do seu domínio conforme determina a RFC 822.
// O return-path deve ser ser o mesmo e-mail do remetente.
$headers = "MIME-Version: 1.1\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";
$headers .= "From: $nomeremetente\r\n"; // remetente
$headers .= "Return-Path: $emaildestinatario \r\n"; // return-path
$envio = mail($emaildestinatario, $assunto, $mensagemHTML, $headers); 
 
 if($envio)
echo "<script>location.href='sucesso.html'</script>"; // Página que será redirecionada

?>
