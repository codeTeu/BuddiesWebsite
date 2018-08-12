//function myFunction(x) {
//    x.classList.toggle("change");
//}

$(document).ready(function(){
	$('#hamburgerBtn').click(function(){
		$(this).toggleClass('open');
	});
});
