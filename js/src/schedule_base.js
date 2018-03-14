(function($){
// schedule_base.js
// jQuery start ===============

var wrap = $('#wrap');

// 불러올 파일 목록 만들기 
var baseUrl = '../../html/src/';
var loadFile = {
	headBox:baseUrl + 'headBox.html',
	schedule_main:baseUrl + 'schedule_main.html',
	schedule_day:baseUrl + 'schedule_day.html',
	footBox:baseUrl + 'footBox.html'};

function ImportFile(selectName, fileName, bgIf){
	selectName.load(fileName,function(){
		selectName.addClass('clearfix');
		var childrenBox = selectName.children();
		childrenBox.css({margin:'0 auto'});
		if(bgIf == true){
			var bgColor = childrenBox.css('backgroundColor');
			// console.log('selectName: '+childrenBox, 'background:'+bgColor);
			selectName.css({'backgroundColor':bgColor});
		}
	});
};

wrap.prepend('<div id="headBoxWrap"></div>');
var headBoxWrap = $('#headBoxWrap');
ImportFile(headBoxWrap,loadFile.headBox,true);

// headBox

headBoxWrap.after('<div id="schedule_mainWrap"></div>');
  var schedule_mainWrap = $('#schedule_mainWrap');
  ImportFile(schedule_mainWrap,loadFile.schedule_main,true);

  // schedule_main

schedule_mainWrap.after('<div id="schedule_dayWrap"></div>');
  var schedule_dayWrap = $('#schedule_dayWrap');
  ImportFile(schedule_dayWrap, loadFile.schedule_day, true);

 // schedule_day


wrap.append('<div id="footBoxWrap"></div>');
var footBoxWrap = $('#footBoxWrap');
ImportFile(footBoxWrap,loadFile.footBox, true);

// footBox

// jQuery end =================
// schedule_base.js
})(this.jQuery);