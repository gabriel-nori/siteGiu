var
	minTablet = {
		"height":100,
		"width":100
	},
	minWeb = {
		"height":300,
		"width":300
	}

function resize() {
	console.log("height: ", window.innerHeight, "px");
	console.log("width: ", window.innerWidth, "px");
}
window.onresize = resize;