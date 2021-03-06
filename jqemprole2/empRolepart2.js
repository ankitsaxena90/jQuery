$(function() {
    //Adding TODO job list
    $(".toggle_div").delegate("img.img_task","click", function(){
        
        addTodoJob($(this));
        save_edit();
    });
    
    //Deleteing ToDo
    $(".toggle_div").delegate("img.remove_job","click",function(){
        if($(this).closest(".emp_todo").children().length == 3){    //div.emp_todo
            $(this).closest(".emp_todo").find("span").removeClass("hidden");
        }
        console.log($(this).closest(".todo_job").remove());
        
    });

    //Collapsing all div
    $("#todos img.collapse").click(function(){
        $(".toggle_div").slideUp();
    });

    //Expanding all div
    $("#todos img.expand").click(function(){
        $(".toggle_div").slideDown();
    });

    //search no of todos
    $("#search_button").click(function(){
        var search_value = $("#search_box").val();
        $(".emp_todo").each(function(){
            if(($(this).children().find("input:disabled").length) == search_value){
                $(this).prev().fadeOut(2000).delay(500).fadeIn(2000);
            }
        });
    });


    //Deleting employee record
    $(".emp_image").click(function(){
        var id = $(this).parent().attr("id");
        //console.log(id);
        if(confirm("Are you sure, you want to delete.")) {
            var roles_div_id = 'div#emRole'+ id;
            $(roles_div_id).remove();
            var todo_div_id = 'div#emp'+ id;
            $(todo_div_id).remove();
            $("div#"+id).remove();   
        }
    });
});

function addTodoJob(this_emp){
    add_todo_container = $('<div></div>');
    add_todo_container.attr('id','add_todo_container').attr("class","todo_job");

    var input_text = $("<input/>").attr("text","textbox").attr("id","text").attr("class","text_class");
    var new_todo = $("<div/>").attr("id","new_todo");
    input_text.appendTo(new_todo);

    image_div = $("<div></div>").attr("class","save");
    img_save = $('<img />').attr('src','save.png').attr('class','save_class');
    image_div.append(img_save);

    image_delete_div = $("<div></div>").attr("class","delete");
    img_delete = $('<img />').attr('src','cross_circle.png').attr("class","remove_job");
    image_delete_div.append(img_delete);

    add_todo_container.append(new_todo).append(image_div).append(image_delete_div);
    var todo_div = this_emp.parent();
    add_todo_container.appendTo(todo_div);

    this_emp.parent().find("span").attr("class","hidden");
        
    if(this_emp.parent().children().length == 5) //div.emp_todo
    this_emp.parent().css("overflow","scroll");
}

function save_edit(){
    $(".toggle_div").find("img.save_class").toggle(function() {
        $(this).attr('src', "edit.png");
        $(this).parent().prev().children('.text_class').attr('disabled', "disabled");
    },
    function(){
        $(this).attr('src', "save.png");
        $(this).parent().prev().children('.text_class').removeAttr("disabled");
    });
}