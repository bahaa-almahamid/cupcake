
var invalid = function(){
	$("#choixChat").style = "border: 1px solid red";
};

$(document).ready(function(){

	$("#cats").submit(function(event){

		event.preventDefault();

		if( $("#choixChat").val() && $("#thereason").val().length >= 15 ){
			$(this).fadeOut(400);
			$("#sent").fadeIn(1500);
		}

	});

	$("#thereason").change(function(){
		if( $(this).val().length >= 15 ){
			$(this).css("border", "1px solid #ccc");
		}
	});

	$("#choixChat").change(function(){
		if( $(this).val() ){
			$(this).css("border", "1px solid #ccc");
		}
	});

	$("#thereason").blur(function(){
		if( $(this).val().length < 15 ){
			$(this).css("border", "1px solid red");
		}
	});

});
