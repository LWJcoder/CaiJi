//Cookie.js
function Cookie (){}

//获取cookie
Cookie.prototype.getCookie = function() {
			    var cookie = {};
			    var all = document.cookie;
			    if (all === '')
			        return cookie;
			    var list = all.split('; ');
			    for (var i = 0; i < list.length; i++) {
			        var item = list[i];
			        var p = item.indexOf('=');
			        var name = item.substring(0, p);
			        name = decodeURIComponent(name);
			        var value = item.substring(p + 1);
			        value = decodeURIComponent(value);
			        cookie[name] = value;
			    }
			    return cookie;
			},
	//设置cookie
Cookie.prototype.setCookie = function(name, value, expires, path, domain, secure){
			//function setCookie (name, value, expires, path, domain, secure) {
		    var cookie = encodeURIComponent(name) + '=' + escape(value);
		    if (expires){
		    	  expire = new Date((new Date()).getTime() + expires * 3600000);

		        cookie += '; expires=' + expire.toGMTString();
		    }
		    if (path){
		        cookie += '; path=' + path;
		    }
		    else{
		    	cookie +="; path=/";
		    }
		    if (domain)
		        cookie += '; domain=' + domain;
		    if (secure)
		        cookie += '; secure=' + secure;
		    document.cookie = cookie;
		}

Cookie.prototype.deleteCookie = function(name){
	
}



  //          5.Exports
  // ----------------------------------------------------------------------
  // 暴露API:  Amd || Commonjs  || Global 
  // 支持commonjs
  if (typeof exports === 'object') {
    module.exports = Cookie;
    // 支持amd
  } else if (typeof define === 'function' && define.amd) {
    define(function() {
      return Cookie
    });
  } else {
    // 直接暴露到全局
    window.Cookie = Cookie;
  }

		