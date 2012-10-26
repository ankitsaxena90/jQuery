var story = [];
$(function(){
	/*$("#create_btn").click(function(){
		
		createStory();
	});*/
	$(".user_class").live("click", function(){
		displayUserStories($(this));
	});

	$(".tag_class").live("click", function(){
		displayTagStories($(this).text());
	
	});
});
function createStory(){
	var task = new Object();
	var titleField = $("#title").val();
	var descriptionField = $("#description").val();
	var tagField = $("#tags").val();
	var comma = /\,/;
	var tagArray = tagField.split(comma);
	console.log(tagArray.length);
	//tagField.split(",");
	
	var assigned_user = $("#users").val();

	task.title = titleField;
	task.description = descriptionField;
	task.tagField = tagField;
	task.username = assigned_user;
	story.push(task);
	

	var assigned_to_user = $("#users").val();
	var user_id = $("#users").attr("id");
	
	new_story_row = $('<tr></tr>').addClass(assigned_to_user);
	//new_story = $('<td><div></div></td>').addClass(assigned_user);
	create_title = $('<td><span></span></td>').text(titleField).addClass("new_task");
	console.log(create_title);
	create_description = $('<td><span></span></td>').text(descriptionField).addClass("new_task");;
	create_tags = $('<td></td>').addClass("new_task");
	for(var i = 0 ; i < tagArray.length; i++){
		new_tag = $('<span><span>').text(tagArray[i]+ " ").addClass(tagArray[i]).addClass('tag_class').appendTo(create_tags);
	}

	//create_tags.append(new_tag);
	assigned_to = $('<td><span></span></td>').text(assigned_to_user).addClass("new_task user_class");

	new_story_row.append(create_title).append(create_description).append(create_tags).append(assigned_to);
	$("#tasks").append(new_story_row);
}
function displayUserStories(this_user){
	var username = this_user.text();
	$.each(story, function(key, val){
		//console.log(story[key].username);
		if(story[key].username == username){
			//console.log(val.title);
			new_story_row = $('<tr></tr>');
			create_title = $('<td><span></span></td>').text(val.title).addClass("new_task");
			create_description = $('<td><span></span></td>').text(val.description).addClass("new_task");;
			create_tags = $('<td><span></span></td>').text(val.tagField).addClass("new_task");
			assigned_to = $('<td><span></span></td>').text(val.username).addClass("new_task user_class");
			new_story_row.append(create_title).append(create_description).append(create_tags).append(assigned_to);
			$("#user_stories").append(new_story_row);
		}
	});
}

function displayTagStories(selected_tag){

}