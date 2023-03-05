// footer 的
$(function(){
    $(".ft_bar_list").on("click", function(){
        
        $(this).children(".bt_list").slideToggle();
        $(this).siblings().children(".bt_list").slideUp();
        $(this).toggleClass("active").siblings().removeClass("active");
    });
});
