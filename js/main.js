$('document').ready(function() {

    $(".call_popup").click(function () {
        $(".popup_wrap").css("display", "block");
    });

    $(".popup__head-close").click(function () {
        $(".popup_wrap").css("display", "none");

    });
});
