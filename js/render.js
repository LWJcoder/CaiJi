//render.js
//动态渲染前端页面元素


var Hf = function(){}
var arr = [];
var transXArr = ["A","B",'C','D','E','F','G','H','I','J','K','L'],
	transYArr = ['a','b','c','d','e','f','g','h','i','j','k',' ','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','@','$'];


//返回index	y
var GetYIndex = function (that){
	return $(that).parents('tr').index();
}
Hf.prototype.GetYIndex = GetYIndex;

//x 号
var GetXIndex = function (that){
	return $(that).index();
}
Hf.prototype.GetXIndex =  GetXIndex;


//渲染select
// e: event,
// which: 数组
// name: id用
Hf.prototype.renderOpt =  function(e, which, name){	
	
	var target = e.target ;
	if (target && !$(target).html()){
		//id 值设为 行名称 + 列号
		Y5id = transXArr[mf.GetXIndex(target)-1] + "-" + transYArr[mf.GetYIndex(target)-1];
		console.log("id:"+ Y5id + "X:"+ mf.GetXIndex(target));
		var opt = "<select  id='"+Y5id+"' class='"+name+"-val'>";			
		for (var i= 0, len = which.length ; i <= len; i++) {
			if ( i == 0) {
				opt += "<option value=' '> &nbsp; </option>";
				}else
					opt += "<option value='"+which[i-1]+"'>"+which[i-1]+"</option>";			
				}
		opt += "</select>";			
		$(target).html($(opt));		
	}
};




//渲染带有change事件的select
// e: event,
// which: 数组
// name: id用
Hf.prototype.renderChangeOpt =  function(e, which, name, callback){	
	
	var target = e.target ;
	if (target && !$(target).html()){
		var colNo =  mf.GetYIndex(target),
			r = mf.GetXIndex(target);
		//id 值设为 行名称 + 列号
		Y5id = transXArr[r-1] + "-" + transYArr[colNo-1];
		console.log("id:"+ Y5id + " X:"+ mf.GetXIndex(target));
		var opt = "<select  id='"+Y5id+"' class='"+name+"-val' onchange='"+callback+"(this, "+colNo+")'>";			
		for (var i= 0, len = which.length ; i <= len; i++) {
			if ( i == 0) {
				opt += "<option value=' '> &nbsp; </option>";
				}else
					opt += "<option value='"+which[i-1]+"'>"+which[i-1]+"</option>";			
				}
		opt += "</select>";			
		$(target).html($(opt));		
	}
};


Hf.prototype.renderInput = function(e, name){
	var target = e.target || window.target;
	if (target && !$(target).html()) {
		var str = "";
		str += "<input type='number' min='101' max='300' v-model='S' id='"+name+ mf.GetXIndex(target)+"'>"
	}
	$(target).html($(str));

}


Hf.prototype.getSelectIndex = function(id){
	var val = $("#"+ id).val();
	
	var index = -1;
	for (var i = array.Y5.length - 1; i >= 0; i--) {
		if (array.Y5[i] == val){
			index = i;
			break;
		}
	}
	return index;
}

Hf.prototype.getDIndex = function(value){
	
	
	var index = -1;
	for (var i = array.D.length - 1; i >= 0; i--) {
		if (array.D[i] == value){
			index = i;
			break;
		}
	}
	return index;
}


Hf.prototype.clearOtherSelect = function (that){
	//一行只能显示一个，其他的隐藏
		var $se = $(that).children().siblings().find("select");
		if ($se.length > 1) {
			$se.parent().html("")//attr("class", "hide");
		}
}


Hf.prototype.setColValue = function(value, col){
	$(col).val(value);
}

Hf.prototype.getY5Index = function(value){
	var index = -1;
	for (var i = array.Y5.length - 1; i >= 0; i--) {
		if (array.Y5[i] == value) {
			index = i;
		}
	}
	return index;


}

  //          5.Exports
  // ----------------------------------------------------------------------
  // 暴露API:  Amd || Commonjs  || Global 
  // 支持commonjs
  if (typeof exports === 'object') {
    module.exports = Hf;
    // 支持amd
  } else if (typeof define === 'function' && define.amd) {
    define(function() {
      return Hf
    });
  } else {
    // 直接暴露到全局
    window.Hf = Hf;
  }
