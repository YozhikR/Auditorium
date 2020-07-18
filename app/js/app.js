document.addEventListener("DOMContentLoaded", function() {
	
	new fullpage('#fullpage', {
		autoScrolling: true,
		controlArrows: false,
		slidesNavigation: true,
		slidesNavPosition: 'bottom'
	})

	for (let i = 0; i < 4; i++) {
		$('.triangle').clone().appendTo('.triangle-wrapper')
	}
	
});
