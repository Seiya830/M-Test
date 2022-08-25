const btn = document.querySelector('.btn');

btn.addEventListener('click', function() {
    const q_01 = document.querySelector('#q_01');
    q_01.style.display = 'none';
    document.querySelector('#q_01').getAttribute('href');
    const q_02 = document.querySelector('#q_02');
    q_02.classList.add('fit');
    q_02.style.display = 'none';
  });


// $(function() {
//   $('.btn').on('click', function () {
//     $(this).closest('div').css('display', 'none');
//     id = $(this).attr('href');
//     $(id).addClass('fit').show('slow');
//   });
// });