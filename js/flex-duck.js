/**
 * ===========================================
 *	FLEX DUCK
 * ===========================================
 */

function initFlexDuck(gridColumns, medium, large) {
	// Make sure it's Integers and pass the variable as null if it isn't set.
	gridColumns = parseInt(gridColumns) || null;
	medium 		= parseInt(medium) 		|| null;
	large 		= parseInt(large) 		|| null;

	// Row: set width to 100% and clear fix at the end of each row.
	$(".row").css({
		"width": "100%",
		"-webkit-box-sizing": "border-box",
		"-moz-box-sizing": "border-box",
		"box-sizing": "border-box"
	}).after('<div style="clear:both; height:0;"></div>');

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

	// The "media queries"
	function displayQueryClasses() {
		// Width of the browser window
		windowWidth = $(window).width();

		// Media query hierarchy
		if (windowWidth >= large) {
			// console.log("large");
			largeClass = $("[class*=large-]");
			$(".medium-hide").addClass('small-hidden');
		}
		else if (windowWidth >= medium) {
			// console.log("medium");
			$(".small-hide").addClass('small-hidden');
			// Add styles for the queries
	$(".small-hidden").css("cssText", "display: none !important");
		}
		else {
			$(".small-hide").removeClass("small-hidden");
			console.log("small");
		}
	}

	// Initiate the function on load
	displayQueryClasses();

	// Initiate the function when the windows is being resized.
	$(window).resize(function() {
		displayQueryClasses();
	});
}