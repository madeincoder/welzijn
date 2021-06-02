/*
    Theme Name: Protfolio - Creative HTML5 Portfolio Template
    Author: ElectronThemes
    Author URI: http://electronthemes.com
    Version: 1.0.0
*/
/**---------------------------------------*/
/**           Table Of contents          **/
/**---------------------------------------*/
/**
    1. function declearetion
    2. Initialization
 **/

$(window).load(function () {
    $('#preloader').fadeOut()
    $('.preloader-spinner').fadeOut(400)
    $('body').removeClass('preload-site')
})

//
$(document).ready(function () {
    'use strict'
    $('body').addClass('preload-site')

    // Mobile Menu
    $('#nav').slicknav({
        label: '',
        duration: 700,
        prependTo: '.mobile-menu',
        closeOnClick: true,
    })

    ////
    $('.menu-bars').on('click', function () {
        $('.slicknav_nav').slideToggle()
    })
    ///// ////// //////
    $('.bar-icon').on('click', function () {
        $(this).toggleClass('active-bar')
        $('.slicknav_nav').slideToggle()
    })

    // Sticky Menu
    $(window).scroll(function () {
        if ($(window).scrollTop() > 40) {
            $('.header-area').addClass('sticky-nav')
        } else {
            $('.header-area').removeClass('sticky-nav')
        }
    })

    // wow js
    new WOW().init()

    ////
    $('body').fitVids()

    // HOME PAGE SLIDER 02
    $('.featured-slider').owlCarousel({
        loop:true,
        stagePadding: 50,
        autoWidth:true,
        items: 15,
        autoplay: true,
        smartSpeed: 500,
        margin: 10,
        nav: false,
        navText: [
            '<span class="arrow_left"></span>',
            '<span class="arrow_right"></span>',
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
            },
            575: {
                items: 4,
            },
            767: {
                items: 6,
            },
            1000: {
                items: 8,
            },
        },
    })
    // HOME PAGE SLIDER 02
    $('.news-slider').owlCarousel({
        items: 3,
        autoplay: false,
        smartSpeed: 500,
        margin: 30,
        nav: true,
        navText: [
            '<span class="arrow_left"></span>',
            '<span class="arrow_right"></span>',
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            575: {
                items: 1,
            },
            767: {
                items: 2,
            },
            1000: {
                items: 3,
            },
        },
    })

    // HOME PAGE SLIDER 03
    $('.review-slider').owlCarousel({
        items: 2,
        autoplay: false,
        smartSpeed: 500,
        margin: 20,
        nav: true,
        navText: [
            '<span class="arrow_left"></span>',
            '<span class="arrow_right"></span>',
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            575: {
                items: 1,
            },
            767: {
                items: 2,
            },
            1000: {
                items: 2,
            },
        },
    })

    // LineProgressbar
    $('#progressbar1').LineProgressbar()

    ///////////////// SMOOTH SCROLLING ///////////////

    var sections = $('.section-scroll'),
        nav = $('.center-menu'),
        header = $('.header-area').outerHeight()

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop()
        sections.each(function () {
            var top = $(this).offset().top - header,
                bottom = top + $(this).outerHeight() - header
            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active')
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass(
                    'active'
                )
            }
        })
    })

    // Smooth scroll
    $(
        '.center-menu a[href*="#"], .scrolling_to [href*="#"], .hero-content a[href*="#"]'
    )
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            if (
                location.pathname.replace(/^\//, '') ==
                this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash)
                target = target.length
                    ? target
                    : $('[name=' + this.hash.slice(1) + ']')
                if (target.length) {
                    event.preventDefault()
                    $('html, body').animate(
                        {
                            scrollTop: target.offset().top - 66,
                        },
                        1000
                    )
                }
            }
        });


    /////  ////// 
    if ($(".homepage-header").length) {
        $(".homepage-header").vegas({
            overlay: true,
            transition: 'fade',
            transitionDuration: 4000,
            delay: 10000,
            animation: 'random',
            animationDuration: 20000,
            slides: [{
                src: 'https://images.unsplash.com/photo-1559626739-d46402feff29?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            },
            {
                src: 'https://images.unsplash.com/photo-1462826303086-329426d1aef5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
            },
            {
                src: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1225&q=80'
            },
            {
                src: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            },
            {
                src: 'https://images.unsplash.com/photo-1556559322-b5071efadc88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80'
            }
            ]
        });
    }


    //////youtube background///////
    if ($(".video-background").length) {
        $('.video-background').YTPlayer({
            showControls: false
        });
    }

})
///// tab sec /////
$('.nav-tab-list li').on('click', function(){
    var eq = $(this).index()
    $(this).toggleClass('active').siblings().removeClass('active')
    $('.tab-list-content .tab-pane').eq(eq).fadeIn().addClass('active show').siblings().hide().removeClass('active show')
})


