$('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
});

function carouselNormalization() {
    var items = $('#carousel_slideshow .carousel-item'), //grab all slides
        heights = [], //create empty array to store height values
        tallest; //create variable to make note of the tallest slide

    if (items.length) {
        function normalizeHeights() {
            items.each(function() { //add heights to array
                heights.push($(this).height());
            });
            tallest = Math.max.apply(null, heights); //cache largest value
            items.each(function() {
                $(this).css('min-height',tallest + 'px');
            });
        };
        normalizeHeights();

        $(window).on('resize orientationchange', function () {
            tallest = 0, heights.length = 0; //reset vars
            items.each(function() {
                $(this).css('min-height','0'); //reset min-height
            });
            normalizeHeights(); //run it again
        });
    }
}



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
        carouselNormalization();
        if ($("#tile_container").outerWidth() > 335) {
            console.log("Resizing");
            $(".tile").height($("#reference_tile").innerWidth());
        } else {
            $(".tile").height(40);
            $(".tile").css("border", "0 0 0 0");
        }
    });
});