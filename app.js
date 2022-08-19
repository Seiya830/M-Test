const btn = document.querySelector('.btn');
  function hello() {
  alert('hello');
};
btn.addEventListener('click', hello);



// $(function() {
//   $('.btn').on('click', function () {
//     $(this).closest('div').css('display', 'none');
//     id = $(this).attr('href');
//     $(id).addClass('fit').show('slow');
//   });
// });
