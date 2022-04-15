var timerInd = setInterval(function() { createTimer(); }, 1000);



function createTimer() {

    let endTime = new Date("April 16, 2022 00:00:00 GMT+5:30");
    endTime = (Date.parse(endTime)) / 1000;

    let now = new Date();
    now = (Date.parse(now) / 1000);

    let timeLeft = endTime - now;

    let days = Math.floor(timeLeft / 86400);
    let hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
    let seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

    if (hours < "10") { hours = "0" + hours; }
    if (minutes < "10") { minutes = "0" + minutes; }
    if (seconds < "10") { seconds = "0" + seconds; }

    $("#days3").html(days + "<span>Days</span>");
    $("#hours3").html(hours + "<span>Hours</span>");
    $("#minutes3").html(minutes + "<span>Minutes</span>");
    $("#seconds3").html(seconds + "<span>Seconds</span>");	

    if(days==00 && hours==00 && minutes==0 && seconds ==0)
    {
        document.getElementById("india").innerHTML = "Wishing you a Very Very Happpyyy B'day Kidddooo ...";
        document.getElementById("btnNew").style.visibility = "visible";
        
        clearInterval(timerInd);
    }

}


