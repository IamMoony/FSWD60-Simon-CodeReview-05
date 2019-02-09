
/*
	Sort a list by likes

	Example:
		https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
*/
function compare(a, b) {
	if (a.likes < b.likes)
		return 1;

	if (a.likes > b.likes)
		return -1;

	return 0;
}

$(document).ready(function() {
	$(".sort_by_likes").click(function(e) {
		/*
			Copy movie data
			slice for not changing original json
			This prohibit that the new list isnt a reference to orginal list
		*/
		var new_movie_data = movie_data.slice(0);

		// Sort the list by likes
		new_movie_data.sort(compare);

		// Draw our new movie list
		drawMovies(new_movie_data);
	});
});