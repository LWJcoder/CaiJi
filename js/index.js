
//采集页面 js
var array= {
	Y5:[91,93,95,97,99],
	N5:[[31,32,33,34,35,36],[21,22,23,24,25,26],[41,42,43,44,45,46],[51,52,53,54,55,56],[11,12,13,14,15,16]],
	N5_all: [11,12,13,14,15,16,21,22,23,24,25,26, 31,32,33,34,35,36, 41,42,43,44,45,46, 51,52,53,54,55,56],
	W:[81,82,83,84,85],
	a_12:[37,38,39,40,47,48,49,50,57,58,59,60],
	a_6:[17,18,19,20,27,-17,-18,-19,-20,-27],
	T5:[91,93,95,97,99],
	T:[[1,-1],[3,-3],[5,-5],[7,-7],[9,-9]],
	T_all: [1,3,5,7,9,-1,-3,-7,-9],
	D:[2,4,6,8,10,0,-2,-4,-6,-8,-10,-0],
	C:[[3,5,7],[-3,7,-1],[-5,-7],[9,1,7],[-9,-5,7],[-1],[-3],[9,5,7],[-3,-5,-7],[-9],[1,3],[-1,-9,-7]],
	C5:[[93,95,97],[93,97,91],[95,97],[99,91,97],[99,95,97],[91],[93],[99,95,97],[93,97,95],[99],[91],[93],[91],[99],[97]],
	C6:[17,18,19,20,27,-17,-18,-19,-20,-27],
	D5:[91,93,95,97,99],
	F5:[86,87,88,89,90],
	J4:[61,62,63,64,65],
	b_56:[66,67,68,69,70],
	a_56:[66,67,68,69,70],
	S:[101,102,103,104,105,106,107,108,109,110,111,112,113,200]

};

var Y5id = '';
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

//D 栏位改变
function DChange(that, colNo){
	var D = $(".D-val").val(),
		T = $(".T-val").val();

	if (D == "0" && T == "3") {
		//N5 11 Y5: 99
		//var str = "<select disabled> <option value='11'>11</option></select>";
	
		console.log("index:"+colNo);
		var dom = $(".N5").children()[colNo];
		// mf.renderOpt(dom, array.N5_all, "N5");
		dom.click();
		$(".N5-val").val("11");
	}else if (D == "-0" && T == "-3") {		
		//console.log("index:"+colNo);
		var dom = $(".N5").children()[colNo];
		// mf.renderOpt(dom, array.N5_all, "N5");
		dom.click();
		$(".N5-val").val("11");
	}else if (D == "8" && T == "1") {		
		//console.log("index:"+colNo);
		var dom = $(".N5").children()[colNo];
		// mf.renderOpt(dom, array.N5_all, "N5");
		dom.click();
		$(".N5-val").val("12");
	}else if (D == "-8" && T == "-1") {		
		//console.log("index:"+colNo);
		var dom = $(".N5").children()[colNo];
		// mf.renderOpt(dom, array.N5_all, "N5");
		dom.click();
		$(".N5-val").val("11");
	}else if (D == "4" && T == "9") {		
		//console.log("index:"+colNo);
		var dom = $(".N5").children()[colNo];
		// mf.renderOpt(dom, array.N5_all, "N5");
		dom.click();
		$(".N5-val").val("13");
	}else if (D == "-4" && T == "-9") {		
		//console.log("index:"+colNo);
		var dom = $(".N5").children()[colNo];
		// mf.renderOpt(dom, array.N5_all, "N5");
		dom.click();
		$(".N5-val").val("13");
	}else if (D == "6" && T == "3") {		
		//console.log("index:"+colNo);
		var dom = $(".N5").children()[colNo];
		// mf.renderOpt(dom, array.N5_all, "N5");
		dom.click();
		$(".N5-val").val("14");
	}else if (D == "-6" && T == "-3") {		
		//console.log("index:"+colNo);
		var dom = $(".N5").children()[colNo];
		// mf.renderOpt(dom, array.N5_all, "N5");
		dom.click();
		$(".N5-val").val("14");
	}else if (D == "2" && T == "1") {		
		//console.log("index:"+colNo);
		var dom = $(".N5").children()[colNo];
		// mf.renderOpt(dom, array.N5_all, "N5");
		dom.click();
		$(".N5-val").val("15");
	}else if (D == "-2" && T == "-1") {		
		//console.log("index:"+colNo);
		var dom = $(".N5").children()[colNo];
		// mf.renderOpt(dom, array.N5_all, "N5");
		dom.click();
		$(".N5-val").val("15");
	}else if (D == "10" && T == "9") {		
		//console.log("index:"+colNo);
		var dom = $(".N5").children()[colNo];
		// mf.renderOpt(dom, array.N5_all, "N5");
		dom.click();
		$(".N5-val").val("16");
	}else if (D == "-10" && T == "-9") {		
		//console.log("index:"+colNo);
		var dom = $(".N5").children()[colNo];
		// mf.renderOpt(dom, array.N5_all, "N5");
		dom.click();
		$(".N5-val").val("16");
	}
}


	// 行内点击事件
	$('.t1 tr').click(function(e){		
		var cla = $(this).attr('class');
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
						mf.renderChangeOpt(e, array.T[0], "T","DChange");
					break;
					case "93":
						mf.renderChangeOpt(e, array.T[1], "T","DChange");
					break;
					case "95":
						mf.renderChangeOpt(e, array.T[2], "T","DChange");
					break;
					case "97":
						mf.renderChangeOpt(e, array.T[3], "T","DChange");
					break;
					case "99":
						mf.renderChangeOpt(e, array.T[4], "T","DChange");
					break;
					default:
						mf.renderChangeOpt(e, array.T_all, "T","DChange");
					break;
				}
				
				break;
			case "D": 
				
				//mf.clearOtherSelect(that);
				
				mf.renderChangeOpt(e, array.D, "D", "DChange");
				break;
			case "C": 
				var num = $(".D-val").val();				
				var index = mf.getDIndex(num);
				mf.renderOpt(e, array.C[index], "C");													
				break;
			case "C5":
				var num = $(".D-val").val();
				var index = mf.getDIndex(num);
					mf.renderOpt(e, array.C5[index], "C5");					
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
			default:
			console.log("no exits row");
			break;
		}

	})


$("#confirm").click(function(e){
	//check.checkNumber(101,600, "int",$(e).val(), "S");
	var data = {
		resultCode : $("#rsCode").val(),
		identifyCode: $("#reCode").val(),
		pageCode: $('#pageNum').val(),
		intoDbA: $("#chbox").val(),
		
	};

	var acquisitionData = [];
	var select = $(".t1 tr td").find("select"),
		len = select.length;
	for (var i = len - 1; i >= 0; i--) {
		var str = select[i].getAttribute("id").split("-");
		acquisitionData.push({
			x: str[0],
			y: str[1],
			v: $("#"+select[i].getAttribute("id")).val()
		});
		//console.log(str[0], str[1],$("#"+select[i].getAttribute("id")).val())
	}


	data.acquisitionData = acquisitionData;

	var ajax = new Ajax();
	ajax.post("http://172.0.0.1/acquisition/post", data, function(data){
		if (data.code == 0) {
			alert("添加成功");
		}
	}, function(data){
		alert('添加失败， 原因：'+ data.msg);
	});

});

