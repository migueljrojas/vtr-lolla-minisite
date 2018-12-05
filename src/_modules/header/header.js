'use strict';

// Constructor
var Header = function() {
    var header = $('.header');
    var body = $('body');
    var menuOpen = $('.header__hamburguer');
    var menuClose = $('.header__nav__close');
    var colors = [
        "#a8125a",
        "#e72a53",
        "#00a48f",
        "#0080b6",
        "#87cdd7",
        "#f28d18",
        "#f9ea5e"
    ];

    var hrefs = [
        "/vtr-shuffle",
        "/adivina-banda",
        "/line-up",
        "/vtr-playstage",
        "/azotea-vtr",
        "/catalogo",
        "/serie"
    ];

    
    function setHtmlColor() {
        var currentHref = window.location.href;
        var index = hrefs.indexOf(currentHref);
        $('html').css('background', colors[index]);
        body.removeClass('-fade');
    }

    setHtmlColor();

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
        var $this = $(this);
        var link = $this.attr('href');
        var index = columns.index($this);

        if (link !== '#') {
            columns.removeClass('-animate');
            $this.addClass('-animate');
            $('html').css('background', colors[index]);
            body.css('opacity', 0);
        }

        setTimeout(function(){
            window.location.href = link;
        }, 300);
    })

//  Line-up page table fuctionality

    var day = $('[data-target]');
    var dayInformation = $('[data-tab]');

    day.on('click', function(event) {
        var $this = $(this);
        var dayIndex = $this.data('target');

        day.removeClass('line-up__day--active');
        dayInformation.removeClass('line-up__table__col--active');
        $this.addClass('line-up__day--active');

        dayInformation.filter(function(){
            return $(this).data('tab') === dayIndex;
        }).addClass('line-up__table__col--active');        
    });

    if ($('.home').length > 0) {
        particlesJS.load('app1', 'scripts/particles.json');
        particlesJS.load('app2', 'scripts/particles.json');
        particlesJS.load('app3', 'scripts/particles.json');
        particlesJS.load('app4', 'scripts/particles.json');
        particlesJS.load('app5', 'scripts/particles.json');
        particlesJS.load('app6', 'scripts/particles.json');
        particlesJS.load('app7', 'scripts/particles.json');
    }
};

module.exports = Header;
