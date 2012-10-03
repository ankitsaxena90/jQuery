$(document).ready(function(){ 
	$("#slideshow").insertBefore($("body").children(":first"));
	$("#slideshow").addClass("fadeStyle");
	$("<span> Navigation Area</span>").attr("id","nav_id").insertBefore("#slideshow");
	$("#nav_id").css("color","red");
	var no_of_images = $("#slideshow li img").length;
	$("#nav_id").html("Total Number of Images are : "+ no_of_images);
	var i = 1;
	$(function(){
    	$("#slideshow").children(":gt(0)").hide();
    	//$("#slideshow").children().eq(1).hide();
    	//$("#slideshow").children().eq(2).hide();
    	setInterval(function(){
    		//console.log(i++);
    		$("#nav_id").text("Image "+ (++i) +" of "+no_of_images);
      		$("#slideshow").children().eq(0).fadeOut()
        	 .next().fadeIn()
        	 .end().appendTo("#slideshow"); 
        	 if(i == no_of_images) 
        	 	i = 0;
        },3000);
	});
});
