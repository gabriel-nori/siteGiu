var images = [
	"../Media/Images/Photos/04Looping/Galeria/Galeria1.png",
	"../Media/Images/Photos/04Looping/Galeria/Galeria2.png",
	"../Media/Images/Photos/04Looping/Galeria/Galeria3.png"
];
function startFunction(){
	setMenuBarClick();
	setGallery(document.getElementById("bannerImg"), document.getElementById("bannerImg2"), images, 2);
}
document.addEventListener("DOMContentLoaded", startFunction);