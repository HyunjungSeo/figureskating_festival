(function($){
// mainBox.js
// jQuery start ===============

var mainBox = $('#mainBox');
var mainBoxUl = mainBox.children('.poster');
var mainBoxLi = mainBoxUl.children('li');

mainBoxLi.last().prependTo(mainBoxUl);
mainBoxUl.css({marginLeft:'-100%'});
mainBox.css({overflow:'hidden'});

var leftBtn = $('#leftBtn');
var rightBtn = $('#rightBtn');

leftBtn.on('click', function(event){
    event.preventDefault(); 

    mainBoxUl.stop(true, false).animate({marginLeft:0}, function(){
        mainBoxLi = mainBoxUl.children('li').last();
        mainBoxLi.prependTo(mainBoxUl);
        mainBoxUl.css({marginLeft:'-100%'});
    });
}); // leftBtn 클릭

rightBtn.on('click', function(event){
    event.preventDefault(); 

    mainBoxUl.stop(true, false).animate({marginLeft:'-200%'}, function(){
        mainBoxLi = mainBoxUl.children('li').first();
        mainBoxLi.appendTo(mainBoxUl);
        mainBoxUl.css({marginLeft:'-100%'});
    });
}); // rightBtn 클릭
// jQuery end =================
// // mainBox.js
})(this.jQuery);