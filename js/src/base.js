(function($){
// base.js
// jQuery start ===============

var wrap = $('#wrap');

// 불러올 파일 목록 만들기 
var baseUrl = './html/src/';
var loadFile = {
	headBox:baseUrl + 'headBox.html',
	mainBox:baseUrl + 'mainBox.html',
	footBox:baseUrl + 'footBox.html'};

wrap.prepend('<div id="headBoxWrap"></div>');
var headBoxWrap = $('#headBoxWrap');
ImportFile(headBoxWrap,loadFile.headBox,true)

// headBox

headBoxWrap.after('<div id="mainBoxWrap"></div>');
  var mainBoxWrap = $('#mainBoxWrap');
  ImportFile(mainBoxWrap,loadFile.mainBox,true)

// mainBox

wrap.append('<div id="footBoxWrap"></div>');
var footBoxWrap = $('#footBoxWrap');
ImportFile(footBoxWrap,loadFile.footBox, true)

// footBox

function ImportFile(select, file, bgIf){
	select.load(file,function(){
		select.addClass('clearfix');
		var childrenBox = select.children();
		childrenBox.css({margin:'0 auto'});
		if(bgIf == true){
			var bgColor = childrenBox.css('backgroundColor');
			console.log('select: '+childrenBox, 'background:'+bgColor);
			select.css({'backgroundColor':bgColor});
		}
	});
};

// jQuery end =================
// // base.js
})(this.jQuery);