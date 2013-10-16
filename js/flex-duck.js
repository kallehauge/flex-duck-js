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

	/**
	* Function: queryWidth();
	* 	This function will return arrays with all classes as keys (ex: "small-1", "small-2", "small-3"),
	*	and a percentage value, calculated from the amount of grid columns.
	* Values:
	*	array[class-12] = "100%";
	*/
	function queryWidth(columns, name) {
		// Define data-string. Values added inside the "for loop".
		dataString = "";
		// "Create" the dataString with each grid-element.
		for ( var i = 1; i <= columns; i++ ) {
			// Calculate procentage.
			percentage = (100 / columns * i);
			/**
			* Generate a string that contains class-names and width values.
			* Values and setup:
			*	# "name-i," seperates from the next value with a comma
			*	# "percentage%__" seperates from the next value with double underscore
			*/
			dataString += name + "-" + i + ", " + percentage + "__";
		}
		// Split the datastring up into an array
		classArray = []; // define
		// use class-name as array-name and split the string up into the amount of grid-columns.
		dataString = dataString.split("__");
		// Seperate the class-names and width values
		for ( var x = 0; x < columns; x++ ) {
			y = x+1;
			tmp_array = dataString[x].split(",");
			classArray[name+"-"+y] = tmp_array[1].trim();
		};
		return classArray;
	}

	// Get all classes and widths returned as arrays.
	smallArray 	= queryWidth(gridColumns, "small");
	mediumArray = queryWidth(gridColumns, "medium");
	largeArray 	= queryWidth(gridColumns, "large");

	// Debugging
	// console.log(smallArray);
	// console.log(mediumArray);
	// console.log(largeArray);

	// Large: what should happen if the browser is greater than "large" ?
	function largeScreenStyle() {
		// Loop the classes.
		for ( var i = 1; i <= gridColumns; i++ ) {
			$(".large-"+i).css("width", largeArray["large-"+i]+"%");
		};
		// add classes
		$(".large-hide").addClass("large-hidden");
		// remove classes
		$(".medium-hide").removeClass('medium-hidden');
		$(".small-hide").removeClass('small-hidden');
	}

	// Medium: what should happen if the browser is greater than "medium" ?
	function mediumScreenStyle() {
		// Loop the classes.
		for ( var i = 1; i <= gridColumns; i++ ) {
			$(".medium-"+i).css("width", mediumArray["medium-"+i]+"%");
		};
		// add classes
		$(".medium-hide").addClass('medium-hidden');
		// remove classes
		$(".large-hide").removeClass('large-hidden');
		$(".small-hide").removeClass('small-hidden');
	}

	// Small: what should happen if the browser is less than "medium" ?
	function smallScreenStyle() {
		// Loop the classes.
		for ( var i = 1; i <= gridColumns; i++ ) {
			$(".small-"+i).css("width", smallArray["small-"+i]+"%");
		};
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
		} else if (windowWidth >= mediumScreen) {
			/**
			 *	Medium: if the browser-window is greater than "medium", then
			 *	it will execute a function defined above with styling.
			 */
			mediumScreenStyle();
		} else if (windowWidth < mediumScreen) {
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