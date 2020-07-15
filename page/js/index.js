$(function() {
	
	//	点击注册按钮
	$("#regist").click(function() {
		$("#register").animate({
			// display:'block',
			height: 'show',
			opacity: '80%'
		}, "slow");
		//加点高斯模糊效果
		$(".login").addClass("blur");

	});

	//点击关闭按钮
	$("#closer").click(function() {
		$("#register").slideToggle("slow");
		$(".login").removeClass("blur");
	});
	//点击提交按钮
	var data = [{
		username: "yang",
		password: "123"
	}];
	
	$("#register-sign").click(function() {
		var name = $("#register-username").val();
		var p1 = $("#register-p1").val();
		var p2 = $("#register-p2").val();
		console.log(p1);
		console.log(p2);
		if(window.sessionStorage.my){
		   console.log("266");
		   var nbb=JSON.parse( sessionStorage.my);
		   console.log(nbb);
		   data=nbb;
			
		}
		if(name ==""||p1 ==""||p2==""){
			alert("填写不能为空");
			document.getElementById("registform").reset();
			return;
		}
		for (var i = 0; i < data.length; i++) {
			if(data[i].username == name){
				alert("用户名已存在,请重新输入!");
				document.getElementById("registform").reset();
				return;
			}
			
		}
		if (p1 != p2) {
			alert("两次密码不一致,重新输入!");
			document.getElementById("registform").reset();
		} else {
			data.push({
				username: name,
				password: p1
			});
			console.log(data);
			alert("注册成功!");
			$("#register").slideToggle("slow");
			$(".login").removeClass("blur");
			document.getElementById("registform").reset();
			sessionStorage.my=JSON.stringify(data);
		}
	});

	//点击登录按钮
	$("#login-button").click(function(){
		var name = $("#login-name").val();
		var password = $("#login-password").val();
		var flag=false;
		
		if(window.sessionStorage.my){
		   console.log("266");
		   var nbb=JSON.parse( sessionStorage.my);
		   console.log(nbb);
		   data=nbb;
			
		}
		
		
		for (var i = 0; i < data.length; i++) {
			// console.log(typeof(data[i].username));
			// console.log(typeof(data[i].password));
			// console.log(typeof(name));
			// console.log(typeof(password));
			if (data[i].username == name && data[i].password == password){
				alert("验证成功!");
				flag=true;
				window.location.href="page/html/main.html";
				break;
			}
		}
		if(!flag){
			alert("登录失败,请检查用户名和密码是否正确");
		}
		
	});
	













});
