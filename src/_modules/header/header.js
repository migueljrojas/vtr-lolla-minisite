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

    var columns = $('.home__col');

    columns.on('click', function(e) {
        e.preventDefault();

        setTimeout(function(){
            window.location.href = '/catalogo';
        }, 3000);
    })

};

module.exports = Header;
