$(document).ready(function(){ 
	$("#slideshow").insertBefore($("body").children(":first"));
	$("<span> Navigation Area</span>").attr("id","nav_id").insertBefore("#slideshow");
	$("#nav_id").css("color","red");
	var no_of_images = $("#slideshow li img").length;
	$("#nav_id").html("Total Number of Images are : "+ no_of_images);
    	$("#slideshow li").hide();

    	$(function(){
            $("#slideshow").children().eq(1).show().fadeOut(3000);
            var i = 1;
            setInterval(function(){
            $("#nav_id").text("Image "+ (i+1) +" of "+no_of_images);
            $("#slideshow li ").eq(i++).fadeIn(1000).delay(1000).fadeOut(1000);
            if(i == 3)
             i = 0;
        },3005);
    });
});
