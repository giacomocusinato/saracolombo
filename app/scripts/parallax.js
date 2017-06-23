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

    // let tween5 = TweenMax.to('.section-5', 1, {
    //   css: {lineHeight: '-=1'},
    //   ease: Linear.easeNone
    // });
    // let scene5 = new ScrollMagic.Scene({
    //     triggerElement: '.section-4',
    //     duration: 500,
    //   })
    //   .setTween(tween5)
    //   .addTo(controller);

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
