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

//  Line-up page table fuctionality

    var day = $('.line-up__day');
    var dayInformation = $('.line-up__table__col');

    day.on('click', function(event) {
        var dayIndex = $(this).index();
        var selectColInformation = $(event.target).parent().parent().children().eq(dayIndex + 1);

        if($(this).hasClass('line-up__day--active')) {
            return;
        } else {
            day.removeClass('line-up__day--active');
            dayInformation.removeClass('line-up__table__col--active');
            $(this).addClass('line-up__day--active');
            selectColInformation.addClass('line-up__table__col--active');
        }
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
