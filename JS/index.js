var
    pagesDirectory = "./Pages/",
    contactLink = pagesDirectory+"contact.html",
    aboutLink = pagesDirectory+"about.html",
    menuItens = [],
    menuLinks = [
        pagesDirectory+"aTUA.html",
        pagesDirectory+"ContosAfricanos.html",
        pagesDirectory+"Albummamieeu.html",
        pagesDirectory+"Looping.html",
        pagesDirectory+"WhatsFake.html",
        pagesDirectory+"SeashellEyes.html",
        pagesDirectory+"Submarine.html",
        pagesDirectory+"Temoso.html",
        pagesDirectory+"Nise.html",
        pagesDirectory+"Quadrinhomoça.html"
    ],
    menuNames = [
        "a.TUA",
        "contos africanos",
        "my universe",
        "looping",
        "whatsfake",
        "seashell eyes",
        "submarine",
        "temoso",
        "nise à mão",
        "moça rosa"
    ],
    projectName,
    topBarName,
    topBarContact;
function setClickListeners(elements){
    for(i=0; i<elements.length;i++){
        elements[i].onclick = function(){
            window.location.href = this.dataset.projectLink;
        };
    }
    topBarContact.onclick = function(){
        window.location.href = contactLink;
    }
    topBarName.onclick = function(){
        window.location.href = aboutLink;
    }
}
function setMouseOver(elements){
    for(i=0;i<elements.length;i++){
        elements[i].onmouseover = function(){
            projectName.innerText = this.dataset.projectName;
        };
    }
}
function setMouseOut(){
    document.getElementById("rightBar").onmouseleave = function(){
        projectName.innerText = "";
    };
}
function startFunction(){
    projectName = document.getElementById("projectNameText");
    topBarContact = document.getElementById("topBarContact");
    topBarName = document.getElementById("topBarName");

    for(i=1;i<11;i++){
        var item = i;
        if(i<10){
            item = "0"+i;
        }

        var element = document.getElementById("menu"+item);
        menuItens.push(element);
        element.dataset.projectName = menuNames[i-1];
        element.dataset.projectLink = menuLinks[i-1];
    }
    
    setClickListeners(menuItens);
    setMouseOver(menuItens);
    setMouseOut();
}
document.addEventListener("DOMContentLoaded", startFunction);