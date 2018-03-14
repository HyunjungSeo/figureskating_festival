(function($){
// intro_base.js
// jQuery start ===============

var wrap = $('#wrap');

// 불러올 파일 목록 만들기 
var baseUrl = '../../html/src/';
var loadFile = {
	headBox:baseUrl + 'headBox.html',
	intro_main:baseUrl + 'intro_main.html',
	intro_fest_intro:baseUrl + 'intro_fest_intro.html',
	intro_fest_who:baseUrl + 'intro_fest_who.html',
	intro_fest_booth:baseUrl + 'intro_fest_booth.html',
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

headBoxWrap.after('<div id="introBoxWrap"></div>');
  var introBoxWrap = $('#introBoxWrap');
  ImportFile(introBoxWrap,loadFile.intro_main,true);

  // introBox

introBoxWrap.after('<div id="intro_festBoxWrap"></div>');
  var intro_festBoxWrap = $('#intro_festBoxWrap');
  ImportFile(intro_festBoxWrap, loadFile.intro_fest_intro, true);

 // intro_festBox

  intro_festBoxWrap.after('<div id="intro_fest_whoWrap"></div>');
  var intro_fest_whoWrap = $('#intro_fest_whoWrap');
  ImportFile(intro_fest_whoWrap, loadFile.intro_fest_who, true);

// mainBox

  intro_fest_whoWrap.after('<div id="intro_fest_boothWrap"></div>');
  var intro_fest_boothWrap = $('#intro_fest_boothWrap');
  ImportFile(intro_fest_boothWrap, loadFile.intro_fest_booth, true);

// mainBox

wrap.append('<div id="footBoxWrap"></div>');
var footBoxWrap = $('#footBoxWrap');
ImportFile(footBoxWrap,loadFile.footBox, true);

// footBox

// jQuery end =================
// // intro_base.js
})(this.jQuery);