var filter_attribute;
var this_item;
var productArray = new Array();
$(function(){
	$.getJSON('product.json',function(data){
		var items = [];
		
		$.each(data,function(key,val){
			var color = val.color;
		   $("<li data-color = '"+val.color+"' data-value= '" +val.brand+ "' data-availability='"+val.sold_out+"'><img src=\"images/" + data[key].url+ "\"></li>").appendTo("#products");
			
			//Adding Category 'Brand'
			var category1 = "brand";
			addCategory($(this),category1);

			//Adding category 'Color'
			var category2 = "color";
			addCategory($(this),category2);
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

function addCategory(this_item,str){
	var filter = this_item.attr(str);
	if( jQuery.inArray(filter, productArray) == -1 ){
		var checkbox = $('<span><input type="checkbox" value="'+filter+'" /> '+filter+'</span>');
		var div = '#' +str+ '_filter';
		checkbox.appendTo(div);
		productArray.push(filter);
	}
}

var brand_filter_count = 0, color_filter_count = 0, available_filter_count = 0;
function brandFilter(this_item){
	filter_attribute = this_item.attr("value");
	if(this_item.is(":checked")){
		brand_filter_count++;
		$('li[data-value="'+filter_attribute+'"]').addClass("brand_class");
		displayProducts();
	}
	else{
		$('li[data-value="'+filter_attribute+'"]').removeClass("brand_class");
		brand_filter_count--;
		displayProducts();	
	}	
}

function colorFilter(this_item){
	filter_attribute = this_item.attr("value");
	if(this_item.is(":checked")){
		color_filter_count++;
		$('li[data-color="'+filter_attribute+'"]').addClass("color_class");
		displayProducts();
	}
	else{
		$('li[data-color="'+filter_attribute+'"]').removeClass("color_class");
		color_filter_count--;
		displayProducts();	
	}
}

function availProducts(this_item){
	if(this_item.is(":checked")){
		console.log($('li[data-availability="0"]').addClass("inStock"));
		available_filter_count = 1;
		displayProducts();
	}
	else{
		$('li[data-availability="0"]').removeClass("inStock");
		available_filter_count = 0;
		displayProducts();
	}	
}
function displayProducts(){
	$("#products li").hide();
	switch(true){
		//Only brand filter checkbox is selected
 		case (brand_filter_count > 0 && color_filter_count == 0 && available_filter_count == 0) : $('li.brand_class').show(); 
 		break;

 		//Only Color filter checkbox is selected
 		case (brand_filter_count == 0 && color_filter_count > 0 && available_filter_count == 0) : $('li.color_class').show(); 
 		break;

 		//Only Availability option is selected
 		case (brand_filter_count == 0 && color_filter_count == 0 && available_filter_count == 1) : $('li.inStock').show(); 
 		break;

 		//when multiple filters are selected
 		case (brand_filter_count && color_filter_count > 0 && available_filter_count == 0) : $('li.brand_class.color_class').show(); 
 		break;
 		case (brand_filter_count && available_filter_count > 0 && color_filter_count == 0) : $('li.brand_class.inStock').show(); 
 		break;
 		case (color_filter_count && available_filter_count > 0 && brand_filter_count == 0) : $('li.brand_class.inStock').show(); 
 		break;
 		//Checking whether item is available or sold out
 		case (brand_filter_count && available_filter_count && color_filter_count > 0): $('li.brand_class.color_class.inStock').show(); 
 		break;
 		default : $("#products li").show();
        break;
	}
}
