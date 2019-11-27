var 
	imagesSrc,
	actualImage,
	nextImage,
	interval,
	totalImages,
	maxIndex,
	timed,
	actual = 0;

function setGallery(firstImage, secondImage, imagesIn, intervalIn){
	imagesSrc = imagesIn;
	actualImage = firstImage;
	nextImage = secondImage;
	interval = intervalIn*1000;
	totalImages = images.length;
	maxIndex = totalImages -1;
	if(firstImage && secondImage){
		timed = setInterval(changeImages, interval);
	}
	else{
		console.log("something is terribly wrong with this shit");
	}
}
function changeImages(){
	nextImage.className = "hidden";
	let holder = actualImage;
	actual += 1;
	if(actual > maxIndex){
		actual = 0
	}
	nextImage.src = images[actual];
	actualImage.className = "slide-out";
	nextImage.className = "slide-in";
	actualImage = nextImage;
	nextImage = holder;
}