  $(function () {
    
    $('.phone').mask('0000-0000');
    $('.phone_with_ddd').mask('(00) 0000-0000');
    
    
    var SaoPauloCelphoneMask = function(phone, e, currentField, options){
      return phone.match(/^(\(?11\)? ?9(5[0-9]|6[0-9]|7[01234569]|8[0-9]|9[0-9])[0-9]{1})/g) ? '(00) 00000-0000' : '(00) 0000-0000';
    };

    $(".sp_celphones").mask('(00) 00000-0000');

    $(".bt-mask-it").click(function(){
      $(".mask-on-div").mask("000.000.000-00");
      $(".mask-on-div").fadeOut(500).fadeIn(500)
    })

    $('pre').each(function(i, e) {hljs.highlightBlock(e)});
  });

var celphoneMask = function(phone, e, currentField, options){
  return telefone.match(/^(\(?11\)? ?9(5[0-9]|6[0-9]|7[01234569]|8[0-9]|9[0-9])[0-9]{1})/g) ? 
  '(00) 00000-0000' : '(00) 0000-0000';
};

$(".sp_celphones").mask(celphoneMask);