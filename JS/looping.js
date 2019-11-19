var
homeIcon;

function startFunction(){
    homeIcon = document.getElementById("topBarHome");
    homeIcon.onclick = function(){
        window.location.href = "../index.html";
    }
}
document.addEventListener("DOMContentLoaded", startFunction);