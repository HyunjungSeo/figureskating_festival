(function($){
// play_base.js
// jQuery start ===============

var wrap = $('#wrap');

// 불러올 파일 목록 만들기 
var baseUrl = './html/src/';
var loadFile = {
	headBox:baseUrl + 'headBox.html',
	play_main:baseUrl + 'play_main.html',
	play_guide:baseUrl + 'play_guide.html',
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

headBoxWrap.after('<div id="play_mainWrap"></div>');
  var play_mainWrap = $('#play_mainWrap');
  ImportFile(play_mainWrap,loadFile.play_main, true);

// play_main

  play_mainWrap.after('<div id="play_guideWrap"></div>');
  var play_guideWrap = $('#play_guideWrap');
  ImportFile(play_guideWrap, loadFile.play_guide, true);

// play_guide

wrap.append('<div id="footBoxWrap"></div>');
var footBoxWrap = $('#footBoxWrap');
ImportFile(footBoxWrap,loadFile.footBox, true);

// footBox

// jQuery end =================
// // play_base.js
})(this.jQuery);