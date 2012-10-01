$(document).ready(function(){
	// (i) Hide all of the modules.
	console.log($("div.module").hide());




	// (ii) Create an unordered list element before the first module.
	console.log($("<ul>Modules List </ul>").attr("id","ul_module_id").insertBefore("div.module:first").css("backgroundColor","yellow"));
	



	// (iii) Iterate over the modules using $.fn.each. For each module, use the text of the h2 element as the text for a list item that you add to the unordered list element.
	$("div.module").each(function(){ 
		var module_li = $("<li></li>").attr("id",$(this).attr("id")).text($(this).children(":header").text());
		$("#ul_module_id").append(module_li);
	});




	/*(iv)Bind a click event to the list item that:
			a) Shows the related module, and hides any other modules*/
	$("#ul_module_id li").bind("click",function(){ 
		//console.log($(this).attr("id")) 
		var module_id = $(this).attr("id");
		console.log($("div#"+module_id).show().css("border","3px solid blue"));
		$("div#"+module_id).siblings(".module").hide();


		//b) Adds a class of "current" to the clicked list item
		$("div#"+module_id).addClass("current");


		//c) Removes the class "current" from the other list item
		$("div#"+module_id).siblings(".module").removeClass("current");
	});





	// (v) Finally, show the first tab.
	$("div.module:first").show();
});