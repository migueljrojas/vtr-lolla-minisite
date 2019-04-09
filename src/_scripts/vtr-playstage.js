'use strict';

var VtrPlaystage = function() {
    var context = $('#vtr-playstage');

    if (context.length > 0) {
        var imagesContainer = $('.vtr-playstage__images')
        // var imagesUrl = [
        //     "https://picsum.photos/1200/1300?image=1",
        //     "https://picsum.photos/1200/1300?image=2",
        //     "https://picsum.photos/1200/1300?image=3",
        //     "https://picsum.photos/1200/1300?image=4",
        //     "https://picsum.photos/1200/1300?image=5",
        //     "https://picsum.photos/1200/1300?image=6",
        //     "https://picsum.photos/1200/1300?image=7",
        //     "https://picsum.photos/1200/1300?image=8",
        //     "https://picsum.photos/1200/1300?image=9",
        //     "https://picsum.photos/1200/1300?image=0",
        //     "https://picsum.photos/1200/1300?image=2",
        //     "https://picsum.photos/1200/1300?image=3",
        //     "https://picsum.photos/1200/1300?image=4",
        //     "https://picsum.photos/1200/1300?image=5",
        //     "https://picsum.photos/1200/1300?image=6",
        //     "https://picsum.photos/1200/1300?image=7",
        //     "https://picsum.photos/1200/1300?image=8",
        //     "https://picsum.photos/1200/1300?image=9",
        //     "https://picsum.photos/1200/1300?image=0",
        //     "https://picsum.photos/1200/1300?image=2",
        //     "https://picsum.photos/1200/1300?image=3",
        //     "https://picsum.photos/1200/1300?image=4",
        //     "https://picsum.photos/1200/1300?image=5",
        //     "https://picsum.photos/1200/1300?image=6",
        //     "https://picsum.photos/1200/1300?image=7",
        //     "https://picsum.photos/1200/1300?image=8",
        //     "https://picsum.photos/1200/1300?image=9",
        //     "https://picsum.photos/1200/1300?image=0",
        //     "https://picsum.photos/1200/1300?image=2",
        //     "https://picsum.photos/1200/1300?image=3",
        //     "https://picsum.photos/1200/1300?image=4",
        //     "https://picsum.photos/1200/1300?image=5",
        //     "https://picsum.photos/1200/1300?image=6",
        //     "https://picsum.photos/1200/1300?image=7",
        //     "https://picsum.photos/1200/1300?image=8",
        //     "https://picsum.photos/1200/1300?image=9",
        //     "https://picsum.photos/1200/1300?image=0",
        //     "https://picsum.photos/1200/1300?image=2",
        //     "https://picsum.photos/1200/1300?image=3",
        //     "https://picsum.photos/1200/1300?image=4",
        //     "https://picsum.photos/1200/1300?image=5",
        //     "https://picsum.photos/1200/1300?image=6",
        //     "https://picsum.photos/1200/1300?image=7",
        //     "https://picsum.photos/1200/1300?image=8",
        //     "https://picsum.photos/1200/1300?image=9",
        //     "https://picsum.photos/1200/1300?image=0",
        //     "https://picsum.photos/1200/1300?image=2",
        //     "https://picsum.photos/1200/1300?image=3",
        //     "https://picsum.photos/1200/1300?image=4",
        //     "https://picsum.photos/1200/1300?image=5",
        //     "https://picsum.photos/1200/1300?image=6",
        //     "https://picsum.photos/1200/1300?image=7",
        //     "https://picsum.photos/1200/1300?image=8",
        //     "https://picsum.photos/1200/1300?image=9",
        //     "https://picsum.photos/1200/1300?image=0",
        //     "https://picsum.photos/1200/1300?image=2",
        //     "https://picsum.photos/1200/1300?image=3",
        //     "https://picsum.photos/1200/1300?image=4",
        //     "https://picsum.photos/1200/1300?image=5",
        //     "https://picsum.photos/1200/1300?image=6",
        //     "https://picsum.photos/1200/1300?image=7",
        //     "https://picsum.photos/1200/1300?image=8",
        //     "https://picsum.photos/1200/1300?image=9",
        //     "https://picsum.photos/1200/1300?image=0",
        //     "https://picsum.photos/1200/1300?image=2",
        //     "https://picsum.photos/1200/1300?image=3",
        //     "https://picsum.photos/1200/1300?image=4",
        //     "https://picsum.photos/1200/1300?image=5",
        //     "https://picsum.photos/1200/1300?image=6",
        //     "https://picsum.photos/1200/1300?image=7",
        //     "https://picsum.photos/1200/1300?image=8",
        //     "https://picsum.photos/1200/1300?image=9",
        //     "https://picsum.photos/1200/1300?image=0",
        //     "https://picsum.photos/1200/1300?image=2",
        //     "https://picsum.photos/1200/1300?image=3",
        //     "https://picsum.photos/1200/1300?image=4",
        //     "https://picsum.photos/1200/1300?image=5",
        //     "https://picsum.photos/1200/1300?image=6",
        //     "https://picsum.photos/1200/1300?image=7",
        //     "https://picsum.photos/1200/1300?image=8",
        //     "https://picsum.photos/1200/1300?image=9",
        //     "https://picsum.photos/1200/1300?image=0",
        //     "https://picsum.photos/1200/1300?image=2",
        //     "https://picsum.photos/1200/1300?image=3",
        //     "https://picsum.photos/1200/1300?image=4",
        //     "https://picsum.photos/1200/1300?image=5",
        //     "https://picsum.photos/1200/1300?image=6",
        //     "https://picsum.photos/1200/1300?image=7",
        //     "https://picsum.photos/1200/1300?image=8",
        //     "https://picsum.photos/1200/1300?image=9",
        //     "https://picsum.photos/1200/1300?image=0",
        //     "https://picsum.photos/1200/1300?image=2",
        //     "https://picsum.photos/1200/1300?image=3",
        //     "https://picsum.photos/1200/1300?image=4",
        //     "https://picsum.photos/1200/1300?image=5",
        //     "https://picsum.photos/1200/1300?image=6",
        //     "https://picsum.photos/1200/1300?image=7",
        //     "https://picsum.photos/1200/1300?image=8",
        //     "https://picsum.photos/1200/1300?image=9",
        //     "https://picsum.photos/1200/1300?image=1"
        // ];
        var imageSizes = [
            "sm",
            "md",
            "lg",
            "xl"
        ];
    
        

        $.when(
            getImagesFromDatabase()
        ).done(function(data) {
            var imagesInDatabase = JSON.parse(data);

            var htmlStructure = imagesInDatabase.map(function(image, index) {
                var animationDelay = (Math.floor(Math.random() * 100) / 100);
                var imageSize = imageSizes[Math.floor(Math.random() * imageSizes.length)];
        
                return $('<div data-wow-delay="' + animationDelay + 's" class="vtr-playstage__images__image-container image-size-' + imageSize + ' wow fadeInUpBig"><img src="' + image[0] + '"/></div>')
            });

            imagesContainer.html(htmlStructure);
            new WOW().init();
        });

        function getImagesFromDatabase() {
            console.log('Loading from database');

            return new Promise(function(resolve, reject) {
                resolve(
                    $.get('./load-images-front.php', function (data, status) {
                        return data;
                    })
                );
            });
        }

        // var htmlStructure = imagesUrl.map(function(image, index) {
        //     var animationDelay = (Math.floor(Math.random() * 100) / 100);
        //     var imageSize = imageSizes[Math.floor(Math.random() * imageSizes.length)];
    
        //     return $('<div data-wow-delay="' + animationDelay + 's" class="vtr-playstage__images__image-container image-size-' + imageSize + ' wow fadeInUpBig"><img src="' + image + '"/></div>')
        // });
    
        // imagesContainer.html(htmlStructure);
        // new WOW().init();
    
        //console.log(htmlStructure);
    }
}

module.exports = VtrPlaystage;
