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
    time = 5000, //Time, in milliseconds, to change the images
    behanceIcon,
    linkedinIcon,
    facebookIcon,
    behanceLink = "https://www.behance.net/giuliagolfari",
    linkedinLink = "https://www.linkedin.com/in/giulia-costa-e-silva-golfari-1aa73516b/",
    facebookLink = "https://web.facebook.com/profile.php?id=100010339602530";

function startFunction(){
    for(i=1; i<7; i++){
        img.push(document.getElementById("img"+i));
    }
    changeImages();
    behanceIcon = document.getElementById("behance");
    linkedinIcon = document.getElementById("linkedin");
    facebookIcon = document.getElementById("facebook");

    setMenuBarClick();
    behanceIcon.onclick = function(){
        window.open(behanceLink, "_blank");
    }
    linkedinIcon.onclick = function(){
        window.open(linkedinLink, "_blank");
    }
    facebookIcon.onclick = function(){
        window.open(facebookLink, "_blank");
    }
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