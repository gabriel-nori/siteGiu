export {setClick};
export {setClick as default};
function setTopBarClick(){
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