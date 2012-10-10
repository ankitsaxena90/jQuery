$(document).ready(function(){
	$.getJSON('product.json',function(data){
		var items = [];
		var productArray = new Array();
		$.each(data,function(key,val){
			var color = val.color;
		   $("<li data-color = '"+val.color+"' data-value= '"+val.brand+"' data-availability='"+val.sold_out+"'><img src=\"images/" + data[key].url+ "\" /></li>").appendTo("#products");
			
			
			//Adding filter 'Brand'
			var brand = $(this).attr('brand');
			if( jQuery.inArray(brand, productArray) == -1 ){
				var checkbox = $('<span><input type="checkbox" value="'+brand+'"/> '+brand+'</span>');
				checkbox.appendTo("#brand_filter");
				productArray.push(brand);
			}

			//Adding filter 'Color'
			var color = $(this).attr('color');
			if( jQuery.inArray(color, productArray) == -1 ){
				var checkbox = $('<span><input type="checkbox" value="'+color+'" /> '+color+'</span>');
				checkbox.appendTo("#color_filter");
				productArray.push(color);
			}
		});	
	});	

	var filter_attribute = new Array();
	$("#brand_filter").delegate("input[type='checkbox']", "click", function(){
		//if($(this).is(":checked")){alert("unchecked");}
		var attribute = $(this).val();
		filter_attribute.push(attribute);
		if($("#color_filter,#avail").find("input[type='checkbox']").is(":checked")){
			var brnd = $('li[data-value="'+attribute+'"]').filter(":visible");
			console.log(brnd.show());
			$("#products li").not(brnd).hide();
		}
		else{console.log($("#products li").hide());
			for(var i=0; i<(filter_attribute).length; i++){	
				console.log($('li[data-value="'+filter_attribute[i]+'"]').show());	
			}
		}
		//}
	});

	var color_array = new Array();
	$("#color_filter").delegate("input[type='checkbox']","click", function(){
		var selected_color = $(this).val();
		color_array.push(selected_color);
		if($("#brand_filter,#avail").find("input[type='checkbox']").is(":checked")){
			console.log("visible");
			var clr = $('li[data-color="'+selected_color+'"]').filter(":visible");
			console.log(clr.show());
			$("#products li").not(clr).hide();
		}
		else{ 
			console.log($("#products li").hide());
			for(var i=0; i<color_array.length; i++){
			console.log($('li[data-color="'+color_array[i]+'"]').show());
			}
		}
	});

	$("#avail").click(function(){
		if($("#brand_filter,#color_filter").find("input[type='checkbox']").is(":checked")){
			var avail_products = $('li[data-availability="0"]').filter(":visible").show();
			console.log(avail_products.show());
			$("#products li").not(avail_products).hide();
		}
		else{
			console.log($("#products li").hide());
			console.log($('li[data-availability="0"]').show());
		}
	});
});

