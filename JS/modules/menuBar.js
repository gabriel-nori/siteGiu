function setMenuBarClick(){
    homeIcon = document.getElementById("menuBarHome");
    homeIcon.onclick = function(){
        window.location.href = "../index.html";
    }
    about = document.getElementById("menuBarName");
    about.onclick = function(){
        window.location.href = "../Pages/about.html";
    }
    contacts = document.getElementById("menuBarContact");
    contacts.onclick = function(){
        window.location.href = "../Pages/contact.html";
    }
}