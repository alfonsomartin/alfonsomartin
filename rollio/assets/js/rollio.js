$(document).ready(function()
{
    $("#imgAnimate").hover(
        function()
        {
            $(this).attr("src", "assets/images/rollio-move.gif");
        },
        function()
        {
            $(this).attr("src", "assets/images/rollio-move.png");
        });
});
