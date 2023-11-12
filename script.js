/*Build a background color switcher*/

/*
Step 1: Create an html document that will use the select dropdown for color options
Step 2: Use css to make any styling to the html doc
Step 3: Define a javascript function that will change the color of the background when a selection is made.
*/


/*
First, I used the select dropdown element that will have each color choice and an Id attribute 
that will be used when the function is called in javascript.

Next, I styled dropdown so it would stand out when hovering or it.

After that, I used the getElementById method to refer to the element in the html doc. I also used the addEventListener method 
to call the function to change the background color to the currently selected value from the dropdown.
*/




document.getElementById("color-select").addEventListener("change", function () {
  document.body.style.backgroundColor = this.value;
});
	
