(function($){
// intro_main.js
// jQuery start ===============

var iconBox = $('#iconMoveBox').children('div');
iconBox.on('click',function(e){
	e.preventDefault();
	var findAttr = $(this).children('a').attr('href');
	// console.log(findAttr);
	var offsetBox = $(findAttr).offset().top;
	// console.log(offsetBox);
	  $('html, body').animate({ scrollTop: offsetBox }, 500);
});

// jQuery end =================
// // intro_main.js
})(this.jQuery);