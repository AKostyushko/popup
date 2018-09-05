$(document).ready(function (e)
{
	$(".communications__icon.phone").on("click", function(){
		var next_obj=$(this).closest(".communications__block").find(".popup-small");
		var elem_id=$(next_obj).attr("id");
//		alert(elem_id)
		showPopup(elem_id);
		global_elem_id=elem_id;
	});

	$(".contacts .button").on("click", function(){
		if ($(this).hasClass("button_red"))
		{
			$("#contacts-read").removeClass("hidden");
			$("#contacts-edit").addClass("hidden");
			$(this).removeClass("button_red");
			$(this).addClass("button_small");
		}
		else
		{
			$("#contacts-read").addClass("hidden");
			$("#contacts-edit").removeClass("hidden");
			$(this).addClass("button_red");
			$(this).removeClass("button_small");
		}
	});
});

var copyPhone = function(elem_id)
{
	var next_obj=$("#"+elem_id).find(".phone-number");
	var phone_number=$(next_obj).html();
	Clipboard.copy(phone_number);
}
