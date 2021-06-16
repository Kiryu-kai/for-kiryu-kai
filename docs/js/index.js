$(function() {
  $('.skipbutton').hide().fadeIn(3000)
  $('#ind').hide()
  $('#h_1').hide().fadeIn(3000)
  $('#h_2').hide()
  $('#kiryukai').hide()
  $('#h_3').hide()
  $('#JPC').hide()
  $('#ENC').hide()
  $('.button').hide()
  $('#copyright').hide()
  setTimeout(function(){
    $('#h_2').fadeIn(3000);
    setTimeout(function(){
      $('#h_3').fadeIn(3000);
    },3000);
  },3000);
});

setTimeout(function() {
  $('.skipbutton').hide(1000);
   setTimeout(function() {
     $('.skipbutton').remove()
     $('#ind').fadeIn(2000)
   },1000);
},9000);

$('#menubutton').on('click', function() {
  $('.button').toggle(100)
})

$('#button_ja').on('click', function() {
  $('.button').hide();
  $('#JPC').show();
  $('#ENC').hide();
  $('#AC').hide();
  $('.comment_ja').stop(true,true).show(1000);
  $('.comment_en').stop(true,true).hide(1000);
})

$('#button_en').on('click', function() {
  $('.button').hide();
  $('#JPC').hide();
  $('#ENC').show();
  $('#AC').hide();
  $('.comment_en').stop(true,true).show(1000);
  $('.comment_ja').stop(true,true).hide(1000);
})

$('#button_all').on('click', function() {
  $('.button').hide();
  $('#JPC').hide();
  $('#ENC').hide();
  $('#AC').show();
  $('.comment_ja').stop(true,true).show(1000);
  $('.comment_en').stop(true,true).show(1000);
})

$('.skipbutton').on('click', function() {
  $('#h_1').stop(true,true).show()
  $('#h_2').stop(true,true).show()
  $('#h_3').stop(true,true).show()
  $('#ind').stop(true,true).show()
  $('.skipbutton').remove()
})

setTimeout(function() {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('#kiryukai').fadeIn(2500);
      $('#copyright').fadeIn(2500);
    }
  });
},14000)
