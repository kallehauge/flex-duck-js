/**
 * ===========================================
 *	FLEX DUCK
 * ===========================================
 */

function initFlexDuck(gridColumns, mediumScreen, largeScreen, rowMaxWidth) {
	// Make sure the parameters are integers and pass the variable as null if it isn't set.
	gridColumns 	= parseInt(gridColumns) || null;
	mediumScreen 	= parseInt(mediumScreen)|| null;
	largeScreen 	= parseInt(largeScreen) || null;
	rowMaxWidth 	= parseInt(rowMaxWidth) || null;

	// Row: set max width, if a 4. parameter is given.
	if (rowMaxWidth != null) {
		$(".row").css("max-width", rowMaxWidth);
	}

	// Function: to set the width of the different classes (based on the amount of columns and class name)
	function queryWidth(columns, name) {
		// Define array
		var widthArray = ["small", "medium", "large"];
		// Loop to "create" each grid-element
		for ( var i = 1; i <= columns; i++ ) {
			// Calculate procentage
			percentage = (100 / columns * i);
			// Set it as width
			$("." + name + "-" + i).css("width", percentage + "%");
			// Add values to array
			widthArray.push(name + "-" + i, percentage + "%");
		}
		console.log(widthArray);
	}

	// Run the function for each of the classes.
	queryWidth(gridColumns, "small");
	queryWidth(gridColumns, "medium");
	queryWidth(gridColumns, "large");

	// Large: what should happen if the browser is greater than "large" ?
	function largeScreenStyle() {
		// add classes
		$(".large-hide").addClass("large-hidden");
		// remove classes
		$(".medium-hide").removeClass('medium-hidden');
		$(".small-hide").removeClass('small-hidden');
	}

	// Medium: what should happen if the browser is greater than "medium" ?
	function mediumScreenStyle() {
		// add classes
		$(".medium-hide").addClass('medium-hidden');
		// remove classes
		$(".large-hide").removeClass('large-hidden');
		$(".small-hide").removeClass('small-hidden');
	}

	// Small: what should happen if the browser is less than "medium" ?
	function smallScreenStyle() {
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
		if (windowWidth >= largeScreen) {
			/**
			 *	Large: if the browser-window is greater than "large", then
			 *	it will execute a function defined above with styling.
			 */
			largeScreenStyle();
			$("[class *= 'large-']").css('width')
		} else if (windowWidth >= mediumScreen) {
			/**
			 *	Medium: if the browser-window is greater than "medium", then
			 *	it will execute a function defined above with styling.
			 */
			mediumScreenStyle();
		} else {
			/**
			 *	Small: if the browser-window is less than "small", then
			 *	it will execute a function defined above with styling.
			 */
			smallScreenStyle();
		}
	}

	// Initiate the "What to display" function on load.
	displayQueryClasses();

	// Initiate the "What to display" function when the window is being resized.
	$(window).resize(function() {
		displayQueryClasses();
	});
}