$(document).ready(function(){
	setInterval(show,4000);
});

function show()
{
	var prev = Math.round(Math.random() * 8 + 1);
	$('#item'+prev).toggleClass("bounce");
	$('#item'+prev).css("z-index","2");
	setTimeout(function(){
		$('#item'+prev).toggleClass("bounce");
		$('#item'+prev).css("z-index","1");
	},1000);
}