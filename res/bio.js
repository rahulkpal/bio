
//Scroll offset for scrolling after navbar option click
$("#probutton, #expbutton, #conbutton, #navName").on('click', function(e) {
     e.preventDefault();
     let target = $(this).attr('href');

     $('.navbar-toggler').removeClass('collapsed');
     $('.navbar-collapse').removeClass('show');
     
     $('html, body').animate({
       scrollTop: ($(target).offset().top - 110)
     }, 300);
});

$(window).scroll(function() {
    if($(this).scrollTop()>150) {
        $( ".navbar-me" ).addClass("fixed-me");
        $('#navName').removeClass('seen');
    } else {
        $( ".navbar-me" ).removeClass("fixed-me");
        $('#navName').addClass('seen');
    }
});


$('.trigger').popup();