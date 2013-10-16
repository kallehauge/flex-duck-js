/**
 * ===========================================
 *	FLEX DUCK
 * ===========================================
 */

function initFlexDuck(gridColumns, medium, large, rowMaxWidth) {
	// Make sure the parameters are integers and pass the variable as null if it isn't set.
	gridColumns = parseInt(gridColumns) || null;
	medium 		= parseInt(medium) 		|| null;
	large 		= parseInt(large) 		|| null;
	rowMaxWidth = parseInt(rowMaxWidth) || null;

	// Row: set max width, if a 4. parameter is given.
	if (rowMaxWidth != null) {
		$(".row").css("max-width", rowMaxWidth);
	}

	// Function: to set the width of the different classes (based on the amount of columns and class name)
	function queryWidth(columns, name) {
		for ( var i = 1; i <= columns; i++ ) {
			percentage = (100 / columns * i);
			$("." + name + "-" + i).css("width", percentage + "%");
		}
	}

	// Run the function for each of the classes.
	queryWidth(gridColumns, "small");
	queryWidth(gridColumns, "medium");
	queryWidth(gridColumns, "large");

	// Large: what should happen if the browser is greater than "large" ?
	function largeScreen() {
		// add classes
		$(".large-hide").addClass("large-hidden");
		// remove classes
		$(".medium-hide").removeClass('medium-hidden');
		$(".small-hide").removeClass('small-hidden');
	}

	// Medium: what should happen if the browser is greater than "medium" ?
	function mediumScreen() {
		// add classes
		$(".medium-hide").addClass('medium-hidden');
		// remove classes
		$(".large-hide").removeClass('large-hidden');
		$(".small-hide").removeClass('small-hidden');
	}

	// Small: what should happen if the browser is greater than "medium" ?
	function smallScreen() {
		// add classes
		$(".small-hide").addClass("small-hidden");
		// remove classes
		$(".large-hide").removeClass('large-hidden');
		$(".medium-hide").removeClass('medium-hidden');
	}

	// The "media queries".
	function displayQueryClasses() {
		// Width of the browser window.
		windowWidth = $(window).width();

		// Media query hierarchy
		if (windowWidth >= large) {
			/**
			 *	Large: if the browser-window is greater than "large", then
			 *	it will execute a function defined above with styling.
			 */
			largeScreen();
		} else if (windowWidth >= medium) {
			/**
			 *	Medium: if the browser-window is greater than "medium", then
			 *	it will execute a function defined above with styling.
			 */
			mediumScreen();
		} else {
			/**
			 *	Small: if the browser-window is less than "small", then
			 *	it will execute a function defined above with styling.
			 */
			smallScreen();
		}
	}

	// Initiate the "What to display" function on load.
	displayQueryClasses();

	// Initiate the "What to display" function when the window is being resized.
	$(window).resize(function() {
		displayQueryClasses();
	});
}