var product_data;
$(function(){
    product_data = [{
                            "name": "Apple Macbook pro MA46121LLA/15.4 Notebook PC",
                            "category": "computers",
                            "description": "The intel core duo power is actually two processors built into a single chip",
                            "price": 2600.00,
                            "quantity": 1,
                            "url":"products/product1.jpg"
                        },

                        {
                            "name": "Sony VAIO 11.10 Notebook PC",
                            "category": "Computers",
                            "description": "Weighing in at just an amazing 2.84 pounds and offering a sleek, durable carbon-fiber case",
                            "price": 2400.00,
                            "quantity": 1,
                            "url":"products/product2.jpg"
                        },

                        {
                            "name": "Canon Digital Rebel XT 8 MP Digital SLR camera",
                            "category": "Cameras",
                            "description": "Canon EOS Digital Rebel XT SLR adds resolution,speed in its class",
                            "price": 550.00,
                            "quantity": 1,
                            "url":"products/product3.jpg"
                        },
                        {
                            "name": "Headphone with mic",
                            "category": "Accessories",
                            "description": "Description about Headphone",
                            "price": 150.00,
                            "quantity": 1,
                            "url":"products/product4.jpg"
                        },

                        {
                            "name": "Samsung Galaxy S3",
                            "category": "Mobile Phones",
                            "description": "Description about Samsung Galaxy S3.",
                            "price": 2000.00,
                            "quantity": 1,
                            "url":"products/product5.jpg"
                        }]
    addProducts();
    $("#mycart").click(function(){
        $("#items_list").addClass("hidden");
        $("#myCartDiv").removeClass("hidden");
    });
    $("#products").click(function(){
        $("#items_list").removeClass("hidden");
        $("#myCartDiv").addClass("hidden");
    });
   $(".addToCart").click(function(){
        getItems($(this).closest(".item_node").attr("id"));
    });
   $(".text_class").live("change",function(){
        var item_ref = $(this);
        var new_qty = $(this).val();
        var item_index = $(this).closest(".item_class").attr("id");
        var p_price = items[item_index].price;
        updateSubtotal(item_index, p_price, new_qty);
    });
   $(".remove_btn").live("click",function(){
        removeProduct($(this).closest(".item_class").attr("id"));
   });
   $(".qty_class").live("change",function(){
        var initial_quantity = $(this).val();
        console.log(initial_quantity);
        var item_index = $(this).closest(".item_node").attr("id");
        console.log(item_index);
        product_data[item_index].quantity = initial_quantity;
   });
   $("#total_box").val("");
});

function addProducts(){
    Object.keys(product_data).forEach(function(key) {

        item_node = $("<div></div>").attr("class","item_node").attr("id",key);
        image_div = $("<div></div>").attr("class","itemDiv1");
        product_image = $('<img />').attr('src',product_data[key].url);
        image_div.append(product_image);

        content_div = $("<div></div>").attr("class","itemDiv2");
        title_span = $("<span></span>").text(product_data[key].name).attr("class","title_class");
        description_span = $("<div></div>").text(product_data[key].description);
        category_span = $("<div></div>").text("Category: "+ product_data[key].category);
        price_span = $('<span></span>').text("Price : " +product_data[key].price);
        content_div.append(title_span).append(description_span).append(category_span).append(price_span);

        quantity_div = $("<div></div>").attr("class","itemDiv3");
        qty_label = $("<label />").text("Quantity");
        input_qty = $("<input />").attr("text","textbox").attr("id","text").attr("class","qty_class").val(product_data[key].quantity);
        add_to_cart_button = $("<input type='button' value='Add to Cart'>").attr("class","addToCart");

        quantity_div.append(qty_label).append(input_qty).append(add_to_cart_button);

        item_node.append(image_div).append(content_div).append(quantity_div);
        $("#items_list").append(item_node);
    });
}
var items = [];
function getItems(item_index){
    if($.inArray(product_data[item_index].name, items) > -1){
        console.log("present");
    }
    var cart_items = new Object();
    cart_items.id = item_index;
    cart_items.name = product_data[item_index].name;
    cart_items.url = product_data[item_index].url;
    cart_items.price = product_data[item_index].price;
    cart_items.quantity = product_data[item_index].quantity;
    cart_items.subtotal = product_data[item_index].price * product_data[item_index].quantity;
    if( !lookup( cart_items.name ) ) {
        items.push(cart_items);
    addToMyCart(items); 
    }
}
function addToMyCart(){
    $("#myCartDiv").empty();
    $.each(items, function(index, value) {
        product_span = $("<div></div>").attr("class","item_class").attr("id",index);

        image_span = $("<span></span>").attr("src",value.url);
        product_img = $('<img />').attr('src',value.url).attr("class","cart_image");
        image_span.append(product_img);

        title_span = $("<span></span>").text(value.name).attr("class","myCartTitle");

        price_div = $("<span></span>").text(value.price).attr("class","price_class");

        quantity_span = $("<span></span>").attr("class","qty");
        var input_text = $("<input/>").attr("text","textbox").attr("class","text_class").val(value.quantity);
        quantity_span.append(input_text);

        subtotal_span = $("<span></span>").text(value.subtotal).attr("class","subtotal_class");

        var remove_button = $("<input type='button' value='Remove'>");
        remove_span = $('<span></span>').attr("class","remove_btn").append(remove_button);

        product_span.append(image_span).append(title_span).append(price_div).append(quantity_span).append(subtotal_span).append(remove_span);
        $('#myCartDiv').append(product_span);
    });
$("#item_count").text(items.length);
total();
}
//Check if item is already present in the cart
function lookup( name ) {
    for(var i = 0, len = items.length; i < len; i++) {
        if( items[ i ].name == name )
            return true;
    }
    return false;
}

//Calculates the total price
function total(){
    var total = 0;
    $.each(items, function(index, value){
        total += items[index].subtotal;
    });
    $("#total_box").val(total);
}

function updateSubtotal(item_index, p_price, qty){
    var new_subtotal = p_price*qty;
    items[item_index].quantity = qty;
    items[item_index].subtotal = new_subtotal;
    total();
    addToMyCart();
}
function removeProduct(index){
    items.splice(index,1);
    total();
    addToMyCart();
}