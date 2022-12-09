(function($) {
    "use strict";
    var cycling = {
        initialised: false,
        version: 1.0,
        mobile: false,
        init: function() {
            if (!this.initialised) {
                this.initialised = true;
            } else {
                return;
            }
            this.Store();
        },
        //Slider
        Store: function() {
            $('.cy_store_slider .owl-carousel').owlCarousel({
                loop: true,
                margin: 30,
                nav: true,
                dots: false,
                navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>' ],
                autoplaySpeed: 1500,
                autoplay: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    800: {
                        items: 2
                    },
                    1000: {
                        items: 3
                    }
                }
            })
        }
    };
    $(document).ready(function() {
        cycling.init();
    });
})(jQuery);