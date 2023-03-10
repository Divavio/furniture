$(function () {
    $('.header-one__wrapper').slick({
        prevArrow: '<button type="button" class="slick-prev"><svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.478261 5.86955C0.478261 5.65916 0.556552 5.44879 0.712807 5.28839L5.63226 0.240819C5.9452 -0.0802729 6.45258 -0.0802729 6.76539 0.240819C7.0782 0.56178 7.0782 1.08227 6.76539 1.40339L2.41238 5.86955L6.76524 10.3357C7.07805 10.6568 7.07805 11.1773 6.76524 11.4982C6.45243 11.8194 5.94505 11.8194 5.63211 11.4982L0.712655 6.4507C0.556376 6.29022 0.478261 6.07986 0.478261 5.86955Z" fill="#1E2E36"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.478261 5.86955C0.478261 5.65916 0.556552 5.44879 0.712807 5.28839L5.63226 0.240819C5.9452 -0.0802729 6.45258 -0.0802729 6.76539 0.240819C7.0782 0.56178 7.0782 1.08227 6.76539 1.40339L2.41238 5.86955L6.76524 10.3357C7.07805 10.6568 7.07805 11.1773 6.76524 11.4982C6.45243 11.8194 5.94505 11.8194 5.63211 11.4982L0.712655 6.4507C0.556376 6.29022 0.478261 6.07986 0.478261 5.86955Z" fill="#1E2E36"/></svg></button>',
        infinite: false,
    })

    $('.advantages__wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.478261 5.86955C0.478261 5.65916 0.556552 5.44879 0.712807 5.28839L5.63226 0.240819C5.9452 -0.0802729 6.45258 -0.0802729 6.76539 0.240819C7.0782 0.56178 7.0782 1.08227 6.76539 1.40339L2.41238 5.86955L6.76524 10.3357C7.07805 10.6568 7.07805 11.1773 6.76524 11.4982C6.45243 11.8194 5.94505 11.8194 5.63211 11.4982L0.712655 6.4507C0.556376 6.29022 0.478261 6.07986 0.478261 5.86955Z" fill="white"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.478261 5.86955C0.478261 5.65916 0.556552 5.44879 0.712807 5.28839L5.63226 0.240819C5.9452 -0.0802729 6.45258 -0.0802729 6.76539 0.240819C7.0782 0.56178 7.0782 1.08227 6.76539 1.40339L2.41238 5.86955L6.76524 10.3357C7.07805 10.6568 7.07805 11.1773 6.76524 11.4982C6.45243 11.8194 5.94505 11.8194 5.63211 11.4982L0.712655 6.4507C0.556376 6.29022 0.478261 6.07986 0.478261 5.86955Z" fill="white"/></svg></button>',
        infinite: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    fade: true,
                }
            }
        ]
    });
});
