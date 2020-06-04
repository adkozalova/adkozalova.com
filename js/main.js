! function (e) {
    "use strict";

    $(window).on('scroll', function () {
        var $scTop = $(window).scrollTop();
        var $opcn = 1 - $scTop / 700;
        $(".hero_warp").css("opacity", $opcn);
        if ($opcn < 0) {
            $(".hero_warp").addClass('hide');
        } else {
            $(".hero_warp").removeClass('hide');
        }
        if ($scTop < 120) {
            $('.go_to_top').hide(300);
        } else {
            $('.go_to_top').show(300);
        }
    });

    /*===========Portfolio isotope js===========*/
    function portfolio() {
        var $grid = $('.portfolio_single_wrap');
        if ($grid.length > 0) {
            $grid.imagesLoaded(function () {
                $grid.isotope({
                    itemSelector: '.portfolio_single_item',
                    percentPosition: true,
                    layoutMode: 'masonry',
                    masonry: {
                        // use outer width of grid-sizer for columnWidth
                        columnWidth: 1
                    }
                });
            });
        }
    }
    portfolio();

    var scrolled = false;
    $(window).on('scroll', function() {
        if (!scrolled) {
            scrolled = true;
            new WOW().init();
        }
    });

    function tiltJsParallUx() {
        var windowWidth = $(window).width();
        if (windowWidth > 991) {
            $('.tilt').UniversalTilt({
                max: 35,
                perspective: 1500,
                mobile: false,
            });
        }
    }
    tiltJsParallUx();


}(jQuery);
