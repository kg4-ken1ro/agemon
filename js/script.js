$(".openbtn1").click(function () {
    $(this).toggleClass('active');
    $(".humbergerIcon-menu").toggleClass('active');
});
$(".humbergerIcon-li a").click(function () {
    $(".humbergerIcon-menu").toggleClass('active');
    $('.openbtn1').toggleClass('active');
});

function FixedAnime() {
var elemTop = $( '#menu' ).offset().top; // グローバルメニューの位置
var scroll = $(window).scrollTop();
if(scroll >= 600){//上から20pxスクロールされたら
      $('#header').addClass('DownMove');//DownMoveというクラス名を除き
    } else if (scroll >= elemTop){
      $('#header').removeClass('UpMove');//#headerについているUpMoveというクラス名を除く
      $('#header').addClass('DownMove');//#headerについているDownMoveというクラス名を付与

    }else{
      if($('#header').hasClass('DownMove')){//すでに#headerにDownMoveというクラス名がついていたら
        $('#header').removeClass('DownMove');//DownMoveというクラス名を除き
        $('#header').addClass('UpMove');//UpnMoveというクラス名を付与
      }
    }
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
    FixedAnime();/* スクロール途中からヘッダーを出現させる関数を呼ぶ*/
  });