(function ($) {
    /*===========================
    1. function declearetion
    ===========================*/
    var themeApp = {
        
        themeSwitch: function() {
            var checkbox = $('#switch_theme');
			var html = $('html');
            checkbox.on('change', function() {
                if( checkbox.prop('checked')) {
                    html.attr('data-theme', 'light');
                    localStorage.setItem('selected-theme', 'light');
                }
                else {
                    html.attr('data-theme', 'dark');
                    localStorage.setItem('selected-theme', 'dark');
                }
            });
        },

        watermarkLetter: function() {
            var posts = document.querySelectorAll('.post');
            var watermark = document.getElementsByClassName('watermark');
            if (watermark.length > 0) {
                for (i = 0; i < posts.length; i++) {
                    var title = posts[i].getElementsByClassName('post-title')[0];
                    posts[i].getElementsByClassName('watermark')[0].innerHTML = title.firstChild.innerHTML[0];
                }
            }
        },

        responsiveIframe: function () {
            $('.post-single').fitVids();
        },

        highlighter: function () {
            $('pre code').each(function (i, block) {
                hljs.highlightBlock(block);
            });
        },

        mobileMenu: function () {
            var body = $('body');
            var icon = $('.menu-icon');
            $('.js-menu-open').on('click', function () {
                body.toggleClass('js-mobile-menu-opened');
                icon.toggleClass('menu-icon-x');
            });
            $('.js-backdrop').on('click', function () {
                body.toggleClass('js-mobile-menu-opened');
                icon.toggleClass('menu-icon-x');
            });
        },

        SearchProcess: function () {
            var list = [];
            $('.js-search-button').on('click', function (e) {
                e.preventDefault();
                if (list.length == 0 && typeof searchApi !== undefined) {
                    $.get(searchApi)
                        .done(function (data) {
                            list = data.posts;
                            search();
                        })
                        .fail(function (err) {
                        });
                }
                $('.js-search-popup').addClass('visible');
                $('.js-search-input').css('visibility', 'visible').focus();
            });
            $('.close-button').on('click', function (e) {
                e.preventDefault();
                $('.search-popup').removeClass('visible');
                $('#search-input').val("");
                $("#search-results").empty();
            });
            function search() {
                if (list.length > 0) {
                    var options = {
                        shouldSort: true,
                        tokenize: true,
                        matchAllTokens: true,
                        threshold: 0,
                        location: 0,
                        distance: 100,
                        maxPatternLength: 32,
                        minMatchCharLength: 1,
                        keys: [{
                            name: 'title'
                        }, {
                            name: 'plaintext'
                        }]
                    }
                    fuse = new Fuse(list, options);
                    $('#search-input').on("keyup", function () {
                        keyWord = this.value;
                        var result = fuse.search(keyWord);
                        var output = '';
                        var language = $('html').attr('lang');
                        $.each(result, function (key, val) {
                            var pubDate = new Date(val.published_at).toLocaleDateString(language, {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric'
                            })
                            output += '<div id="' + val.id + '" class="result-item">';
                            output += '<a href="' + val.url + '"><div class="title">' + val.title + '</div>';
                            output += '<div class="date">' + pubDate + '</div></a>';
                            output += '</div>';
                        });
                        $("#search-results").html(output);
                    });
                }
            }
        },

        copyLink: function() {
            new ClipboardJS('.js-copy-link')
            .on('success', function(e) {
                var btn = $(e.trigger);
                btn.addClass('tooltip-visible');
                btn.on('mouseleave', function() {
                    $(this).removeClass('tooltip-visible');
                })
            });
        },

        gallery: function () {
            var images = document.querySelectorAll('.kg-gallery-image img');
            images.forEach(function (image) {
                var container = image.closest('.kg-gallery-image');
                var width = image.attributes.width.value;
                var height = image.attributes.height.value;
                var ratio = width / height;
                container.style.flex = ratio + ' 1 0%';
            });
            mediumZoom('.kg-gallery-image img', {
                margin: 30
            });
        },

        loadMore: function () {
            var nextPageUrl = $('link[rel=next]').attr('href');
            var loadMoreButton = $('.js-load-more');
            var endMessage = $('.js-end-message');
            if( typeof(nextPageUrl) != 'undefined') {
                loadMoreButton.on('click', function (e) {
                    e.preventDefault();
                    var url = nextPageUrl.split(/page/)[0] + 'page/' + nextPage + '/';
                    $.ajax({
                        url: url,
                        beforeSend: function () {
                            loadMoreButton.addClass('loading');
                        }
                    }).done(function (data) {
                        loadMoreButton.blur();
                        var posts = $(data).find('.post');
                        loadMoreButton.removeClass('loading');
                        $('.post-list').append(posts);
                        $(window).scroll();
                        nextPage++;
                        themeApp.watermarkLetter();
                        if (nextPage > totalPages) {
                            loadMoreButton.addClass('d-none');
                            endMessage.removeClass('d-none');
                        }
                    });
                });
            } else {
                endMessage.removeClass('d-none');
            }
        },

        commentLazyLoad: function() {
            if( 'undefined' !== typeof disqus_shortname && 'undefined' !== typeof disqus_options) {
                $.disqusLoader( '#disqusloader', disqus_options );
            }
        },

        init: function () {
            themeApp.themeSwitch();
            themeApp.watermarkLetter();
            themeApp.responsiveIframe();
            themeApp.highlighter();
            themeApp.mobileMenu();
            themeApp.SearchProcess();
            themeApp.copyLink();
            themeApp.gallery();
            themeApp.loadMore();
            themeApp.commentLazyLoad();
        }
    }
    /*===========================
    2. Initialization
    ===========================*/
    $(document).ready(function () {
        themeApp.init();
    });
}(jQuery));