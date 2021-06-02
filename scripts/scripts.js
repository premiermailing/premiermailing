$(document).ready(function() {

	//set nav selected state
	var pathArray = window.location.pathname.split('/');
	var folderPath = "";
	for (x = 1; x <= pathArray.length - 2; x++) {
	    folderPath += "/";
	    folderPath += pathArray[x];
	}
	$('#nav li, #sidenav li').each(function () {
	    var href = $(this).find('a').attr('href');
	    if (href === window.location.pathname) {
	        $(this).addClass('selected');
	        $(this).parents("li").addClass('selected');
	    } else if (href === folderPath) {
	        $(this).addClass('selected');
	        $(this).parents("li").addClass('selected');
	    }
	});	

	$('#sponsors .sponsor-carousel').jCarouselLite({
		visible: 5,
		scroll: 1,
		auto: 6000,
		speed: 1000
	});
});