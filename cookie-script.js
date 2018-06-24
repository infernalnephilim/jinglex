'use strict';


$(document).ready(function () {
    $(document.body).prepend("<div id=\"cookieInfo\" class=\"fixed-bottom cookie-info\">\n" +
        "    <div class=\"container\">\n" +
        "        <div class=\"row\">\n" +
        "            <div class=\"col-md-12 col-lg-8 text-center text-lg-right\">\n" +
        "                <p>\n" +
        "                    Niniejsza witryna używa plików cookie. Kontynuując jej przeglądanie, wyrażasz zgodę na używanie\n" +
        "                    przez\n" +
        "                    nas tych plików.\n" +
        "                </p>\n" +
        "            </div>\n" +
        "            <div class=\"col-md-12 col-lg-4 text-center text-lg-left\">\n" +
        "                <a href=\"http://wszystkoociasteczkach.pl\" target=\"_blank\">\n" +
        "                    <div class=\"btn my-btn\">Dowiedz się więcej</div>\n" +
        "                </a>\n" +
        "                <div id=\"close-cookies\" class=\"btn my-btn\">Zamknij</div>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "</div>");

   if ($.cookie('showCookieInfo') != 'yes') {
        $("#cookieInfo").show("drop", {
            direction: 'down'
        }, "ease", 300);
        $("#close-cookies").click(function () {
           $("#cookieInfo").hide("drop", {
               direction: 'down'
           }, "ease", 500);
       });
    }
    $.cookie('showCookieInfo', 'yes', {path: '/', expires: 365});

});
