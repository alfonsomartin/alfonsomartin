// pretty scrolling
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});

$(document).on("scroll", function() {

	if($(document).scrollTop()>300) {
		$(".home").removeClass("large").addClass("small");
	} else {
		$(".home").removeClass("small").addClass("large");
	}
	
});

// $(document).on("scroll", function() {

// 	if($(document).scrollTop()>600) {
// 		$(".link.about").removeProperty("color:ffffff").addProperty("color:#D4D97E");
// 	}
	
// });