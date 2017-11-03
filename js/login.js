$("#loginWeb").click(function(){
	if ($("#remenberMe").val()) {
	
		var cookie = new Cookie();
		//name, value, expires, path, domain, secure
		cookie.setCookie("username", $("#username").val(), 1,"", "http://172.0.0.1");
		cookie.setCookie("password", $("#password").val(), 1,"", "http://172.0.0.1");
		
	}

	var data = $("#form").submit();
	if (data.Code == 0) {
		  window.location.href = "/index.html"
	}else  {
		var str = "<p>"+data.msg + "</p>\
            				<button class='btn btn-small btn-success' onclick='conMsg()'> 确认</button>";
           		$("#msg").html($(str));    
           		$("#msg").css("display", "block").addClass("msgStyle");       
	}

});

function conMsg(){
	$("#msg").css("display", "none");
}