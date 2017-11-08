var Util = function(){}

Util.prototype.getUrlPar = function (){
			var url = window.location.href;
			var data = new Object(), str, par;
			var str = url.substring(url.indexOf("?")+1);
			if (str.indexOf("&") != -1) {
				var par = str.split("&");
				for (var i = par.length - 1; i >= 0; i--) {
				let d = par[i].split("=");
				
				data[d[0]] = (d[1]);
			
				}
			}else{
				let d = str.split("=");
				data[d[0]] = (d[1]);
			}
			return data;
}

  //          5.Exports
  // ----------------------------------------------------------------------
  // 暴露API:  Amd || Commonjs  || Global 
  // 支持commonjs
  if (typeof exports === 'object') {
    module.exports = Util;
    // 支持amd
  } else if (typeof define === 'function' && define.amd) {
    define(function() {
      return Util
    });
  } else {
    // 直接暴露到全局
    window.Util = Util;
  }