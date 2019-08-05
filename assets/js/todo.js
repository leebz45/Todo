
$("#list").on("click","li",function(){
	$(this).toggleClass("completed");
});

$("#list").on("click","span",function(e){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	// Don't fire click events for parent elements
	e.stopPropagation();
});

$("input[type='text']").keypress(function(e){
	if(e.which === 13){
		var text = $(this).val();
		$("#list").append("<li><span><i class='fa fa-trash'></i></span>" + text + "</li>");
		$(this).val("");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text'").slideToggle(600);
});