var filter_attribute;
var this_item;
$(function(){
	$.getJSON('product.json',function(data){
		var items = [];
		var productArray = new Array();
		$.each(data,function(key,val){
			var color = val.color;
		   $("<li data-color = '"+val.color+"' data-value= '" +val.brand+ "' data-availability='"+val.sold_out+"'><img src=\"images/" + data[key].url+ "\"></li>").appendTo("#products");
			
			//Adding filter 'Brand'
			var brand = $(this).attr('brand');
			if( jQuery.inArray(brand, productArray) == -1 ){
				var checkbox = $('<span><input type="checkbox" value="'+brand+'" /> '+brand+'</span>');
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
	$("#brand_filter").delegate("input[type='checkbox']", "click", function(){
		brandFilter($(this));
	});

	$("#color_filter").delegate("input[type='checkbox']", "click", function(){
		colorFilter($(this));
	});

	$("#avail_products_id").click(function(){
		availProducts($(this));
	});
	$("#avail_products_id").removeAttr("checked");	
});

var flag1 = 0, flag2 = 0, flag3 = 0;
function brandFilter(this_item){
	filter_attribute = this_item.attr("value");
	if(this_item.is(":checked")){
		flag1++;
		$('li[data-value="'+filter_attribute+'"]').addClass("brand_class");
		displayProducts();
	}
	else{
		$('li[data-value="'+filter_attribute+'"]').removeClass("brand_class");
		flag1--;
		displayProducts();	
	}	
}

function colorFilter(this_item){
	filter_attribute = this_item.attr("value");
	if(this_item.is(":checked")){
		flag2++;
		$('li[data-color="'+filter_attribute+'"]').addClass("color_class");
		displayProducts();
	}
	else{
		$('li[data-color="'+filter_attribute+'"]').removeClass("color_class");
		flag2--;
		displayProducts();	
	}
	
}

function availProducts(this_item){
	if(this_item.is(":checked")){
		console.log($('li[data-availability="0"]').addClass("inStock"));
		flag3 = 1;
		displayProducts();
	}
	else{
		$('li[data-availability="0"]').removeClass("inStock");
		flag3 = 0;
		displayProducts();
	}	
}

function displayProducts(){
	$("#products li").hide();
	if(flag1 >= 1 && flag2 == 0 && flag3 == 0) $('li.brand_class').show();
	if(flag1 == 0 && flag2 >= 1 && flag3 == 0) $('li.color_class').show();
	if(flag1 == 0 && flag2 == 0 && flag3 == 1) $('li.inStock').show();
	if(flag1 && flag2 >= 1 && flag3 == 0) $('li.brand_class.color_class').show();
	if(flag1 && flag3 >= 1&& flag2 == 0) $('li.brand_class.inStock').show();
	if(flag2 && flag3 >= 1 && flag1 == 0) $('li.color_class.inStock').show();
	if(flag1 && flag2 && flag3 > 0) $('li.brand_class.color_class.inStock').show();
}