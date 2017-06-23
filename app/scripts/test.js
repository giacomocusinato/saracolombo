$(function() {
  let controller = new ScrollMagic.Controller();

  let tween2 = TweenMax.to('.section-2 .image', 1, {
    backgroundPosition: '50% 100%',
    ease: Linear.easeNone
  });
  let scene2 = new ScrollMagic.Scene({
      triggerElement: '.section-1',
      duration: 1500,
    })
    .setTween(tween2)
    .addTo(controller);

  let tween3 = TweenMax.to('.section-3 .image', 1, {
    backgroundPosition: '50% 100%',
    ease: Linear.easeNone
  });
  let scene3 = new ScrollMagic.Scene({
      triggerElement: '.section-2',
      duration: 1500,
    })
    .setTween(tween3)
    .addTo(controller);

  let tween4 = TweenMax.to('.section-4 .image', 1, {
    backgroundPosition: '50% 100%',
    ease: Linear.easeNone
  });
  let scene4 = new ScrollMagic.Scene({
      triggerElement: '.section-3',
      duration: 1500,
    })
    .setTween(tween4)
    .addTo(controller);

  let tween6 = TweenMax.to('.section-6 .image', 1, {
    backgroundPosition: '50% 100%',
    ease: Linear.easeNone
  });
  let scene6 = new ScrollMagic.Scene({
      triggerElement: '.section-5',
      duration: 1500,
    })
    .setTween(tween6)
    .addTo(controller);
});

