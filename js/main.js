
/*** TOPにもどる *************************************************/
jQuery(function($){
  $(window).on('scroll', function(){
    if ($(window).scrollTop() > 300) {
      $('.rtn').fadeIn(400);
    } else {
      $('.rtn').fadeOut(400);
    }
  });
  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 500);
     return false;
  });
});

/*** 文字フェードイン ********************************************/

function fadeAnime(){

  $('.fade').each(function(){ //fadeUpTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadein');// 画面内に入ったらfadeUpというクラス名を追記
    }
    });
}

// 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function (){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });

/*** キラキラ ********************************************/

var rellax = new Rellax('.rellax', {
  center: true,
});

