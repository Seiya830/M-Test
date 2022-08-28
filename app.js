const btn = document.getElementsByClassName('btn');

btn.addEventListener('click', function() {
  document.getElementById('q_02').style.display = 'none';

    const q_02 = document.getElementsByClassName('q_02');
    
    if(q_02.style.display=='block') {
      q_02.style.display = 'none';
    }else {
      q_02.style.display = 'block';
    }
  
});



// document.querySelectorAll('.btn1').forEach(function() {
//   this.addEventListener('click', function() {
//     const q_01 = document.querySelector('#q_01');
//     q_01.style.display = 'none';
//     document.querySelector('#q_01').getAttribute('href');
//     const q_02 = document.querySelector('#q_02');
//     q_02.style.display = 'block';
//   });
// });



// $(function() {
//   $('.btn').on('click', function () {
//     $(this).closest('div').css('display', 'none');
//     id = $(this).attr('href');
//     $(id).addClass('fit').show('slow');
//   });
// });