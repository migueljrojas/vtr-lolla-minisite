'use strict';

var VtrPlaystage = function() {
    var imagesContainer = $('.vtr-playstage__images')
    var imagesUrl = [
        "https://picsum.photos/1200/1300?image=1",
        "https://picsum.photos/1200/1300?image=2",
        "https://picsum.photos/1200/1300?image=3",
        "https://picsum.photos/1200/1300?image=4",
        "https://picsum.photos/1200/1300?image=5",
        "https://picsum.photos/1200/1300?image=6",
        "https://picsum.photos/1200/1300?image=7",
        "https://picsum.photos/1200/1300?image=8",
        "https://picsum.photos/1200/1300?image=9",
        "https://picsum.photos/1200/1300?image=0",
        "https://picsum.photos/1200/1300?image=2",
        "https://picsum.photos/1200/1300?image=3",
        "https://picsum.photos/1200/1300?image=4",
        "https://picsum.photos/1200/1300?image=5",
        "https://picsum.photos/1200/1300?image=6",
        "https://picsum.photos/1200/1300?image=7",
        "https://picsum.photos/1200/1300?image=8",
        "https://picsum.photos/1200/1300?image=9",
        "https://picsum.photos/1200/1300?image=0",
        "https://picsum.photos/1200/1300?image=2",
        "https://picsum.photos/1200/1300?image=3",
        "https://picsum.photos/1200/1300?image=4",
        "https://picsum.photos/1200/1300?image=5",
        "https://picsum.photos/1200/1300?image=6",
        "https://picsum.photos/1200/1300?image=7",
        "https://picsum.photos/1200/1300?image=8",
        "https://picsum.photos/1200/1300?image=9",
        "https://picsum.photos/1200/1300?image=0",
        "https://picsum.photos/1200/1300?image=2",
        "https://picsum.photos/1200/1300?image=3",
        "https://picsum.photos/1200/1300?image=4",
        "https://picsum.photos/1200/1300?image=5",
        "https://picsum.photos/1200/1300?image=6",
        "https://picsum.photos/1200/1300?image=7",
        "https://picsum.photos/1200/1300?image=8",
        "https://picsum.photos/1200/1300?image=9",
        "https://picsum.photos/1200/1300?image=0",
        "https://picsum.photos/1200/1300?image=2",
        "https://picsum.photos/1200/1300?image=3",
        "https://picsum.photos/1200/1300?image=4",
        "https://picsum.photos/1200/1300?image=5",
        "https://picsum.photos/1200/1300?image=6",
        "https://picsum.photos/1200/1300?image=7",
        "https://picsum.photos/1200/1300?image=8",
        "https://picsum.photos/1200/1300?image=9",
        "https://picsum.photos/1200/1300?image=0",
        "https://picsum.photos/1200/1300?image=2",
        "https://picsum.photos/1200/1300?image=3",
        "https://picsum.photos/1200/1300?image=4",
        "https://picsum.photos/1200/1300?image=5",
        "https://picsum.photos/1200/1300?image=6",
        "https://picsum.photos/1200/1300?image=7",
        "https://picsum.photos/1200/1300?image=8",
        "https://picsum.photos/1200/1300?image=9",
        "https://picsum.photos/1200/1300?image=0",
        "https://picsum.photos/1200/1300?image=2",
        "https://picsum.photos/1200/1300?image=3",
        "https://picsum.photos/1200/1300?image=4",
        "https://picsum.photos/1200/1300?image=5",
        "https://picsum.photos/1200/1300?image=6",
        "https://picsum.photos/1200/1300?image=7",
        "https://picsum.photos/1200/1300?image=8",
        "https://picsum.photos/1200/1300?image=9",
        "https://picsum.photos/1200/1300?image=0",
        "https://picsum.photos/1200/1300?image=2",
        "https://picsum.photos/1200/1300?image=3",
        "https://picsum.photos/1200/1300?image=4",
        "https://picsum.photos/1200/1300?image=5",
        "https://picsum.photos/1200/1300?image=6",
        "https://picsum.photos/1200/1300?image=7",
        "https://picsum.photos/1200/1300?image=8",
        "https://picsum.photos/1200/1300?image=9",
        "https://picsum.photos/1200/1300?image=0",
        "https://picsum.photos/1200/1300?image=2",
        "https://picsum.photos/1200/1300?image=3",
        "https://picsum.photos/1200/1300?image=4",
        "https://picsum.photos/1200/1300?image=5",
        "https://picsum.photos/1200/1300?image=6",
        "https://picsum.photos/1200/1300?image=7",
        "https://picsum.photos/1200/1300?image=8",
        "https://picsum.photos/1200/1300?image=9",
        "https://picsum.photos/1200/1300?image=0",
        "https://picsum.photos/1200/1300?image=2",
        "https://picsum.photos/1200/1300?image=3",
        "https://picsum.photos/1200/1300?image=4",
        "https://picsum.photos/1200/1300?image=5",
        "https://picsum.photos/1200/1300?image=6",
        "https://picsum.photos/1200/1300?image=7",
        "https://picsum.photos/1200/1300?image=8",
        "https://picsum.photos/1200/1300?image=9",
        "https://picsum.photos/1200/1300?image=0",
        "https://picsum.photos/1200/1300?image=2",
        "https://picsum.photos/1200/1300?image=3",
        "https://picsum.photos/1200/1300?image=4",
        "https://picsum.photos/1200/1300?image=5",
        "https://picsum.photos/1200/1300?image=6",
        "https://picsum.photos/1200/1300?image=7",
        "https://picsum.photos/1200/1300?image=8",
        "https://picsum.photos/1200/1300?image=9",
        "https://picsum.photos/1200/1300?image=1"
    ];
    var imageSizes = [
        "sm",
        "md",
        "lg",
        "xl"
    ];


    var htmlStructure = imagesUrl.map(function(image, index) {
        var animationDelay = (Math.floor(Math.random() * 100) / 100);
        var imageSize = imageSizes[Math.floor(Math.random() * imageSizes.length)];

        return $('<div data-wow-delay="' + animationDelay + 's" class="vtr-playstage__images__image-container image-size-' + imageSize + ' wow fadeInUpBig animated" style="visibility: visible; animation-delay: ' + animationDelay + 's; animation-name: fadeInUpBig"><img src="' + image + '"></div>')
    });

    imagesContainer.html(htmlStructure);

    console.log(htmlStructure);
}

module.exports = VtrPlaystage;
