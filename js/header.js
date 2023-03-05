
//header滑動出現背景
var header_active = function(){
    var scroll_top = $(window).scrollTop();
    $(".pos").html(scroll_top);

    if(scroll_top >= 200){
      $(".header").addClass("-goDown");


      //導覽列下去後可用hover顯示次選單
      $(".nav_bar > li").hover(function(){
        $(this).children("ul").addClass("-showList");
      },function(){
        $(this).children("ul").removeClass("-showList");

      });

    }else{
      $(".header").removeClass("-goDown");
      // 取消hover次選選單事件
      $(".nav_bar > li").unbind('mouseenter').unbind('mouseleave');
    }
    
};

$(function(){
  $(window).scroll(function(){
    header_active();
  });
  
});





// 漢堡的下拉選單
  $(function(){
    $(".nav_bar_list").on("click", function(){

      $(this).children(".bar_list_list").slideToggle();
      $(this).siblings().children(".bar_list_list").slideUp();
      $(this).toggleClass("active").siblings().removeClass("active");

    });
  });




// 頁面滾動滑到最上面
$(function(){

  $("#go_top").on("click", function(e){
      e.preventDefault();
      $('html, body').animate({
      scrollTop: 0
      }, 800);
  });

});


