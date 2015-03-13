$(document).ready(function(){
	$('#show-menu').click(function(e){
		e.preventDefault();
		$('body').toggleClass('show-menu');
		$(this).find('.fa').toggleClass('fa-bars');
		$(this).find('.fa').toggleClass('fa-times');
	})
})