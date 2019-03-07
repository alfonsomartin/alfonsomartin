var imgArray = [];
var theHeight = 350;
var theWidth = 350;

$(document).ready(function(e) {
    $("img.draggable").each(function(index, element) {

        var tLeft = Math.floor(Math.random()*theWidth);
        var tTop  = Math.floor(Math.random()*theHeight);

            $(element).css({position:'absolute', left: tLeft, top: tTop});
            $(element).draggable();     

    });
});  


$( ".draggable" ).draggable({ containment: "#containment-wrapper", scroll: false })

var colors = ['#d4d97e', '#ae529f', '#f28e29', '#539a9f', '#f6b2c1', '#c0b5d4'];
var random_color = colors[Math.floor(Math.random() * colors.length)];
document.getElementById('con-2').style.backgroundColor = random_color;
