$(window).scroll(function(){
   
    // Get the distance from top
    var distance = $(window).scrollTop();

    if(distance>300){
    $("#myButton").fadeIn();
    }
    else{
        $("#myButton").fadeOut();
    }


});

$("#myButton").on("click",function(){
  $("html, body").animate({scrollTop:0});
});