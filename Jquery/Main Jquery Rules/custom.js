// Choosing with id
$("#btnShow").css({background:"red"});

// Choosing with class
$(".myimg").css({width:800});

// Choosing even or odd buttons
$("button:odd").css({background:"blue"});

// Choosing exact button , that always gets -1nth element so to get 3rd write 4
$("button:nth-child(4)").css({background:"green"});

// first-child and last-child could be used

// Hiding photo with hide(2000) you can give transition
$("#btnClose").on("click",function(){
  $(".myimg").hide();
});

// Showing photo with show(2000) you can give transition
$("#btnShow").on("click",function(){
    $(".myimg").show();
});

// Toggle photo
$("#btnToggle").on("click",function(){
    $(".myimg").toggle();
});

// Append something with preprend you can add something before the other text starts. Append adds to end.
 $("#btnAppend").on("click",function(){
    $("#writingDiv").append("Hello World");
 });

// Remove the text set text to empty
$("#btnDel").on("click",function(){
  $("#writingDiv").text("");
});


// You can use toggleClass , addClass or removeClass too.