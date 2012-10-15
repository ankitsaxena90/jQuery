$(function() {
    var flag = true;
    $("#employees li" ).draggable({
        appendTo: "body",
        helper: "clone"
    });
    $( ".role").find('.addSubRole').droppable({
        drop: function( event, ui ) {
            var emp_role = $(this);
            var dropElemId = ui.draggable.attr("id");
            var dropElem = ui.draggable.html(); 
            emp_role.find('.addSubRole').each(function(){
                if(dropElemId == $(this).attr('data-employee_id')){
                    flag = false; 
                }
            });
            if(flag == true){
                //Appending data to ROLES
                sub_role = $('<div></div>');
                sub_role.attr('data-employee_id', dropElemId);
                sub_role.attr("class","image addSubRole");

                delete_div = $("<div></div>");
                delete_div.attr("class","left");
            
                img_delete = $('<img />');
                img_delete.attr('src','cross_circle.png');

                employee_inRole = $('<div></div>');
                employee_inRole.attr('class', 'inrole');
                employee_inRole.text(dropElem);

                delete_div.append(img_delete);
                sub_role.append(delete_div).append(employee_inRole);
                emp_role.append(sub_role);

                $(".image").hover(function(){ 
                    $(this).find('.left').find('img').show();
                    $(this).css("background-color","grey"); }, 
                    function(){ $(this).find('.left').find('img').hide();
                    $(this).css("background-color","white") 
                });

                //Appending data to TODO
                todo_role = '#' + emp_role.attr('id') + '_todo';
                task_list = '#' + emp_role.attr('id') + '_list';

                todo_container = $('<div></div>');
                todo_container.attr('id', 'emp'+dropElemId);

                middleBox = $('<div></div>');
                middleBox.attr('class', 'mid');

                employee_name = $('<div></div>');
                employee_name.attr('class', 'emp_name');

                employee_tasks = $('<div></div>');
                employee_tasks.attr('class', 'emp_todo');

                todo_image = $('<img />');
                todo_image.attr('class', 'img_task').attr('src', 'add.png');
                /*task_span = $('<span></span>');
                task_text = 'Add todos for ' + dropElem + ' here';
                task_span.append(task_text);*/
                task_span = $("<span/>").text("Add todos for " + dropElem + " here");

                employee_tasks.append(task_span);
                employee_name.text(dropElem);

                employee_tasks.append(todo_image);
                middleBox.append(employee_name).append(employee_tasks);   
                todo_container.append(middleBox);   
                console.log($(todo_role).find(task_list).append(todo_container));
            }
            else 
                flag=true;
        }
    });
    //Deleteing node
    $(".role").delegate("img","click",function(){
        if(confirm("Are you sure, you want to delete.")) {
            var delete_role_id = '#'+$(this).parent().parent().parent().attr("id")+'_list';
            var delete_emp_id = 'div#emp'+ $(this).parent().parent().attr("data-employee_id");
            //console.log(delete_role_id);
            $(this).parent().parent().remove();
            console.log($(delete_role_id).find(delete_emp_id).remove());
        }
    });
    //Expandable/Collapsing div
    $('#todos img').toggle(function() {
        $(this).attr('src', "add.png");
        $(this).parent().children(".toggle_div").slideUp();
        },
    function(){
        $(this).attr('src', "minus.png");
        $(this).parent().children(".toggle_div").slideDown();
    });

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
    
    $(".toggle_div").delegate("img.remove_job","click",function(){
        /*console.log("asjbk");
        console.log($(this).closest(".emp_todo"));*/        //div.emp_todo
        console.log($(this).parent().parent().remove());
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