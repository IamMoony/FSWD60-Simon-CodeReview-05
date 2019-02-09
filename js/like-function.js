//add likes on click
$(document).ready(function() {
	// var get_attr = $(."count-click").attr("name");
	var likes =  0
	$(".count-click").click(function(e)
		{ 
			likes++; 
			// $(".count").html(likes);
			alert(Object.keys($(e.target)));

	});
});