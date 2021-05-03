$( document ).ready(function() {    
 
  navDisplay();
  navExternal(); 
  navEmpty();
  currPage();  
  currYear(); 
  carouselRun();
  sliderRun();
  learnMore();  
  equalHeights();  
  modalAdjust();
  mobileAdjust();   
  carouselNormalization();
  accordionAdjust();  
  scrollup();
  scrollTo();
  //hideEmpty();
  iframeModalOpen();  
  //swipeRun();
  //mobileMenu();
  expandIt();
  filterRun();  
  noEnter();  
});

function navDisplay(){
  $('.navbar .dropdown > a, .navbar .nodropdown > a').click(function(){
      location.href = this.href; 
  });

  "use strict";

  $('.menu > ul > li:has( > ul)').addClass('menu-dropdown-icon');
  $('li.hcMenu a').first().append('<span class="nav-arrow"></span>');  
  $('li.hcMenu a').first().addClass('empty'); 
  $('.menu > ul > li > ul:not(:has(ul))').addClass('normal-sub');
  //$(".menu > ul").before("<a href=\"#\" class=\"menu-mobile\">Navigation</a>");

  /*$(".menu > ul > li").hover(function (e) {
    if ($(window).width() > 991) {
      $(this).children("ul").fadeToggle(150);
      e.preventDefault();
    }
  });
 
  $(".menu > ul > li").click(function () {
    if ($(window).width() <= 991) {
      $(this).children("ul").fadeToggle(150);
    }
  });*/

  $(".menu-mobile, .navbar-toggle").click(function (e) {
    $(".menu > ul").toggleClass('show-on-mobile');
    e.preventDefault();
  });
}

function navExternal(){
  $("li.external > a").attr("target", "new");  
  //$(".external > a").first().attr("target", "new");  
  /*$(".external a" ).append('<span class="nav-arrow"></span>');  */
}

function navEmpty(){
  $(".empty").click(function (e) {
  e.preventDefault();
  });
}

function currPage(){
  $('.js-contact > a').addClass('js-currpage-p');
  var curr_href = $('a.js-currpage-p').attr("href");
  var curr_page = $('.js-currpage').text();
  //$("a.js-currpage-p").attr("href", curr_href + '?p=' + curr_page);
 
  $('a.js-currpage-p').each(function() {
  var $this = $(this);       
  var curr_href = $this.attr("href"); 
  $this.attr('href', curr_href + '?p=' + curr_page);
  }); 
}  

function currYear(){
  var currYear = new Date().getFullYear();
  $("#currentYear").text(currYear);
}

function hideEmpty(){
$this = $(".row"); 
str = $this.text().replace(/\s+/, "") ;
if ($.trim(str)=== "") { 
   $this.remove();
}   
}  

function learnMore(){
  $('.learnMore').click(function(){
  $(this).closest('div').next().slideToggle();
  $(this).closest('p').next().slideToggle(); 
  $(this).find('span').toggleClass('minus');  
  }); 

  $('.learnMore2').click(function(){
  $(this).find('span').toggleClass('minus');  
  $(this).next().find('.expandTxt').toggleClass('inline');    
  //$(this).next().find('.expandTxt').toggle('100');
  });   

  
  $('.expandContainer').click(function(){
  $(this).prev().find('span').toggleClass('minus');  
  $(this).find('.expandTxt').toggleClass('inline');    
  });   
  
  $('.expandContainer, .learnMore, .learnMore2').hover(function(){
  $(this).attr('title','CLICK TO LEARN MORE');    
  });     
}

function carouselNormalization() {
var items = $('#testimonials .item'),
    heights = [],
    tallest; 

if (items.length) {
    function normalizeHeights() {
        items.each(function() { //add heights to array
            heights.push($(this).height()); 
        });
        tallest = Math.max.apply(null, heights); //cache largest value
        items.each(function() {
            $(this).css('min-height',tallest + 'px');
        });
    };
    normalizeHeights();

    $(window).on('resize orientationchange', function () {
        tallest = 0, heights.length = 0; 
        items.each(function() {
            $(this).css('min-height','0'); 
        }); 
        normalizeHeights(); 
    });
}
}

function modalAdjust(){
  $(".modal-wide").on("show.bs.modal", function() {
  var height = $(window).height() - 200;
  $(this).find(".modal-body").css("max-height", height);
  });
}


