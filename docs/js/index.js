
// 表示アニメーション
$(function() {
  /** フェードインさせる要素 */
  const $fadeIn = $('.fadein');
  /** フェードインアニメーションをスキップさせるボタン */
  const $skipBtn = $('.skipbutton');
  /** @type {number[]} - setTimeoutのキー */
  const keys = [];

  // フェードインアニメーションをスキップさせるためのボタン
  $skipBtn.on('click', function() {
    $fadeIn.removeClass('fadein');
    $skipBtn.remove();

    keys.forEach(function (key) {
      clearTimeout(key);
    });
  })

  // フェードイン
  $fadeIn.each(function (idx) {
    const $self = $(this);

    keys.push(setTimeout(function(){
      $self.addClass('visible');

      if ($fadeIn.length - 1 === idx) {
        $skipBtn.fadeOut(function () {
          $skipBtn.remove();
        });
      }
    }, idx * 3000));
  });
});


$(function() {
  $('#kiryukai').hide()
  $('#JPC').hide()
  $('#ENC').hide()
  $('.button').hide()
});


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


setTimeout(function() {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('#kiryukai').fadeIn(2500);
      $('#copyright').fadeIn(2500);
    }
  });
},14000)
