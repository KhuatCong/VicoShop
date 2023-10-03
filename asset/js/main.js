$(function () {

    $('.slide-tintuc-home').slick({
        dots: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.list-item-product-sell').slick({
        dots: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.img-to').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.img-nav',
    });
    $('.img-nav').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: '.img-to',
        dots: false,
        arrows: false,
        centerMode: true,
        focusOnSelect: true
    });

    $('.too-product').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        
    });


})

if ($('#back-to-top').length) {
    var scrollTrigger = 100, //khoảng cách đến khi bắt đầu hiện nút (px)
        backToTop = function () {
            var scrollTop = $(window).scrollTop(); //lấy khoảng cách scroll hiện tại tính lên Top
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop(); //gọi function 'backToTop()' mỗi khi người dùng cuộn trang
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 400); //thời gian kéo lên top tính bằng mili giây 
    });

}

function cong(){
    var x = $('#sl').val();
        x++;
        $('#sl').val(x);
}

function tru(){
    var x = $('#sl').val();
    if(x<=1){

    }else{
        x--;
    }
        $('#sl').val(x);
}

