$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 500,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/left-solid.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/icons/right-solid.png"></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                  dots: true,
                  arrows: false
                }
              }
        ]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__items').removeClass('catalog__items_active').eq($(this).index()).addClass('catalog__items_active');
    });

    function toggleSlide(item) {
      $(item).each(function(i) {
        $(this).on('click', function(e) {
          e.preventDefault();
          $('.catalog-item__goods').eq(i).toggleClass('catalog-item__goods_active');
          $('.catalog-item__description').eq(i).toggleClass('catalog-item__description_active');  
        })
      });
    };
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');
  });
          