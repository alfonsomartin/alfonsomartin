// pretty scrolling
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});

//---------------------------

$(document).ready(function() {
$('.pic1desc').hide();
$('.pic2desc').hide();
$('.pic3desc').hide();
$('.pic4desc').hide();
$('.pic5desc').hide();



$('#picture1').mouseenter(function() {
  $('.pic1desc').show();
  $('.picdesc').hide();
}).mouseleave(function(){
  $('.pic1desc').hide(); 
  $('.picdesc').show();   
});


$('#picture2').mouseenter(function() {
  $('.pic2desc').show();
  $('.picdesc').hide();
}).mouseleave(function(){
  $('.pic2desc').hide();  
  $('.picdesc').show();   
});

$('#picture3').mouseenter(function() {
  $('.pic3desc').show();
  $('.picdesc').hide();
}).mouseleave(function(){
  $('.pic3desc').hide();
  $('.picdesc').show();     
});

$('#picture4').mouseenter(function() {
  $('.pic4desc').show();
  $('.picdesc').hide();
}).mouseleave(function(){
  $('.pic4desc').hide();
  $('.picdesc').show();     
});

$('#picture5').mouseenter(function() {
  $('.pic5desc').show();
  $('.picdesc').hide();
}).mouseleave(function(){
  $('.pic5desc').hide(); 
  $('.picdesc').show();    
});



});

// ---------------------------------------------------------

var nextSlide = 1;
showSlides(nextSlide);

function plusSlides(m) {
  showSlides(nextSlide += m);
}

function currentSlide(m) {
  showSlides(nextSlide = m);
}

function showSlides(m) {
  var j;
  var slides = document.getElementsByClassName("mySlides2");
  var dots = document.getElementsByClassName("dot");
  if (m > slides.length) {nextSlide = 1} 
  if (m < 1) {nextSlide = slides.length}
  for (j = 0; j < slides.length; j++) {
      slides[j].style.display = "none"; 
  }
  for (j = 0; j < dots.length; j++) {
      dots[j].className = dots[j].className.replace(" active", "");
  }
  slides[nextSlide-1].style.display = "block"; 
  dots[nextSlide-1].className += " active";
}







