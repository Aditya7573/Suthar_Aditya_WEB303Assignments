$(document).ready(function() {
    // Accordion functionality
    $(".accordion-header").click(function() {
        $(this).next(".accordion-content").slideToggle();
        $(".accordion-content").not($(this).next()).slideUp();
    });

    // Tabbed section functionality
    $(".tab-headers li").click(function() {
        var index = $(this).index();
        $(".tab-content > div").hide().eq(index).show();
        $(".tab-headers li").removeClass("active");
        $(this).addClass("active");
    });
});
