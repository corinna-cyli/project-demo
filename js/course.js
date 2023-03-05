//高中課程種類
$(function(){
    $("a.tab").on("click", function(d){
        d.preventDefault();
    
        $(this).closest("ul").find("a.tab").removeClass("-on");
        $(this).addClass("-on");
        
        $("div.tab").removeClass("-on");
        $("div.tab." + $(this).attr("data-target")).addClass("-on");
    });
});


$(function(){
    $("a.tab").on("click", function(e){
        e.preventDefault();
    
        $(this).closest("li").find("a.tab").removeClass("-on");
        $(this).addClass("-on");
        
        $(".kind").removeClass("-show");
        $(".kind." + $(this).attr("data-target")).addClass("-show");

    });
});



//課程大綱上下開合 &課程類別選擇
$(function(){
    $("button.btn_toggle").on("click", function(f){
        f.preventDefault();

        $("button.btn_toggle").removeClass("-taget");
        $(this).addClass("-taget");

        $(".sort").removeClass("-down");
        $(".sort." + $(this).attr("data-target")).addClass("-down");
    });
});
