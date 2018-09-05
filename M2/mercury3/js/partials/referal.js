$(document).ready(function (e)
{
	$(".referal .button").on("click", function(){
		copyLink();
	});
});

var copyLink = function()
{
	var url=$(".referal .referal__url").html();
	Clipboard.copy(url);
}
