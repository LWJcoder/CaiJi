//render.js
//动态渲染前端页面元素


var Hf = function(){}
var arr = [];


//返回index	
var getRIndex = function (that){
	return $(that).parents('tr').index();
}
Hf.prototype.getRIndex = getRIndex;

var getVIndex = function (that){
	return $(that).index();
}
Hf.prototype.getVIndex =  getVIndex;


//渲染select
// e: event,
// which: 数组
// name: id用
Hf.prototype.renderOpt =  function(e, which, name){	
	
	var target = e.target ;
	if (target && !$(target).html()){
		//id 值设为 行名称 + 列号
		Y5id = name+"-"+mf.getVIndex(target);
		var opt = "<select  id='"+Y5id+"'>";			
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
		str += "<input type='number' min='101' max='300' v-model='S' id='"+name+ mf.getVIndex(target)+"'>"
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

   function clearOtherSelect(that){
	//一行只能显示一个，其他的隐藏
		var $se = $(that).children().siblings().find("select");
		if ($se.length > 1) {
			$se.parent().html("")//attr("class", "hide");
		}
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
