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
    slider.style.display = "none";//滑块隐藏
    img2.style.display = "none";//大图隐藏
}
img1.onmousemove = function(e){
  var mouseX = e.clientX;
  var mouseY = e.clientY;
  var showLeft = show.offsetLeft;
  var showTop = show.offsetTop;
  var sliderWidth = slider.offsetWidth;
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

  var percent = Bimg.offsetWidth/Simg.offsetWidth;//放大比例

  Bimg.style.left = (-sliderLeft*percent)/6 + 'px';
  Bimg.style.top = (-sliderTop*percent)/6 + "px";   
}
// 藏品的加减操作效果
var plus = document.getElementById("plus");
var num = document.getElementById("num");
var minus = document.getElementById("minus");
plus.onclick = function(){
    num.innerHTML= num.innerHTML*1+1;
}
minus.onclick = function(){
  if(num.innerHTML>=1){
    num.innerHTML=num.innerHTML*1-1;
  }
}
//增加至藏品库 
var addtoCart = document.getElementById("addtoCart");
addtoCart.onclick = function(){
  if(num.innerHTML>=1){
    alert("加入购物车成功！");
  }else{
    alert("藏品的件数不能是0");
  }
}
/*
支付效果
*/ 
// 获取对应按钮对象
var buy = document.getElementById("buy");
var btnWeChat = document.getElementById("btnWeChat");
var btnBao = document.getElementById("btnBao");
var hide = document.getElementById("hide");
var imgPay = document.createElement("img");
imgPay.style.display = "none";
buy.appendChild(imgPay);//将创建的一个隐藏的图片添加到buy框中
imgPay.style.height = "245px";
imgPay.style.width = "200px";
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
 //图片滚动效果
  window.onload = function(){
    var oDiv = document.getElementById('div1');
    var oUl = oDiv.getElementsByTagName('ul')[0];
    var aLi = oUl.getElementsByTagName('li');
    var iSpeed = 1;
    var timer = null;
    oUl.innerHTML += oUl.innerHTML+oUl.innerHTML;//3倍的图片
    oUl.style.width = aLi[0].offsetWidth*aLi.length+'px';//将宽度加长
    function Slider(){
      if (oUl.offsetLeft<-oUl.offsetWidth/2) {
        oUl.style.left = 0;
      }
      oUl.style.left = oUl.offsetLeft-iSpeed+'px';//正负为方向
    }
    timer =setInterval(Slider,30);
    oDiv.onmouseover = function(){
      clearInterval(timer);
    }
    oDiv.onmouseout = function(){
      timer =setInterval(Slider,30);
    }
  };   
