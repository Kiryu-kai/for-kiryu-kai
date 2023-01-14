var url = './messages.json';
$.getJSON(url, function(data){
  message_lists = [];
  for (var i = 0; i < data.length; i++) {
    if (data[i].Lang == "ja") {
      var language = "comment_ja";
    } else {
      var language = "comment_en";
    }

    var message_length = data[i].Message.length;
    var text_color = "";
    var chat_color_name = "";
    var chat_color_msg = "";

    if (message_length < 51) {
      chat_color_name = " lightblue_t";
      chat_color_msg = " lightblue_b";

    } else if ( message_length < 151) {
      chat_color_name = " green_t";
      chat_color_msg = " green_b";

    } else if ( message_length < 201) {
      chat_color_name = " yellow_t";
      chat_color_msg = " yellow_b";
      
    } else if ( message_length < 226) {
      text_color = " tw";
      chat_color_name = " orange_t";
      chat_color_msg = " orange_b tw";
      
    } else if ( message_length < 251) {
      text_color = " tw";
      chat_color_name = " purple_t";
      chat_color_msg = " purple_b tw";
      
    } else if ( message_length > 251) {
      text_color = " tw";
      chat_color_name = " red_t";
      chat_color_msg = " red_b tw";
      
    }

    var message =
    "<div class='" + language + " Userbox'><div class='User" + chat_color_name + "'>" +
    "<a class='TL' target='_blank' rel='noopener noreferrer' href='https://twitter.com/" + data[i].Twitter + "'>" +
    "<p class='Username" + text_color + "'>" + data[i].Name + "</p></a></div>" +
    "<div class='Text" + chat_color_msg + "'><p>" + data[i].Message + "</p></div></div>";
    
    message_lists.push(message);
  }
  $('.chat').append(message_lists);
});

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
    }, idx * 900));
  });
});


$(function() {
  $('#kiryukai').hide()
  //$('#copyright').hide()
  $('#JPC').hide()
  $('#ENC').hide()
  $('.button').hide()
  $('.feedbackbtn').hide()
  $('.postpagebtn').hide()
});

$('#close').on('click', function() {
  $('#copyright_box').css('display', 'none');
});
$('#background').on('click', function() {
  $('#copyright_box').css('display', 'none');
});
$('#credit_btn').on('click', function() {
  $('#copyright_box').css('display', 'block');
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
    all: 'すべてのコメント - All Comments　▾',
    ja: '日本語のコメント - Japanese Comments　▾',
    en: '英語のコメント - English Comments　▾',
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
