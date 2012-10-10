$(function(){
	var i = 1;
	$("#btn").click(function(){
		$new_div = $("<div>New Div</div>");
		$new_div.text(i++);
		$("#stack").prepend($new_div);
	});
	$("#myform").delegate("div", "click", function(){
		$(this).css("backgroundColor","yellow");
	});
	$("#myform").delegate("div:first", "click", function(){
		$("#myform div:first").remove();
	});	
});
