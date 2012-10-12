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
              if(dropElemId == $(this).attr('data-employee_id'))
                flag = false; 
            });
            if(flag == true){
                sub_role = $('<div></div>');
                sub_role.attr('data-employee_id', dropElemId);
                sub_role.attr("class","image addSubRole");

                image_div = $("<div></div>");
                image_div.attr("class","left");
            
                img_delete = $('<img />');
                img_delete.attr('src','cross_circle.png');

                employee_inRole = $('<div></div>');
                employee_inRole.attr('class', 'inrole');
                employee_inRole.text(dropElem);

                image_div.append(img_delete);
                sub_role.append(image_div).append(employee_inRole);
                emp_role.append(sub_role);

                $(".image").hover(function(){ 
                    $(this).find('.left').find('img').show();
                    $(this).css("background-color","grey"); }, 
                    function(){ $(this).find('.left').find('img').hide();
                    $(this).css("background-color","white") 
                });
            }
            else 
                flag=true;
        }
    });
    //Deleting the node
    $(".role").delegate("img","click",function(){
       if(confirm("Are you sure, you want to delete.")) {
            $(this).parent().parent().remove();
        }
    });
});
