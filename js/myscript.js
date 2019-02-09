//append movie container with bootstrap grid and json data

$(document).ready(function() {

for(i = 0; i < movie_data.length; i++) {
	$("#movies").append(`<div class='col-lg-6 col-top ${movie_data[i].movieGenre}'>
				<div class="col-lg-6 img-size">
					<img src="${movie_data[i].movieImg}">
				</div>
				<div class="col-lg-6 descr">
					<h4>${movie_data[i].movieName}</h4>
					<hr>
					<p>${movie_data[i].movieDescription}</p>
				</div>
				<div class="col-lg-3 like-btn">
					<div class="btn btn-info btn-lg count-click" name="create_like">
						<span class="glyphicon glyphicon-thumbs-up"></span> Like
					</div>
				</div>
				<div class="col-lg-3 like-count-btn">
					<button type="number" class="count">0</button>
				</div>
				<div class="col-lg-12 genre">
					<b><p>${movie_data[i].movieGenre}</p></b>
				</div>
			</div>`);
	}

});