// pretty scrolling
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});

$(document).on("scroll", function() {

	if($(document).scrollTop()>200) {
		$(".home").removeClass("large").addClass("small");
	} else {
		$(".home").removeClass("small").addClass("large");
	}
	
});

 var images = ['alfonso-1.png','alfonso-2.png','alfonso-3.png','alfonso-4.png'];

    $('<img class="disappear" src="assets/images/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('.home');


var $logo = $('.disappear');
$(document).scroll(function() {
    $logo.css({display: $(this).scrollTop() > 200? "none":"block"});
});


// $(document).on("scroll", function() {

// 	if($(document).scrollTop()>200)
// 		$( ".disappear" ).toggle( "slow", function() {
//     // Animation complete.
//   });
// });



// $(document).on("scroll", function() {

// 	if($(document).scrollTop()>600) {
// 		$(".link.about").removeProperty("color:ffffff").addProperty("color:#D4D97E");
// 	}
	
// });

