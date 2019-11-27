var images = [];

function changeImages(number){
	if(!inRange(number, 0, images.length)){
		number = 0;
	}
}

function inRange(x, min, max) {
	return ((x-min)*(x-max) <= 0);
}