
//采集页面 js

var Y5id = '',
	masterCheck = 0,
	crossCheck = 0,
	transYArr = ['a','b','c','d','e','f','g','h','i','j','k',' ','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','@','$'];

//实例化
var mf = new Hf();
var check = new Check();

//回车事件： 结果码+1
document.onkeydown = function(e){
	if (e.keyCode == 13){
		var str = $("#rsCode").val().charAt(0);
		//结果码格式： AA123
		$("#rsCode").val(str + (Number($("#rsCode").val().substring(2)) + 1));
	}
}

function N5Select(colNo,y, value){
		var dom = ($(".t1 .N5").children())[colNo];
		if (dom) {	
			dom.click();
		}
		alert(transYArr[Number(y)],y)
		$("#I-"+transYArr[Number(y)]).val(value);
}

//D 栏位改变
function DChange(that, colNo,y){
	// var D = $(".D-val").val(),
	// 	T = $(".T-val").val();

	// if (D == "0" && T == "3") {
	// 	N5Select(colNo, y, 11);			
		
	// }else if (D == "-0" && T == "-3") {		
	// 	//console.log("index:"+colNo);
	// 	var dom = $(".N5").children()[colNo];
	// 	// mf.renderOpt(dom, array.N5_all, "N5");
	// 	dom.click();
	// 	$(".N5-val").val("11");
	// }else if (D == "8" && T == "1") {		
	// 	//console.log("index:"+colNo);
	// 	var dom = $(".N5").children()[colNo];
	// 	// mf.renderOpt(dom, array.N5_all, "N5");
	// 	dom.click();
	// 	$(".N5-val").val("12");
	// }else if (D == "-8" && T == "-1") {		
	// 	//console.log("index:"+colNo);
	// 	var dom = $(".N5").children()[colNo];
	// 	// mf.renderOpt(dom, array.N5_all, "N5");
	// 	dom.click();
	// 	$(".N5-val").val("11");
	// }else if (D == "4" && T == "9") {		
	// 	//console.log("index:"+colNo);
	// 	var dom = $(".N5").children()[colNo];
	// 	// mf.renderOpt(dom, array.N5_all, "N5");
	// 	dom.click();
	// 	$(".N5-val").val("13");
	// }else if (D == "-4" && T == "-9") {		
	// 	//console.log("index:"+colNo);
	// 	var dom = $(".N5").children()[colNo];
	// 	// mf.renderOpt(dom, array.N5_all, "N5");
	// 	dom.click();
	// 	$(".N5-val").val("13");
	// }else if (D == "6" && T == "3") {		
	// 	//console.log("index:"+colNo);
	// 	var dom = $(".N5").children()[colNo];
	// 	// mf.renderOpt(dom, array.N5_all, "N5");
	// 	dom.click();
	// 	$(".N5-val").val("14");
	// }else if (D == "-6" && T == "-3") {		
	// 	//console.log("index:"+colNo);
	// 	var dom = $(".N5").children()[colNo];
	// 	// mf.renderOpt(dom, array.N5_all, "N5");
	// 	dom.click();
	// 	$(".N5-val").val("14");
	// }else if (D == "2" && T == "1") {		
	// 	//console.log("index:"+colNo);
	// 	var dom = $(".N5").children()[colNo];
	// 	// mf.renderOpt(dom, array.N5_all, "N5");
	// 	dom.click();
	// 	$(".N5-val").val("15");
	// }else if (D == "-2" && T == "-1") {		
	// 	//console.log("index:"+colNo);
	// 	var dom = $(".N5").children()[colNo];
	// 	// mf.renderOpt(dom, array.N5_all, "N5");
	// 	dom.click();
	// 	$(".N5-val").val("15");
	// }else if (D == "10" && T == "9") {		
	// 	//console.log("index:"+colNo);
	// 	var dom = $(".N5").children()[colNo];
	// 	// mf.renderOpt(dom, array.N5_all, "N5");
	// 	dom.click();
	// 	$(".N5-val").val("16");
	// }else if (D == "-10" && T == "-9") {		
	// 	//console.log("index:"+colNo);
	// 	var dom = $(".N5").children()[colNo];
	// 	// mf.renderOpt(dom, array.N5_all, "N5");
	// 	dom.click();
	// 	$(".N5-val").val("16");
	// }
}


	// 行内点击事件
	$('.t1 tr td').click(function(e){		
		var cla = $(this).parent().attr('class');
		var that = this;
		switch (cla){
			case "Y5":
				mf.renderOpt(e, array.Y5,"Y5");
				break;
			case "W":
				mf.renderOpt(e, array.W, "W");
				break;
			case "a_12": 
				mf.renderOpt(e, array.a_12, "a_12");
				break;
			case "a_6": 
				mf.renderOpt(e, array.a_6, "a_6");
				break;
			case "T5": 
				mf.renderOpt(e, array.T5, "T5");
				break;
			case "F5": 
				mf.renderOpt(e, array.F5, "F5");
				break;
			case "J4": 
				mf.renderOpt(e, array.J4, "J4");
				break;
			case "T": 
				let tv = $(".T5-val").val();
				switch(tv){
					case "91":
						mf.renderOpt(e, array.T[0], "T" );
					break;
					case "93":
						mf.renderOpt(e, array.T[1], "T" );
					break;
					case "95":
						mf.renderOpt(e, array.T[2], "T" );
					break;
					case "97":
						mf.renderOpt(e, array.T[3], "T" );
					break;
					case "99":
						mf.renderOpt(e, array.T[4], "T" );
					break;
					default:
						mf.renderOpt(e, array.T_all, "T" );
					break;
				}
				
				break;
			case "D": 
				
				//mf.clearOtherSelect(that);
				
				mf.renderOpt(e, array.D, "D");
				break;
			case "C": 
				if ($(".D-val").html()) {
					var num = $(".D-val").val();

					var index = mf.getDIndex(num);
					mf.renderOpt(e, array.C[index], "C");	
				}else{
					mf.renderOpt(e, array.C_all, "C");	
				}												
				break;
			case "C5":
				var num = $(".D-val").val();
				var index = mf.getDIndex(num);
				if (index >= 0) {
					mf.renderOpt(e, array.C5[index], "C5");	
				}else{
					mf.renderOpt(e, array.C5_all, "C5");	
				}
									
				break;
			case "C6": 
				mf.renderOpt(e, array.C6, "C6");
				break;
			case "D5": 
				mf.renderOpt(e, array.D5, "D5");
				break;
			case "a_56":
				mf.renderOpt(e, array.a_56, "a_56");
				break;
			case "b_56":
				mf.renderOpt(e, array.b_56, "b_56");
				break;
			case "N5":
				var num = $(".Y5-val").val();
				var index = mf.getY5Index(num);
				
				if (index >= 0) 
					mf.renderOpt(e, array.N5[index],"N5");
				else
					mf.renderOpt(e, array.N5_all,"N5");
				
				break;
			case "S":
				mf.renderInput(e, "S");
				break;
			case "b_6": 
				mf.renderOpt(e, array.a_6, "b_6");
				break;
			default:

			console.log("no exits row");
			break;
		}

	})

