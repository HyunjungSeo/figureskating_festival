(function($){
// play_main.js
// jQuery start ===============

var playMore = $('#playMore');
playMore.on('click',function(e){
	e.preventDefault();
	var downMore = $(this).children('a').attr('href');
	// console.log(downMore);
	var moreArea = $(downMore).offset().top;
	// console.log(offsetBox);
	  $('html, body').animate({ scrollTop: moreArea }, 500);
});

// jQuery end =================
// // play_main.js
})(this.jQuery);