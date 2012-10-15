$(function() {
    //Adding TODO job list
    $(".toggle_div").delegate("img.img_task","click", function(){
        add_todo_container = $('<div></div>');
        add_todo_container.attr('id','add_todo_container');

        var input_text = $("<input/>").attr("text","textbox").attr("id","text").attr("class","text_class");
        var new_todo = $("<div/>").attr("id","new_todo");
        input_text.val("Add a new ToDo here");
        //console.log($(this).closest(".emp_todo").text());
        input_text.appendTo(new_todo);

        image_div = $("<div></div>");
        image_div.attr("class","save");
        img_save = $('<img />');
        img_save.attr('src','save.png');
        img_save.attr('class','save_class');
        image_div.append(img_save);

        image_delete_div = $("<div></div>");
        image_delete_div.attr("class","delete");
        img_delete = $('<img />');
        img_delete.attr('src','cross_circle.png').attr("class","remove_job");
        image_delete_div.append(img_delete);

        add_todo_container.append(new_todo).append(image_div).append(image_delete_div);
        var todo_div = $(this).parent();
        add_todo_container.appendTo(todo_div);

        console.log("askn");
        console.log($(this).parent().find("span").attr("class","hidden"));
        
        if($(this).parent().children().length == 5) //div.emp_todo
        $(this).parent().css("overflow","scroll");

        save_edit();
    });
    
    //Deleteing ToDo
    $(".toggle_div").delegate("img.remove_job","click",function(){
        if($(this).closest(".emp_todo").children().length == 3){    //div.emp_todo
            $(this).closest(".emp_todo").find("span").removeClass("hidden");
        }
        console.log($(this).parent().parent().remove());
        
    });

    //Collapsing all div
    $("#todos img.collapse").click(function(){
        $(".toggle_div").slideUp();
    });

    //Expanding all div
    $("#todos img.expand").click(function(){
        $(".toggle_div").slideDown();
    });
});
function save_edit(){
    $(".toggle_div").find("img.save_class").toggle(function() {
        $(this).attr('src', "edit.png");
        $(this).parent().prev().children('.text_class').attr('disabled', "disabled");
    },
    function(){
        $(this).attr('src', "save.png");
        $(this).parent().prev().children('.text_class').removeAttr("disabled");
        //if()
    });
}