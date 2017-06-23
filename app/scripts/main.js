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



  /*----------- Inits -----------*/

  var parallax = document.querySelectorAll(".parallax"),
    speed = 0.2;

  function parallaxEffect() {
    [].slice.call(parallax).forEach(function(el, i) {

      var windowYOffset = window.pageYOffset,
        elBackgrounPos = "50% " + (windowYOffset * speed) + "px";

      el.style.backgroundPosition = elBackgrounPos;

    });
  }


  manageUrlParams();

  // $('.project-title span').hide();
  // $(projects[currentProject])
  //   .find('.project-title .first-line')
  //   .show()
  //   .addClass('animated slideInDown');


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
  });

  $(window).on('wheel', function(e) {
    let deltaY = e.originalEvent.deltaY;
    let deltaX = e.originalEvent.deltaX;

    parallaxEffect();

    if (
      deltaY > 1 || deltaY < -1 ||
      deltaX > 1 || deltaX < -1
    ) return;

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
      $(projects[currentProject]).show().animate({
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
    $('.project-title span').hide();
    $(projects[currentProject])
      .find('.project-title .first-line')
      .fadeIn()
    $(projects[currentProject])
      .find('.project-title .second-line')
      .fadeIn()

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
      .show()
      .css('position', 'relative')
      .animate({
        'width': '-=12%',
        'height': '-=120px',
        'margin-top': '+=84px',
        'margin-left': '+=6%'
      }, 1200, function() {
        $('.project-title')
          .addClass('active')
          .animate({
            'top': '-66px'
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
    $('.project-hero').show();
    $('.project-title')
      .fadeOut()
      .animate({
        'top': '40%'
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
        animationOnGoing = false;
        projectOpened = false;


        resetContainersSize();

        window.history.replaceState('home', 'Sara Colombo', '/')
      })
    $('html, body').css('overflow', 'hidden');
  }

  function resetContainersSize() {
    $(projects).css({
      'width': '100%',
      'height': '100%',
      'margin-top': '0',
      'margin-left': '0'
    });
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

});
