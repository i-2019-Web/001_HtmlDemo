	var getCode = document.getElementsByClassName("getCode");
	var codeImg = document.getElementsByClassName("codeImg");
	var btn = document.getElementsByClassName("btn");
	var inp = document.getElementsByClassName("inp");
	var inpCode = document.getElementsByClassName("inp code");
	var notice = document.getElementsByClassName("notice");
	var arr = ["zKDXU.png","zAZfB.png","zFC9H.png","zhWY9.png","zJ6iV.png","zjsKP.png","ZITGj.png","Zin4c.png","ZKc9S.png","ZEhUN.png"];
	var img = document.createElement("img");
	getCode[0].onclick = function(){
		var i = Math.floor(Math.random() * 10);
		img.setAttribute("src","imgs" + "/" + arr[i]);
		codeImg[0].appendChild(img);
		btn[0].onclick = function(){
			var namevalue = inp[0].value;
			var numvalue = inp[1].value;
			var s = inpCode[0].value;
			var str = arr[i].split(".");
			if(namevalue.length < 4 || namevalue.length > 10){
				notice[0].innerHTML = "用户名位数不对";
			}
			if(numvalue.length < 6 || numvalue.length > 12){
				notice[1].innerHTML = "密码位数不对";
			}
			if(s != str[0]){
				notice[2].innerHTML = "验证码错误";
			}
			if(namevalue.length >= 4 && namevalue.length <= 10 && numvalue.length >= 6 && numvalue.length <= 12 && s == str[0]){
				window.open("https://github.com/i-2019-Web/001_HtmlDemo/blob/master/index.html");
			}
		}
	}
	inp[0].onclick = function(){
		notice[0].innerHTML = "请输入4-10位用户名";
		this.onmouseout = function(){
			notice[0].innerHTML = "";
		}
	}
	inp[1].onclick = function(){
		notice[1].innerHTML = "请输入6-12位密码";
		this.onmouseout = function(){
			notice[1].innerHTML = "";
		}
	}
