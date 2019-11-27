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
		menuBurger = document.getElementById("menuBurger");
		if(menu.className == "slide-out" || menu.className == ""){
			menu.className = "slide-in";
			menuBurger.style.background = "url(\"../Media/Icons/Menu/Opened/menu_open-black-18dp/2x/baseline_menu_open_black_18dp.png\")";
		}
		else{
			menu.className = "slide-out";
			menuBurger.style.background = "url(\"../Media/Icons/Menu/Closed/menu-black-18dp/2x/baseline_menu_black_18dp.png\")";
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