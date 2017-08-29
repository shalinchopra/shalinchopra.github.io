function sampleCheck()
{
    var answer = document.getElementById("sampleA").value;
    if (answer.toLowerCase() == "popo")
    {
        $("#sampleVideo").modal();
    }
    else
    {
        document.getElementById("incorrectAnswer").src = "img/"+generateRandom()+".jpg";
        $("#sampleImgPusph").modal();
        document.getElementById("msg").innerHTML = "Are you sure he calls you "+answer;
    }
}

function generateRandom(){
                var num = Math.floor((Math.random() * 0) + 1);
                return num;
            }

