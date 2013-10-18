Introduction
===

I started developing this small jQuery plugin (5kb) to have an easy to use set of semantics, without the need to set up SASS or Less. You're forced to define all breakpoin classes for the responsive markup (or set a hide-class). I chose to do it like this, so you're forced to think about your elements in all the breakpoints. - This decision is based on the founding idea of the plugin as a wireframe tool, but have since proven itself worthy for full projects too, after some efficiency changes were made.

The idea came when I discussed workflow with a friend and how easy it would be to share wireframes with other people or teams, since it would be a more flexible approach to ex: Bootstrap or Zurb Foundation's repsonsive design sematics.

*Disclaimer: if you and/or your team are using SASS or Less, then this plugin won't most likely be your best choice (but still a viable solution).*


Semantics
---
There are up to 3 breakpoints available which are called *small*, *medium* and *large*. If you only want 2 breakpoints, simply leave out *large* in the initialization.

	<div class="row">
		<div class="small-12 medium-6 large-4">Column 1</div>
		<div class="small-12 medium-6 large-4">Column 2</div>
		<div class="small-12 medium-6 large-4">Column 3</div>
	</div>

**Row:** You define a row, which also works as a clearfix. Rows will by default use the parents width as 100%.

**Columns:** Based on the example above (12-grid):

- .small-12 => will fill the screen 100%.
- .medium-6 => will fill the screen 50%.
- .large-4 => will fill the screen 33%.


Installation
---
**Includes**

	<link href="flex-duck.css" rel="stylesheet">
	<script src="flex-duck.js"></script>

**Initialization**

	<script>
		$(document).ready(function() {
			// Example:
			// initFlexDuck(12, 550, 900);
			initFlexDuck(grid, medium, large);
		});
	</script>

**Grid:** Amount of grid-columns.

**Medium:** The min-width for the medium query.

**Large:** The min-width for the large query.

*Small: (Will be used from width: 0 and up to the width of medium).*

Other functions
---
**.push:** will "push" elements *(for the best understanding of this, check out the index.html file for a demo).*

**.small-hide:** will hide the element when the screen is "small".

**.medium-hide:** will hide the element when the screen is "medium".

**.large-hide:** will hide the element when the screen is "large".


License:
---
MIT