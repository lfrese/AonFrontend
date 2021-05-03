$( document ).ready(function() {   
var curl = document.URL;
if (curl.indexOf('de-de')){
  $('h1,h2,h3,h4,h5').addClass('hyphen');
} else {
  $('h1,h2,h3,h4,h5').removeClass('hyphen');
}
addServiceBoxes();
dataSubject();  
});


var lang_url = ["en-au","pt-br","da-dk","fr-fr","fi-fi","de-de","en-in","it-it","nl-nl","no-no","pl-pl","pt-pt","sk-sk","es-es","sv-se","tr-tr","de-ch","en-uk","en-us","en-ae"]; 
var loc_name = ["Australia","Brazil","Denmark","France","Finland","Germany","India","Italy","Netherlands","Norway","Poland","Portugal","Slovakia","Spain","Sweden","Switzerland","Turkey","UK","USA","UAE"];
var url_full = window.location.origin + window.location.pathname;  
var url_domain = window.location.origin;
var domain_length = url_domain.length;
var lang_curr = url_full.substring(domain_length+1, domain_length+6);
var lang_index = lang_url.indexOf(lang_curr);
var loc_curr = loc_name[lang_index];

function sortLocations(){
$("."+loc_curr).prependTo("#officeList");  
$("."+loc_curr +" a").attr("aria-expanded","true"); 
$("."+loc_curr +" a").removeClass("collapsed"); 
$("."+loc_curr +" div").attr("aria-expanded","true");   
$("."+loc_curr +" div").addClass("in");  
$("."+loc_curr +" span").removeClass("plus");  
$("."+loc_curr +" span").addClass("minus");    
}

function displayRef(){
  $(".logo-slider div").each(function(){
  var $this = $(this);       
  var class_curr = $this.attr("class");   
  var slider = $('#client-slider').data('flexslider');  
  if(class_curr.length > 5 && class_curr.indexOf(lang_curr)<=-1){
    //$this.remove(); Work but leave empty space
    slider.removeSlide($this);
  }  
  });
}  

function displayRefV2(){
  $(".reference-slider .slides .item").each(function(){
  var $this = $(this);
  var class_curr = $this.attr("class");
  var slider = $('.reference-slider').data('flexslider');  
  if(class_curr.length > 5 && class_curr.indexOf(lang_curr)<=-1){
    slider.removeSlide($this);
  }  
  });
} 

function addServiceBoxes(){
  $('.service-boxes > a').first().remove();  
  $('.service-boxes').append($('.service-boxes-content').html());

}

function dataSubject(){
  var dataURL = 'https://www.aonunited.com/DSR/?s=assessment&u=';
  var url_full_encode = btoa(url_full);  
  $('#dsr').prop('href',dataURL+url_full_encode);
}