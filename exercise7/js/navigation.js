$(document).ready(function(){
	$("#nav li").hover(function(){ console.log($(this).addClass("hover")); }, 
	function(){ $(this).removeClass("hover") });
});
