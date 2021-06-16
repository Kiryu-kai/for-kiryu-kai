$(function() {
  $('.skipbutton').hide().fadeIn(3000)
  $('#ind').hide()
  $('#h_1').hide().fadeIn(3000)
  $('#h_2').hide()
  $('#kiryukai').hide()
  $('#h_3').hide()
  $('#JPC').hide()
  $('#ENC').hide()
  $('#filter__menu').hide()
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

// filter
(function () {
  /** ドロップダウンを開くためのボタン */
  const $btn = $('#filter__btn');
  /** ドロップダウンのコンテナ */
  const $menu = $('#filter__menu');
  /** ドロップダウン内のメニュー項目 */
  const $menuBtns = $('#filter__menu button');
  const labels = {
    ja: '日本語のコメント　Japanese Comments　▾',
    en: '英語のコメント　English Comments　▾',
    all: 'すべてのコメント　All Comments　▾',
  };

  $btn.text(labels.all);

  $btn.on('click', function() {
    $menu.toggle(100);
  });

  $menuBtns.on('click', function () {
    const type = this.dataset.type;

    $btn.text(labels[type]);
    $menu.hide();

    switch (type) {
      case 'ja':
        $('.comment_ja').stop(true, true).show(1000);
        $('.comment_en').stop(true, true).hide(1000);

        break;

      case 'en':
        $('.comment_en').stop(true, true).show(1000);
        $('.comment_ja').stop(true, true).hide(1000);

        break;

      default:
        $('.comment_ja').stop(true, true).show(1000);
        $('.comment_en').stop(true, true).show(1000);

        break;
    }
  });
})();

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
