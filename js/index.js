
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
		//alert(transYArr[Number(y)],y)
		$("#I-"+transYArr[Number(y)]).val(value);
}

var arrCode = [];

function onSelectChange(that){
	var value = $(that).val();
	var id = $(that).attr("id"),
		reCode = $("#reCode").val(),
		rsCode = $("#rsCode").val();
		var str = "<span>";
	if (id) {
		id = id.replace("-", "");
	}
	var flag = -1;
	for (var i = arrCode.length - 1; i >= 0; i--) {
		if (arrCode[i].indexOf(id)  >= 0) {
			flag = i;
		}
	}
	if (flag != -1) {
		arrCode[flag] = id + value;
	}else{
		 arrCode.push(id+value);
	}
	
	

	 if (reCode) {
	 	arrCode.push(reCode);
	 }

	 if (rsCode) {
	 	arrCode.push(rsCode);
	 }
	
	//  for (var i = arrCode.length - 1; i >= 0; i--) {
	//  	str += arrCode[i];
	//  }
	str +=[...new Set(arrCode)].sort()+ " </span>";
	$("#allCode").html(str);
	console.log(str)
}

	// 行内点击事件
	$('.t1 tr td').click(function(e){		
		var cla = $(this).parent().attr('class');
		var that = this;
		switch (cla){
			case "Y5":
				mf.renderChangeSelect(e, array.Y5,"Y5");
				break;
			case "W":
				mf.renderChangeSelect(e, array.W, "W");
				break;
			case "a_12": 
				mf.renderChangeSelect(e, array.a_12, "a_12");
				break;
			case "a_6": 
				mf.renderChangeSelect(e, array.a_6, "a_6");
				break;
			case "T5": 
				mf.renderChangeSelect(e, array.T5, "T5");
				break;
			case "F5": 
				mf.renderChangeSelect(e, array.F5, "F5");
				break;
			case "J4": 
				mf.renderChangeSelect(e, array.J4, "J4");
				break;
			case "T": 
				let tv = $(".T5-val").val();
				switch(tv){
					case "91":
						mf.renderChangeSelect(e, array.T[0], "T" );
					break;
					case "93":
						mf.renderChangeSelect(e, array.T[1], "T" );
					break;
					case "95":
						mf.renderChangeSelect(e, array.T[2], "T" );
					break;
					case "97":
						mf.renderChangeSelect(e, array.T[3], "T" );
					break;
					case "99":
						mf.renderChangeSelect(e, array.T[4], "T" );
					break;
					default:
						mf.renderChangeSelect(e, array.T_all, "T" );
					break;
				}
				
				break;
			case "D": 
				
				//mf.clearOtherSelect(that);
				
				mf.renderChangeSelect(e, array.D, "D");
				break;
			case "C": 
				if ($(".D-val").html()) {
					var num = $(".D-val").val();

					var index = mf.getDIndex(num);
					mf.renderChangeSelect(e, array.C[index], "C");	
				}else{
					mf.renderChangeSelect(e, array.C_all, "C");	
				}												
				break;
			case "C5":
				var num = $(".D-val").val();
				var index = mf.getDIndex(num);
				if (index >= 0) {
					mf.renderChangeSelect(e, array.C5[index], "C5");	
				}else{
					mf.renderChangeSelect(e, array.C5_all, "C5");	
				}
									
				break;
			case "C6": 
				mf.renderChangeSelect(e, array.C6, "C6");
				break;
			case "D5": 
				mf.renderChangeSelect(e, array.D5, "D5");
				break;
			case "a_56":
				mf.renderChangeSelect(e, array.a_56, "a_56");
				break;
			case "b_56":
				mf.renderChangeSelect(e, array.b_56, "b_56");
				break;
			case "N5":
				var num = $(".Y5-val").val();
				var index = mf.getY5Index(num);
				
				if (index >= 0) 
					mf.renderChangeSelect(e, array.N5[index],"N5");
				else
					mf.renderChangeSelect(e, array.N5_all,"N5");
				
				break;
			case "S":
				mf.renderInput(e, "S");
				break;
			case "b_6": 
				mf.renderChangeSelect(e, array.a_6, "b_6");
				break;
			default:

			console.log("no exits row");
			break;
		}

	})


	// $('.t1 tr td select').click(function(){

	// })
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
	var data1 = {
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
	 $(".S input").each(function(){
		var id = $(this).attr("id");
			var str = id.split("-");
			var value = Number($(this).val());
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
	});

	 // {"resultCode":"resultCode","identifyCode":"identifyCode","pageCode":"pageCode","intoDbA":1,"crossCheck":0,"masterCheck":0,"acquisitionData":[{"x":1,"y":2,"v":12},{"x":3,"y":4,"v":34},{"x":5,"y":6,"v":56}]}
	
	data1.acquisitionData = acquisitionData.sort();
	
	//console.log(Base64.encode(JSON.stringify(data)))
	   $.ajax({
            //提交数据的类型 POST GET
            type: "POST",
            //提交的网址
            url: window.domain  + "/acquisition/post",  
           
            //提交的数据
            data: {data:Base64.encode(JSON.stringify(data1))},
            //返回数据的格式
           // datatype: "json",//"xml", "html", "script", "json", "jsonp", "text".
            //在请求之前调用的函数
            beforeSend:function(){$("#msg").html("正在提交， 请稍后......");},
            //成功返回之后调用的函数             
            success:function(data){
            	
            	var str = "<p>"+data.msg + "</p>\
            				<button class='btn btn-small btn-success' onclick='conMsg()'> 确认</button>";
           		$("#msg").html($(str));    
           		$("#msg").css("display", "block").addClass("msgStyle");        
            }   ,
            //调用执行后调用的函数
            complete: function(XMLHttpRequest, textStatus){
               console.log(Base64.decode(XMLHttpRequest.responseText));
               //alert(textStatus);
                //HideLoading();
            },
            //调用出错执行的函数
            error: function(){
                //请求出错处理
            }         
         });



});


 function conMsg(){
	$("#msg").css("display", "none");
}

function start(){
	
}

start();