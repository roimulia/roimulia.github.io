!function(e){e.fn.split_slider=function(i){function n(n){g=0,p.eq(n).prevAll().each(function(){g=e(this).outerHeight()+g}),c.stop().animate({marginTop:"-"+g+"px"},{duration:i.times,easing:i.easing})}function t(){d.find(".dots-wrap").css({marginTop:"-"+m/2+"px"})}function o(e){d.find(".dot").removeClass("thunder-bgcolor thunder-border"),d.find(".dot").eq(e).addClass("thunder-bgcolor thunder-border")}function r(e){u=p.eq(e).outerHeight(),h.height(u)}var s={times:800,easing:"easeOutCirc"};i=e.extend(s,i);var d=this,a=0,l=e(window),p=d.find(".slide-single"),f=p.length,c=d.find(".slider-inner"),u=p.eq(a).outerHeight(),g=0,h=d.find(".thunder-slider-inner");h.height(u);for(var w=0;f>w;w++)e(".dots-wrap").append('<span class="dot"></span>');var m=d.find(".dots-wrap").height();t(),o(a),r(a),d.find(".dot").click(function(){a=e(this).index(),n(a),o(a),r(a)}),l.resize(function(){r(a),n(a)}),d.swipe({swipe:function(i,t){"right"==t&&a>0?(a--,n(a),o(a),r(a)):"left"==t&&f-1>a?(a++,n(a),o(a),r(a)):"up"==t?d.swipe("option","allowPageScroll",e.fn.swipe.pageScroll.VERTICAL):"down"==t&&d.swipe("option","allowPageScroll",e.fn.swipe.pageScroll.VERTICAL)}})}}(jQuery);