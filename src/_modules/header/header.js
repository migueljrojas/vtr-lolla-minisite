'use strict';

// Constructor
var Header = function() {
    var header = $('.header');
    var body = $('body');
    var menuOpen = $('.header__hamburguer');
    var menuClose = $('.header__nav__close');

    menuOpen.on('click', function(){
        header.addClass('-open');
        body.addClass('-hideOverflow');
    });

    menuClose.on('click', function(){
        header.removeClass('-open');
        body.removeClass('-hideOverflow');
    });

// Hover in home page
    var columns = $('.home__col');

    columns.on('click', function(e) {
        e.preventDefault();
        var link = $(this).attr('href');
        
        setTimeout(function(){
            window.location.href = link;
        }, 1000);
    })
};

module.exports = Header;
