// ENTER SITE
$(document).ready(function(){
    $(".enter").click(function(){
        $(".enter").fadeOut()
    });

});

// PRESS BUTTON MENU POP UP
$(document).ready(function(){
    $(".button").click(function(){
        $(".menu").fadeIn()
    });
});

// PRESS BUTTON MENU GO AWAY
$(document).ready(function(){
    $(".exit").click(function(){
        $(".menu").fadeOut();
    });
});

// PIDGEON GLIDER
$( ".button" ).click(function() {
    $("#pidgeon").animate({left: '+=100', bottom: '+=100'}, 800);
});

$(document).ready(function(){
    $(".exit").click(function(){
        $("#pidgeon").animate({left: '-=100', bottom: '-=100'}, 800);
    });
});

// SPIN FLY
$( ".button" ).click(function() {
    $("#spinfly").animate({left: '+=100', top: '+=100'}, 800);
});

$(document).ready(function(){
    $(".exit").click(function(){
        $("#spinfly").animate({left: '-=100', top: '-=100'}, 800);
    });
});

// ROLLIO
$( ".button" ).click(function() {
    $("#rollio").animate({bottom: '+=100'}, 800);
});

$(document).ready(function(){
    $(".exit").click(function(){
        $("#rollio").animate({bottom: '-=100'}, 800);
    });
});


// ROLLER BEAR
$( ".button" ).click(function() {
    $("#rollerbear").animate({right: '+=100', bottom: '+=100'}, 800);
});

$(document).ready(function(){
    $(".exit").click(function(){
        $("#rollerbear").animate({right: '-=100', bottom: '-=100'}, 800);
    });
});


// CLOUD RIDER
$( ".button" ).click(function() {
    $("#cloudrider").animate({right: '+=100', top: '+=100'}, 800);
});

$(document).ready(function(){
    $(".exit").click(function(){
        $("#cloudrider").animate({right: '-=100', top: '-=100'}, 800);
    });
});

// SMOOTH SCROLL RIGHT
$('a').click(function(){
    $('html, body').animate({
        scrollLeft: $( $(this).attr('href') ).offset().left
    }, 500);
    return false;
});




