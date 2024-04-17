$(document).ready(function() {
    $("#up").on("click", function() {
        $(".flower").animate({"top": "-=50"}, "fast");
    });

    $("#down").on("click", function() {
        $(".flower").animate({"top": "+=50"}, "fast");
    });

    $("#right").on("click", function() {
        $(".flower").animate({"left": "+=50"}, "fast");
    });

    $("#left").on("click", function() {
        $(".flower").animate({"left": "-=50"}, "fast");
    });
});
