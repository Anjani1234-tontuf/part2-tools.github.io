## Synopsis

This is a simple app that generates a random name from a list of girl names pulled from a listing online. The list is stored in an array. When a user clicks the generate name button, a random number is generated and used as the index on the array. The name is then dynamically inserted into the DOM. Users can see the previous name, if they were too quick to hit generate new. A name can be 'kept' (currently, only kept during the session) while the search continues for a better one. The name can be previewed with a known last name and middle name.

## Code Example

```javascript
function keepName() {
	// Creates new name to keep entry
	var keepNameEntry = document.createElement('p');
	// Define the innerHTML of the keepNameEntry as the value of the current Random Name
	var nameToKeep = randomNameHolder.innerHTML;
	// Create a text node, for the text
	var keepNameEntryText = document.createTextNode(nameToKeep);
	// append text node to the new p element
	keepNameEntry.appendChild(keepNameEntryText);

	// Add CSS class of .keep to the p element
	keepNameEntry.className = "keep";

	// Create a counter for the number of p elements added
	var countElt = document.getElementsByClassName('keep');
	var count = countElt.length;
	// If more than 6 entries added, alert user that they have reached max
	if (count > 6) {
		alert("You have reached the max limit");
	} else {
		keepNameHolder.appendChild(keepNameEntry);
	}
}
```

## Motivation

In a fit of indecision and inability to find a good name for our second girl, I decided I needed an app to help me. All the lists online were too long, and too difficult to search through. I liked the idea of something that would randomly generate names.

## Installation

Simply open the .html file in any browser or mobile device.

## TODO

1: Remove all Global variables
2: Convert to an MV* framework for the app, such as Knockout