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
  let intervalTime = 5000;


  /*----------- Inits -----------*/

  preloadImages();
  manageUrlParams();

  interval = setTimeout(callback, intervalTime);


  $(projects[currentProject])
    .find('.project-title')
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
        'width': '+=20px',
        'height': '+=20px',
        'margin-left': '-=10px',
        'margin-top': '-=10px'
      }, 400)

  });

  $('.top-link.left').click(function() {
    closeProject();
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
      .css('position', 'relative')
      .animate({
        'width': '-=12%',
        'height': '-=120px',
        'margin-top': '+96px',
        'margin-left': '+=6%'
      }, 1200, function() {
        $('.project-title')
          .animate({
            'top': '-72px'
          }, 500);
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
      .fadeOut()
      .animate({
        'top': '45%'
      }, 1200, function() {
        $(this).removeClass('active');
        $(this).fadeIn();
      });
    $(projects[currentProject])
      .delay(400)
      .animate({
        'width': '100%',
        'height': '100%',
        'margin': '0'
      }, 1200, function() {
        $(this).css('position', 'absolute');
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

  function preloadImages() {
      let images = [
        '../images/sperduta_main.jpg',
        '../images/roots_main.jpg',
        '../images/firefighter_main.jpg',
        '../images/black_main.jpg'
      ]
      for (let e = 0; e < images.length; e++)
          $("<img />").attr("src", images[e])
  }

});
