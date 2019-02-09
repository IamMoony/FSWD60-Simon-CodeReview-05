//add likes on click
$(document).ready(function() {
	$(".count-click").click(function(e) { 
			var target = $(e.target);
			var parent = target.parent().parent();
			var obj_count = parent.find(".count")

			var likes = obj_count.html();
			likes++;

			// Send a like to the server
			// ...

			obj_count.html(likes);
	});
});