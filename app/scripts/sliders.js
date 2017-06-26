$(function() {
  'use strict';

  function slider(container) {
    this.leftImage = 0;
    this.currentImage = 1;
    this.rightImage = 2;
    this.container = container;
  };

  let sliderOne = new slider($('.section-2 .slider'));
  let sliderTwo = new slider($('.section-3 .slider'));
  let animationOnGoing = false;


  $('.section-2 .slider-nav').click(function() {
    $(this).hasClass('right') ?
      swipe(sliderOne, 'left') : swipe(sliderOne, 'right')
  });
  $('.section-3 .slider-nav').click(function() {
    $(this).hasClass('right') ?
      swipe(sliderTwo, 'left') : swipe(sliderTwo, 'right')
  });

  $('.slider').hover(function() {
    $(this).children('.slider-nav').fadeIn();
  }, function() {
    $(this).children('.slider-nav').fadeOut();
  });

  function swipe(slider, direction) {
    if (animationOnGoing) return;
    animationOnGoing = true;

    let imageToSlide, currentImageVelocity;
    if (direction == 'left') {
      imageToSlide = slider.rightImage;
      currentImageVelocity = '-50%';
    } else {
      imageToSlide = slider.leftImage;
      currentImageVelocity = '+50%';
    }

    let images = slider.container.find('.image');

    $(images)
      .eq(slider.currentImage)
      .css('z-index', '0')
      .animate({
        'left': currentImageVelocity
      }, 1200);
    $(images)
      .eq(imageToSlide)
      .css('z-index', '1')
      .animate({
        'left': '0'
      }, 1200, function () {
        slider.currentImage = imageToSlide;
        slider.rightImage = calcNext(imageToSlide, images);
        slider.leftImage = calcPrevious(imageToSlide, images);

        images.eq(slider.leftImage).css('left', '-100%');
        images.eq(slider.rightImage).css('left', '100%');

        animationOnGoing = false;
      });
  }


  function calcNext(i, array) {
    if (i == array.length - 1)
      return 0;
    else
      return i + 1;
  }

  function calcPrevious(i, array) {
    if (i == 0)
      return array.length - 1;
    else
      return i - 1;
  }
});
