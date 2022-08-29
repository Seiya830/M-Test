$(function(){
  $('.section').hide();

  $('.btn').on('click', function(){
    $('.section').not($($(this).attr('href'))).hide();

    $($(this).attr('href')).show();
  });
});