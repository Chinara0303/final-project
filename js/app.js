$(function () {
  $(".header-center-info").slick({
    infinite: true,
    slideStoShow: 1,
    slideStoScroll: 1,
    speed: 300,
    autoplay: true,
    vertical: true,
    arrows: false,
  });
});



var iconx = document.querySelector(".iconx");
iconx.onclick = function () {
  var sidebar = document.querySelector(".content-area");
  sidebar.style.width = "100%";
  iconx.style.opacity = "1";
};
iconx.onclick = function () {
  var sidebar = document.querySelector(".content-area");
  // var iconx = document.querySelector(".iconx");
  sidebar.style.width = "0%";
  iconx.style.opacity = "0";
};

var tabmenus=document.querySelectorAll(".product-size .list-filter .size");
for(var menu of tabmenus){
  menu.addEventListener('click',function(){
    var active=document.querySelector(".active");
    active.classList.remove('active');
    this.classList.add('active');
  })
}

// range filter
var lowerSlider = document.querySelector('#lower');
var  upperSlider = document.querySelector('#upper');

document.querySelector('#two').value=upperSlider.value;
document.querySelector('#one').value=lowerSlider.value;

var  lowerVal = parseInt(lowerSlider.value);
var upperVal = parseInt(upperSlider.value);

upperSlider.oninput = function () {
    lowerVal = parseInt(lowerSlider.value);
    upperVal = parseInt(upperSlider.value);

    if (upperVal < lowerVal + 4) {
        lowerSlider.value = upperVal - 4;
        if (lowerVal == lowerSlider.min) {
        upperSlider.value = 4;
        }
    }
    document.querySelector('#two').value=this.value
};

lowerSlider.oninput = function () {
    lowerVal = parseInt(lowerSlider.value);
    upperVal = parseInt(upperSlider.value);
    if (lowerVal > upperVal - 4) {
        upperSlider.value = lowerVal + 4;
        if (upperVal == upperSlider.max) {
            lowerSlider.value = parseInt(upperSlider.max) - 4;
        }
    }
    document.querySelector('#one').value=this.value
};

