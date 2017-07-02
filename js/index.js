$(document).ready(function() {
	$("#navbar-toggle-btn").button();
	$("#navbar-toggle-btn").click(function() {
		var navBarheight = $('#nav-mob').innerHeight();
		$("#navbar-mob").css("margin-top", navBarheight);
	});
	$(".navbar-toggle").on("click", function () {
	    $(this).toggleClass("active");
	});
});
