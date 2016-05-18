(function(ScrollMagic, $) {
    'use strict';

    console.log("Scrooller");
    let controller = new ScrollMagic.Controller();
    let landingHeaderScene = new ScrollMagic.Scene({
            triggerElement: "#about"
        })
        .setClassToggle(".welcome-text", "fade-out")
        .addTo(controller);

    $('#stylish-nav li').on('click', (e) => {
        e.preventDefault();
        let attr = $(e.target).data('scroll-to'),
            target = $('#' + attr);
        $('html, body')
            .stop()
            .animate({
                scrollTop: target.offset().top
            }, 1000);
    });

    let leaderCtrl = new ScrollMagic.Controller();
    let cardAnimTrigger = new ScrollMagic.Scene({
            triggerElement: "#leadership"
        })
        .setClassToggle('#leadership .card', 'cards-animate')
        .addTo(leaderCtrl);

    let quote = {};
    $.get({
        url: 'http://quotes.rest/bible/vod.json',
        success: (data) => {
            quote.verse = data.contents.verse;
            quote.author = data.contents.book;
            quote.chapter = data.contents.chapter;
            quote.number = data.contents.number;
            let quotePara = document.querySelectorAll('#quote p'),
                quotecite = document.querySelectorAll('#quote cite');
            quotePara[0].innerHTML = quote.verse;
            quotecite[0].innerHTML = quote.author + " " +  quote.chapter + " : " + quote.number; 
        }
    });
})(ScrollMagic, jQuery);
