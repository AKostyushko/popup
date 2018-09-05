$(document).ready(function (e)
{
	$(".accounts__link").on("click", function(){
		next_obj=$(this).closest(".accounts__item");
		elem_id=$(next_obj).attr("id");
	});
    $(".accounts__link").magnificPopup({
        type:"inline"
    });
	$("#close, .account-popup button").on("click", function(){
		$.magnificPopup.close();
	});
});