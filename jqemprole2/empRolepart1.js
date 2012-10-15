$(function() {
    var flag = true;
    $("#employees div" ).draggable({
        appendTo: "body",
        helper: "clone"
    });
    $( ".role").find('.addSubRole').droppable({
        drop: function( event, ui ) {
            var emp_role = $(this);
            var dropElemId = ui.draggable.attr("id");
            var dropElem = ui.draggable.attr("name"); 
            emp_role.find('.addSubRole').each(function(){
                if(dropElemId == $(this).attr('data-employee_id')){
                    flag = false; 
                }
            });
            if(flag == true){
                //Appending data to ROLES
                sub_role = $('<div></div>').attr('data-employee_id', dropElemId).attr("class","image addSubRole");

                delete_div = $("<div></div>").attr("class","left");
            
                img_delete = $('<img />').attr('src','cross_circle.png');

                employee_inRole = $('<div></div>').attr('class', 'inrole').text(dropElem).attr('id', 'emRole'+dropElemId);

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

                todo_container = $('<div></div>').attr('id', 'emp'+dropElemId);

                middleBox = $('<div></div>').attr('class', 'mid');

                employee_name = $('<div></div>').attr('class', 'emp_name');

                employee_tasks = $('<div></div>').attr('class', 'emp_todo');

                todo_image = $('<img />').attr('class', 'img_task').attr('src', 'add.png');
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
            delete_emp($(this));    
        }
    });
    //Expandable/Collapsing div
    $('#todos img.slide').toggle(function() {
        $(this).attr('src', "add.png");
        $(this).parent().children(".toggle_div").slideUp();
        },
    function(){
        $(this).attr('src', "minus.png");
        //console.log($(this).parent().children(".toggle_div"));
        $(this).parent().children(".toggle_div").slideDown();
    });
});
function delete_emp(delete_id){
    var delete_role_id = '#'+delete_id.parent().parent().parent().attr("id")+'_list';
    //delete_role_id = '#'+$(this).closest("id")+'_list';
    var delete_emp_id = 'div#emp'+ delete_id.parent().parent().attr("data-employee_id");
    //console.log(delete_role_id);
    delete_id.parent().parent().remove();
    console.log($(delete_role_id).find(delete_emp_id).remove());
}