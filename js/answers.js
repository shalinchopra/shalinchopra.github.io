function a1Check()
{
    let answer = document.getElementById("a1").value;
    if (answer.toLowerCase() === "04/15/1995") {
        $("#q1v").modal();
    }
    else {
        $("#i1").modal();
        document.getElementById("msg").innerHTML = "Are you sure this is the answer: ? " + answer;
    }
}

function a2Check()
{
    let answer = document.getElementById("a2").value;
    if (answer.toLowerCase() === "guddu")
    {
        $("#q2v").modal();
    }
    else
    {
        $("#i2").modal();
        document.getElementById("msg").innerHTML = "Are you sure this is the answer: ? " + answer;
    }
}

function a3Check()
{
    let answer = document.getElementById("a3").value;
    if (answer.toLowerCase() === "terrace")
    {
        $("#q3v").modal();
    }
    else
    {
        $("#i3").modal();
        document.getElementById("msg").innerHTML = "Are you sure this is the answer: ? " + answer;
    }
}

function a4Check()
{
    let answer = document.getElementById("a4").value;
    if (answer.toLowerCase() === "ekaant")
    {
        $("#q4v").modal();
    }
    else
    {
        $("#i4").modal();
        document.getElementById("msg").innerHTML = "Are you sure this is the answer: ? " + answer;
    }
}

function a5Check()
{
    let answer = document.getElementById("a5").value;
    if (answer.toLowerCase() === "gym")
    {
        $("#q5v").modal();
    }
    else
    {
        $("#i5").modal();
        document.getElementById("msg").innerHTML = "Are you sure this is the answer: ? " + answer;
    }
}

function a6Check()
{
    let answer = document.getElementById("a6").value;
    if (answer.toLowerCase() === "money")
    {
        $("#q6v").modal();
    }
    else
    {
        $("#i6").modal();
        document.getElementById("msg").innerHTML = "Are you sure this is the answer: ? " + answer;
    }
}

function a7Check()
{
    let answer = document.getElementById("a7").value;
    if (answer.toLowerCase() === "phone")
    {
        $("#q7v").modal();
    }
    else
    {
        $("#i7").modal();
        document.getElementById("msg").innerHTML = "Are you sure you call him/her "+answer;
    }
}

function a8Check()
{
    let answer = document.getElementById("a8").value;
    if (answer.toLowerCase() === "mountain")
    {
        $("#q8v").modal();
    }
    else
    {
        $("#i8").modal();
        document.getElementById("msg").innerHTML = "Are you sure this is the answer: ? " + answer;
    }
}

function a9Check()
{
    let answer = document.getElementById("a9").value;
    if (answer.toLowerCase() === "shivani")
    {
        $("#q9v").modal();
    }
    else
    {
        $("#i9").modal();
        document.getElementById("msg").innerHTML = "Are you sure this is the answer: ? " + answer;
    }
}

