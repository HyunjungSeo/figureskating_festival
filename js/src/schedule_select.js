(function($){
// schedule_select.js
// jQuery start ===============

var tab = $('.tabs');
var tabLi = tab.children('li');
var tabContent = $('.tab_content');
var tabContentLi = tabContent.children('li');

tabLi.on('click',function(evt){
	evt.preventDefault();
	var myBtn = $(this).index();
	console.log(myBtn);
//tab메뉴 버튼에서 지정한 class이름 select를 일단 삭제
	tabLi.removeClass('select');
	//선택된 몇번째? 확인 후 li에 class이름 select를 지정
	tabLi.eq(myBtn).addClass('select');
//해당하는 탭메뉴의 내용이 순서에 맞게 나오게 만들어라.
tabContentLi.removeClass('select');
tabContentLi.eq(myBtn).addClass('select');
});

// jQuery end =================
// // schedule_select.js
})(this.jQuery);