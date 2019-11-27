var images = [
	"../Media/Images/Photos/01aTUA/Galeria/Galeria1.jpg",
	"../Media/Images/Photos/01aTUA/Galeria/Galeria2.jpg"
];
function startFunction(){
	setMenuBarClick();
	setGallery(document.getElementById("bannerImg"), document.getElementById("bannerImg2"), images, 5);
}
document.addEventListener("DOMContentLoaded", startFunction);