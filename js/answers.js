
function codeCheck() {
    var answer = document.getElementById("answerCode").value;
    if (answer == "1538") {
        var url = "/rebel.html";
        $(location).attr('href',url);
    }
}

function sampleCheck()
{
    var answer = document.getElementById("sampleA").value;
    if (answer.toLowerCase() == "popo")
    {
        $("#sampleVideo").modal();
    }
    else
    {
        $("#sampleImgPusph").modal();
        document.getElementById("msg").innerHTML = "Your mood isn't: "+answer;
    }
}

//Vishu - kutta
function a1Check()
{
    var answer = document.getElementById("a1").value;
    if (answer.toLowerCase() == "zeher")
    {
        $("#q1v").modal();
    }
    else
    {
        document.getElementById("incorrectAnswer1").src = "../img/emb/"+generateRandom()+".jpg";
        $("#i1").modal();
        document.getElementById("msg").innerHTML = "Are you sure you call him/her "+answer;
    }
}

//Amit - Amitwaa
function a2Check()
{
    var answer = document.getElementById("a2").value;
    if (answer.toLowerCase() == "banddar")
    {
        $("#q2v").modal();
    }
    else
    {
        document.getElementById("incorrectAnswer2").src = "../img/emb/"+generateRandom()+".jpg";
        $("#i2").modal();
        document.getElementById("msg").innerHTML = "Are you sure you call him/her "+answer;
    }
}

//rishabh
function a3Check()
{
    var answer = document.getElementById("a3").value;
    if (answer.toLowerCase() == "dukh")
    {
        $("#q3v").modal();
    }
    else
    {
        document.getElementById("incorrectAnswer3").src = "../img/emb/"+generateRandom()+".jpg";
        $("#i3").modal();
        document.getElementById("msg").innerHTML = "Are you sure you call him/her "+answer;
    }
}

//manna
function a4Check()
{
    var answer = document.getElementById("a4").value;
    if (answer.toLowerCase() == "bhakt")
    {
        showMsg();
        $("#q4v").modal();
    }
    else
    {
        document.getElementById("incorrectAnswer4").src = "../img/emb/"+generateRandom()+".jpg";
        $("#i4").modal();
        document.getElementById("msg").innerHTML = "Are you sure you call him/her "+answer;
    }
}

//Shushi
function a5Check()
{
    var answer = document.getElementById("a5").value;
    if (answer.toLowerCase() == "kai zala")
    {
        $("#q5v").modal();
    }
    else
    {
        document.getElementById("incorrectAnswer5").src = "../img/emb/"+generateRandom()+".jpg";
        $("#i5").modal();
        document.getElementById("msg").innerHTML = "Are you sure you call him/her "+answer;
    }
}

//Saurabh
function a6Check()
{
    var answer = document.getElementById("a6").value;
    if (answer.toLowerCase() == "faraki")
    {
        $("#q6v").modal();
    }
    else
    {
        document.getElementById("incorrectAnswer6").src = "../img/emb/"+generateRandom()+".jpg";
        $("#i6").modal();
        document.getElementById("msg").innerHTML = "Are you sure you call him/her "+answer;
    }
}

//Shivam - pati
function a7Check()
{
    var answer = document.getElementById("a7").value;
    if (answer.toLowerCase() == "shivam")
    {
        $("#q7v").modal();
    }
    else
    {
        document.getElementById("incorrectAnswer7").src = "../img/emb/"+generateRandom()+".jpg";
        $("#i7").modal();
        document.getElementById("msg").innerHTML = "Are you sure you call him/her "+answer;
    }
}

//Shalin
function a8Check()
{
    var answer = document.getElementById("a8").value;
    if (answer.toLowerCase() == "hate you")
    {
        $("#q8v").modal();
    }
    else
    {
        document.getElementById("incorrectAnswer8").src = "../img/emb/"+generateRandom()+".jpg";
        $("#i8").modal();
        document.getElementById("msg").innerHTML = "Are you sure you call him/her "+answer;
    }
}

//Pooja - cheese cake
function a9Check()
{
    var answer = document.getElementById("a9").value;
    if (answer.toLowerCase() == "cheesecake")
    {
        $("#q9v").modal();
    }
    else
    {
        document.getElementById("incorrectAnswer9").src = "../img/emb/"+generateRandom()+".jpg";
        $("#i9").modal();
        document.getElementById("msg").innerHTML = "Are you sure you call him/her "+answer;
    }
}

function generateRandom(){
                var num = Math.floor((Math.random() * 25) + 1);
                return num;
            }