function accordionAdjust() {   
  $(".accordion-heading").click(function(){
	$(this).find(".plus-minus").toggleClass('plus minus');
  });
}

function carouselRun(){
  if($('.carousel.slide').length){  
  $(".carousel.slide").carousel({
    interval: 10000
  });
  }  

  if($("#carouselHero .carousel-indicators li").length == 1){
    $("#carouselHero .carousel-indicators").hide();
    $("#carouselHero .left.carousel-control").hide();
    $("#carouselHero .right.carousel-control").hide();
  };  
} 

var getGridSize = function() {
  return (window.innerWidth < 480) ? 1 :
         (window.innerWidth < 768) ? 2 :
         (window.innerWidth < 992) ? 3 : 5;
}

var getGridSizeReferenceSlider = function() {
  return (window.innerWidth < 480) ? 1 :
         (window.innerWidth < 992) ? 2 : 3;
}
    
function sliderRun(){
  if($('#client-slider').length){
    $('#client-slider').flexslider({
    selector: ".slides > .item",  
    animation: "slide",
    slideshow: true,
    animationLoop: true,
    controlNav: false,
    directionNav: true,
    itemWidth:172,
    itemMargin: 30,
    minItems: getGridSize(),
    maxItems: getGridSize(),  
      
    prevText: '<img src="/aon.assessment/media/images/ui/icon-slider-prev.png">',
    nextText: '<img src="/aon.assessment/media/images/ui/icon-slider-next.png">' 
    });
  }
  
  if($('#testimonial-slider').length){
    $('#testimonial-slider').flexslider({
    selector: ".slides > .item",
    animation: "slide",
    animationLoop: true,
    directionNav: false,  
    maxItems: 1,
    start: function(slider){
        slider.resize();}
    });
  }   
  if($('#testimonial-slider2').length){
    $('#testimonial-slider2').flexslider({
    selector: ".slides > .item",
    animation: "slide",
    animationLoop: true,
    directionNav: false,  
    maxItems: 1,
    start: function(slider){
        slider.resize();}
    });
  }  
  
  if($('#people-slider').length){
    $('#people-slider').flexslider({
    selector: ".slides > .item",
    animation: "slide",
    animationLoop: true,
    directionNav: false,  
    maxItems: 1,
    start: function(slider){
        slider.resize();}
    });
  }
  
  if($('.reference-slider').length){
    var $window = $(window),
    flexslider = { vars:{} };

    $('.reference-slider').flexslider({
      selector: ".slides > .item",
      animation: "slide",
      slideshow: true,
      animationLoop: true,
      controlNav: true,
      directionNav: true,
      itemWidth: 200,
      itemMargin: 30,
      minItems: getGridSizeReferenceSlider(),
      maxItems: getGridSizeReferenceSlider(),
      pauseOnHover: true,
      prevText: '',
      nextText: '',
      start: function(slider){
        flexslider = slider;
        slider.resize();
      }
    });
    
    // resize flexslider
     $(window).bind('resize', function () {
        setTimeout(function () {
           var slider = $('.reference-slider').data('flexslider');
           slider.resize();
          
          var gridSize = getGridSizeReferenceSlider();
          flexslider.vars.minItems = gridSize;
          flexslider.vars.maxItems = gridSize;
          
          var sliderNavs = document.querySelector(".reference-slider .flex-control-nav");
          var widthReferenceCard = $(".reference-slider > div > div > div:nth-child(1)").width();
          sliderNavs.style.width = widthReferenceCard - 50 + 'px';
          var sliderCountLi = $(".reference-slider .flex-control-nav li");
          for(var i=0; i < $(".reference-slider .flex-control-nav li").length; i++){
            sliderCountLi[i].style.width = (widthReferenceCard - 50) / $(".reference-slider .flex-control-nav li").length + 'px';
          }
          
        }, 1000);
     });
  } 


}

function swipeRun(){
  $(".carousel-inner").swipe({
    swipeLeft:function(event, direction, distance, duration, fingerCount) {
    $(this).parent().carousel('next'); 
    },
    swipeRight: function() {
    $(this).parent().carousel('prev'); 
    },
   
    threshold:50
    });
}  

