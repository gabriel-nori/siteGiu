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
	projectName;
function setClickListeners(elements){
	for(i=0; i<elements.length;i++){
		elements[i].onclick = function(){
			window.location.href = this.dataset.projectLink;
		};
	}
	about = document.getElementById("menuBarName");
	about.onclick = function(){
		window.location.href = "./Pages/about.html";
	}
	contacts = document.getElementById("menuBarContact");
	contacts.onclick = function(){
		window.location.href = "./Pages/contact.html";
	}
	menuBurger = document.getElementById("menuBurger");
	menuBurger.onclick = function(){
		menu = document.getElementById("menuBar");
		if(menu.style.visibility == "hidden" || menu.style.visibility == ""){
			menu.style.visibility = "visible";
		}
		else{
			menu.style.visibility = "hidden";
		}
	}
	if(document.getElementById("main")){
		mainContainer = document.getElementById("main");
		mainContainer.onclick = function(){
			document.getElementById("menuBar").style.visibility = "hidden";
		}
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