// $(window).width() >= 900) {
//   controller = new ScrollMagic;
//   var o = TweenMax.to("#video1 .video-inner", 1, {
//       backgroundPosition: "50% 100%",
//       ease: Linear.easeNone
//     }),
//     i = (new ScrollScene({
//         triggerElement: "#content",
//         duration: 11500,
//         offset: 300
//       }).setTween(o).addTo(controller),
//       TweenMax.to("div#info_video1", 1, {
//         css: {
//           marginTop: "-=100px"
//         }
//       })),
//     a = (new ScrollScene({
//         triggerElement: "#content",
//         duration: 1300,
//         offset: 300
//       }).setTween(i).addTo(controller),
//       TweenMax.to("#h3_1", 1, {
//         css: {
//           marginTop: "+=30px",
//           marginBottom: "-=30px"
//         }
//       })),
//     s = (new ScrollScene({
//         triggerElement: "#video1",
//         duration: 11500,
//         offset: 200
//       }).setTween(a).addTo(controller),
//       TweenMax.to("#second_p1", 1, {
//         css: {
//           marginTop: "+=30px",
//           marginBottom: "-=30px"
//         }
//       })),
//     r = (new ScrollScene({
//         triggerElement: "#video1",
//         duration: 11500,
//         offset: 200
//       }).setTween(s).addTo(controller),
//       TweenMax.to("#slider1 .slider-right-inner", 1, {
//         backgroundPosition: "50% 100%",
//         ease: Linear.easeNone
//       })),
//     d = (new ScrollScene({
//         triggerElement: "#h3_1",
//         duration: 11500,
//         offset: 300
//       }).setTween(r).addTo(controller),
//       TweenMax.to("#slider1 .slider-left-inner", 1, {
//         backgroundPosition: "50% 100%",
//         ease: Linear.easeNone
//       })),
//     l = (new ScrollScene({
//         triggerElement: "#h3_1",
//         duration: 11500,
//         offset: 300
//       }).setTween(d).addTo(controller),
//       TweenMax.from("#third_p1", 1, {
//         css: {
//           marginTop: "-=30px",
//           marginBottom: "+=30px"
//         }
//       }));
//   new ScrollScene({
//     triggerElement: "#slider1",
//     duration: 11500,
//     offset: 300
//   }).setTween(l).addTo(controller);
//
//
//   if ($("#section_2").length > 0) {
//     var o = TweenMax.to("#video2 .video-inner", 1, {
//         backgroundPosition: "50% 100%",
//         ease: Linear.easeNone
//       }),
//       i = (new ScrollScene({
//           triggerElement: "#line_divider1",
//           duration: 11500,
//           offset: 300
//         }).setTween(o).addTo(controller),
//         TweenMax.to("div#info_video2", 1, {
//           css: {
//             marginTop: "-=100px"
//           }
//         })),
//       a = (new ScrollScene({
//           triggerElement: "#line_divider1",
//           duration: 1300,
//           offset: 300
//         }).setTween(i).addTo(controller),
//         TweenMax.to("#h3_2", 1, {
//           css: {
//             marginTop: "+=30px",
//             marginBottom: "-=30px"
//           }
//         })),
//       s = (new ScrollScene({
//           triggerElement: "#video2",
//           duration: 11500,
//           offset: 200
//         }).setTween(a).addTo(controller),
//         TweenMax.to("#second_p2", 1, {
//           css: {
//             marginTop: "+=30px",
//             marginBottom: "-=30px"
//           }
//         })),
//       r = (new ScrollScene({
//           triggerElement: "#video2",
//           duration: 11500,
//           offset: 200
//         }).setTween(s).addTo(controller),
//         TweenMax.to("#slider2 .slider-right-inner", 1, {
//           backgroundPosition: "50% 100%",
//           ease: Linear.easeNone
//         })),
//       d = (new ScrollScene({
//           triggerElement: "#h3_2",
//           duration: 11500,
//           offset: 300
//         }).setTween(r).addTo(controller),
//         TweenMax.to("#slider2 .slider-left-inner", 1, {
//           backgroundPosition: "50% 100%",
//           ease: Linear.easeNone
//         })),
//       l = (new ScrollScene({
//           triggerElement: "#h3_2",
//           duration: 11500,
//           offset: 300
//         }).setTween(d).addTo(controller),
//         TweenMax.from("#third_p2", 1, {
//           css: {
//             marginTop: "-=30px",
//             marginBottom: "+=30px"
//           }
//         })),
//       // c = (new ScrollScene({
//           triggerElement: "#slider2",
//           duration: 11500,
//           offset: 300
//         }).setTween(l).addTo(controller),
//         TweenMax.to(".end_slides .end_slide_left_inner", 1, {
//           backgroundPosition: "50% 100%",
//           ease: Linear.easeNone
//         })),
//       u = (new ScrollScene({
//           triggerElement: "#third_p2",
//           duration: 11500,
//           offset: 400
//         }).setTween(c).addTo(controller),
//         TweenMax.to(".end_slides .end_slide_right_inner", 1, {
//           backgroundPosition: "50% 100%",
//           ease: Linear.easeNone
//         }));
//     new ScrollScene({
//       triggerElement: "#third_p2",
//       duration: 11500,
//       offset: 400
//     }).setTween(u).addTo(controller)
//   }
//   if ($("#section_3").length > 0) {
//     var o = TweenMax.to("#video3 .video-inner", 1, {
//         backgroundPosition: "50% 100%",
//         ease: Linear.easeNone
//       }),
//       i = (new ScrollScene({
//           triggerElement: "#line_divider2",
//           duration: 11500,
//           offset: 300
//         }).setTween(o).addTo(controller),
//         TweenMax.to("div#info_video3", 1, {
//           css: {
//             marginTop: "-=100px"
//           }
//         })),
//       a = (new ScrollScene({
//           triggerElement: "#line_divider2",
//           duration: 1300,
//           offset: 300
//         }).setTween(i).addTo(controller),
//         TweenMax.to("#h3_3", 1, {
//           css: {
//             marginTop: "+=30px",
//             marginBottom: "-=30px"
//           }
//         })),
//       s = (new ScrollScene({
//           triggerElement: "#video3",
//           duration: 11500,
//           offset: 200
//         }).setTween(a).addTo(controller),
//         TweenMax.to("#second_p3", 1, {
//           css: {
//             marginTop: "+=30px",
//             marginBottom: "-=30px"
//           }
//         })),
//       r = (new ScrollScene({
//           triggerElement: "#video3",
//           duration: 11500,
//           offset: 200
//         }).setTween(s).addTo(controller),
//         TweenMax.to("#slider3 .slider-right-inner", 1, {
//           backgroundPosition: "50% 100%",
//           ease: Linear.easeNone
//         })),
//       d = (new ScrollScene({
//           triggerElement: "#h3_3",
//           duration: 11500,
//           offset: 300
//         }).setTween(r).addTo(controller),
//         TweenMax.to("#slider3 .slider-left-inner", 1, {
//           backgroundPosition: "50% 100%",
//           ease: Linear.easeNone
//         })),
//       l = (new ScrollScene({
//           triggerElement: "#h3_3",
//           duration: 11500,
//           offset: 300
//         }).setTween(d).addTo(controller),
//         TweenMax.from("#third_p3", 1, {
//           css: {
//             marginTop: "-=30px",
//             marginBottom: "+=30px"
//           }
//         }));
//     new ScrollScene({
//       triggerElement: "#slider3",
//       duration: 11500,
//       offset: 300
//     }).setTween(l).addTo(controller)
//   }
// }
