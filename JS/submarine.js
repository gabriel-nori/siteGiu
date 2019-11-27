var images = [
	"../Media/Images/Photos/07Submarine/Galeria/Galeria1.png",
	"../Media/Images/Photos/07Submarine/Galeria/Galeria2.jpg",
	"../Media/Images/Photos/07Submarine/Galeria/Galeria3.jpg",
];
function startFunction(){
	setMenuBarClick();
	setGallery(document.getElementById("bannerImg"), document.getElementById("bannerImg2"), images, 2);
}
document.addEventListener("DOMContentLoaded", startFunction);