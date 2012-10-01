$(document).ready(function(){
	// (i) Add five new list items to the end of the unordered list #myList.
	for(var i=1; i<6; i++)
		console.log($('#myList').append('<li> New ListItem '+i+'</li>').css("backgroundColor","yellow"));



	// (ii) Remove the odd list items
	$('#myList li:odd').remove();




	// (iii) Add another h2 and another paragraph to the last div.module
	$('div.module').last().append('<h2> This is the new heading added to the last div </h2>','<p> New para New para New para New para </p>').css("backgroundColor","orange");




	// (iv) Add another option to the select element; give the option the value "Wednesday"
	console.log($('#specials select').append("<option value='Wednesday'>Wednesday</option>"));




	// (v) Add a new div.module to the page after the last one; put a copy of one of the existing images inside of it.
	console.log($("img[alt='fruit']").clone().appendTo($("body").append("<div class='module' id='new_div_id'></div>")).insertAfter("#specials").css("border", "3px solid blue"));
});