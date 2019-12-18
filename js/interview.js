var aboutme = document.getElementById("aboutme");
	var topright = document.getElementById("topboxright");
	var activity = document.getElementById("activity");
	var btn = document.getElementById("btn");
	var imgBox = document.getElementById("imgBox");
	var jiazi = document.getElementById("jiazhi");
	var jiazhi1 = document.getElementById("jiazhi1");
	var jiazhi2 = document.getElementById("jiazhi2");
	var jiazhi3 = document.getElementById("jiazhi3");
	var pretrue = document.getElementsByClassName("pretrue");
	var tBtn = document.getElementsByClassName("tBtn");
	var paybox = document.getElementsByClassName("paybox");
	var cmoney = document.getElementsByClassName("cmoney");
	var times = document.getElementsByClassName("times");
	var news = document.getElementsByClassName("news");
	var ret = document.getElementById("return");
	var i = 0;
	aboutme.onclick = function(){
		page.style.display = "block";
		jiazi.style.display = "none";
		paybox[0].style.display = "none";
		topright.style.color = "#fff";
		activity.style.color = "#fff";
		this.style.color = "blue";
	}
	topboxright.onclick = function(){
		page.style.display = "none";
		jiazhi.style.display = "block";
		jiazhi1.style.display = "block";
		jiazhi2.style.display = "block";
		jiazhi3.style.display = "block";
		paybox[0].style.display = "none";
		aboutme.style.color = "#fff";
		activity.style.color = "#fff";
		this.style.color = "blue";
	}
	ret.onclick = function(){
		this.style.color = "blue";
	}
	activity.onclick = function(){
		page.style.display = "none";
		jiazi.style.display = "none";
		paybox[0].style.display = "block";
		topright.style.color = "#fff";
		aboutme.style.color = "#fff";
		this.style.color = "blue";
		var price = Math.ceil(Math.random() * 100000);
		tBtn[0].onclick = function(){
			var aprice = cmoney[0].value;
			i++;
			times[0].innerHTML = 10 - i + "次机会";
			if(aprice < price){
			news[0].innerHTML = "您猜小了！还有";
			}
			else if(aprice > price){
				news[0].innerHTML = "您猜大了！";
			}
			else{
				news[0].innerHTML = "您真厉害，恭喜您猜对了!";
			}
			if(i == 10){
				news[0].innerHTML = "非常抱歉，您没能成功猜中-----";
			}
		}
	}
	pretrue[0].onclick = function(){
		paybox[0].style.display = "none";
	}
