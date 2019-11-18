var 
    photosDirectory = "../Media/Images/Photos/Face/",
    imagesLink = [
        photosDirectory + "img1.jpeg",
        photosDirectory + "img2.jpeg",
        photosDirectory + "img3.jpeg",
        photosDirectory + "img4.jpeg",
        photosDirectory + "img5.jpeg",
        photosDirectory + "img6.jpeg"
    ],
    img = [], //Images object array. this is where we should change the images
    imageNumbers = [],
    time = 5000; //Time, in milliseconds, to change the images
function startFunction(){
    for(i=1; i<7; i++){
        img.push(document.getElementById("img"+i));
    }
    changeImages();
}
function changeImages(){
    var number = Math.floor(Math.random() * 5);
    for(i=0; i<img.length; i++){
        img[i].style.background = "url(" + imagesLink[number] + ")";
        img[i].style.backgroundRepeat = "no-repeat";
        img[i].style.backgroundSize = "contain";
        img[i].style.backgroundPosition = "center center";
        if(number >= 5){
            number = 0;
        }
        else{
            number++;
        }
    }
}
document.addEventListener("DOMContentLoaded", startFunction);