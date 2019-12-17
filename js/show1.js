  var pic = document.getElementById("pic");
  var imgList1 = pic.getElementsByTagName("img");
  var txt=document.getElementById("txt");
  var comments = ["差","一般","中等","还行","好"]; 
  var flag=true;
  var oList = this.document.getElementById('list')
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
                var imgSrc = "imgs/star2.png";
            }
            else if(index<=2){
                var imgSrc = "imgs/star1.png"
            }
             for (var j = 0; j <index; j++) {
                 imgList1[j].src = imgSrc;
             }
          txt.innerHTML= comments[index-1];
         }

        else{
            return;
        }
    }   
     imgList1[i].onmouseout = function(){
        if(flag==true){
        var index = this.getAttribute("title");
         for (var j = 0; j <index; j++) {
             imgList1[j].src = "imgs/star0.png";
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
