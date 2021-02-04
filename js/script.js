document.addEventListener('DOMContentLoaded', () => {
    //мобильное меню

    const mobBtn = document.getElementById('mob-btn');
    const mobNav = document.getElementById('header-nav');

    const menuOpen = () => {
        mobBtn.classList.toggle('mob__btn_active');
        mobNav.classList.toggle('show-menu');
    }

    mobBtn.addEventListener('click', menuOpen);


    const navItems = document.querySelector('.header-nav__items');
    const navItem = document.querySelectorAll('.header-nav__item a');
    const anchor = document.querySelector('.header-bottom__btn');

    //активация пунктов меню хедера

    const activator = (elem, activeClassName) => (e) => {
        elem.forEach(item => {
            if (item.classList.contains(activeClassName)) {
                item.classList.remove(activeClassName);
            }
        })
        e.target.classList.add(activeClassName);
    }

    // плавный скролл

    const scroller = (e) => {
        e.preventDefault();
        const blockID = e.target.getAttribute('href').substr(1);

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })

    }

    navItems.addEventListener('click', activator(navItem, 'active'));
    navItems.addEventListener('click', scroller);
    anchor.addEventListener('click', scroller);

    //смена активности кнопок хедера

    const btn1 = document.querySelector('.header__btn-one'),
        btn2 = document.querySelector('.header__btn-two');

    btn2.addEventListener('mouseenter', function() {
        this.classList.remove('secondary-btn');
        this.classList.add('primary-btn');
        btn1.classList.remove('primary-btn');
        btn1.classList.add('secondary-btn');
    });

    btn2.addEventListener('mouseout', function() {
        btn1.classList.remove('secondary-btn');
        btn1.classList.add('primary-btn');
        this.classList.remove('primary-btn');
        this.classList.add('secondary-btn');
    });
    // ComplitedProjects TopSlider 

    $('.complProjects-topSlider').slick({
        slidesToShow: 3,
        asNavFor: '.complProjects - mainSlider '
    });

    // complProjects-innerSlider

    $('.complProjects-innerSlider').slick({
        slidesToShow: 1.2,
        slidesToScroll: 1.2,
        infinite: false
    });

    // complProjects-mainSlider

    $('.complProjects-mainSlider').slick({
        prevArrow: '<img class="mainSlider-arrows mainSlider-arrowLeft" src="img/icons/arrow-left.svg">',
        nextArrow: '<img class="mainSlider-arrows mainSlider-arrowRight" src="img/icons/arrow-right.svg">',
        dots: true,
        dotsClass: 'mainSlider-dots',
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        asNavFor: '.complProjects-topSlider'
    });

    //repair styles scripts

    const links = document.querySelector('.repair-styles__items');
    const link = document.querySelectorAll('.repair-styles__item div');
    const rsImg_1 = document.getElementById('RS-img__1');
    const rsImg_2 = document.getElementById('RS-img__2');
    const rsImg_3 = document.getElementById('RS-img__3');
    const rsImg_4 = document.getElementById('RS-img__4');

    const changeImg = (e) => {

        link.forEach(item => {
                console.log(item);
                if (item.classList.contains('active-style')) {
                    item.classList.remove('active-style');
                }

                e.target.classList.add('active-style');

                if (item.classList.contains('active-style')) {
                    let id = item.getAttribute('id');

                    switch (id) {
                        case 'rsi-0':
                            {
                                rsImg_1.setAttribute('src', 'img/RT_img1.jpg');
                                rsImg_2.setAttribute('src', 'img/RT_img2.jpg');
                                rsImg_3.setAttribute('src', 'img/RT_img3.jpg');
                                rsImg_4.setAttribute('src', 'img/RT_img4.jpg');
                            }
                            break;
                        case 'rsi-1':
                            {
                                rsImg_1.setAttribute('src', 'img/RT_img5.jpg');
                                rsImg_2.setAttribute('src', 'img/RT_img6.jpg');
                                rsImg_3.setAttribute('src', 'img/RT_img7.jpg');
                                rsImg_4.setAttribute('src', 'img/RT_img8.jpg');
                            }
                            break;
                        case 'rsi-2':
                        case 'rsi-1':
                            {
                                rsImg_1.setAttribute('src', 'img/RT_img1.jpg');
                                rsImg_2.setAttribute('src', 'img/RT_img2.jpg');
                                rsImg_3.setAttribute('src', 'img/RT_img3.jpg');
                                rsImg_4.setAttribute('src', 'img/RT_img4.jpg');
                            }
                            break;
                        case 'rsi-3':
                        case 'rsi-1':
                            {
                                rsImg_1.setAttribute('src', 'img/RT_img5.jpg');
                                rsImg_2.setAttribute('src', 'img/RT_img6.jpg');
                                rsImg_3.setAttribute('src', 'img/RT_img7.jpg');
                                rsImg_4.setAttribute('src', 'img/RT_img8.jpg');
                            }
                            break;
                        case 'rsi-4':
                        case 'rsi-1':
                            {
                                rsImg_1.setAttribute('src', 'img/RT_img1.jpg');
                                rsImg_2.setAttribute('src', 'img/RT_img2.jpg');
                                rsImg_3.setAttribute('src', 'img/RT_img3.jpg');
                                rsImg_4.setAttribute('src', 'img/RT_img4.jpg');
                            }
                            break;
                        case 'rsi-5':
                        case 'rsi-1':
                            {
                                rsImg_1.setAttribute('src', 'img/RT_img5.jpg');
                                rsImg_2.setAttribute('src', 'img/RT_img6.jpg');
                                rsImg_3.setAttribute('src', 'img/RT_img7.jpg');
                                rsImg_4.setAttribute('src', 'img/RT_img8.jpg');
                            }
                            break;
                        case 'rsi-6':
                        case 'rsi-1':
                            {
                                rsImg_1.setAttribute('src', 'img/RT_img1.jpg');
                                rsImg_2.setAttribute('src', 'img/RT_img2.jpg');
                                rsImg_3.setAttribute('src', 'img/RT_img3.jpg');
                                rsImg_4.setAttribute('src', 'img/RT_img4.jpg');
                            }
                            break;
                        case 'rsi-7':
                        case 'rsi-1':
                            {
                                rsImg_1.setAttribute('src', 'img/RT_img5.jpg');
                                rsImg_2.setAttribute('src', 'img/RT_img6.jpg');
                                rsImg_3.setAttribute('src', 'img/RT_img7.jpg');
                                rsImg_4.setAttribute('src', 'img/RT_img8.jpg');
                            }
                            break;
                        case 'rsi-8':
                        case 'rsi-1':
                            {
                                rsImg_1.setAttribute('src', 'img/RT_img1.jpg');
                                rsImg_2.setAttribute('src', 'img/RT_img2.jpg');
                                rsImg_3.setAttribute('src', 'img/RT_img3.jpg');
                                rsImg_4.setAttribute('src', 'img/RT_img4.jpg');
                            }
                            break;
                        case 'rsi-9':
                        case 'rsi-1':
                            {
                                rsImg_1.setAttribute('src', 'img/RT_img5.jpg');
                                rsImg_2.setAttribute('src', 'img/RT_img6.jpg');
                                rsImg_3.setAttribute('src', 'img/RT_img7.jpg');
                                rsImg_4.setAttribute('src', 'img/RT_img8.jpg');
                            }
                            break;
                        case 'rsi-10':
                        case 'rsi-1':
                            {
                                rsImg_1.setAttribute('src', 'img/RT_img1.jpg');
                                rsImg_2.setAttribute('src', 'img/RT_img2.jpg');
                                rsImg_3.setAttribute('src', 'img/RT_img3.jpg');
                                rsImg_4.setAttribute('src', 'img/RT_img4.jpg');
                            }
                            break;
                    } //switch
                } //condition
            }) //forEach
    }

    links.addEventListener('click', changeImg);

    // working main-slider

    const wms = $('.working__mainSlider');
    wms.slick({
        prevArrow: '<img class="working__mainSlider-arrows working__mainSlider-arrowLeft" src="img/icons/arrow-left.svg">',
        nextArrow: '<img class="working__mainSlider-arrows working__mainSlider-arrowRight" src="img/icons/arrow-right.svg">',
        dots: true,
        dotsClass: 'working__mainSlider-dots',
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        speed: 500
    });

    const sliderCounter = document.querySelector('.working__slider-counter');
    const works = document.querySelector('.working__topSlider');
    const work = document.querySelectorAll('.working-topSlider-number');
    const topSlideritems = document.querySelectorAll('.working-topSlider-item');

    wms.on('beforeChange', (e, slick, currentSlide, nextSlide) => {
        total = wms.slick('getSlick').slideCount;
        sliderCounter.textContent = `0${nextSlide + 1}/0${total}`;

        topSlideritems.forEach(item => {
            if (item.classList.contains('working-topSlider-item-active')) {
                item.classList.remove('working-topSlider-item-active');
            }
        });

        work.forEach(item => {
            if (item.dataset.number == nextSlide + 1) {
                item.parentNode.classList.add('working-topSlider-item-active');
            }
        })
    });

    const changeSlide = (e) => {
        let slideToShow = e.target.dataset.number;

        wms.slick('goTo', +slideToShow - 1);
    };

    works.addEventListener('click', changeSlide);

    //активация пуктов меню футера

    const navItemsFooter = document.querySelector('.footer-nav__items');
    const navItemFooter = document.querySelectorAll('.footer-nav__item a');

    navItemsFooter.addEventListener('click', activator(navItemFooter, 'active'));

    //============== модальное окно запроса ======================//

    const modal = document.querySelector('.overlay');
    const headerBtn = document.querySelector('.header-top__btn');
    const footerBtn = document.querySelector('.footer-top__btn');
    const headerBtn1 = document.querySelector('.header__btn-one');
    const headerBtn2 = document.querySelector('.header__btn-two');

    // ========== блокировка прокрутки при открытом модальном окне =============//

    const offScroll = () => {
        let winScrollTop = $(window).scrollTop();
        $(window).bind('scroll', () => {
            $(window).scrollTop(winScrollTop);
        });
    }

    const openModal = (e) => {
        // e.preventDefault();
        modal.style.display = 'block';
        offScroll();
        // document.body.style.overflow = 'hidden';
        document.addEventListener('keyup', closeModal);
    }

    const closeModal = (e) => {
        const target = e.target;
        if (target === modal || e.keyCode === 27) {
            modal.style.display = 'none';
            document.removeEventListener('keyup', closeModal);
            // document.body.style.overflow = '';
            $(window).unbind('scroll');
        }
    }

    headerBtn.addEventListener('click', openModal);
    headerBtn1.addEventListener('click', openModal);
    headerBtn2.addEventListener('click', openModal);
    footerBtn.addEventListener('click', openModal);


    modal.addEventListener('click', closeModal);



});