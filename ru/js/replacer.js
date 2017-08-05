// This simple and messy code doesn't work when window is resizing 
// I think in several months i would remember this silly code with laugh


$(function(){
        if($(window).width() >= 0 && $(window).width() <= 400){
           $(".wapik_img").attr("src","img/works/wapik/400.png");
        }
        else if($(window).width() > 400 && $(window).width() <= 1201){
           $(".wapik_img").attr("src","img/works/wapik/800.png");         
        }
        else{
           $(".wapik_img").attr("src","img/works/wapik/1600.png");
        }
    });


$(function(){
        if($(window).width() >= 0 && $(window).width() <= 400){
           $(".tajam_img").attr("src","img/works/tajam/400.png");
        }
        else if($(window).width() > 400 && $(window).width() <= 1201){
           $(".tajam_img").attr("src","img/works/tajam/800.png");         
        }
        else{
           $(".tajam_img").attr("src","img/works/tajam/1400.png");
        }
    });
$(function(){
        if($(window).width() >= 0 && $(window).width() <= 400){
           $(".codepen_img").attr("src","img/works/codepen/400.png");
        }
        else if($(window).width() > 400 && $(window).width() <= 1201){
           $(".codepen_img").attr("src","img/works/codepen/800.png");         
        }
        else{
           $(".codepen_img").attr("src","img/works/codepen/1600.png");
        }
    });


