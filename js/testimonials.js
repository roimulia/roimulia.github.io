!function(i){i.fn.thunder_testi=function(e){function n(e){p=0,u.eq(e).prevAll().each(function(){p=i(this).outerHeight()+p})}function t(i){a.find(".dot").removeClass("dot-active thunder-bgcolor"),a.find(".dot").eq(i).addClass("dot-active thunder-bgcolor")}function o(i){r=a.find(".h-review").eq(i).outerHeight(),a.find(".slide-height").outerHeight(r)}function s(i){n(h),a.find(".testi-inner").stop().animate({marginTop:"-"+p+"px"},{duration:e.times,easing:e.easing})}function d(){s(h),o(h)}var r,a=this,c=a.find(".dots"),f=c.outerHeight(),l=f/2,u=a.find(".h-review"),g=u.length,p=0,h=0,w={times:750,easing:"easeInOutExpo"};e=i.extend(w,e),c.css({marginTop:"-"+l+"px"}),t(h),a.find(".dot").click(function(){h=i(this).index(),s(h),t(h),o(h)}),d(),i(window).resize(d),a.swipe({swipe:function(e,n){"right"==n&&h>0?(h--,s(h),t(h),o(h)):"left"==n&&h>=0&&g-1>h?(h++,s(h),t(h),o(h)):"up"==n?a.swipe("option","allowPageScroll",i.fn.swipe.pageScroll.VERTICAL):"down"==n&&a.swipe("option","allowPageScroll",i.fn.swipe.pageScroll.VERTICAL)}})}}(jQuery);