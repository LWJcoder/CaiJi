window.crossCheckEnable = -1;
window.masterCheckEnable = -1;

$("#loginWeb").click(function (){
	var name = $("#username").val(),
		psw = $("#password").val();

	if (psw.length < 3) {
		alert("密码长度小于3");
	}
	if (name.length > 0 && psw.length > 3) {
		var obj = {"staffCode": name, "password": md5(psw)};
		//console.log(obj.staffCode, obj.password);
		$.ajax({
			type: "post",
			url: window.domains + "/acquisition/login",

			data: {data: Base64.encode(JSON.stringify(obj))},
			success: function(data){
				if (data.code == "0" ) {
					  window.location.href = window.domain + "/index.html";
					  window.crossCheckEnable = data.crossCheckEnable;
					  window.masterCheckEnable = data.masterCheckEnable;
				}else  {
					var str = "<p>"+data.msg + "</p>\
			            				<button class='btn btn-small btn-success' onclick='conMsg()'> 确认</button>";
			           		$("#msg").html($(str));    
			           		$("#msg").css("display", "block").addClass("msgStyle");       
				}
					}
			});
	}

});

function conMsg(){
	$("#msg").css("display", "none");
}

