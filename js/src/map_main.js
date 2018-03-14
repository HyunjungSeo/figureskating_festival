(function($){
// map_main.js
// jQuery start ===============

var moreBox = $('#moreMapBox').children('div');
moreBox.on('click',function(e){
	e.preventDefault();
	var downAttr = $(this).children('a').attr('href');
	// console.log(downAttr);
	var offsetArea = $(downAttr).offset().top;
	// console.log(offsetBox);
	  $('html, body').animate({ scrollTop: offsetArea }, 500);
});

// jQuery end =================
// // map_main.js
})(this.jQuery);