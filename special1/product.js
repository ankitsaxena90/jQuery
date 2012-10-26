var productArray = new Array();
var product_items;
var data;
var filter;
$(function(){
    product_data = [];
    
    $.ajax({
        url: 'product.json',
        type: 'GET',
        dataType: "json",
        success: function(data){

            $.each(data, function(index, product) {
                product_data.push(product);

                //Adding Category 'Brand'
                var category1 = "brand";
                addCategory($(this),category1);

                //Adding category 'Color'
                var category2 = "color";
                addCategory($(this),category2);

            });

            //Displays the products
            displayProducts(product_data);
        }
    });
    //Call function filters() on selecting any checkbox
    $('input:checkbox').live('click', filters);


    $("#avail_products_id").click(function(){
        availProducts($(this));
    });

    $("#avail_products_id").removeAttr("checked");

    
  
});

function addCategory(this_item,category){
    var filter_option = this_item.attr(category);
    if( jQuery.inArray(filter_option, productArray) == -1 ){
        var checkbox = $('<span><input type="checkbox" value="'+filter_option+'" /> '+filter_option+'</span>');
        var category_div = '#' +category+ 's';
        checkbox.appendTo(category_div);
        productArray.push(filter_option);
    }
}

//Displays the products
function displayProducts(data) {  
    $("#products li").remove();
    $.each(data, function(index, product) {    
       $("<li data-color = '"+product.color+"' data-value= '" +product.brand+ "' data-availability='"+product.sold_out+"'><img src=\"images/" + product.url+ "\"></li>").appendTo("#products");  
    });
}

//Adds or remove class from Available option
function availProducts(this_item){
    if(this_item.is(":checked")){
        this_item.addClass("inStock");
    }
    else {
        this_item.removeClass("inStock");
        this_item.addClass("outOfStock");
    }
}

function filters() {
    createFilteredProductsList();

    product_items = product_data;
    product_items = filter.brand(product_items);
    product_items = filter.color(product_items);
    product_items = filter.availability(product_items);

    
    displayProducts(product_items);
}

//creates a hashmap containing the filtered attributes (values of the checkboxes which are selected)
function createFilteredProductsList(){
    filter = {
        brand: function(product_items) {    
            var brands_selected = $.map( $('#brands input:checked'), function(selected_filter) {
                    return $(selected_filter).val();
                });
      
                if(brands_selected.length > 0) {
                    product_items = $.grep(product_items, function(product) {
                return $.inArray(product.brand, brands_selected) !== -1;
            });
        }
      
        return product_items;
    },
    
    color: function(product_items) {
            var colors_selected = $.map( $('#colors input:checked'), function(selected_filter) {
                return $(selected_filter).attr("value");
            });
      
            if(colors_selected.length > 0) {
                product_items = $.grep(product_items, function(product) {
                return $.inArray(product.color, colors_selected) !== -1;
            });
        }
        return product_items;
    },  
    availability: function(product_items) {
            if($("#avail_products_id").hasClass("inStock")){
                product_items = $.grep(product_items, function(product) {
                    return product.sold_out == '0';
                });
            }  
            return product_items;
        }
    }
}