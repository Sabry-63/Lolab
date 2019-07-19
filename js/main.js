$(function(){
    //scroll smosh
    $('.nav-link').click(function(){
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top + 1
        }, 1000);
    });
    //active
    $('.nav-link').click(function(){
        $(this).parent().siblings().children().removeClass('active');
        $(this).addClass('active');
    });
});