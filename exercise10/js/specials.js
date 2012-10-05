$(document).ready(function(){
	var day_title = $("<title />");
	var $new_div = $("<div id='div_id'></div>").insertAfter($("#specials form")); 
  	var day_text = $("<p></p>");
  	var day_image = $("<img />");
  	$new_div.append(day_title).append(day_text).append(day_image);
	$("#specials select").change(function(){
		var selected_day = $(this).val();
		console.log(selected_day);
		$.ajax({
			url:'data/specials.json',
			type:'Get',
      		cache: true,
			dataType:'json',
			success : function(response){

				data = response;
				var day = $(data).attr(selected_day);
    			$("#div_id title").text($(day).attr("title"));
         		$("#div_id").css("color",day.color)
          		$("#div_id p").text($(day).attr("text"));
          		$("#div_id img").attr("src",$(day).attr("image"));
			},
			error : function(xhr, status) {
        		alert('Sorry, there was a problem!');
    		},
    		complete : function(xhr, status) {
        		console.log('The request is complete!');
    		}
		});
	});
  $("#specials form").find("li.buttons").css("backgroundColor","red").remove();
});
