$(function() {

  let controller = new ScrollMagic.Controller();


  /*----------- Sperduta scenes -----------*/

  $('.sperduta .row').each(function(i) {
    new ScrollMagic.Scene({
        triggerElement: '.sperduta .section-' + (i + 1),
        duration: 1500,
      })
      .setTween(TweenMax.to('.sperduta .section-' + (i + 2) + ' .image', 1, {
        backgroundPosition: '50% 100%',
        ease: Linear.easeNone
      }))
      .addTo(controller);
  });

  new ScrollMagic.Scene({
      triggerElement: '.sperduta .section-2',
      duration: 1500,
    })
    .setTween(TweenMax.to('.sperduta .section-3 .box', 1, {
      css: {
        top: '+=40px'
      },
      ease: Linear.easeNone
    }))
    .addTo(controller);

  new ScrollMagic.Scene({
      triggerElement: '.sperduta .section-5',
      duration: 800,
    })
    .setTween(TweenMax.to('.sperduta .section-6 .box', 1, {
      css: {
        bottom: '+=48px'
      },
      ease: Linear.easeNone
    }))
    .addTo(controller);



  /*----------- Roots scenes -----------*/

  $('.roots .row').each(function(i) {
    new ScrollMagic.Scene({
        triggerElement: '.roots .section-' + (i + 1),
        duration: 1500,
      })
      .setTween(TweenMax.to('.roots .section-' + (i + 2) + ' .image', 1, {
        backgroundPosition: '50% 100%',
        ease: Linear.easeNone
      }))
      .addTo(controller);
  });

  new ScrollMagic.Scene({
      triggerElement: '.roots .section-1',
      duration: 1200,
    })
    .setTween(TweenMax.to('.roots .section-2 .box', 1, {
      css: {
        bottom: '+=220px'
      },
      ease: Linear.easeNone
    }))
    .addTo(controller);



  /*----------- Firefighters scenes -----------*/

  $('.firefighters .row').each(function(i) {
    new ScrollMagic.Scene({
        triggerElement: '.firefighters .section-' + (i + 1),
        duration: 1500,
      })
      .setTween(TweenMax.to('.firefighters .section-' + (i + 2) + ' .image', 1, {
        backgroundPosition: '50% 100%',
        ease: Linear.easeNone
      }))
      .addTo(controller);
  });

});
