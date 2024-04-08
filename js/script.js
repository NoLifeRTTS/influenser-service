$(document).ready(function(){

  $('.section3__card .img1 img').mouseover(function() {
    $(this).parent().children('.bl').children('.blhd').css('border-color', 'rgba(84, 84, 212)');
    $(this).parent().children('.bl').css('height', '72px');
  });
  $('.section3__card .img1 img').mouseout(function() {
    $(this).parent().children('.bl').css('height', '0');
  });

  $('.section3__card .img2 img').mouseover(function() {
    $(this).parent().children('.bl').children('.blhd').css('border-color', 'rgba(55, 240, 218)');
    $(this).parent().children('.bl').css('height', '72px');
  });
  $('.section3__card .img2 img').mouseout(function() {
    $(this).parent().children('.bl').css('height', '0');
  });

  $('.section3__card .img3 img').mouseover(function() {
    $(this).parent().children('.bl').children('.blhd').css('border-color', 'rgba(254, 220, 90)');
    $(this).parent().children('.bl').css('height', '72px');
  });
  $('.section3__card .img3 img').mouseout(function() {
    $(this).parent().children('.bl').css('height', '0');
  });

  $('.section3__card .img4 img').mouseover(function() {
    $(this).parent().children('.bl').children('.blhd').css('border-color', 'rgba(90, 254, 97)');
    $(this).parent().children('.bl').css('height', '72px');
  });
  $('.section3__card .img4 img').mouseout(function() {
    $(this).parent().children('.bl').css('height', '0');
  });

  $('.section3__card .img5 img').mouseover(function() {
    $(this).parent().children('.bl').children('.blhd').css('border-color', 'rgba(202, 84, 212)');
    $(this).parent().children('.bl').css('height', '72px');
  });
  $('.section3__card .img5 img').mouseout(function() {
    $(this).parent().children('.bl').css('height', '0');
  });

  $('.section3__card .img6 img').mouseover(function() {
    $(this).parent().children('.bl').children('.blhd').css('border-color', 'rgba(240, 64, 55)');
    $(this).parent().children('.bl').css('height', '72px');
  });
  $('.section3__card .img6 img').mouseout(function() {
    $(this).parent().children('.bl').css('height', '0');
  });

  $('.section4__content').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    arrows: true,
    dots: true,
    responsive: [
        {
          breakpoint: 820,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 450,
          settings: {
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true
          }
        }
    ]
  });
  $('.section2__content').slick({
      autoplay: true,
      autoplaySpeed: 8000,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      arrows: true,
      dots: true,
  });

  $('.modal__bg').click(function() {
    $('.modal').fadeOut();
    $('.modal__bg').fadeOut();
  });
  $('.modal__close').click(function() {
    $('.modal').fadeOut();
    $('.modal__bg').fadeOut();
  });
  $('.leave').click(function() {
    $('.modal__bg').fadeIn();
    $('.modal').fadeIn();
    $('.modal').css('display', 'flex');
  });
  $("#goContact").click(function(event){
    event.preventDefault();
    let id = $(this).attr("href");
    let top = $(id).offset().top;
    $("*").animate({scrollTop:top},1000);
  });
  $("#goContact1").click(function(event){
    event.preventDefault();
    let id = $(this).attr("href");
    let top = $(id).offset().top;
    $("*").animate({scrollTop:top},1000);
  });
  $("#goAbout").click(function(event){
    event.preventDefault();
    let id = $(this).attr("href");
    let top = $(id).offset().top;
    $("*").animate({scrollTop:top},1000);
  });
  $("#goAbout1").click(function(event){
    event.preventDefault();
    let id = $(this).attr("href");
    let top = $(id).offset().top;
    $("*").animate({scrollTop:top},1000);
  });
  $("#goServices").click(function(event){
    event.preventDefault();
    let id = $(this).attr("href");
    let top = $(id).offset().top;
    $("*").animate({scrollTop:top},1000);
  });
  $("#goServices1").click(function(event){
    event.preventDefault();
    let id = $(this).attr("href");
    let top = $(id).offset().top;
    $("*").animate({scrollTop:top},1000);
  });
  $('.section2__content').on('afterChange', function(){
    if ($('.section2__block.slick-active').data('id') == "4") {
      $('.section2__container .forBrands .text p').text("For influencers");
    }
    else {
      $('.section2__container .forBrands .text p').text("For brands");
    }
  });
  let menuFlag = false;
  var Menu = {
    el: {
      ham: $('.menu'),
      menuTop: $('.menu-top'),
      menuMiddle: $('.menu-middle'),
      menuBottom: $('.menu-bottom')
    },
    
    init: function() {
      Menu.bindUIactions();
    },
    
    bindUIactions: function() {
      Menu.el.ham
          .on(
            'click',
          function(event) {
          Menu.activateMenu(event);
          event.preventDefault();
        }
      );
    },
    
    activateMenu: function() {
      if (!menuFlag) {
        Menu.el.menuMiddle.toggleClass('menu-middle-click');
        setTimeout(function(){
          Menu.el.menuTop.toggleClass('menu-top-click');
          Menu.el.menuBottom.toggleClass('menu-bottom-click'); 
        }, 300);
        $('.menu--mob').css('right', '0px');
        menuFlag = true;
      }
      else {
        Menu.el.menuTop.toggleClass('menu-top-click');
        Menu.el.menuBottom.toggleClass('menu-bottom-click');
        setTimeout(function(){
          Menu.el.menuMiddle.toggleClass('menu-middle-click');
        }, 300);
        $('.menu--mob').css('right', '-100%');
        menuFlag = false;
      }
    }
  };

  Menu.init();

  $('.modal__close').mouseover(function(){
    $('.modal__close img').attr('src', 'images/close.svg');
  });
  $('.modal__close').mouseout(function(){
    $('.modal__close img').attr('src', 'images/close1.png');
  });

  let geo = $('.dots');
  let a = 5;
  let geo1, geo2, geo3, geo4, geo5, geo6, geo7, geo8, geo9, geo10;
  geo1 = geo[2];
  geo2 = geo[3];
  geo3 = geo[4];
  geo4 = geo[5];
  geo5 = geo[6];
  $(geo1).addClass('active');
  $(geo2).addClass('active');
  $(geo3).addClass('active');
  $(geo4).addClass('active');
  $(geo5).addClass('active');
  setInterval(function(){
    if (a == 5) {
      $(geo1).removeClass('active');
      $(geo2).removeClass('active');
      $(geo3).removeClass('active');
      $(geo4).removeClass('active');
      $(geo5).removeClass('active');
      geo1 = geo[7];
      geo2 = geo[8];
      geo3 = geo[9];
      geo4 = geo[10];
      geo5 = geo[11];
      $(geo1).addClass('active');
      $(geo2).addClass('active');
      $(geo3).addClass('active');
      $(geo4).addClass('active');
      $(geo5).addClass('active');
      a +=5;
    }
    else if (a == 10) {
      $(geo1).removeClass('active');
      $(geo2).removeClass('active');
      $(geo3).removeClass('active');
      $(geo4).removeClass('active');
      $(geo5).removeClass('active');
      geo1 = geo[0];
      geo2 = geo[1];
      $(geo1).addClass('active');
      $(geo2).addClass('active');
      a +=2;
    }
    else if (a == 12) {
      $(geo1).removeClass('active');
      $(geo2).removeClass('active');
      geo1 = geo[12];
      geo2 = geo[13];
      geo3 = geo[14];
      geo4 = geo[15];
      geo5 = geo[16];
      geo6 = geo[17];
      geo7 = geo[18];
      geo8 = geo[19];
      geo9 = geo[20];
      geo10 = geo[21];
      $(geo1).addClass('active');
      $(geo2).addClass('active');
      $(geo3).addClass('active');
      $(geo4).addClass('active');
      $(geo5).addClass('active');
      $(geo6).addClass('active');
      $(geo7).addClass('active');
      $(geo8).addClass('active');
      $(geo9).addClass('active');
      $(geo10).addClass('active');
      a+=10;
    }
    else if (a == 22) {
      a = 0;
      $(geo1).removeClass('active');
      $(geo2).removeClass('active');
      $(geo3).removeClass('active');
      $(geo4).removeClass('active');
      $(geo5).removeClass('active');
      $(geo6).removeClass('active');
      $(geo7).removeClass('active');
      $(geo8).removeClass('active');
      $(geo9).removeClass('active');
      $(geo10).removeClass('active');
      geo1 = geo[2];
      geo2 = geo[3];
      geo3 = geo[4];
      geo4 = geo[5];
      geo5 = geo[6];
      $(geo1).addClass('active');
      $(geo2).addClass('active');
      $(geo3).addClass('active');
      $(geo4).addClass('active');
      $(geo5).addClass('active');
      a+=5;
    }
  },4000);

  $('form').on('submit', function(e) {
    e.preventDefault();
    $('.name-inp').css('border-color', '#5454D4');
    $('.email-inp').css('border-color', '#5454D4');
    $('.subject-inp').css('border-color', '#5454D4');
    $('.message-inp').css('border-color', '#5454D4');

    let form = $(this),
    url = "send.php",
    name = form.find('input[name=name]').val(),
    email = form.find('input[name=email]').val(),
    subject = form.find('select[name=subject]').val(),
    message = form.find('textarea[name=message]').val();

    let flag1 = false,
        flag2 = false,
        flag3 = false,
        flag4 = false;

    if (name == "" || name == null || name == undefined) {
        flag1 = true;
        $('.name-inp').css('border-color', '#C13535');
    }
    if (subject == "" || subject == null || subject == undefined) {
        flag2 = true;
        $('.subject-inp').css('border-color', '#C13535');
    }
    if (email == "" || email == null || email == undefined) {
        flag3 = true;
        $('.email-inp').css('border-color', '#C13535');
    }
    if (message == "" || message == null || message == undefined) {
        flag4 = true;
        $('.message-inp').css('border-color', '#C13535');
    }

    let inputNameNumber = document.querySelectorAll('.name-inp');
    let inputSubjectNumber = document.querySelectorAll('.subject-inp');
    let inputEmailNumber = document.querySelectorAll('.email-inp');
    let inputMessageNumber = document.querySelectorAll('.message-inp');

    if (flag1 || flag2 || flag3 || flag4) {
        // $('.error-text').fadeIn();
    }
    else {
      $('.name-inp').css('border-color', '#FFFFFF');
      $('.email-inp').css('border-color', '#FFFFFF');
      $('.subject-inp').css('border-color', '#FFFFFF');
      $('.message-inp').css('border-color', '#FFFFFF');

      $.ajax({
          type: form.attr('method'),
          url: url,
          data: form.serialize(),
          success: function (data) {

            $('.contact').prop("disabled", true);
            inputNameNumber.forEach((input) => {
              input.value = '';
            });
            inputEmailNumber.forEach((input) => {
                input.value = '';
            });
            inputSubjectNumber.forEach((input) => {
                input.value = '';
            });
            inputMessageNumber.forEach((input) => {
                input.value = '';
            });
          },
          error: function(error) {
              $('.name-inp').css('border-color', '#C13535');
              $('.email-inp').css('border-color', '#C13535');
              $('.subject-inp').css('border-color', '#C13535');
              $('.message-inp').css('border-color', '#C13535');
          }
      });
    }
  });
});   