'use strict';
function mobileCheck(){
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

const ui = () => {
    // popup event
    const popEvent = () => {
        const body = $('body');
        const dim = '<dim class="dim"></dim>';
        const popCloseBtn = $('.pop-close');
        const popOpenBtn = $('.pop-open');
        const videoEembed = $('.video-wrap iframe');
        popCloseBtn.on('click', (e) => {
            const targetPop = $(e.currentTarget).parent('.layer-popup');
            const targetVideo = targetPop.find('.video-wrap iframe');
            targetPop.hide();
            body.find('.dim').remove();
            targetVideo.attr('src', '')
            videoEembed.attr('src', '')
        });
        popOpenBtn.on('click', (e) => {
            const targetPopup = e.currentTarget.dataset.open;
            $(`#${targetPopup}`).show();
            body.prepend(dim);
            
            $('.dim').on('click', function () {
                $(`#${targetPopup}`).hide();
                body.find('.dim').remove();
                videoEembed.attr('src', '')
                $(`#${targetPopup}`).find('.video-wrap iframe').attr('src', '')
            })
        });
    }

    // swiper
    const swiperEvent = () => {
         new Swiper(".basic", {
            spaceBetween: 10,
            slidesPerView: 1,
            autoHeight: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
             pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable :true
            },
            
            
        });
        new Swiper('.video', {
            spaceBetween: 10,
            slidesPerView: 1.5,
            autoHeight: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
           
            breakpoints: {
                600: {
                    slidesPerView: 2,
                    spaceBetween: 10
                },
                900: {
                    slidesPerView: 3,
                    spaceBetween: 10
                }
            }
        })
        const thumSwiper = new Swiper('.thum', {
            spaceBetween: 8,
            slidesPerView: 1.5,
            freeMode: true,
            autoHeight: true,
            watchSlidesProgress: true,
            breakpoints: {
                600: {
                    slidesPerView: 2.5,
                    spaceBetween: 10
                },
                900: {
                    slidesPerView: 3.5,
                    spaceBetween: 10
                }
            }
        });
        const mainSwiper = new Swiper('.main', {
            spaceBetween: 10,
            autoHeight: true,
            thumbs: {
                swiper: thumSwiper,
            },
             navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
        const targetSwiper = $('.thum .swiper-slide');
        mainSwiper.on('transitionEnd', function () {
            let swiperIdx = mainSwiper.realIndex;
            targetSwiper.eq(swiperIdx).addClass('on');
            targetSwiper.eq(swiperIdx).siblings().removeClass('on');
        });
       
    };

    // gnb menu
    const gnbmenuHandler = () => {
        const gnbBtn = $('.gnb-btn');
        const gnbList = $('.global-nav-mo ul');
        const navList = $('.nav-list');
        const closeGnb = $('.gnb-close');
        gnbBtn.on('click', function () {
            if (gnbList.css('display') === 'none') {
                navList.addClass('active');
            }
        });
        closeGnb.on('click', function () {
            navList.removeClass('active')
        })
    };

    // header bar
    const headerHandler = () => {
        $(window).scroll(function () {
            const headerBar = $('.header-bar');
            const headerBarH = headerBar.height() + 50;
            const scrollY = $(window).scrollTop();
            if (scrollY >= headerBarH) {
                headerBar.addClass('fixed');
            } else {
                headerBar.removeClass('fixed');
            }
        })
    };

    // site map
    const sitemapHandler = () => {
        const siteMapBtn = $('.site-map');
        const siteMapLi = $('.site-map-list');
        siteMapBtn.on('click', function(){
            $(this).parent().toggleClass('active')
        })
    }
    // video play
    const videoPlay = () => {
        const videoWrap = $('.video-wrap');
        const videoLi = $('.function-list ul li');
        const videoLink = videoLi.find('a');
        let videoIframe = videoWrap.find('iframe');
        videoLink.on('click', function () {
            console.log()
            let linkData = $(this).data('link');
            videoIframe.attr('src', linkData);
            
        });
    };
    
    videoPlay();
    sitemapHandler();
    popEvent();
    swiperEvent();
    gnbmenuHandler();
    headerHandler();
}
ui();
