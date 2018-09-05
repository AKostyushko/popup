$(document).ready(function($){
	if ($("#onload-popup").length)
	{
		$.magnificPopup.open({
			items: {
				src:"#onload-popup" 
			},
			type:"inline"
		}, 0);
		$("#close, .onload-popup .onload-popup__continue, .onload-popup .onload-popup__skip").on("click", function(){
			$.magnificPopup.close();
		});
	}
	if ($("#popup-not-available").length)
	{
		$.magnificPopup.open({
			items: {
				src:"#popup-not-available" 
			},
			type:"inline"
		}, 0);
		$("#close, .popup-not-available .onload-popup__continue").on("click", function(){
			$.magnificPopup.close();
		});
	}
/*
    $(".popup-content").magnificPopup({
        type:"inline"
    });
*/
});


var showPopup = function(elem_id)
{
	$("#"+elem_id).removeClass("hidden");
}

var hidePopup = function(elem_id, event)
{
	$("#"+elem_id).addClass("hidden");
	event.stopPropagation();
}

var showPopupMessage = function(elem_id)
{
	global_elem_id=elem_id;
	$("#"+elem_id+" .popup-small__text").addClass("hidden");
	$("#"+elem_id+" .popup-small__text_hidden").removeClass("hidden");
	$("#"+elem_id+" .popup-small__buttons").addClass("hidden");
}

