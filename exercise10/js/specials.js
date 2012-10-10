var selected_day;
$(document).ready(function(){
	var header = $("<h2></h2>");
	var $new_div = $("<div id='div_id'></div>").insertAfter($("#specials form")); 
  	var day_text = $("<p></p>");
  	var day_image = $("<img />");
  	var run_ajax_once = true;
  	$new_div.append(header).append(day_text).append(day_image);
	$("#specials select").change(function(){
		selected_day = $(this).val();
		console.log(selected_day);
		if(run_ajax_once == true){
		$.ajax({
			url:'data/specials.json',
			type:'Get',
			cache: true,
			dataType:'json',
			success : function(response){
				data = response;
				run_ajax_once = false;
				display_data(data);
				
			},
			error : function(xhr, status) {
        		alert('Sorry, there was a problem!');
    		},
    		complete : function(xhr, status) {
        		console.log('The request is complete!');
    		}
		});
		}else{
			display_data(data);
		}
	});
  $("#specials form").find("li.buttons").css("backgroundColor","red").remove();
});
function display_data(obj){
	var day = $(obj).attr(selected_day);
    $("#div_id h2").text($(day).attr("title"));
    $("#div_id").css("color",day.color);
    $("#div_id p").text($(day).attr("text"));
    $("#div_id img").attr("src",$(day).attr("image"));
}
