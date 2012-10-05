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