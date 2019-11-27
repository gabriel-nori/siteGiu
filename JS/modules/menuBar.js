function setMenuBarClick(){
	if(document.getElementById("menuBarHome")){
		homeIcon = document.getElementById("menuBarHome")
		homeIcon.onclick = function(){
			window.location.href = "../index.html";
		}
	}
	about = document.getElementById("menuBarName");
	about.onclick = function(){
		window.location.href = "../Pages/about.html";
	}
	contacts = document.getElementById("menuBarContact");
	contacts.onclick = function(){
		window.location.href = "../Pages/contact.html";
	}
	menuBurger = document.getElementById("menuBurger");
	menuBurger.onclick = function(){
		menu = document.getElementById("menuBar");
		if(menu.className == "slide-out" || menu.className == ""){
			menu.className = "slide-in";
		}
		else{
			menu.className = "slide-out";
		}
	}
	if(document.getElementById("main")){
		mainContainer = document.getElementById("main");
		mainContainer.onclick = function(){
			hiddenItem = document.getElementById("menuBarName");
			if(hiddenItem.style.visibility == "visible"){
				hiddenItem.style.visibility = "hidden";
			}
		}
	}
}