$(document).ready(function () {
  checkBrowser();
  navDisplayNew();
  mobileMenuNew();
});

function navDisplayNew() {
  "use strict";

  $(".menu > ul > li").hover(function (e) {
    if ($(window).width() > 1024) {
      $(this).children("ul").fadeToggle(100);
      e.preventDefault();
    }
  });

  $('.menu > ul > li').each(function () {
      var clickBtn = true;
      if ($(window).width() <= 1024) {
          //clickBtn = false;
          if ($(this).hasClass('menu-dropdown-icon')) {
              clickBtn = false;
          }
      }
    $(this).children("a").click(function (e) {
      if (clickBtn == false) {
        e.preventDefault();
      }
      clickBtn = true;
    });
  });

  $(".menu-mobile, .navbar-toggle").click(function (e) {
    $("body").toggleClass('mobile-menu-open');
    $("body,html").toggleClass('no-overflow');
  });

  $(".blackout").on('click', function (e) {
    $(".navbar-collapse").collapse("hide");
    $("body").removeClass('mobile-menu-open');
    $(".menu > ul").removeClass('show-on-mobile');
  });
}

function mobileMenuNew() {

  $('li.menu-dropdown-icon').click(function () {
    if ($(window).width() <= 1024) {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this).find("ul").slideUp();
      } else {
        $(this).parent().children("li").removeClass("active");
        $(this).parent().children("li").find("ul").slideUp();
        $(this).addClass("active").find("ul").slideDown();
      }
    }
  });

  $('.search-icon-only.outside-menu').click(function () {
    if ($(window).width() <= 1024) {
      $('.language-icon').removeClass("active");
      $('.searchBox').appendTo('#search-box-mobile .container');
      $('#search-box-mobile').slideToggle();
      var searchLabel = $('.search-label').text().replace(':','');
      $('.search-input').prop('placeholder',searchLabel);      
      $('ul.show-on-mobile').toggleClass("search-visible");
      $('.search-icon.search-icon-only').toggleClass("active");
      $('#language-mobile').hide();
    }
  });

  $('.search-icon-only.inside-menu').click(function () {
    if ($(window).width() <= 1024) {
      $('.language-icon').removeClass("active");
      $('.searchBox').appendTo('#search-box-mobile-menu');
      $('#search-box-mobile-menu').slideToggle();
      var searchLabel = $('.search-label').text().replace(':','');
      $('.search-input').prop('placeholder',searchLabel);            
      $('ul.show-on-mobile').removeClass("language-visible").toggleClass("search-visible");
      $('.search-icon.search-icon-only').toggleClass("active");
      $('#language-mobile-menu').hide();
    }
  });

  $(".menu-mobile, .navbar-toggle").click(function (e) {
    if ($(window).width() <= 1024) {
      $('.language-icon').removeClass("active");
      $('#search-box-mobile,#language-mobile,#search-box-mobile-menu,#language-mobile-menu').hide();
      $('ul.show-on-mobile').removeClass("language-visible search-visible");
      $('.search-icon.search-icon-only,.language-icon').removeClass("active");
    }
  });

  $('.language-icon.outside-menu').click(function () {
    if ($(window).width() <= 1024) {
      $('.flags').appendTo('#language-mobile');
      $('.search-icon.search-icon-only').removeClass("active");
      $('.language-icon').toggleClass("active");
      $('#language-mobile ul').removeClass('dropdown-menu');
      $('#language-mobile').slideToggle();
      $('#language-mobile-menu, #search-box-mobile').hide();
    }
  });

  $('.language-icon.inside-menu').click(function () {
    if ($(window).width() <= 1024) {
      $('.flags').appendTo('#language-mobile-menu');
      $('.search-icon.search-icon-only').removeClass("active");
      $('#language-mobile-menu').slideToggle("fast");
      $('ul.show-on-mobile').removeClass("search-visible").toggleClass("language-visible");
      $('.language-icon').toggleClass("active");
      $('#language-mobile-menu ul').removeClass('dropdown-menu');
      $('#login-mobile, #search-box-mobile-menu').hide();
    }
  });

  $('.login-icon').click(function () {
    if ($(window).width() <= 1024) {
      $('.login').appendTo('#login-mobile');
      $('#login-mobile ul').removeClass('dropdown-menu');
      $('#login-mobile').slideToggle();
      $('#language-mobile,#search-box-mobile').hide();
    }
  });

  var winWidth = 0;
  $(window).resize(function () {
    winWidth = $(window).width();
    //console.log(winWidth);  
    if (winWidth > 1024) {
      $('.search-icon-only').hide();
      $('#search-box-mobile').hide();
      //$('.language-icon').hide();
      $('#language-mobile').hide();
      $('.flags.divider').appendTo('.flags.xl');
      $('.flags.xl').appendTo('.flags-container');
      $('.flags-container .flags').addClass('dropdown-menu');

      $('.login-icon').hide();
      $('#login-mobile').hide();
      $('.login').appendTo('.login-container');
      $('.login-container .login').addClass('dropdown-menu');

      $('.searchBox').appendTo('#search-box');
      $('#menuElem').show();
    }

  });
}


function checkBrowser() {

  var ua = window.navigator.userAgent;

  if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) // If Internet Explorer, return version number
  {
    $("body").addClass("ios");
  }
  return false;
}