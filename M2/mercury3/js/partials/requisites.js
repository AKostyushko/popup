$(document).ready(function (e)
{
	$(".requisites .button_edit").on("click", function(){
		if ($(this).hasClass("button_red"))
		{
			$("#requisites-read").removeClass("hidden");
			$("#requisites-edit").addClass("hidden");
			$(this).removeClass("button_red");
			$(this).addClass("button_small");
		}
		else
		{
			$("#requisites-read").addClass("hidden");
			$("#requisites-edit").removeClass("hidden");
			$(this).addClass("button_red");
			$(this).removeClass("button_small");
		}
	});
	$(".requisites__button_grey").on("click", function(){
		$("#requisites-read").removeClass("hidden");
		$("#requisites-edit").addClass("hidden");
		$(".requisites .button_edit").removeClass("button_red");
		$(".requisites .button_edit").addClass("button_small");
	});
	$(".requisites__button-default").on("click", function(){
		if ($(this).hasClass("requisites__button-default_grey"))
		{
			$(".requisites__button-default_red").addClass("requisites__button-default_grey");
			$(".requisites__button-default_red").removeClass("requisites__button-default_red");
			$(this).addClass("requisites__button-default_red");
			$(this).removeClass("requisites__button-default_grey");
		}
	});
});