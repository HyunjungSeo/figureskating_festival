(function($){
// headIcon.js
// jQuery start ===============

var gnbLi = $('#gnb').find('li');
var icon = $('#iconWrap').children('div');

gnbLi.on('mouseenter', function(){
	// $(this).find('i').show();
	var _thisIndex = $(this).index();
	console.log(_thisIndex);
	icon.eq(_thisIndex).slideDown();
}).on('mouseleave',function(){
	// $(this).find('i').hide();
	icon.slideUp();
});

// jQuery end =================
// // headIcon.js
})(this.jQuery);