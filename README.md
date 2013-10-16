Introduction
===
***This project is currently in development, but still functional.***

I started developing this small jQuery plugin to have an easy to use/understand semantic set of commands, without the need to set up SASS or Less.

The idea came up when I discussed workflow with a friend, and how easy it would be to do wireframes and share them with other people, if there would be a more global and flexible approach to ex: Bootstrap or Zurb Foundation's responsive design semantics.

*Disclaimer: if you and/or your project-team are using SASS or Less, then this plugin won't be your best choice (most likely).*


Semantics
---
There are 3 breakpoints available which are called "small", "medium" and "large".


	<div class="row">
		<div class="small-12 medium-6 large-4">Column 1</div>
		<div class="small-12 medium-6 large-4">Column 2</div>
		<div class="small-12 medium-6 large-4">Column 3</div>
	</div>

**Row:** You define a row, which also works as a clearfix. This row will as a default use the parents width as 100%.

**Columns:** Based on the example above (12-grid):

- Small-12 => will fill the screen 100%.
- Medium-6 => will fill the screen 50%.
- Large-4 => will fill the screen 33%.



Installation
---
	<link rel="stylesheet" href="css/flex-duck.css">
	<script src="js/flex-duck.js"></script>

	<script>
		$(document).ready(function() {
			/**
			 * initFlexDuck(grid, medium, large, max-width);
			 *   Grid:      Amount of grid-columns
			 *   Medium:    The min-width for the medium query
			 *   Large:     The min-width for the large query
			 *   Max-width: If you which to give the row a max-width (null by default)
			 *   Small:     (Will be used from width: 0 and up to the width of medium)
			 */
			initFlexDuck(12, 500, 860);
		});
	</script>

Other functions
---
**.small-hide:** will hide the element when the screen is "small".

**.medium-hide:** will hide the element when the screen is "medium".

**.large-hide:** will hide the element when the screen is "large".


Currently in development
---
- Classes: Inherit widths *(if you don't set a, ex, medium, this element will be hidden when the medium query is being used).*
- More eficiente code.
- Even greater flexibility.
- Semantics.