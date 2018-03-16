(function($){
// map_base.js
// jQuery start ===============

var wrap = $('#wrap');

// 불러올 파일 목록 만들기 
var baseUrl = './src/';
var loadFile = {
	headBox:baseUrl + 'headBox.html',
	map_main:baseUrl + 'map_main.html',
	map_parking:baseUrl + 'map_parking.html',
	map_subway:baseUrl + 'map_subway.html',
	map_bus:baseUrl + 'map_bus.html',
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

headBoxWrap.after('<div id="map_mainWrap"></div>');
  var map_mainWrap = $('#map_mainWrap');
  ImportFile(map_mainWrap,loadFile.map_main,true);

  // map_main

map_mainWrap.after('<div id="map_parkingWrap"></div>');
  var map_parkingWrap = $('#map_parkingWrap');
  ImportFile(map_parkingWrap, loadFile.map_parking, true);

 // map_parking

  map_parkingWrap.after('<div id="map_subwayWrap"></div>');
  var map_subwayWrap = $('#map_subwayWrap');
  ImportFile(map_subwayWrap, loadFile.map_subway, true);

// map_subway

  map_subwayWrap.after('<div id="map_busWrap"></div>');
  var map_busWrap = $('#map_busWrap');
  ImportFile(map_busWrap, loadFile.map_bus, true);

// map_bus

wrap.append('<div id="footBoxWrap"></div>');
var footBoxWrap = $('#footBoxWrap');
ImportFile(footBoxWrap,loadFile.footBox, true);

// footBox

// jQuery end =================
// // map_base.js
})(this.jQuery);