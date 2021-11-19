"use strict"
const image = document.getElementById("photo");

image.addEventListener('mouseover', function (){
    image.src = "img/IMG_20210621_132432.jpg"
})

image.addEventListener('mouseout', function () {
    image.src = "img/IMG_20210913_182151.jpg"
})
