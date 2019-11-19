export default function(){
    homeIcon = document.getElementById("topBarHome");
    homeIcon.onclick = function(){
        window.location.href = "../index.html";
    }
    about = document.getElementById("topBarName");
    about.onclick = function(){
        window.location.href = "../index.html";
    }
    contacts = document.getElementById("topBarContact");
    contacts.onclick = function(){
        window.location.href = "../index.html";
    }
};