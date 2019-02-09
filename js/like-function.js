//add likes on click
$(document).ready(function() {
	var likes = 0; 
	$(".count-click").click(function()
		{ likes++; $(".count").html(likes);

	});
});