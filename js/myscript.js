//append movie container

$(document).ready(function() {

for(i = 0; i < movie_data.length; i++) {
	$("#movies").append(`<div class='col-lg-6'>
				<div class="col-lg-6 img-size">
					<img src="${movie_data[i].movieImg}">
				</div>
				<div class="col-lg-6 descr">
					<h4>${movie_data[i].movieName}</h4>
					<hr>
					<p>${movie_data[i].movieDescription}</p>
				</div>
				<div class="col-lg-3 like-btn">
					<a href="#" class="btn btn-info btn-lg">
						<span class="glyphicon glyphicon-thumbs-up"></span> Like
					</a>
				</div>
				<div class="col-lg-3 like-count-btn">
					<button type="number">0</button>
				</div>
				<div class="col-lg-12 genre">
					<p>${movie_data[i].movieGenre}</p>
				</div>
			</div>`);
	}

});