$(function () {

    $(".header__slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        prevArrow: '<button type="button" class="slider-arrows slider-arrows__left"><img src="img/arrows-left.svg"></button>',
        nextArrow: '<button type="button" class="slider-arrows slider-arrows__right"><img src="img/arrows-right.svg"></button>',
        asNavFor: '.slider-dotshead'
    });

    $(".slider-dotshead").slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header__slider',
        responsive: [
            {
                breakpoint: 961,
                settings: "unslick"
            },
        ]

    });

    $(".surf-slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slider-arrows slider-arrows__left"><img src="img/arrows-left.svg"></button>',
        nextArrow: '<button type="button" class="slider-arrows slider-arrows__right"><img src="img/arrows-right.svg"></button>',
        asNavFor: ".slider-map",
        responsive: [
            {
                breakpoint: 1212,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 901,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                }
            },
            {
                breakpoint: 427,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                }
            },
        ]
    });

    $(".slider-map").slick({
        slidesToShow: 8,
        slidesToScroll: 8,
        arrows: false,
        asNavFor: ".surf-slider",
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1103,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 901,
                settings: {
                    slidesToShow: 2,
                    centerMode: true,
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                }
            },
            {
                breakpoint: 402,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                }
            },
        ]
    });

    $(".holder__slider, .shop__slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        prevArrow: '<button type="button" class="slider-arrows slider-arrows__left"><img src="img/arrows-left.svg"></button>',
        nextArrow: '<button type="button" class="slider-arrows slider-arrows__right"><img src="img/arrows-right.svg"></button>',

    });

    $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="img/minus.svg" alt=""></div></div>').insertAfter('.quantity input');
    $('.quantity').each(function () {
        var spinner = $(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.quantity-up'),
            btnDown = spinner.find('.quantity-down'),
            min = input.attr('min'),
            max = input.attr('max');

        btnUp.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

    });

    $(".quantity-button").on("click", function () {
        let sum = $(".nights").val() * $(".sum").data("nights") + ($(".guests").val() - 1) * $(".sum").data("guests");
        $(".sum").html("$" + sum);
    });

    let sum = $(".nights").val() * $(".sum").data("nights") + ($(".guests").val() - 1) * $(".sum").data("guests");
    $(".sum").html("$" + sum);

    $(".surfboard__circle").on("click", function () {
        $(this).toggleClass("surfboard__circle--active");
    })

    $(".menu-btn").on("click", function () {
        $(".menu").toggleClass("menu--active");
    })

    new WOW().init();

});