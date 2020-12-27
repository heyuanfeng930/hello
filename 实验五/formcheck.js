function validForm(){
	var msg1 = document.getElementById("1");
	var msg_1 = msg1.value;
	var len = msg_1.length;
	var firstchar = msg_1.charAt(0);
	
	var msg2 = document.getElementById("2");
	var msg_2 = msg2.value;
	var msg3 = document.getElementById("3");
	var msg_3 = msg3.value;
	
	var msg4 = document.getElementById("4");
	var msg_4 = msg4.value;
	var l = msg_4.length - 1;
	var s1 = msg_4.indexOf('@');
	var s2 = msg_4.indexOf('.');
	if((firstchar >= '0' && firstchar <= '9') || len < 6 || len>20){
		alert("你输入的用户名格式不对！")
	}
	else if((msg_2 != msg_3)){
		alert("你前后输入的密码不一致！");
	}
	else if(msg_2.length<6 || msg_2.length>10 || msg_3.length<6 || msg_3.length>10){
		alert("你输入密码的长度有误！");
	}			
	else if(!s1||!s2){
		alert("你输入的邮箱格式不对！");
	}
	else if (msg_4.charAt(l)=='.' || msg_4.charAt(0)=='@' || Math.abs(s1-s2) < 2){
		alert("你输入的邮箱格式不对！");
	}
	else if(!(msg_1) || !(msg_2) || !(msg_3) || !(msg_4)){
		alert("四个选项必须输入，不能为空！");
	}
	else{
		return 1;
	}
}
