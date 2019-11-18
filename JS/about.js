var 
    photosDirectory = "../Media/Images/Photos/Face/",
    imagesLink = [
        photosDirectory + "img1.jpeg",
        photosDirectory + "img2.jpeg",
        photosDirectory + "img3.jpeg",
        photosDirectory + "img4.jpeg",
        photosDirectory + "img5.jpeg"
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
    var number;
    for(i=1; i<img.length+1; i++){
        number = Math.floor(Math.random() * 6) + 1;
        if(!imageNumbers.includes(number)){
            imageNumbers.push(number);
        }
        else{
            number = Math.floor(Math.random() * 6) + 1;
            imageNumbers.push(number);
        }
    }
}
document.addEventListener("DOMContentLoaded", startFunction);