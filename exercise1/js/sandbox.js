$(document).ready(function(){
	// (i) Select all of the div elements that have a class of "module"
	$('div.module').css('backgroundColor','yellow');


	
	// (ii) Come up with three selectors that you could use to get the third item in the #myList unordered list
	$('#myList li:eq(2)').css("backgroundColor","orange");
	$('#myList li:nth-child(3)').css("backgroundColor","orange");
	$("div ul li#myListItem").css("color","blue");




	// (iii) Select the label for the search input using an attribute selector.
	$('label[for="q"]').css('color','green');
	//$("label[for="+$(this).attr('id')+"]").css('fontStyle','italics');



	// (iv) Count number of Hidden Elements
	var hiddenElements = $("body").find(":hidden");
	console.log("Total number of Hidden elements are: "+hiddenElements.length);

	

	// (v) Number of image elements having alt attribute
    	var image_elements = $("img[alt]").length;
    	console.log("Number of image elements having 'alt' attribute are : "+image_elements);



	// (vi) Select all of the odd table rows in the table body.
	$("tr:odd").css("backgroundColor","red");
});
