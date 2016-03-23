(function (window) {
    'use strict';

    function qS(selector) { return document.querySelector(selector); };

    // Carousel
    var carouselOptions = {
        "pagination": false,
        "arrows": true,
        "limitPerPage": 3,
    };

    var carousel = new ch.Carousel(qS('.suggestion-list'), carouselOptions);

    tiny.on('a[href="#"]', 'click', function(e) {
        e.preventDefault();
    });

}(this));
