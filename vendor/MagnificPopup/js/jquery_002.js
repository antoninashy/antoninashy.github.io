(function ($) {
    
    function initPortfolio() {
       $(window).on('load', function () {
            var $container = $('.projects-wrapper');
            // Initialize isotope 
            $container.isotope({
                filter: '*',
                layoutMode: 'masonry',
                animationOptions: {
                    duration: 750,
                    easing: 'linear'
                }
            });
        });
    }

  function initMagnificPopup() {
        $('.mfp-image').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            mainClass: 'mfp-fade',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1]
                    // Will preload 0 - before current, and 1 after the current image 
            },
            image: {
                titleSrc: 'title'
            }
        });

    }

    function init() {
        initPortfolio();
        initMagnificPopup();
    }

    init();

})(jQuery)
