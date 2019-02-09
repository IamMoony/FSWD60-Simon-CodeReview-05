//add likes on click
btn_like_onClick =	function(e) { 
	// This is the button you clicked
	var target = $(e.target);

	// Go to the parent of the movie html
	var parent = target.parent().parent();

	// Get the div where we count
	var obj_count = parent.find(".count");
	
	// Get the hidden ID class
	var id = parent.find(".ID").html();

	// Get the json item
	var item = movie_data[id];
	
	// Increase the json like
	item.likes++;

	//Output likes in the html
	obj_count.html(item.likes);
}