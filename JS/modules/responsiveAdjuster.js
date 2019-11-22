function resize() {
	console.log("height: ", window.innerHeight, "px");
	console.log("width: ", window.innerWidth, "px");
}
window.onresize = resize;