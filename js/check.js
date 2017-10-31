//check.js
function Check(argument) {
	// body...
}

Check.prototype.checkNumber = function(start, end, type, value, name){

	
	value = Number(value);
	if (typeof value == 'number') {
		if (value < Number(start) || value > Number(end)) {		
			alert(name + "输入的数字超出范围");
			return;
		}
	}else{
		alert("请输入数字!");
		return;
	}

	
}



  //          5.Exports
  // ----------------------------------------------------------------------
  // 暴露API:  Amd || Commonjs  || Global 
  // 支持commonjs
  if (typeof exports === 'object') {
    module.exports = Check;
    // 支持amd
  } else if (typeof define === 'function' && define.amd) {
    define(function() {
      return Check;
    });
  } else {
    // 直接暴露到全局
    window.Check = Check;
  }
