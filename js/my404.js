confirm("This is a 404 page,some errors must have happened.But do not worry, we will be bakc soon!");
	function perfect(num,digit){
		var zero = '';
    	for(var i = 0; i < digit; i++) {
        	zero += '0';//添加两个0；使样式更加美观
    	}
    	return (zero + num).slice(-digit);//从添加的00处进行剔除，只取得我们想要他显示的部分
	}

	window.onload = setInterval(function(){
		var now = new Date();
		var week = ["星期天","星期一","星期二","星期三","星期四","星期五","星期六"];
		var hour = now.getHours();
		var minute = now.getMinutes();
		var sec = now.getSeconds();
		var year = now.getFullYear();
		var month = now.getMonth() + 1;
		var ri = now.getDate();
		var day = week[now.getDay()];
		var time = document.getElementById("time");
		var tian = document.getElementById("tian");
		time.innerHTML = "NOW" + " " + "is"  + " " + hour + ":" + perfect(minute,2) + ":" + perfect(sec,2);
		tian.innerHTML = year + "—" + month + "—" + ri + "  " + day;
	}, 1000);
