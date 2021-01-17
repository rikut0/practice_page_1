$(function(){
  $('.slideshow').slick ({
    accessibility: true,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: false,
    fade: true,
    prevArrow: false,
    nextArrow: false,
    
  })
  
  $('.footer__list').slick({
    autoplay: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
    variableWidth: true,
    respondTo: "window",
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
        }
      }, {
        breakpoint: 720,
        settings: {
          slidesToShow: 1
        }
      }
    ],
  });
  
  if (window.matchMedia('(min-width: 720px').matches) {
  $('.headline__item-1').hover(
    function() {
      $('.top__info1').slideDown();
      $('.top__info1').css('display', 'grid');
    },
    function() {
      $('.top__info1').css('display', 'none');
    });
  $('.headline__item-2').hover(
    function() {
      $('.top__info2').slideDown();
      $('.top__info2').css('display', 'grid');
    },
    function() {
      $('.top__info2').css('display', 'none');
    });
  $('.headline__item-3').hover(
    function() {
      $('.top__info3').slideDown();
      $('.top__info3').css('display', 'grid');
    },
    function() {
      $('.top__info3').css('display', 'none');
    });
    $('.info__tab').click(function() {
      $('.info__tab__selected').removeClass('info__tab__selected');
      $(this).addClass('info__tab__selected');
      $('.selected').removeClass('selected');
      const index = $(this).index();
      $('.panel').eq(index).addClass('selected');
    })

    } else {
      $('.info__tab-1').click(function() {
        $('.info__list1').css('display', 'flex');
        $('.info__list2, .info__list3').css('display', 'none');
        $('.info__list1').after($('.info__tab-2'), $('.info__tab-3'));
      });
      $('.info__tab-2').click(function() {
        $('.info__list2').css('display', 'flex');
        $('.info__list1, .info__list3').css('display', 'none');
        $('.info__list2').after($('.info__tab-3'));
      }),
      $('.info__tab-3').click(function() {
        $('.info__list3').css('display', 'flex');
        $('.info__list1, .info__list2').css('display', 'none');
      })
    }

    $('.humberger__trigger').on('click', function() {
      $('.humberger').toggleClass('slide-in');
      $('.humberger').css('display', 'block');
      $('body').css('transform', 'translateX(-100%)');
    })
    $('.cross').on('click', function() {
      $('.humberger').css('display', 'none');
      $('body').css('transform', 'translateX(0)');
    })
    });