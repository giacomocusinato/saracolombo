"use strict";$(function(){function e(e){u||p||(u=!0,$(f).css("z-index","-1"),"right"==e?($(f[d]).animate({left:"-=50%"},2e3,function(){h=d,d=g,g=c(d),t()}),$(f[g]).css("z-index","0").animate({left:"-=100%"},2e3)):($(f[d]).animate({left:"+=50%"},2e3,function(){g=d,d=h,h=l(d),t()}),$(f[h]).css("z-index","0").animate({left:"+=100%"},2e3)))}function t(){$(".project-title").show(),$(".project-title").hide(),$(f[d]).find(".project-title").fadeIn(),$(f[g]).css("left","+100%"),$(f[h]).css("left","-100%"),u=!1}function i(e){p||u||(p=!0,u=!0,$(".project-hero").hide(),$(f[d]).find(".project-title").addClass("active"),$(f[d]).show().addClass("opened").animate({width:"-=12%",height:"-=120px","margin-top":"+96px","margin-left":"+=6%"},1200,function(){$(this).find(".project-title").addClass("position-top"),$("html, body").css("overflow","visible"),$(".top-link").css("color","#333"),$(".top-link.left").fadeIn(),$("section.project."+e).fadeIn(),u=!1}))}function n(){p&&!u&&(u=!0,$("section.project").fadeOut(),$(f[d]).find(".project-title").fadeOut(),$(f[d]).delay(400).animate({width:"100%",height:"100%",margin:"0"},1200,function(){$(this).removeClass("opened").find(".project-title").removeClass("active position-top").fadeIn(),$(".top-link").css("color","white"),$(".top-link.left").fadeOut(),o(),$(".project-hero").show(),u=!1,p=!1,window.history.replaceState("home","Sara Colombo","/")}),$("html, body").css("overflow","hidden"))}function o(){$(".project-title").css("top","45%"),$(f).css({width:"100vw",height:"100vh","margin-top":"0","margin-left":"0"}),$(f[d]).css("left","0"),$(f[h]).css("left","-100%"),$(f[g]).css("left","+100%")}function s(){v=7e3,e("right"),m=setTimeout(s,v)}function a(e){var t=$(window),i=e.originalEvent.wheelDelta/120||-e.originalEvent.detail/3,n=t.scrollTop()-parseInt(300*i);TweenMax.to(t,1.2,{scrollTo:{y:n,autoKill:!0},ease:Expo.easeOut,autoKill:!0,overwrite:5})}function r(e,t){var i=t||window.location.href,n=new RegExp("[?&]"+e+"=([^&#]*)","i"),o=n.exec(i);return o?o[1]:null}function c(e){return e==f.length-1?0:e+1}function l(e){return 0==e?f.length-1:e-1}var f=$(".project-hero"),d=1,g=2,h=0,u=!1,p=!1,w=void 0,m=void 0,v=5e3;!function(){for(var e=["../images/sperduta_main.jpg","../images/roots_main.jpg","../images/firefighters_main.jpg","../images/black_main.jpg","../images/uppercut_main.jpg"],t=0;t<e.length;t++)$("<img />").attr("src",e[t])}(),function(){var e=r("p");if(e){var t=!1;$(f).each(function(n,o){var s=$(o).find("h1.project-title").attr("data-open");s==e&&(t=!0,d=n,h=l(d),g=c(d),$(f[d]).css("left","0"),$(f[g]).css("left","+100%"),$(f[h]).css("left","-100%"),$(f).show(),i(s))}),t||$(f).show()}else $(f).show()}(),m=setTimeout(s,v),$(f[d]).find(".project-title").fadeIn(),$(window).on("touchstart",function(e){w=e.originalEvent.touches[0].clientX}),$(window).on("touchend",function(t){var i=t.originalEvent.changedTouches[0].clientX;w>i+5?e("right"):w<i-5&&e("left"),clearTimeout(m)}),$(window).on("wheel",function(t){t.preventDefault(),a(t);var i=t.originalEvent.deltaY,n=t.originalEvent.deltaX;clearTimeout(m),e(i>0||n>0?"right":"left")}),$(".project-title").click(function(){var e=$(this).attr("data-open");window.history.replaceState("page"+e,e,"?p="+e),i(r("p"))}),$(".project-title").hover(function(){p||$(f).animate({width:"-=20px",height:"-=20px","margin-left":"+=10px","margin-top":"+=10px"},400)},function(){p||$(f).animate({width:"100%",height:"100%","margin-left":"0px","margin-top":"0px"},400)}),$(".top-link.left").click(function(){n()})}),$(function(){function e(e){this.leftImage=0,this.currentImage=1,this.rightImage=2,this.container=e}function t(e,t){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!m){o||(m=!0);var s=void 0,a=void 0;"left"==t?(s=e.rightImage,a="-50%"):(s=e.leftImage,a="+50%");var r=e.container.find(".image");$(r).eq(e.currentImage).css("z-index","0").animate({left:a},1200),$(r).eq(s).css("z-index","1").animate({left:"0"},1200,function(){e.currentImage=s,e.rightImage=i(s,r),e.leftImage=n(s,r),r.eq(e.leftImage).css("left","-100%"),r.eq(e.rightImage).css("left","100%"),m=!1})}}function i(e,t){return e==t.length-1?0:e+1}function n(e,t){return 0==e?t.length-1:e-1}var o=new e($(".sperduta .section-2 .slider")),s=new e($(".sperduta .section-3 .slider")),a=new e($(".firefighters .section-3 .slider")),r=new e($(".firefighters .section-6 .slider.left")),c=new e($(".firefighters .section-6 .slider.right")),l=new e($(".firefighters .section-10 .slider")),f=new e($(".firefighters .section-12 .slider")),d=new e($(".uppercut .section-8 .slider")),g=new e($(".black .section-2 .slider.left")),h=new e($(".black .section-2 .slider.right")),u=new e($(".black .section-5 .slider")),p=new e($(".black .section-8 .slider")),w=new e($(".black .section-9 .slider")),m=!1;$(".sperduta .section-2 .slider-nav").click(function(){$(this).hasClass("right")?t(o,"left"):t(o,"right")}),$(".sperduta .section-3 .slider-nav").click(function(){$(this).hasClass("right")?t(s,"left"):t(s,"right")}),$(".firefighters .section-3 .slider-nav").click(function(){$(this).hasClass("right")?t(a,"left"):t(a,"right")}),$(".firefighters .section-6 .slider-nav").click(function(){$(this).hasClass("right")?(t(r,"left",!0),t(c,"left",!0),m=!0):(t(r,"right",!0),t(c,"right",!0),m=!0)}),$(".firefighters .section-10 .slider-nav").click(function(){$(this).hasClass("right")?t(l,"left"):t(l,"right")}),$(".firefighters .section-12 .slider-nav").click(function(){$(this).hasClass("right")?t(f,"left"):t(f,"right")}),$(".uppercut .section-8 .slider-nav").click(function(){$(this).hasClass("right")?t(d,"left"):t(d,"right")}),$(".black .section-2 .slider-nav").click(function(){$(this).hasClass("right")?(t(g,"left",!0),t(h,"left",!0),m=!0):(t(g,"right",!0),t(h,"right",!0),m=!0)}),$(".black .section-5 .slider-nav").click(function(){$(this).hasClass("right")?t(u,"left"):t(u,"right")}),$(".black .section-8 .slider-nav").click(function(){$(this).hasClass("right")?t(p,"left"):t(p,"right")}),$(".black .section-9 .slider-nav").click(function(){$(this).hasClass("right")?t(w,"left"):t(w,"right")}),$(".slider").hover(function(){$(this).children(".slider-nav.left").fadeIn().addClass("animated slideInRight"),$(this).children(".slider-nav.right").fadeIn().addClass("animated slideInLeft")},function(){$(this).children(".slider-nav").fadeOut()})}),$(function(){var e=new ScrollMagic.Controller;!function(){$(".sperduta .row").each(function(t){new ScrollMagic.Scene({triggerElement:".sperduta .section-"+(t+1),duration:1500}).setTween(TweenMax.to(".sperduta .section-"+(t+2)+" .image",1,{backgroundPosition:"50% 100%",ease:Linear.easeNone})).addTo(e)}),new ScrollMagic.Scene({triggerElement:".sperduta .section-2",duration:1500}).setTween(TweenMax.to(".sperduta .section-3 .box",1,{css:{top:"+=40px"},ease:Linear.easeNone})).addTo(e),new ScrollMagic.Scene({triggerElement:".sperduta .section-5",duration:800}).setTween(TweenMax.to(".sperduta .section-6 .box",1,{css:{bottom:"+=48px"},ease:Linear.easeNone})).addTo(e)}(),function(){$(".roots .row").each(function(t){new ScrollMagic.Scene({triggerElement:".roots .section-"+(t+1),duration:1500}).setTween(TweenMax.to(".roots .section-"+(t+2)+" .image",1,{backgroundPosition:"50% 100%",ease:Linear.easeNone})).addTo(e)}),new ScrollMagic.Scene({triggerElement:".roots .section-1",duration:1200}).setTween(TweenMax.to(".roots .section-2 .box",1,{css:{bottom:"+=220px"},ease:Linear.easeNone})).addTo(e)}(),function(){$(".firefighters .row").each(function(t){new ScrollMagic.Scene({triggerElement:".firefighters .section-"+(t+1),duration:1500}).setTween(TweenMax.to(".firefighters .section-"+(t+2)+" .image",1,{backgroundPosition:"50% 100%",ease:Linear.easeNone})).addTo(e)})}(),function(){$(".black .row").each(function(t){new ScrollMagic.Scene({triggerElement:".black .section-"+(t+1),duration:1500}).setTween(TweenMax.to(".black .section-"+(t+2)+" .image",1,{backgroundPosition:"50% 100%",ease:Linear.easeNone})).addTo(e)})}(),function(){$(".uppercut .row").each(function(t){new ScrollMagic.Scene({triggerElement:".uppercut .section-"+(t+1),duration:1500}).setTween(TweenMax.to(".uppercut .section-"+(t+2)+" .image",1,{backgroundPosition:"50% 100%",ease:Linear.easeNone})).addTo(e)}),new ScrollMagic.Scene({triggerElement:".uppercut .section-4",duration:1500}).setTween(TweenMax.to(".uppercut .section-5 .box",1,{css:{top:"+=48px"},ease:Linear.easeNone})).addTo(e),new ScrollMagic.Scene({triggerElement:".uppercut .section-6",duration:1500}).setTween(TweenMax.to(".uppercut .section-7 .box",1,{css:{top:"+=48px"},ease:Linear.easeNone})).addTo(e)}()});