// handler slider
 
changeImage = function(){
    var imgs = ["./assets/img/slider2.jpg","./assets/img/slider3.jpg","./assets/img/slider4.jpg"]
    document.getElementById('img').src = imgs[index];
    index++;
    if(index==3){
        index = 0;
    }
}
setInterval(changeImage,3000)
var index = 1;
 


