(function($) {

	"use strict";


    // Header Nav
     jQuery('#main-nav').stellarNav({
        theme: 'light',
        breakpoint: 991,
        openingSpeed: 200,
        closingDelay: 50,
        position: 'center',
        sticky: false,
        menuLabel: ''
    });


    // Pogo Slider
    if($('#pogo-slider').length > 0){
            $('#pogo-slider').pogoSlider({
            autoplay: true,
            autoplayTimeout: 4500,
            displayProgess: false,
            targetWidth: 1920,
            generateButtons: false,
            targetHeight: 1800,
            responsive: true,
            pauseOnHover: false,
        }).data('plugin_pogoSlider');
    }

    // Pogo Slider Two
    if($('#pogo-slider-2').length > 0){
            $('#pogo-slider-2').pogoSlider({
            autoplay: true,
            autoplayTimeout: 4500,
            displayProgess: false,
            targetWidth: 1920,
            generateButtons: false,
            targetHeight: 1500,
            responsive: true,
            pauseOnHover: false,
        }).data('plugin_pogoSlider');
    }


    // Lightbox
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
      'disableScrolling': true,
    })



    // YouTubePopUp
     jQuery("a.videopopup").YouTubePopUp();





    // Mouse hover layer parallax
    document.addEventListener("mousemove", parallax);
    function parallax(e) {
      this.querySelectorAll('.layer').forEach(layer => {
        const speed = layer.getAttribute('data-speed');
        
        const x = (window.innerWidth - e.pageX * speed)/100;
        const y = (window.innerHeight - e.pageY * speed)/100;
        
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
      })
    }



   

    // product-carousel
    if($('.product-slider').length){
        $('.product-slider').owlCarousel({
            rtl: true,
            loop: true,
            margin: 30,
            dots: false,
            nav: true,
            autoplayHoverPause: false,
            autoplay: true,
            autoplayTimeout: 3500,
            smartSpeed: 1500,
            center: false,
            navText: [
              '<i class="ti-angle-right"></i>',
              '<i class="ti-angle-left"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items:2,
                    center: false
                },
                575: {
                    items: 2,
                    center: false
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 3
                },
                1441: {
                    items: 3
                }
            }
        })
    }


    // features-slider
    if($('.features-slider').length){
        $('.features-slider').owlCarousel({
            rtl: true,
            loop: true,
            margin: 0,
            dots: true,
            nav: false,
            autoplayHoverPause: false,
            autoplay: true,
            autoplayTimeout: 3500,
            smartSpeed: 1500,
            center: false,
            navText: [
              '<i class="ti-angle-right"></i>',
              '<i class="ti-angle-left"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items: 1,
                    center: false
                },
                575: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        })
    }

    // Testimonial-slider
    if($('.testimonial-slider').length){
        $('.testimonial-slider').owlCarousel({
            rtl: true,
            loop: true,
            margin: 0,
            dots: true,
            nav: false,
            autoplayHoverPause: false,
            autoplay: false,
            autoplayTimeout: 3500,
            smartSpeed: 1500,
            center: false,
            navText: [
              '<i class="ti-angle-right"></i>',
              '<i class="ti-angle-left"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items: 1,
                    center: false
                },
                575: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        })
    }

    // related-products-slider
    if($('.related-products-slider').length){
        $('.related-products-slider').owlCarousel({
            rtl: true,
            loop: true,
            margin: 30,
            dots: false,
            nav: true,
            autoplayHoverPause: false,
            autoplay: true,
            autoplayTimeout: 3500,
            smartSpeed: 1500,
            center: false,
            navText: [
              '<i class="ti-angle-left"></i>',
              '<i class="ti-angle-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items: 2,
                    center: false
                },
                575: {
                    items: 2,
                    center: false
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 3
                }
            }
        })
    }



    // TouchSpin
    $("input[name='demo_vertical']").TouchSpin({
      verticalbuttons: true
    });


    // Background Image Call Script
    if ($('.background-image').length > 0) {
        $('.background-image').each(function () {
            var src = $(this).attr('data-src');
            $(this).css({
                'background-image': 'url(' + src + ')'
            });
        });
    }


    // Parallax background
    $('.jarallax').jarallax({
        speed: 0.5
    });



    // Back To Top
    if ($('#back-to-top').length) {
        var scrollTrigger = 100, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('show');
                } else {
                    $('#back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('#back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 1000);
        });
    }

})(window.jQuery);