function scrollup() { 
  $(window).scroll(function(){
  if ($(this).scrollTop() > 250) {
  $('#scrollup').fadeIn(300);
  } else {
  $('#scrollup').fadeOut(300);
  }
  });
 
  //On click scroll to top of page t = 1000ms
  $('#scrollup').click(function(){
  $("html, body").animate({ scrollTop: 0 }, 600);
  return false;
  });
}

function scrollTo() {
  $('.scroll').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 600);
        return false;
      }
    }
  });
}

function iframeModalOpen(){
  $('.modalButton, .modalVideo').on('click', function(e) {
  var src = $(this).attr('data-src');
  var width = $(this).attr('data-width') || 640; 
  var height = $(this).attr('data-height') || 360; 
  var allowfullscreen = $(this).attr('data-video-fullscreen'); 
  $("#video-modal iframe").attr({
    'src': src,
    'height': height,
    'width': width,
    'allowfullscreen':''
  });
  });

  $('#video-modal').on('hidden.bs.modal', function(){
  $(this).find('iframe').html("");
  $(this).find('iframe').attr("src", "");
  });
}

function mobileMenu(){
  $('.search-icon-only').click(function(){
  $('.searchBox').appendTo('#search-box-mobile');  
  $('#search-box-mobile').slideToggle();  
  $('#login-mobile, #language-mobile').hide();     
  });  

  $('.language-icon').click(function(){
  $('.flags').appendTo('#language-mobile');  
  $('#language-mobile ul').removeClass('dropdown-menu');  
  $('#language-mobile').slideToggle();  
  $('#login-mobile, #search-box-mobile').hide();     
  });
  
  $('.login-icon').click(function(){
  $('.login').appendTo('#login-mobile');  
  $('#login-mobile ul').removeClass('dropdown-menu');  
  $('#login-mobile').slideToggle();  
  $('#language-mobile,#search-box-mobile').hide();  
  });  
  
  var winWidth  = 0;
  $(window).resize(function() {
  winWidth = $(window).width();
  //console.log(winWidth);  
  if(winWidth > 991){
    $('.search-icon-only').hide();
    $('#search-box-mobile').hide();
    $('.language-icon').hide();
    $('#language-mobile').hide();
    $('.flags').appendTo('.flags-container');
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

function expandIt(){
  $('.box-ext').hover(function() {
  $(this).find('img').toggleClass('icon-12 icon-01');  
  $(this).find('span').toggleClass('show hide');
  $(this).find('br').toggleClass('hide show');  
  $(this).find('p').toggleClass('h6 h4');    
  })  
} 

function mobileAdjust(){
  $('.article-content img').addClass('img-responsive');
  $('.article-content .no-responsive').removeClass('img-responsive');  
  
  $('.sidebar-header-mobile').click(function(){
    $('#menuElem').toggle();
  });  
}  

function equalHeights(){
  $('.equal').matchHeight(); 
  $('.equal1').matchHeight();   
}  

function filterRun(){
var qsRegex;
var buttonFilter;

/*var $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  layoutMode: 'fitRows',
  filter: function() {
    var $this = $(this);
    var searchResult = qsRegex ? $this.text().match( qsRegex ) : true;
    var buttonResult = buttonFilter ? $this.is( buttonFilter ) : true;
    return searchResult && buttonResult;
  }
});


  
  
$('.filters-button-group').on( 'click', 'span', function() {
  buttonFilter = $( this ).attr('data-filter');
  $grid.isotope();
});

var $quicksearch = $('#quicksearch').keyup( debounce( function() {
  qsRegex = new RegExp( $quicksearch.val(), 'gi' );
  $grid.isotope();
}) );
*/

$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'span', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});
  
function debounce( fn, threshold ) {
  var timeout;
  threshold = threshold || 100;
  return function debounced() {
    clearTimeout( timeout );
    var args = arguments;
    var _this = this;
    function delayed() {
      fn.apply( _this, args );
    }
    timeout = setTimeout( delayed, threshold );
  };
} 
};

//No enter for form
function noEnter(){
  $(window).keydown(function(event){
    if(event.keyCode == 13 ) {
      //accept enter for search
      if($(event.target).hasClass("search-input")) {
        return true;
      }
      event.preventDefault();
      return false;
    }
  });
}