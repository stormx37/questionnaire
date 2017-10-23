$( document ).ready(function() {
$('.active button.menu-toggle').on("click", function (e) {
    if ($(this).hasClass('panel-collapsed')) {
        // expand the panel
        $(this).parents('nav').find('.full-menu').slideDown();
        $(this).removeClass('panel-collapsed');
        $(this).find('span').removeClass('chevron-down').addClass('chevron-up');
    }
    else {
        // collapse the panel
        $(this).parents('nav').find('.full-menu').slideUp();
        $(this).addClass('panel-collapsed');
        $(this).find('span').removeClass('chevron-up').addClass('chevron-down');
    }
});
});
