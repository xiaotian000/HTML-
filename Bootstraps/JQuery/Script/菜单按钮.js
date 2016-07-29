$(document).ready(function(){
    $("button#vegOn").click(function(){
       $f = $(".fish").parent().parent().detach();
    });
    $(".hamburger").replaceWith("<li class='portobello'><em>Portobello</em></li>");
    $(".meat").after("<li class='tofu'><em>Tofu</em></li>");
    $m = $(".meat").detach();
    $("button#restoreMe").click(function(){
        $(".menu_entrees li").first().before($f);
        $(".portobello").replaceWith("<li class='hamburger'><em>hamburger</em></li>");
        $(".tufo").each(function(i){
            $(this).after($m[i]);
        });
        $(".tofu").remove();
    });
});