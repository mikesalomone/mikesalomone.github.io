var headerHeight = $("header").outerHeight();

$(".burger-nav").on("click", function() {
	$(".nav").toggleClass("open");
	$(".burger-nav").toggleClass("x");
});

$(".nav-link").on("click", function() {
	// if ($(".burger-nav").css("height") == "80px" ){
		$(".nav").toggleClass("open");
		$(".burger-nav").toggleClass("x");
	// }
});

$("a[href^='#']").on("click", function(e) {
	e.preventDefault();

	var target = this.hash;
	var $target = $(target);

	$("html, body").animate({
		scrollTop: $target.offset().top - headerHeight
	}, 1000, "swing", function() {
		window.location.hash = target;
	});
});