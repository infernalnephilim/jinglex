'use strict';

$(function () {
    $("#navbarNav .nav-item:nth-child(1)").addClass("active");
    // Przewijanie do sekcji
    $('a[href^="#"]').click(function () {

        var the_id = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(the_id).offset().top - $("#nav").height()
        }, 'slow');

        return false;
    });

});
$(document).ready(function () {
    highlightNav();
    $("#navbarNav .nav-item a").on("click", function () {
        $("#navbarNav .nav-item a").removeClass("active");
        $("#navbarNav .nav-item a").removeClass("active-link");
        $(this).addClass("active");
       // $(this).addClass("active-link");
    });
});

$(window).bind('scroll', function () {
    highlightNav();
});

function highlightNav() {
    var top = $(window).scrollTop();
    $("#navbarNav .nav-item *").removeClass("active");

    if (top < $("#o-nas").offset().top - 300) {
        $("#navbarNav .nav-item").removeClass("active");
        $("#navbarNav .nav-item:nth-child(1)").addClass("active");
    } else if (top < $("#portfolio").offset().top - 300) {
        $("#navbarNav .nav-item").removeClass("active");
        $("#navbarNav .nav-item:nth-child(2)").addClass("active");
    } else if (top < $("#cennik").offset().top - 300) {
        $("#navbarNav .nav-item").removeClass("active");
        $("#navbarNav .nav-item:nth-child(3)").addClass("active");
    } else if (top < $("#firma").offset().top - 300) {
        $("#navbarNav .nav-item").removeClass("active");
        $("#navbarNav .nav-item:nth-child(4)").addClass("active");
    } else if (top < $("#kontakt").offset().top - 300) {
        $("#navbarNav .nav-item").removeClass("active");
        $("#navbarNav .nav-item:nth-child(5)").addClass("active");
    } else if (top < $("footer").offset().top - 300) {
        $("#navbarNav .nav-item").removeClass("active");
        $("#navbarNav .nav-item:nth-child(6)").addClass("active");
    }
}