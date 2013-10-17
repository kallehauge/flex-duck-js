/**
 * =============================================
 *	FLEX DUCK
 * =============================================
 *	This plugin is made to make wireframing and responsive design
 *	easy and flexible to work with, but still have strict semantic
 *	rules that forces you to think about what elements should do.
 */

// Predefine variable that will help prevent unnecessary loops in: "initFlexDuck() > mediaQuery()".
var fdChangeQuery;

// The core for this plugin to work.
function initFlexDuck(columnsAmount, mediumScreen, largeScreen) {
	// Main purpose: make sure the parameters are integers, so it will strip "px" and other characters.
	columnsAmount = parseInt(columnsAmount);
	mediumScreen  = parseInt(mediumScreen);
	largeScreen   = parseInt(largeScreen);

	// Define class-names that will be used in the HTML (ex: small-12).
	smallClass 	= "small";
	mediumClass = "medium";
	largeClass 	= "large";

	// Width: calculate each column's percentage width.
	function columnsPercentage(columns) {
		// Declare variable as array.
		gridArray = [];
		// run the loop, based on the "amount of columns parameter".
		for (i = 1; i <= columns; i++) {
			// Calculate: basic percentage formula.
			percentage = (100 / columns * i);
			// Push index and percentage into array.
			gridArray[i] = percentage;
		}
		// Return the complete array.
		return gridArray;
	}
	// Assign the array from the function to a variable for later use.
	columnWidth = columnsPercentage(columnsAmount);

	/**
	 * This function will add CSS values to the grid-classes (width: X %)
	 * and hide classes with non-corresponding names.
	 */
	function queryStyle(className, amount, width) {
		// Grid classes: set the width of all classes.
		for (i = 1; i <= amount; i++) {
			$("."+className+"-"+i).css("width", width[i]+"%");
		};

		// Show or hide files.
		$("[class *= '-hide']").removeClass(function(i, string) {
			// Converts a string with all classes into an array.
			strArray = string.split(' ');
			// Will single out all the classes we want to remove and
			// join the array-values into a string again.
			return strArray.filter(function(singleClass){
				// If the single class don't contain "-hidden",
				// then the variable will be equal to "-1".
				hiddenValidation = singleClass.indexOf("-hidden");
				// If the variable is greater than or equal to "0", return the class-name.
				return hiddenValidation >= 0 ? singleClass : false;
				// .join the array into a string with spaces between the classes we want to remove.
			}).join(' ');
		});

		// Add the class "xxx-hidden" to the elements with "xxx-hide".
		$("."+className+"-hide").addClass(className + "-hidden");
	}

	/**
	 * My jQuery version of a media-query hierarchy:
	 * This will use the browser width to check which classes
	 * that should be instantiated.
	 *
	 * I defined the variable "fdChangeQuery" before the init function.
	 * This variable will be used inside this function, so unnecessary
	 * executions of the queryStyle() function isn't happening.
	 * This is done to improve performance for the client.
	 */
	function mediaQuery() {
		// Width of the browser window.
		browserWidth = $(window).width();

		// Media query hierarchy
		if (browserWidth >= largeScreen) { // Large
			// Check if queryStyle() have been executed in this instance of the query.
			if( fdChangeQuery !== 3 ) {
				// Execute the queryStyle() function, defined earlier in the code.
				queryStyle(largeClass, columnsAmount, columnWidth);
				// Define value for "large query"
				fdChangeQuery = 3;
			}
		} else if (browserWidth >= mediumScreen) { // Medium
			// Check if queryStyle() have been executed in this instance of the query.
			if( fdChangeQuery != 2 ) {
				// Execute the queryStyle() function, defined earlier in the code.
				queryStyle(mediumClass, columnsAmount, columnWidth);
				// Define value for "medium query"
				fdChangeQuery = 2;
			}
		} else if (browserWidth < mediumScreen) { // Small
			// Check if queryStyle() have been executed in this instance of the query.
			if( fdChangeQuery != 1 ) {
				// Execute the queryStyle() function, defined earlier in the code.
				queryStyle(smallClass, columnsAmount, columnWidth);
				// Define value for "small query"
				fdChangeQuery = 1;
			}
		}
	}

	// Init the mediaQuery on load.
	mediaQuery();
	// Init the mediaQuery on browser resize.
	$(window).resize(function() {
		mediaQuery();
	});
}