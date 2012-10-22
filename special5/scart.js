var product_data;
$(function(){
    product_data = [{       "id" : "0",
                            "name": "Apple Macbook pro MA46121LLA/15.4 Notebook PC",
                            "category": "computers",
                            "description": "The intel core duo power is actually two processors built into a single chip",
                            "price": 2600.00,
                            "quantity": 1,
                            "url":"products/product1.jpg"
                        },

                        {   "id" : "1",
                            "name": "Sony VAIO 11.10 Notebook PC",
                            "category": "Computers",
                            "description": "Weighing in at just an amazing 2.84 pounds and offering a sleek, durable carbon-fiber case",
                            "price": 2400.00,
                            "quantity": 1,
                            "url":"products/product2.jpg"
                        },

                        {   "id" : "2",
                            "name": "Canon Digital Rebel XT 8 MP Digital SLR camera",
                            "category": "Cameras",
                            "description": "Canon EOS Digital Rebel XT SLR adds resolution,speed in its class",
                            "price": 550.00,
                            "quantity": 1,
                            "url":"products/product3.jpg"
                        },
                        {   "id" : "3",
                            "name": "Headphone with mic",
                            "category": "Accessories",
                            "description": "Description about Headphone",
                            "price": 150.00,
                            "quantity": 1,
                            "url":"products/product4.jpg"
                        },

                        {   "id" : "4",
                            "name": "Samsung Galaxy S3",
                            "category": "Mobile Phones",
                            "description": "Description about Samsung Galaxy S3.",
                            "price": 2000.00,
                            "quantity": 1,
                            "url":"products/product5.jpg"
                        }]
    //Add products from the jSON object to the Frame containing all Products
    addProducts();


    //Displays Product Frame and hide MyCart
    $("#products").click(function(){
        $("#items_list").removeClass("hidden");
        $("#myCartDiv").addClass("hidden");
    });

    //Displays MyCart and hides the Products Frame
    $("#mycart").click(function(){
        $("#items_list").addClass("hidden");
        $("#myCartDiv").removeClass("hidden");
    });

    //On click event of Add_To_Cart Button- pass product_id and quantity from quantity field to addItemsInCart function
   $(".addToCart").click(function(){
        var quantity = $(this).prev(".qty_class").val();
        var product_id = $(this).closest(".item_node").attr("id");
        addItemsInCart(product_id, quantity);
    });


   //Executes on changing quantity field in Cart
   $(".text_class").live("change",function(){
        var new_qty = $(this).val(); 
        var product_id = $(this).closest(".item_class").attr("id");
        var p_price = items[product_id].price;
        updateSubtotal(product_id, p_price, new_qty);
    });

   //Call removeproduct function when remove button is clicked
   $(".remove_btn").live("click",function(){
        removeProduct($(this).closest(".item_class").attr("id"));
   });

   $("#total_box").val("");
});

//Add Products from json to the Products Frame
function addProducts(){
    Object.keys(product_data).forEach(function(key) {

        item_node = $("<div></div>").attr("class","item_node").attr("id",product_data[key].id);
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
var items = []; //Array conatining Products

//Add items in the cart
function addItemsInCart(product_id, quantity){
    var cart_items = new Object();              //Add Products to 'items' array
    console.log(product_id);
    cart_items.id = product_id;
    cart_items.name = product_data[product_id].name;
    cart_items.url = product_data[product_id].url;
    cart_items.price = product_data[product_id].price;
    cart_items.quantity = quantity;
    cart_items.subtotal = product_data[product_id].price * quantity;

    //Check if the product is already present in the 'items array' (sends product-id to the lookup function)
    if( !lookup( cart_items.id ) ) {
        items.push(cart_items);
        displayMyCart(items); 
    }
}

//Check if item is already present in the cart
function lookup( id ) {
    for(var i = 0, len = items.length; i < len; i++) {
        if( items[ i ].id == id )
            return true;
    }
    return false;
}

//display the products contained in the items array(products contained in cart)
function displayMyCart(){
    $("#myCartDiv").empty();
    $.each(items, function(index, value) {
        product_span = $("<div></div>").attr("class","item_class").attr("id",index);

        image_span = $("<span></span>").attr("src",value.url);
        product_img = $('<img />').attr('src',value.url).attr("class","cart_image");
        image_span.append(product_img);

        title_span = $("<span></span>").text(value.name).attr("class","myCartTitle");
        image_span.append(title_span)

        price_div = $("<span></span>").text(value.price).attr("class","price_class");

        quantity_span = $("<span></span>").attr("class","qty");
        var input_text = $("<input/>").attr("text","textbox").attr("class","text_class").val(value.quantity);
        quantity_span.append(input_text);
        price_div.append(quantity_span)

        subtotal_span = $("<span></span>").text(value.subtotal).attr("class","subtotal_class");
        var remove_button = $("<input type='button' value='Remove'>");
        remove_span = $('<span></span>').attr("class","remove_btn").append(remove_button);
        subtotal_span.append(remove_span);

        product_span.append(image_span).append(price_div).append(subtotal_span);
        $('#myCartDiv').append(product_span);
    });

$("#item_count").text(items.length);    //Updates the number of items present in Cart
total();
}


//Calculates the total price
function total(){
    var total = 0;
    $.each(items, function(index, value){
        total += items[index].subtotal;
    });
    $("#total_box").val(total);
}

function updateSubtotal(product_id, p_price, qty){
    var new_subtotal = p_price*qty;
    items[product_id].quantity = qty;
    items[product_id].subtotal = new_subtotal;
    total();
    displayMyCart();
}

//get index of the cart(items array)
function removeProduct(index){
    items.splice(index,1);
    total();
    displayMyCart();
}