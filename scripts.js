$(document).ready(function () {
    $('#move-up').click(function () {
        $('#movable-image').css('top', (parseInt($('#movable-image').css('top')) - 30) + 'px');
    });
    $('#move-down').click(function () {
        $('#movable-image').css('top', (parseInt($('#movable-image').css('top')) + 30) + 'px');
    });
    $('#move-left').click(function () {
        $('#movable-image').css('left', (parseInt($('#movable-image').css('left')) - 30) + 'px');
    });
    $('#move-right').click(function () {
        $('#movable-image').css('left', (parseInt($('#movable-image').css('left')) + 30) + 'px');
    });
});
$(document).ready(function () {

    $(".answer").click(function () {
        var isCorrect = $(this).data("correct");
        if (isCorrect) {
            $("#result").text("Correct!");
        } else {
            $("#result").text("Try again!");
        }
    });
});
$(document).ready(function () {
    $(window).scroll(function () {
        var scrollPosition = $(window).scrollTop();
        var windowHeight = $(window).height();
        var sectionOffset = $("#scroll-activated-image").offset().top;

        if (scrollPosition > sectionOffset - windowHeight) {

            $("#moving-image").css("top", "200px");
        } else {

            $("#moving-image").css("top", "0");
        }
    });
});
$(document).ready(function () {
    $("#left-path").click(function () {
        $(".story").html("<p>You go left and It leads you to a dark cave.</p><button id='explore-cave'>Continue</button>");
    });

    $("#right-path").click(function () {
        $(".story").html("<p>You go right. You come across a beutiful lake.</p><button id='explore-forest'>Continue</button>");
    });

    $(document).on("click", "#explore-cave", function () {
        $(".story").html("<p>You enter the cave and get attacked by a bear!</p>");
    });

    $(document).on("click", "#explore-forest", function () {
        $(".story").html("<p>You explore the lake and find a bag full of gold.</p>");
    });
});
