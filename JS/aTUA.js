var images = [
	"../Media/Images/Photos/01aTUA/Galeria/Galeria1.jpg",
	"../Media/Images/Photos/01aTUA/Galeria/Galeria2.jpg",
	"../Media/Images/Photos/01aTUA/Galeria/Galeria3.jpg"
];
function startFunction(){
	setMenuBarClick();
	setGallery(document.getElementById("bannerImg"), document.getElementById("bannerImg2"), images, 10);
}
document.addEventListener("DOMContentLoaded", startFunction);