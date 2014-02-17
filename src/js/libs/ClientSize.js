/*
* It returns client width and height
* original source http://www.softcomplex.com/docs/get_window_size_and_scrollbar_position.html
* @f_clientWidth: inner width of the web view
* @f_clientHeight: inner height of the web view
*/
var ClientSize = function() {
	this.f_clientWidth = function () {
		return f_filterResults (
			window.innerWidth ? window.innerWidth : 0,
			document.documentElement ? document.documentElement.clientWidth : 0,
			document.body ? document.body.clientWidth : 0
		);
	};
	this.f_clientHeight = function () {
		return f_filterResults (
			window.innerHeight ? window.innerHeight : 0,
			document.documentElement ? document.documentElement.clientHeight : 0,
			document.body ? document.body.clientHeight : 0
		);
	};
	this.f_scrollLeft = function () {
		return f_filterResults (
			window.pageXOffset ? window.pageXOffset : 0,
			document.documentElement ? document.documentElement.scrollLeft : 0,
			document.body ? document.body.scrollLeft : 0
		);
	};
	this.f_scrollTop = function () {
		return f_filterResults (
			window.pageYOffset ? window.pageYOffset : 0,
			document.documentElement ? document.documentElement.scrollTop : 0,
			document.body ? document.body.scrollTop : 0
		);
	};
	function  f_filterResults (n_win, n_docel, n_body) {
		var n_result = n_win ? n_win : 0;
		if (n_docel && (!n_result || (n_result > n_docel)))
			n_result = n_docel;
		return n_body && (!n_result || (n_result > n_body)) ? n_body : n_result;
	};
};