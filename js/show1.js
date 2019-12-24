  var pic1 = document.getElementById("pic1");
  var imgList1 = pic1.getElementsByTagName("img");

  var pic2 = document.getElementById("pic2");
  var imgList2 = pic2.getElementsByTagName("img");

  var pic3 = document.getElementById("pic3");
  var imgList3 = pic3.getElementsByTagName("img");
  var comments1 = ["亲，请再考虑考虑","亲，这不是你的真正心意","感觉还不错","很美观","真是太棒了！"];
  var comments2 = ["不满意","还可以","差不多","还算满意","很满意"];
  var comments3 = ["价值低","价值偏低","中等","价值偏高","价值很高"];
  var flag=true;
  var oList = this.document.getElementById('list');
  var smallpic = document.getElementById('smallpic');
  var imgList = smallpic.getElementsByTagName("img");
  var bigPic = document.getElementById('bigpic');  
  window.onload = function(){
      var num = -400 
      var speed = -3
      var Timer = null
      oList.innerHTML += oList.innerHTML
      Timer = setInterval(fnMove, 50)
      function fnMove(){
          num += speed
          if(num < -1300){
              num = -200
          }
          if(num>0){
             num = -1000
          }
          oList.style.left = num +'px'
      }
  }  
  for (var i = 0; i < imgList.length; i++) {
      imgList[i].onclick = function(){
        for (var j = 0; j < imgList.length; j++) {
          imgList[j].setAttribute("class","");
        }
      this.setAttribute("class","pb");
      var imgSrc = this.getAttribute("src");
      bigPic.setAttribute("src",imgSrc);
      }
  }

  for (var i = 0; i < imgList1.length; i++) {     
         imgList1[i].onmouseover = function () {
            if(flag==true){
             var index = this.getAttribute("title");
             if(index>2){
                var imgSrc = "imgs/tim.png";
            }
            else if(index<=2){
                var imgSrc = "imgs/tim1.png"
            }
             for (var j = 0; j <index; j++) {
                 imgList1[j].src = imgSrc;
             }
          txt.innerHTML= comments1[index-1];
         }

        else{
            return;
        }
    }   
     imgList1[i].onmouseout = function(){
        if(flag==true){
        var index = this.getAttribute("title");
         for (var j = 0; j <index; j++) {
             imgList1[j].src = "imgs/tim2.png";
         }
         txt.innerHTML=" ";}
        else{
            return;
        }
    }
    imgList1[i].onclick = function(){
        flag =!flag;
     }
 }

 for (var i = 0; i < imgList2.length; i++) {     
         imgList2[i].onmouseover = function () {
            if(flag==true){
             var index2 = this.getAttribute("title");
             if(index2>2){
                var imgSrc = "imgs/tim.png";
            }
            else if(index2<=2){
                var imgSrc = "imgs/tim1.png"
            }
             for (var j = 0; j <index2; j++) {
                 imgList2[j].src = imgSrc;
             }
          txt.innerHTML= comments2[index2-1];
         }

        else{
            return;
        }
    }   
     imgList2[i].onmouseout = function(){
        if(flag==true){
        var index2 = this.getAttribute("title");
         for (var j = 0; j <index2; j++) {
             imgList2[j].src = "imgs/tim2.png";
         }
         txt.innerHTML=" ";}
        else{
            return;
        }
    }
    imgList2[i].onclick = function(){
        flag =!flag;
     }
 }
 for (var i = 0; i < imgList3.length; i++) {     
         imgList3[i].onmouseover = function () {
            if(flag==true){
             var index3 = this.getAttribute("title");
             if(index3>2){
                var imgSrc = "imgs/tim.png";
            }
            else if(index3<=2){
                var imgSrc = "imgs/tim1.png"
            }
             for (var j = 0; j <index3; j++) {
                 imgList3[j].src = imgSrc;
             }
          txt.innerHTML= comments3[index3-1];
         }

        else{
            return;
        }
    }   
     imgList3[i].onmouseout = function(){
        if(flag==true){
        var index3 = this.getAttribute("title");
         for (var j = 0; j <index3; j++) {
             imgList3[j].src = "imgs/tim2.png";
         }
         txt.innerHTML=" ";}
        else{
            return;
        }
    }
    imgList3[i].onclick = function(){
        flag =!flag;
     }
 }

  var btn = document.getElementById("btn");
  btn.onclick = function(){
      // var s="感谢你的鉴赏";
      alert("感谢你的鉴赏");
  }
