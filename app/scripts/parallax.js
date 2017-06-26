$(function() {
  let controller = new ScrollMagic.Controller();


  // Sperduta project screnes

  new ScrollMagic.Scene({
      triggerElement: '.section-1',
      duration: 1500,
    })
    .setTween(TweenMax.to('.section-2 .image', 1, {
      backgroundPosition: '50% 100%',
      ease: Linear.easeNone
    }))
    .addTo(controller);

  new ScrollMagic.Scene({
      triggerElement: '.section-2',
      duration: 1500,
    })
    .setTween(TweenMax.to('.section-3 .image', 1, {
      backgroundPosition: '50% 100%',
      ease: Linear.easeNone
    }))
    .addTo(controller);

  new ScrollMagic.Scene({
      triggerElement: '.section-2',
      duration: 1500,
    })
    .setTween(TweenMax.to('.section-3 .box', 1, {
      css: {
        top: '+=40px'
      },
      ease: Linear.easeNone
    }))
    .addTo(controller);

  new ScrollMagic.Scene({
      triggerElement: '.section-4',
      duration: 800,
    })
    .setTween(TweenMax.to('.section-4 .image', 1, {
      backgroundPosition: '50% 100%',
      ease: Linear.easeNone
    }))
    .addTo(controller);

  new ScrollMagic.Scene({
      triggerElement: '.section-5',
      duration: 1500,
    })
    .setTween(TweenMax.to('.section-6 .image', 1, {
      backgroundPosition: '50% 100%',
      ease: Linear.easeNone
    }))
    .addTo(controller);

  new ScrollMagic.Scene({
      triggerElement: '.section-5',
      duration: 800,
    })
    .setTween(TweenMax.to('.section-6 .box', 1, {
      css: {
        bottom: '+=48px'
      },
      ease: Linear.easeNone
    }))
    .addTo(controller);
});
