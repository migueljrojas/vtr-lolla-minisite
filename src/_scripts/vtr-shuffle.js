'use strict';

// Constructor
var VtrShuffle = function() {
    var context = $('.vtr-shuffle');
    

    if (context.length > 0) {
        var slides = $('.vtr-shuffle__slide');
        var slideIndexes = $('.vtr-shuffle__index-genre');
        var nextSlide = $('.vtr-shuffle__index-controls ._next');
        var prevSlide = $('.vtr-shuffle__index-controls ._prev');
        var index = $('.vtr-shuffle__index-controls ._index span');
        var modal = $('.vtr-shuffle__modal');
        var iframe = $('.vtr-shuffle__modal__video iframe');
        var nextSlideBottom = $('._bottom-next');
        
        function isActive(element) {
            return element.className.includes('-active');
        }

        function getCurrentSlideIndex() {
            var slidesArray = $.makeArray(slides);
            return slidesArray.findIndex(isActive);
        }

        function updateIndex() {
            var currentSlideIndex = getCurrentSlideIndex();
            index.html(currentSlideIndex + 1);
        }

        nextSlide.on('click', setNextSlide);
        prevSlide.on('click', setPrevSlide);
        nextSlideBottom.on('click', setNextSlide);

        function setNextSlide() {
            var currentSlideIndex = getCurrentSlideIndex();
            var newIndex = calculateNewIndex(currentSlideIndex, 'next');

            setActiveSlide(newIndex);            
        }

        function checkUrl() {
            var url = window.location.hash;

            if (url.length > 0) {         
                slides.filter(function() {
                    return $(this).data('content') === url.replace('#', '');
                }).addClass('-active');

                slideIndexes.filter(function() {
                    return $(this).data('target') === url.replace('#', '');
                }).addClass('-active');
            } else {
                init();
            }

            updateIndex();

            return;
        }

        function setPrevSlide() {
            var currentSlideIndex = getCurrentSlideIndex();
            var newIndex = calculateNewIndex(currentSlideIndex, 'prev');

            setActiveSlide(newIndex);
        }

        function calculateNewIndex(index, dir) {
            var limit = slides.length - 1;
            var newIndex;

            if (dir === 'prev') {
                newIndex = index > 0 ? index - 1 : limit;
            } else {
                newIndex = index < limit ? index + 1 : 0;
            }

            return newIndex;
        }

        function setActiveSlide(index) {            

            slides.removeClass('-active');
            slideIndexes.removeClass('-active');

            $(slides.get(index)).addClass('-active');
            $(slideIndexes.get(index)).addClass('-active');

            updateIndex();
        }

        var scrollableElement = document.getElementsByTagName('body')[0];

        scrollableElement.addEventListener('wheel', findScrollDirectionOtherBrowsers);

        function findScrollDirectionOtherBrowsers(event){
            var delta;

            if (event.wheelDelta){
                delta = event.wheelDelta;
            }else{
                delta = -1 * event.deltaY;
            }

            if (delta <= -35){
                console.log("DOWN", delta);
                setNextSlide();

            }else if (delta >= 35){
                console.log("UP", delta);
                setPrevSlide();
            }
        }

        var modalTriggers = $('[data-modal]');
        modalTriggers.on('click', function() {
            var actionType = $(this).data('modal');

            if (actionType === 'open') {
                var videoID = $(this).data('video');
                openModal(videoID);
            } else {
                closeModal();
            }
        });

        function openModal(videoID) {
            iframe.attr('src', 'https://www.youtube.com/embed/' + videoID);
            
            modal.addClass('-open');
            $('body').addClass('-hideOverflow');
        }

        function closeModal() {
            iframe.attr('src', '');

            modal.removeClass('-open');
            $('body').removeClass('-hideOverflow');
        }

        var targets = $('[data-target]');
        var contents = $('[data-content]');

        function init() {
            targets.first().addClass('-active');
            contents.first().addClass('-active');
        }

        if (targets.length > 0) {
            targets.on('click', function(e) {
                e.preventDefault();
                var $this = $(this);
                var targettedContent = $this.data('target');

                targets.removeClass('-active');
                contents.removeClass('-active');

                $('[data-target="'+ targettedContent +'"]').addClass('-active');
                contents.filter(function() {
                    return $(this).data('content') === targettedContent;
                }).addClass('-active');

                updateIndex();
            });
        }

        checkUrl();
    }
};

module.exports = VtrShuffle;