function clearWithId(id){
	$("#"+id).parent().html("");
}

function clearInput(){
	var select = $(".t1 tr td").find("select"),
		len = select.length;
		for (var i = len - 1; i >= 0; i--) {
			clearWithId(select[i].getAttribute("id"));
		}

		var inp = $(".S td").find("input");
		if (inp) {
			for (var i = len - 1; i >= 0; i--) {
				 clearWithId(inp[i].getAttribute("id"));
			}
		}


		$("#rsCode").val("");
		$("#reCode").val("");
		$('#pageNum').val("");
		$("#chbox").attr("checked", false);
}

//提交
$("#confirm").click(function(e){
	//check.checkNumber(101,600, "int",$(e).val(), "S");
	var data = {
		resultCode : $("#rsCode").val(),
		identifyCode: $("#reCode").val(),
		pageCode: $('#pageNum').val(),
		intoDbA: $("#chbox").val() == "on" ? 1: 0,
		crossCheck: crossCheck,
		masterCheck:  masterCheck
	};

	var acquisitionData = [];
	var select = $(".t1 tr td").find("select"),
		len = select.length;
	for (var i = len - 1; i >= 0; i--) {
		var id = select[i].getAttribute("id");
		var str = id.split("-");
		acquisitionData.push({
			x: str[0],
			y: str[1],
			v: $("#"+id).val()
		});
		//console.log(str[0], str[1],$("#"+select[i].getAttribute("id")).val())
		//console.log(Base64.decode(''))

	}

	// 将S栏值加入
	var inp = $(".S td").find("input");
	if (inp) {
		for (var i = len - 1; i >= 0; i--) {
			var id = inp[i].getAttribute("id");
			var str = id.split("-");
			var value = Number($("#"+id).val());
			if (value <101 || value > 600) {
				$("#"+id).addClass("errStyle");
				alert("S 栏必须大于101，小于600");
				return;
			}else{
				acquisitionData.push({
				x: str[0],
				y: str[1],
				v: value
			});	
			}
				
		}
	}


	data.acquisitionData = acquisitionData;

	var ajax = new Ajax();
	ajax.post("http://172.0.0.1/acquisition/post", data, function(data){
		if (data.code == 0) {
			// 清除旧数据
			clearInput();
			$(".t1 .S input").removeClass("errStyle");
			alert("添加成功");
		}
	}, function(data){
		$(".t1 .S input").removeClass("errStyle");
		alert('添加失败， 原因：'+ data.msg);
	});

});

