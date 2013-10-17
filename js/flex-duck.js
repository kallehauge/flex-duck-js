/**
 * ===========================================
 *	FLEX DUCK
 * ===========================================
 */

function initFlexDuck(columnsAmount, mediumScreen, largeScreen) {
	// Make sure the parameters are integers and pass the variable as null if it isn't set.
	columnsAmount = parseInt(columnsAmount)|| null;
	mediumScreen  = parseInt(mediumScreen) || null;
	largeScreen   = parseInt(largeScreen)  || null;

	// Calculates the procentages based on the "var columnsAmount"
	function columnsPercentage(columns, name) {
		gridArray = []; // define
		for (i = 1; i <= columns; i++) {
			// Calculate procentage.
			percentage = (100 / columns * i);
			gridArray[i] = percentage;
		}
		// Return array
		return gridArray;
	}
	// Assign the returned "grid percentage array" to a variable.
	columnWidth = columnsPercentage(columnsAmount);


	function queryStyle(className, amount, width) {
		// Generate the classes based on the amount of
		for (i = 1; i <= amount; i++) {
			$("."+className+"-"+i).css("width", width[i]+"%");
		};

		// Remove classes
		$("[class *= '-hide']").removeClass(function(i, string) {
			// We create an array with the classes
			strArray = string.split(' ');
			// here we remove the classes we want to keep
			return strArray.filter(function(val){
				hiddenValidation = val.indexOf("-hidden");
				return hiddenValidation >= 0 ? val : false;
			}).join(' '); // and return that list as a string which indicates the classes to be removed..
		});
		// Add class
		$("."+className+"-hide").addClass(className + "-hidden");
	}

	// The "media queries".
	function mediaQuery() {
		// Width of the browser window.
		windowWidth = $(window).width();

		// Media query hierarchy
		if (windowWidth >= largeScreen) {
			/**
			 *	Large: if the browser-window is greater than "large", then
			 *	it will execute a function defined above with styling.
			 */
			queryStyle("large", columnsAmount, columnWidth);
		} else if (windowWidth >= mediumScreen) {
			/**
			 *	Medium: if the browser-window is greater than "medium", then
			 *	it will execute a function defined above with styling.
			 */
			queryStyle("medium", columnsAmount, columnWidth);
		} else if (windowWidth < mediumScreen) {
			/**
			 *	Small: if the browser-window is less than "small", then
			 *	it will execute a function defined above with styling.
			 */
			queryStyle("small", columnsAmount, columnWidth);
		}
	}

	// Init the "What to display" function on load.
	mediaQuery();

	// Init the "What to display" function on browser resize.
	$(window).resize(function() {
		mediaQuery();
	});
}