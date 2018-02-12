$(document).ready(function() {

    $(".portions__group").on("click", function(e) {
        $(this).addClass("portions__group--clicked");
    });

    $('.portions__group').hover(
        function(){
        },
        function(){
            $('.portions__group').removeClass("portions__group--clicked");
        });

    $("body").keydown(function(e){
        if(e.keyCode==9){
            $("body").addClass("tab-user");
        }
    });
    $("body").css("opacity", 1).addClass("body-ready");
});
$(window).load(function() {

});