$(function(){
	$("#mycart").click(function(){
		$("#items_list").addClass("hidden");
		$("#myCartDiv").removeClass("hidden");
	});
	$(".AddToCart").click(function(){
		var item = $(this);
		addToMyCart(item);
	});
	$("#products").click(function(){
		$("#items_list").removeClass("hidden");
		$("#myCartDiv").addClass("hidden");
	});
	
	$(".remove_btn").live("click",function(){
		removeProduct($(this));
	});

	$(".text_class").live("change",function(){
		var item_ref = $(this);
		var new_qty = $(this).val();
		var p_price = $(this).closest(".item_class").find(".price_class").text();
		updateSubtotal(item_ref, new_qty, p_price);
		total();
	});
});
function addToMyCart(item){
	var qty = item.prev().val();	//get value of quantity
	var price = item.closest(".item_node").children(".itemDiv2").find(".price").html();	//get price of product
	var title_text = item.closest(".item_node").children(".itemDiv2").find(".title").html();	//get title of product
	var img_attr = item.closest(".item_node").children(".itemDiv1").find(".ProductImage").attr('src');	//get src of image
	var product_id = item.closest(".item_node").attr("id");		//get id of product

	product_span = $("<div></div>").attr("id",product_id).attr("class","item_class");

	image_span = $("<span></span>").attr("src",img_attr);
	product_img = $('<img />').attr('src',img_attr).attr("class","cart_image");
	image_span.append(product_img);

	title_span = $("<span></span>").text(title_text).attr("class","myCartTitle");

	price_div = $("<span></span>").text(price).attr("class","price_class");

	quantity_span = $("<span></span>").attr("class","qty");
	var input_text = $("<input/>").attr("text",qty).attr("class","text_class").val(qty);
	quantity_span.append(input_text);

	var subtotal_price = price*qty;
	subtotal_span = $("<span></span>").text(subtotal_price).attr("class","subtotal_class");

	var remove_button = $("<input type='button' value='Remove'>");
	remove_span = $('<span></span>').attr("class","remove_btn").append(remove_button);

	product_span.append(image_span).append(title_span).append(price_div).append(quantity_span).append(subtotal_span).append(remove_span);
	$('#myCartDiv').append(product_span);
	total();
	updateMyCart();
}

// Calculates Total
function total(){
	var total_price = 0, p_price_str, p_price_int;
	$("#myCartDiv").children(".item_class").each(function(){
		p_price_str = $(this).find(".subtotal_class").html();
		p_price_int = parseInt(p_price_str);
		total_price += p_price_int;
		$("#total_box").val(total_price);
	});
}

//Remove the product from the cart
function removeProduct(this_item){
	this_item.closest(".item_class").remove();
	total();
	updateMyCart();
}

//Update subtotal when the quantity is changed in the Cart
function updateSubtotal(this_item, p_price, qty){
	var new_subtotal = p_price*qty;
	this_item.closest(".item_class").find(".subtotal_class").text(new_subtotal);
}

// update the number of items present in the cart
function updateMyCart(){
	var items_in_cart = $("#myCartDiv").children(".item_class").length;
	$("#item_count").text(items_in_cart);
}