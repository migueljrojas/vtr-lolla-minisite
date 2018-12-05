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

    particlesJS.load('app1', 'images/particles.json');
    particlesJS.load('app2', 'images/particles.json');
    particlesJS.load('app3', 'images/particles.json');
    particlesJS.load('app4', 'images/particles.json');
    particlesJS.load('app5', 'images/particles.json');
    particlesJS.load('app6', 'images/particles.json');
    particlesJS.load('app7', 'images/particles.json');
};

module.exports = Header;
