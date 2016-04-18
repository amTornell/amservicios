$(document).foundation();

$( document ).ready(function() {
    console.log( "ready!" );
    $("#homeSections li").hover(
        function() {
            //$('#homeSections li').removeClass('fadeInUp');
            //$('#homeSections li').addClass('fadeOutDown');
            $(this).addClass("active");
            $(this).find('.btn-go').fadeIn("slow");
        },
        function() {
            $(this).removeClass("active");
            $(this).find('.btn-go').fadeOut("slow");
        }
    );


    $("#homeSections li.move").hover(function() {
        $(this).animate({
            width: "66.66%"
        }, 300);
        $(this).parent().children().not(this).animate({
            width: "33.33%"
        }, 300);
    }, function() {
        $(this).parent().children().each(function() {
            $(this).animate({
                width: $(this).data("standardWidth")
            }, 300);
        });
    });

    $("#homeSections li.center").hover(function() {
        $(this).animate({
            width: "800px",
        }, 300, function() {
            // $(this).css('z-index', 101)
        });
    }, function() {
        $(this).parent().children().each(function() {
            $(this).animate({
                width: $(this).data("standardWidth")
            }, 300);
        });
    });

    $("#homeSections li").each(function() {
        $(this).data("standardWidth", $(this).width());
    });


});