'use strict';

// Constructor
var VtrShuffle = function() {
    var context = $('.vtr-shuffle');
    

    if (context.length > 0) {
        var slides = $('.vtr-shuffle__slide');
        var slideIndexes = $('.vtr-shuffle__index-genre');
        var nextSlide = $('.vtr-shuffle__index-controls ._next');
        var prevSlide = $('.vtr-shuffle__index-controls ._prev');
        var modal = $('.vtr-shuffle__modal');
        var iframe = $('.vtr-shuffle__modal__video iframe');
        
        function isActive(element) {
            return element.className.includes('-active');
        }

        function getCurrentSlideIndex() {
            var slidesArray = $.makeArray(slides);
            return slidesArray.findIndex(isActive);
        }

        nextSlide.on('click', function() {            
            var currentSlideIndex = getCurrentSlideIndex();
            setActiveSlide(currentSlideIndex, 'next');
        });

        prevSlide.on('click', function() {
            var currentSlideIndex = getCurrentSlideIndex();
            setActiveSlide(currentSlideIndex, 'prev');
        });

        function setActiveSlide(index, dir) {
            var limit = slides.length - 1;
            var newIndex;

            if (dir === 'prev') {
                newIndex = index > 0 ? index - 1 : limit;
            } else {
                newIndex = index < limit ? index + 1 : 0;
            }

            slides.removeClass('-active');
            slideIndexes.removeClass('-active');

            $(slides.get(newIndex)).addClass('-active');
            $(slideIndexes.get(newIndex)).addClass('-active');
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
            iframe.attr('src', 'https://www.youtube.com/embed/' + videoID + '?rel=0&autoplay=1&controls=0&showinfo=0');
            
            modal.addClass('-open');
            $('body').addClass('-hideOverflow');

        }

        function closeModal() {
            iframe.attr('src', '');

            modal.removeClass('-open');
            $('body').removeClass('-hideOverflow');
        }
    }
};

module.exports = VtrShuffle;