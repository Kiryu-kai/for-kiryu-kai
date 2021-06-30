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

    keys.push(window.setTimeout(function(){
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
  $('#copyright').hide()
  $('#JPC').hide()
  $('#ENC').hide()
  $('.button').hide()
  $('.feedbackbtn').hide()
});


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

  $menu.hide();
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

if ($('#ind').is(':visible')) {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 3000) {
      $('#kiryukai').fadeIn(2500);
      $('#copyright').fadeIn(2500);
    }
  });
}

if ($('#ind').is(':visible')) {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('.feedbackbtn').fadeIn(1000);
    }
  });
}
