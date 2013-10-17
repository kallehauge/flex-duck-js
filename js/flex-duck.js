/**
 * ===========================================
 *	FLEX DUCK
 * ===========================================
 */

function initFlexDuck(gridColumns, mediumScreen, largeScreen) {
	// Make sure the parameters are integers and pass the variable as null if it isn't set.
	gridColumns 	= parseInt(gridColumns) || null;
	mediumScreen 	= parseInt(mediumScreen)|| null;
	largeScreen 	= parseInt(largeScreen) || null;

	// Calculates the procentages based on the "var gridColumns"
	function gridPercentage(columns, name) {
		classArray = []; // define
		for ( var i = 1; i <= columns; i++ ) {
			// Calculate procentage.
			percentage = (100 / columns * i);
			classArray[i] = percentage;
		}
		// Return array
		return classArray;
	}

	// Assign the "grid percentage function" to a variable.
	gridArray = gridPercentage(gridColumns);

	// The "media queries".
	function displayQueryClasses() {
		// Width of the browser window.
		windowWidth = $(window).width();

		// Media query hierarchy
		if (windowWidth >= largeScreen) {
			/**
			 *	Large: if the browser-window is greater than "large", then
			 *	it will execute a function defined above with styling.
			 */
			for ( var i = 1; i <= gridColumns; i++ ) {
				$(".large-"+i).css("width", gridArray[i]+"%");
			};
			// add classes
			$(".large-hide").addClass("large-hidden");
			// remove classes
			$(".medium-hide").removeClass('medium-hidden');
			$(".small-hide").removeClass('small-hidden');
		} else if (windowWidth >= mediumScreen) {
			/**
			 *	Medium: if the browser-window is greater than "medium", then
			 *	it will execute a function defined above with styling.
			 */
			for ( var i = 1; i <= gridColumns; i++ ) {
				$(".medium-"+i).css("width", gridArray[i]+"%");
			};
			// add classes
			$(".medium-hide").addClass('medium-hidden');
			// remove classes
			$(".large-hide").removeClass('large-hidden');
			$(".small-hide").removeClass('small-hidden');
		} else if (windowWidth < mediumScreen) {
			/**
			 *	Small: if the browser-window is less than "small", then
			 *	it will execute a function defined above with styling.
			 */
			for ( var i = 1; i <= gridColumns; i++ ) {
				$(".small-"+i).css("width", gridArray[i]+"%");
			};
			// add classes
			$(".small-hide").addClass("small-hidden");
			// remove classes
			$(".large-hide").removeClass('large-hidden');
			$(".medium-hide").removeClass('medium-hidden');
		}
	}

	// Init the "What to display" function on load.
	displayQueryClasses();

	// Init the "What to display" function on browser resize.
	$(window).resize(function() {
		displayQueryClasses();
	});
}