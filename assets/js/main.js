// handler slider
function handleSLider() {
  let index = 1;
  changeImage = function () {
    let imgs = [
      "./assets/img/slider2.jpg",
      "./assets/img/slider3.jpg",
      "./assets/img/slider4.jpg",
      "./assets/img/slider5.jpg",

    ];
    document.getElementById("img").src = imgs[index];
    index++;
    if (index == 3) {
      index = 0;
    }
  };
  setInterval(changeImage, 3000);
}

handleSLider();

const imgContent = document.querySelector(".img-tab-pane");
const imgsubcontent = document.querySelector(".img-tab-paned");
const tabs = [...document.querySelectorAll(".total-col")];
const ImgArray = [
  
  "./assets/img/tab1.jpg",
  "./assets/img/tab2.jpg",
  "./assets/img/tab3.jpg",
  "./assets/img/tab4.jpg",
  "./assets/img/tab5.jpg",
];

tabs.forEach((tab, id) => {
  tab.addEventListener("mouseover", handleSwitchTab);
  function handleSwitchTab() {
    ImgArray.forEach((img, index) => {
      if (id === index) {
        imgContent.src = img;
      }
    });
  }
});

const ImgsArray = [ 
  "./assets/img/Banner_01.jpg",
  "./assets/img/Banner_02.jpg",
  "./assets/img/Banner_03.jpg",
  "./assets/img/Banner_04.jpg",
  "./assets/img/Banner_05.jpg",
];
tabs.forEach((tab, id) =>{
  tab.addEventListener("mouseover", handleSwitchTab);
  function handleSwitchTab(){
    ImgsArray.forEach((img, index) =>{
      if(id === index){
        imgsubcontent.src = img;
      }
    });
  }
});





