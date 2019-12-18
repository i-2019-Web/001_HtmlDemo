var input=document.getElementById("input");
	input.onfocus=function(){
	console.log(this.value);
	this.value="";
	}
var flag=0;//设置标志为0
var input=document.getElementById("input");
input.onfocus=function(){
	this.value="";
}
var cart=document.getElementById("cart");
cart.onclick=function(){
	alert("加入购物车成功！");
	window.location.href="https:\\www.baidu.com";//这里点击进入购物车页面！！！
}
var gotop=document.getElementById("gotop");
gotop.onclick=function(){	
	//document.documentElement.scrollTop=0;设置距离顶部的位置
	var scrollToptimer = setInterval(function () {
    var top = document.body.scrollTop + document.documentElement.scrollTop;
    var speed = top / 5;
    if (document.body.scrollTop!=0) {
        document.body.scrollTop -= speed;
    }else {
        document.documentElement.scrollTop -= speed;
    }
    if (top == 0) {
        clearInterval(scrollToptimer);
    }
	}, 30); 
}
var oNavlist=document.getElementById('nav1').children;
	var slider=document.getElementById('slider');
	var left=document.getElementById('left');
	var right=document.getElementById('right');
	var top1=document.getElementById("top1");
	var index=1;
	var timer;
	var isMoving=false;
	//轮播下一张的函数
	function next(){
		if(isMoving){
			return;
		}
		isMoving=true;
		index++;
		navChange();
		animate(slider,{left:-1200*index},function(){
			if(index===6){
				slider.style.left="-1200px";
				index=1;
			}
			isMoving=false;
		});
	}
	function prev(){
		if(isMoving){
			return;
		}
		isMoving=true;
		index--;
		navChange();
		animate(slider,{left:-1200*index},function(){
			if(index === 0){
				slider.style.left="-6000px";
				index=5;
			}
			isMoving=false;
		});
	}
	var timer=setInterval(next,3000);
	var i=2;
//鼠标划入清定时器
	box.onmouseover=function(){
		animate(left,{opacity:50})
		animate(right,{opacity:50})
		clearInterval(timer)
	}
	//鼠标划出开定时器
	box.onmouseout=function(){
		animate(left,{opacity:0})
		animate(right,{opacity:0})
		timer=setInterval(next,3000);
	}
	right.onclick=next;
	left.onclick=prev;
	//小按钮点击事件
	for(var i=0;i<oNavlist.length;i++){
		oNavlist[i].idx=i;
		oNavlist[i].onclick=function(){
			index=this.idx+1;
			navChange();
			animate(slider,{left:-1200*index});
		}
	}
	//小按钮背景色切换
	function navChange(){
		for(var i=0;i<oNavlist.length;i++){
			oNavlist[i].className='';
		}
		if(index===6){
			oNavlist[0].className='active';
		}else if(index===0){
			oNavlist[4].className='active';
		}else{
			oNavlist[index-1].className='active';
		}
	}
	function getStyle(obj, attr){
		if(obj.currentStyle){
			return obj.currentStyle[attr];
		} else {
			return getComputedStyle(obj, null)[attr];
		}
	}
	function animate(obj,json,callback){
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){
			var isStop = true;
			for(var attr in json){
				var now = 0;
				if(attr == 'opacity'){
					now = parseInt(getStyle(obj,attr)*100);
				}else{
					now = parseInt(getStyle(obj,attr));
				}
				var speed = (json[attr] - now) / 8;
				speed = speed>0?Math.ceil(speed):Math.floor(speed);
				var cur = now + speed;
				if(attr == 'opacity'){
					obj.style[attr] = cur / 100;
				}else{
					obj.style[attr] = cur + 'px';
				}
				if(json[attr] !== cur){
					isStop = false;
				}
			}
			if(isStop){
				clearInterval(obj.timer);
				callback&&callback();
			}
		}, 30)
	}
