var imgArray = [];
var theHeight = $(window).height() - 75;
var theWidth = $(window).width() - 75;

$(document).ready(function(e) {
    $("img.draggable").each(function(index, element) {

        var tLeft = Math.floor(Math.random()*theWidth);
        var tTop  = Math.floor(Math.random()*theHeight);

            $(element).css({position:'absolute', left: tLeft, top: tTop});
            $(element).draggable();     

    });
});  


$( ".draggable" ).draggable({ containment: "#containment-wrapper", scroll: false })
