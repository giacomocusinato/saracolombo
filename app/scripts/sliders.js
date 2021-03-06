$(function() {
  'use strict';

  function slider(container) {
    this.leftImage = 0;
    this.currentImage = 1;
    this.rightImage = 2;
    this.container = container;
  };

  let sliderOne = new slider($('.sperduta .section-2 .slider'));
  let sliderTwo = new slider($('.sperduta .section-3 .slider'));

  let sliderThree = new slider($('.firefighters .section-4 .slider'));
  let sliderFourLeft = new slider($('.firefighters .section-7 .slider.left'));
  let sliderFourRight = new slider($('.firefighters .section-7 .slider.right'));
  let sliderFive = new slider($('.firefighters .section-11 .slider'));
  let sliderSix = new slider($('.firefighters .section-13 .slider'));

  let sliderSeven = new slider($('.uppercut .section-8 .slider'));

  let sliderEightLeft = new slider($('.black .section-2 .slider.left'));
  let sliderEightRight = new slider($('.black .section-2 .slider.right'));
  let sliderNine = new slider($('.black .section-5 .slider'));
  let sliderTen = new slider($('.black .section-8 .slider'));
  let sliderEleven = new slider($('.black .section-9 .slider'));


  let animationOnGoing = false;


  $('.sperduta .section-2 .slider-nav').click(function() {
    $(this).hasClass('right') ?
      swipe(sliderOne, 'left') : swipe(sliderOne, 'right')
  });
  $('.sperduta .section-3 .slider-nav').click(function() {
    $(this).hasClass('right') ?
      swipe(sliderTwo, 'left') : swipe(sliderTwo, 'right')
  });
  $('.firefighters .section-4 .slider-nav').click(function() {
    $(this).hasClass('right') ?
      swipe(sliderThree, 'left') : swipe(sliderThree, 'right')
  });
  $('.firefighters .section-7 .slider-nav').click(function() {
    if ($(this).hasClass('right')) {
      swipe(sliderFourLeft, 'left', true);
      swipe(sliderFourRight, 'left', true);
      animationOnGoing = true;
    } else {
      swipe(sliderFourLeft, 'right', true);
      swipe(sliderFourRight, 'right', true);
      animationOnGoing = true;
    }

  });
  $('.firefighters .section-11 .slider-nav').click(function() {
    $(this).hasClass('right') ?
      swipe(sliderFive, 'left') : swipe(sliderFive, 'right')
  });
  $('.firefighters .section-13 .slider-nav').click(function() {
    $(this).hasClass('right') ?
      swipe(sliderSix, 'left') : swipe(sliderSix, 'right')
  });
  $('.uppercut .section-8 .slider-nav').click(function() {
    $(this).hasClass('right') ?
      swipe(sliderSeven, 'left') : swipe(sliderSeven, 'right')
  });
  $('.black .section-2 .slider-nav').click(function() {
    if ($(this).hasClass('right')) {
      swipe(sliderEightLeft, 'left', true);
      swipe(sliderEightRight, 'left', true);
      animationOnGoing = true;
    } else {
      swipe(sliderEightLeft, 'right', true);
      swipe(sliderEightRight, 'right', true);
      animationOnGoing = true;
    }

  });
  $('.black .section-5 .slider-nav').click(function() {
    $(this).hasClass('right') ?
      swipe(sliderNine, 'left') : swipe(sliderNine, 'right')
  });
  $('.black .section-8 .slider-nav').click(function() {
    $(this).hasClass('right') ?
      swipe(sliderTen, 'left') : swipe(sliderTen, 'right')
  });
  $('.black .section-9 .slider-nav').click(function() {
    $(this).hasClass('right') ?
      swipe(sliderEleven, 'left') : swipe(sliderEleven, 'right')
  });



  // $('.slider').hover(function() {
  //   $(this)
  //     .children('.slider-nav.left')
  //     .fadeIn()
  //     .addClass('animated slideInRight');
  //   $(this)
  //     .children('.slider-nav.right')
  //     .fadeIn()
  //     .addClass('animated slideInLeft');
  // }, function() {
  //   $(this).children('.slider-nav').fadeOut();
  // });

  function swipe(slider, direction, isDoubleSlider = false) {
    if (animationOnGoing) return;
    if (!isDoubleSlider)
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
      }, 1200, function() {
        slider.currentImage = imageToSlide;
        slider.rightImage = calcNext(imageToSlide, images);
        slider.leftImage = calcPrevious(imageToSlide, images);

        images.eq(slider.leftImage).css('left', '-100%');
        images.eq(slider.rightImage).css('left', '100%');

        console.log(slider);
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
