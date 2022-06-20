$(document).ready(function(){
    // 추천상품 슬라이드
    $('.product').slick({
        reverse:true,
        dots: true,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        speed:2000,
        autoplaySpeed: 2000,
        responsive: [
            {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
            },
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }

        ]
    });
    setInterval(function(){
        if($("#recommand .slick-dots li:nth-child(2)").hasClass("slick-active")){
            $("#recommand .slick-dots").addClass("re100");
        }else{
            $("#recommand .slick-dots").removeClass("re100");
        }
    },100);

});    