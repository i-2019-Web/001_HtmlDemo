// show的放大镜效果
var slider = document.getElementById("slider");
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var Simg = document.getElementById("Simg");
var Bimg = document.getElementById("Bimg");
var show = document.getElementById("show");

img1.onmouseover = function(){
    slider.style.display = "block";
    img2.style.display = "block";
}
img1.onmouseout = function(){
    slider.style.display = "none";
    img2.style.display = "none";
}
img1.onmousemove = function(e){
  var mouseX = e.clientX;
  var mouseY = e.clientY;
  var showLeft = show.offsetLeft;
  var showTop = show.offsetTop;
  var sliderWidth = slider.offsetWidth;//实时获取
  var sliderHeight = slider.offsetHeight;
  var sliderLeft = mouseX - showLeft - sliderWidth/2;
  var sliderTop = mouseY - showTop -sliderHeight/2;
  if(sliderLeft <= 0){
      sliderLeft = 0;
  }
  else if(sliderLeft >= (img1.offsetWidth - slider.offsetWidth)){
    sliderLeft = (img1.offsetWidth - slider.offsetWidth);
  }
  if(sliderTop <= 0 ){
    sliderTop = 0;
  }
  else if(sliderTop >= (img1.offsetHeight - slider.offsetHeight) ){
      sliderTop = img1.offsetHeight - slider.offsetHeight;
  }
  slider.style.left = sliderLeft + "px";
  slider.style.top = sliderTop + "px";

  var percent = Bimg.offsetWidth/Simg.offsetWidth;

  Bimg.style.left = (-sliderLeft*percent+224)/6 + 'px';
  Bimg.style.top = (-sliderTop*percent)/6 + "px";   
}
//图片滚动效果
  window.onload = function(){
    var oDiv = document.getElementById('div1');
    var oUl = oDiv.getElementsByTagName('ul')[0];
    var aLi = oUl.getElementsByTagName('li');
    var aA = oDiv.getElementsByTagName('a');
    var iSpeed = 1;//正左负右
    var timer = null;
    //计算ul的宽为所有li的宽的和;
    oUl.innerHTML += oUl.innerHTML+oUl.innerHTML;
    oUl.style.width = aLi[0].offsetWidth*aLi.length+'px';
    function Slider(){
      if (oUl.offsetLeft<-oUl.offsetWidth/2) {
        oUl.style.left = 0;
      }else if(oUl.offsetLeft>0){
        oUl.style.left =-oUl.offsetWidth/2+'px';
      }
      oUl.style.left = oUl.offsetLeft-iSpeed+'px';//正负为方向
    }
    timer =setInterval(Slider,30);
    aA[0].onclick = function(){
      iSpeed = 1; //控制速度的正负
    }
    aA[1].onclick = function(){
      iSpeed = -1;
    }
    oDiv.onmouseover = function(){
      clearInterval(timer);
    }
    oDiv.onmouseout = function(){
      timer =setInterval(Slider,30);
    }
  };

/*
支付效果
*/ 
    var btnWeChat = document.getElementById("btnWeChat");
    var btnBao = document.getElementById("btnBao");
    var hide = document.getElementById("hide");
    var imgPay = document.getElementById("pay");
    imgPay.setAttribute("src","");
    btnBao.onclick = function(){
        imgPay.src = "imgs/img7.png";
        imgPay.style.display = "block";
    }
    btnWeChat.onclick = function() {
        imgPay.src = "imgs/img6.png";
        imgPay.style.display = "block";
    }
    hide.onclick = function(){
      imgPay.style.display = "none";
    }
    
