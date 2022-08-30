$(function(){
  $('.section').hide();

  $('.btn').on('click', function(){
    $('.section').not($($(this).attr('href'))).hide();
    $($(this).attr('href')).show();
  });
});

$(function(){
  $('.points').hide();

  $('.next').on('click', function(){
    $('.points').not($($(this).attr('href'))).hide();
    $($(this).attr('href')).show();
  });
});