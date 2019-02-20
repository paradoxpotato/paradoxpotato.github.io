$('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
});

jQuery(function ($) {
    $(".tile").height($("#reference_tile").innerWidth());

    $('.flexslider').flexslider({
        animation: "slide"
    });


    $(window).on('resize', function () {
        if (this.resizeTO) {
            clearTimeout(this.resizeTO);
        }
        this.resizeTO = setTimeout(function () {
            $(this).trigger('resizeEnd');
        }, 10);
    });
    $(window).on('resizeEnd', function () {
        if ($("#tile_container").outerWidth() > 335) {
            console.log("Resizing");
            $(".tile").height($("#reference_tile").innerWidth());

        } else {
            $(".tile").height(40);
            $(".tile").css("border", "0 0 0 0");
        }
    });
});