$("#myTArea").keypress(function(){
var max = 100;
var x = $("#myTArea").val().length;
var remaining = max-x;
$("#warning").text(remaining+" karakter kaldı");
});