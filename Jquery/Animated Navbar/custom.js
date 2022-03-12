$(window).scroll(function(){
    var distance = $(window).scrollTop();

    if(distance>500){
     $("#myNav").removeClass("navBig").addClass("navLittle");
    }
    else{
        $("#myNav").removeClass("navLittle").addClass("navBig");
    }
})