$(document).ready(function() {
//defining global variables
action = $(".Action");
horror = $(".Horror");
comedy = $(".Comedy");

//display action only
	$("#action-movies").on('click', function() {
		action.fadeIn(300).css("background-color", "lightgrey");
		horror.fadeOut(300);
		comedy.fadeOut(300);
		$(this).css("background-color", "lightgrey");
//display horror only
	});
	$("#horror-movies").on('click', function() {
		horror.fadeIn(300).css("background-color", "lightgrey");
		action.fadeOut(300);
		comedy.fadeOut(300);
		$(this).css("background-color", "lightgrey");
		$("action-movies").css("background-color", "white")
//display comedy only
	});
	$("#comedy-movies").on('click', function() {
		comedy.fadeIn(300).css("background-color", "lightgrey");
		horror.fadeOut(300);
		action.fadeOut(300);
		$(this).css("background-color", "lightgrey");
	});
});