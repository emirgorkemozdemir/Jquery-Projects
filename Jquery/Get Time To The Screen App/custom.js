// Gettin the time variable and setting interval
var time = setInterval(getTime,1000);

function getTime(){
    var d = new Date();
    var hour = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();

    $("#hours").text(hour);
    $("#mins").text(min);
    $("#secs").text(sec);
}