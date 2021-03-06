$(document).ready(function(){
	
	// (i) Select all of the image elements on the page; log each image's alt attribute.
	$('img').each(function(index) {
    	console.log(index + ': ' + $(this).attr("alt"));
	});



	// (ii) Select the search input text box, then traverse up to the form and add a class to the form.
	$('label[for="q"]').closest('form').addClass("demoClass");
	



	// (iii) Select the list item inside #myList that has a class of "current" and remove that class from it; add a class of "current" to the next list item.
	$('#myList li.current').removeClass("current").next().addClass("current");



	// (iv) Select the select element inside #specials; traverse your way to the submit button.
	console.log($("#specials select").parent().next().find(":submit").css("backgroundColor","red"));
	
	

	// (v) Select the first list item in the #slideshow element; add the class "current" to it, and then add a class of "disabled" to its sibling elements.
	console.log($("#slideshow li:first-Child").addClass("current").siblings().addClass("disabled"));
});
