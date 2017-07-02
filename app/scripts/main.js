$(function() {
  'use strict';


  /*----------- Global variables -----------*/


  let projects = $('.project-hero');
  let currentProject = 1;
  let rightProject = 2;
  let leftProject = 0;
  let animationOnGoing = false;
  let projectOpened = false;
  let touchStart;
  let interval;
  let intervalTime = 7000;


  /*----------- Inits -----------*/

  manageUrlParams();

  interval = setTimeout(callback, intervalTime);


  $(projects[currentProject])
    .find('.project-title')
    .show()
    .fadeIn();



  /*----------- Event listeners -----------*/


  $(window).on('touchstart', function(e) {
    touchStart = e.originalEvent.touches[0].clientX;
  });

  $(window).on('touchend', function(e) {
    let touchEnd = e.originalEvent.changedTouches[0].clientX;
    if (touchStart > touchEnd + 5) {
      swipeProject('right');
    } else if (touchStart < touchEnd - 5) {
      swipeProject('left');
    }
    clearTimeout(interval);
  });

  $(window).on('wheel', function(e) {
    e.preventDefault();
    smoothScrolling(e);

    let deltaY = e.originalEvent.deltaY;
    let deltaX = e.originalEvent.deltaX;

    clearTimeout(interval);

    swipeProject(deltaY > 0 || deltaX > 0 ? 'right' : 'left')
  });

  $('.project-title').click(function() {
    let p = $(this).attr('data-open');
    window.history.replaceState('page' + p, p, '?p=' + p);
    openProject(getUrlParam('p'));
  });

  $('.next-project .title').click(function() {
    let p = $(this).attr('data-open');
    window.history.replaceState('page' + p, p, '?p=' + p);
    window.location.reload();
  });

  $('.project-title').hover(function() {
    if (projectOpened) return;

    $(projects)
      .animate({
        'width': '-=20px',
        'height': '-=20px',
        'margin-left': '+=10px',
        'margin-top': '+=10px'
      }, 400);
  }, function() {
    if (projectOpened) return;

    $(projects)
      .animate({
        'width': '100%',
        'height': '100%',
        'margin-left': '0px',
        'margin-top': '0px'
      }, 400)

  });

  $('.top-link.left').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800, function() {
      closeProject();
    });
  });

  $(window).scroll(function() {
    if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
      $('.next-project .title').addClass('animated pulse');
    }
  });

  $('.next-project .title').hover(function() {
    $('.next-project-container')
      .animate({
        'width': '-=20px',
        'height': '-=20px',
        'margin-left': '+=10px',
        'margin-top': '+=10px'
      }, 400);
  }, function() {
    $('.next-project-container')
      .animate({
        'width': '100vw',
        'height': '30vw',
        'margin': '220px -12vw 0 -12vw'
      }, 400)

  });



  /*----------- Behaviour functions -----------*/


  function swipeProject(direction) {
    if (animationOnGoing || projectOpened)
      return;

    animationOnGoing = true;
    $(projects).css('z-index', '-1');

    if (direction == 'right') {
      $(projects[currentProject]).animate({
        'left': '-=50%'
      }, 2000, function() {
        leftProject = currentProject;
        currentProject = rightProject;
        rightProject = calcNext(currentProject);

        swipeEnded();
      });

      $(projects[rightProject]).css('z-index', '0').animate({
        'left': '-=100%'
      }, 2000);
    } else {
      $(projects[currentProject]).animate({
        'left': '+=50%'
      }, 2000, function() {
        rightProject = currentProject;
        currentProject = leftProject;
        leftProject = calcPrevious(currentProject);

        swipeEnded();
      });

      $(projects[leftProject]).css('z-index', '0').animate({
        'left': '+=100%'
      }, 2000);
    }
  }

  function swipeEnded() {
    $('.project-title').show();
    $('.project-title').hide();
    $(projects[currentProject])
      .find('.project-title')
      .fadeIn();

    $(projects[rightProject]).css('left', '+100%');
    $(projects[leftProject]).css('left', '-100%');
    animationOnGoing = false;
  }

  function openProject(name) {
    if (projectOpened || animationOnGoing) return;

    projectOpened = true;
    animationOnGoing = true;
    $('.project-hero').hide();
    $(projects[currentProject])
      .find('.project-title')
      .addClass('active');

    $(projects[currentProject])
      .show()
      .addClass('opened')
      .animate({
        'width': '-=12%',
        'height': '-=120px',
        'margin-top': '+96px',
        'margin-left': '+=6%'
      }, 1200, function() {
        $(this)
          .find('.project-title')
          .addClass('position-top');
        $('html, body').css('overflow', 'visible');
        $('.top-link').css('color', '#333');
        $('.top-link.left').fadeIn();
        $('section.project.' + name).fadeIn();
        animationOnGoing = false;
      });
  }

  function closeProject() {
    if (!projectOpened || animationOnGoing) return;

    animationOnGoing = true;

    $('section.project').fadeOut();
    $(projects[currentProject])
      .find('.project-title')
      .fadeOut();

    $(projects[currentProject])
      .delay(400)
      .animate({
        'width': '100%',
        'height': '100%',
        'margin': '0'
      }, 1200, function() {
        $(this)
          .removeClass('opened')
          .find('.project-title')
          .removeClass('active position-top')
          .fadeIn();

        $('.top-link').css('color', 'white');
        $('.top-link.left').fadeOut();

        resetContainersSize();
        $('.project-hero').show();

        animationOnGoing = false;
        projectOpened = false;

        window.history.replaceState('home', 'Sara Colombo', '/')
      })
    $('html, body').css('overflow', 'hidden');
  }

  function resetContainersSize() {
    $('.project-title').css('top', '45%');

    $(projects).css({
      'width': '100vw',
      'height': '100vh',
      'margin-top': '0',
      'margin-left': '0'
    });
    $(projects[currentProject]).css('left', '0');
    $(projects[leftProject]).css('left', '-100%');
    $(projects[rightProject]).css('left', '+100%');
  }

  function manageUrlParams() {
    let p = getUrlParam('p');
    if (p) {
      let projectFoud = false;
      $(projects).each(function(i, item) {
        let projectName = $(item).find('h1.project-title').attr('data-open');
        if (projectName == p) {
          projectFoud = true;
          currentProject = i;
          leftProject = calcPrevious(currentProject);
          rightProject = calcNext(currentProject);
          $(projects[currentProject]).css('left', '0');
          $(projects[rightProject]).css('left', '+100%');
          $(projects[leftProject]).css('left', '-100%');
          $(projects).show();
          openProject(projectName);
        }
      });

      if (!projectFoud) {
        $(projects).show();
      }
    } else {
      $(projects).show();
    }

  }


  function callback() {
    intervalTime = 7000;
    swipeProject('right');
    interval = setTimeout(callback, intervalTime);
  }


  function smoothScrolling(e) {
    let w = $(window);
    let delta = e.originalEvent.wheelDelta / 120 || -e.originalEvent.detail / 3;
    let sroll = w.scrollTop() - parseInt(delta * 300);
    TweenMax.to(w, 1.2, {
      scrollTo: {
        y: sroll,
        autoKill: !0
      },
      ease: Expo.easeOut,
      autoKill: !0,
      overwrite: 5
    });
  }

  /*----------- Utility functions -----------*/


  function getUrlParam(field, url) {
    var href = url ? url : window.location.href;
    var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
    var string = reg.exec(href);
    return string ? string[1] : null;
  };

  function calcNext(i) {
    if (i == projects.length - 1)
      return 0;
    else
      return i + 1;
  }

  function calcPrevious(i) {
    if (i == 0)
      return projects.length - 1;
    else
      return i - 1;
  }

  // function preloadImages() {
  //     let images = [
  //       '../images/sperduta_main.jpg',
  //       '../images/roots_main.jpg',
  //       '../images/firefighters_main.jpg',
  //       '../images/black_main.jpg',
  //       '../images/uppercut_main.jpg',
  //     ]
  //     for (let e = 0; e < images.length; e++)
  //         $('<img />').attr('src', images[e])
  // }
});
