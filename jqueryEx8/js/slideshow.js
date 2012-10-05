   /* slide_show = $('#slideshow');
    $('body').prepend(slideshow);
	$("<span> Navigation Area</span>").attr("id","nav_id").insertBefore("#slideshow");
	$("#nav_id").css("color","red");
	var no_of_images = $("#slideshow li img").length;
	$("#nav_id").html("Total Number of Images are : "+ no_of_images);

    $("#slideshow li").hide();*/


    /*$(function(){
        $("#slideshow").children().eq(1).show().fadeOut(3000);
        var i = 1;
        var intr = setInterval(function(){
        $("#nav_id").text("Image "+ (i+1) +" of "+no_of_images);
        $("#slideshow li ").eq(i++).fadeIn(1000).delay(1000).fadeOut(1000);
        if(i == 3)
            i = 0;
    },3005);
  });*/
  /*  $(function(){
        $("#slideshow").children().eq(1).show().fadeOut(1500);
        var i = 1;
        var intr = setInterval(function(){
            if(i <= 2){
            $("#nav_id").text("Image "+ (i+1) +" of "+no_of_images);
            //$("#slideshow li ").eq(i++).fadeIn(1000).delay(1000).fadeOut(1000);
            $("#slideshow").find('li:visible').fadeOut(400, function() {

                $("#slideshow").find('li:nth-child(' + i + ')').fadeIn(1500);
            });
            i++
        }
        if(i > 2)
                i = 0;
                
        },2000);
  });*/
var no_of_images = 0, slide_show;
$(document).ready(function(){ 
    $("#slideshow").insertBefore($("body").children(":first"));
    slide_show = $('#slideshow');
    $("#slideshow li").hide();
    $("<span> Navigation Area</span>").attr("id","nav_id").insertBefore("#slideshow");
    no_of_images = $("#slideshow li img").length;
    $("#nav_id").css("color","red");
    $("#nav_id").html("Total Number of Images are : "+ no_of_images);  
    $('#slideshow li').eq(0).fadeIn(2000);
    setInterval('imgSlideshow()', 3000);
});

var i = 1;
function imgSlideshow() {
    if(i <= no_of_images) {     //3
        slide_show.find('li:visible').fadeOut(1000, function() {
            $("#nav_id").text("Image "+ (i) +" of "+no_of_images);
            slide_show.find('li:nth-child('+i+')').fadeIn(1500); 
        });
     i++;
    }
    if(i == no_of_images+1)
        i = 1;
}