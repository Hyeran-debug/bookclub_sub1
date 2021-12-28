$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('.scroll').fadeIn();
    } else {
        $('.scroll').fadeOut();
    }
});


