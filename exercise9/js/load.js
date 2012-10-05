$(document).ready(function(){ 
	$("#blog h3").each(function(){
		//var $blog_heading = $(this);
		$new_div = $("<div></div>").insertAfter($(this));
		$(this).data('div_link',$new_div);
	});
	$("#blog h3").click(function(e){
		e.preventDefault();
		//console.log($(this).find('a').text());
		var href = $(this).find('a').attr('href');
		var tempArray = href.split('#');
		var id = '#' + tempArray[1];
		console.log(id);
		$new_div = $(this).data('div_link');
		console.log($new_div.load("data/blog.html "+id));
	});
});
