var global_elem_id;
$(document).ready(function (e)
{
	$(".achievements__status_disabled").on("click", function(){
		next_obj=$(this).closest(".achievements__status").find(".popup-small");
		elem_id=$(next_obj).attr("id");
		showPopup(elem_id);
		global_elem_id=elem_id;
	});
	
	$("body").on("click", function(event){
		$(".popup-small").each(function(){
			elem_id=$(this).attr("id");
//			alert(elem_id+"!="+global_elem_id)
			if (elem_id!=global_elem_id)	hidePopup(elem_id, event);
			else							global_elem_id="";
		});
	});
})