function makeTimerIndia() {

    var endTime = new Date("August 30, 2017 00:00:00 GMT+0530");			
    var endTime = (Date.parse(endTime)) / 1000;

    var now = new Date();
    var now = (Date.parse(now) / 1000);

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400); 
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

    if (hours < "10") { hours = "0" + hours; }
    if (minutes < "10") { minutes = "0" + minutes; }
    if (seconds < "10") { seconds = "0" + seconds; }

    $("#days1").html(days + "<span>Days</span>");
    $("#hours1").html(hours + "<span>Hours</span>");
    $("#minutes1").html(minutes + "<span>Minutes</span>");
    $("#seconds1").html(seconds + "<span>Seconds</span>");
    
   
    if(days==00 && hours==00 && minutes==0 && seconds ==0)
    {
        //alert(minutes);
        document.getElementById("india").innerHTML = "Many Many Happy returns of the Day, Wishes from INDIA!!!";
        document.getElementById("timerIndia").style.visibility = "hidden";
        document.getElementById("divM").style.visibility = "visible";
    }

}

function makeTimerMichigan() {

    var endTime = new Date("August 30, 2017 00:00:00 EDT");	
    var endTime = (Date.parse(endTime)) / 1000;

    var now = new Date();
    var now = (Date.parse(now) / 1000);

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400); 
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

    if (hours < "10") { hours = "0" + hours; }
    if (minutes < "10") { minutes = "0" + minutes; }
    if (seconds < "10") { seconds = "0" + seconds; }

    $("#days2").html(days + "<span>Days</span>");
    $("#hours2").html(hours + "<span>Hours</span>");
    $("#minutes2").html(minutes + "<span>Minutes</span>");
    $("#seconds2").html(seconds + "<span>Seconds</span>");


    if(days==00 && hours==00 && minutes==0 && seconds ==0)
    {
        //alert(minutes);
        document.getElementById("mich").innerHTML = "Here's Michigan, Wishing you a Very Happy Birthday ...!!!";
        document.getElementById("timerMichigan").style.visibility = "hidden";
        document.getElementById("divC").style.visibility = "visible";
    }

}

function makeTimerChicago() {

    var endTime = new Date("August 30, 2017 00:00:00 CDT");	
    var endTime = (Date.parse(endTime)) / 1000;

    var now = new Date();
    var now = (Date.parse(now) / 1000);

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400); 
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

    if (hours < "10") { hours = "0" + hours; }
    if (minutes < "10") { minutes = "0" + minutes; }
    if (seconds < "10") { seconds = "0" + seconds; }

    $("#days3").html(days + "<span>Days</span>");
    $("#hours3").html(hours + "<span>Hours</span>");
    $("#minutes3").html(minutes + "<span>Minutes</span>");
    $("#seconds3").html(seconds + "<span>Seconds</span>");	
    
    if(days==00 && hours==00 && minutes==0 && seconds ==0)
    {
        //alert(minutes);
        document.getElementById("chi").innerHTML = "Happy Birthday from all of us at TEEN GHAR!!!";
        document.getElementById("timerChicago").style.visibility = "hidden";
        document.getElementById("btnDare").style.visibility = "visible";
    }

}

setInterval(function() { makeTimerIndia(); }, 1000);
setInterval(function() { makeTimerMichigan(); }, 1000);
setInterval(function() { makeTimerChicago(); }, 1000);
