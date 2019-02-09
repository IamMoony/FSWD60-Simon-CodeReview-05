//append movie container with bootstrap grid and json data

function generateMovieHtml(item) {
	return `<div class='col-lg-6 col-top ${item.movieGenre}'>
	<p class="ID" hidden>${item.ID}</p>
	<div class="col-lg-6 img-size">
	<img src="${item.movieImg}">
	</div>
	<div class="col-lg-6 descr">
	<h4>${item.movieName}</h4>
	<hr>
	<p>${item.movieDescription}</p>
	</div>
	<div class="col-lg-3 like-btn">
	<div class="btn btn-info btn-lg count-click" name="create_like">
	<span class="glyphicon glyphicon-thumbs-up"></span> Like
	</div>
	</div>
	<div class="col-lg-3 like-count-btn">
	<button type="number" class="count">${item.likes}</button>
	</div>
	<div class="col-lg-12 genre">
	<b><p>${item.movieGenre}</p></b>
	</div>
	</div>`;
}

function drawMovies(items) {
	// Remove old content
	$("#movies").html("");

	for(i = 0; i < items.length; i++) {
		var item = items[i];
		
		var html = generateMovieHtml(item);

		// Add the item to the page
		$("#movies").append(html);

	}

	// When you draw the items on the screne you need to add the click event to all the like buttons
	$(".count-click").click(btn_like_onClick)
}

//Calls the functtion to create html content
$(document).ready(function() {
	drawMovies(movie_data);
});