var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = $('.myImg');
var modalImg = $("#img01");
var captionText = document.getElementById("caption");
$('.myImg').click(function(){
    modal.style.display = "block";
    var newSrc = this.src;
    modalImg.attr('src', newSrc);
    captionText.innerHTML = this.alt;
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}




// var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1} 
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none"; 
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block"; 
//   dots[slideIndex-1].className += " active";
// }



var slideIndex = new Array(3);
slideIndex[0]=1;
slideIndex[1]=1;
slideIndex[2]=1;

showSlides(1, 0);  
showSlides(1, 1);
showSlides(1, 2);


function plusSlides(n, slideshownumber) 
{
  slideIndex[slideshownumber] = slideIndex[slideshownumber] + n; 
  showSlides( slideIndex[slideshownumber], slideshownumber );
}

function currentSlide(n, slideshownumber) 
{
  slideIndex[slideshownumber] = n;
  showSlides(slideIndex[slideshownumber], slideshownumber);
}

function showSlides(n, slideshownumber) 
{
  var i;



  var slideshowname = "slider" + slideshownumber;
  var slides = document.getElementsByName(slideshowname);

  var dotname = "dot" + slideshownumber;
  var dots = document.getElementsByName(dotname);

  if (n > slides.length) 
  {
      slideIndex[slideshownumber] = 1;
  }

  if (n < 1) 
  {
      slideIndex[slideshownumber] = slides.length;
  }

  for (i = 0; i < slides.length; i++) 
  {
      slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex[slideshownumber]-1].style.display = "block";
  dots[slideIndex[slideshownumber]-1].className += " active";
} 






