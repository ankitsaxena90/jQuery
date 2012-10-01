$(document).ready(function(){
	// (i) Set the value of the search input to the text of the label element
	var label_text = $('label[for="q"]').text();
	console.log($("#search input[name='q']").val(label_text));




	// (ii) Add a class of "hint" to the search input
	console.log($("#search input[name='q']").addClass("hint"));



	
	// (iii) Remove the label element
	$("#search label[for='q']").detach();
	



	// (iv) Bind a focus event to the search input that removes the hint text and the "hint" class
	$("#search input[name='q']").bind("focus",function() { $(this).removeAttr("value").removeClass("hint") });
		



	// (v) Bind a blur event to the search input that restores the hint text and "hint" class if no search text was entered
	$("#search input[name='q']").bind("blur",function() { $(this).val(label_text).addClass("hint")});

});