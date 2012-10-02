$(document).ready(function(){
	$("div#blog h3").bind("click",function(e){ 
		e.preventDefault();
		console.log($("div#blog p.excerpt").slideUp("slow"));
		console.log($(this).siblings('.excerpt').slideDown("slow"));
	});
});