const btn = document.querySelector('.btn');
const id = document.querySelector('.btn').getAttribute('href');

btn.addEventListener('click', function() {
  closest(document.querySelector('.btn'), 'div').style.display = 'none';
  document.querySelector('id').classList.add('fit');
  document.querySelector('id').style.display = 'block';
});


// $(function() {
//   $('.btn').on('click', function () {
//     $(this).closest('div').css('display', 'none');
//     id = $(this).attr('href');
//     $(id).addClass('fit').show('slow');
//   });
// });
