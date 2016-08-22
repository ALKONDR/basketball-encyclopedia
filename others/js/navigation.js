$(document).ready(function(){
	$('.icon').hover(
			function(){
				$('.stick1').css("margin-top","12px");
				$('.stick3').css("margin-top","44px");
			},
			function(){
				$('.stick1').css("margin-top","15px");
				$('.stick3').css("margin-top","41px");
			}
		);
});

function get_size()
{
	var w_height = $(window).height();
	$('.nav_head').css("line-height",Math.floor(w_height*0.2/2) + "px");
	$('li').css("line-height",Math.floor(w_height*0.8/9) + "px");
	$('.nav_head').css("font-size",Math.floor(w_height*0.2*0.35) + "px");
	$('li').css("font-size",Math.floor(w_height*0.8/9*0.45) + "px");
	$('nav_head').css("margin","0");
}

function show()
{
	if ($(window).height() < 585)
		get_size();
	else
	{
		$('.nav_head').css("line-height","60px");
		$('.nav_head').css("font-size","47px");
		$('li').css("line-height","45px");
		$('li').css("font-size","25px");
		$('nav_head').css("margin-bottom","20px");
		$('nav_head').css("margin-top","10px");
	}
	$('.shadow').removeClass("fadeOut");
	$('.nav').removeClass("fadeOutLeft");
	$('.shadow').toggleClass("fadeIn");
	$('.shadow').css("display","block");
	$('.nav').toggleClass("fadeInLeft");
	$('.nav').css("display","block");
}

function hide()
{
	$('.shadow').removeClass("fadeIn");
	$('.nav').removeClass("fadeInLeft");
	$('.shadow').toggleClass("fadeOut");
	$('.nav').toggleClass("fadeOutLeft");
	setTimeout(fade,700);
}

function fade()
{
	$('.shadow').css("display","none");
	$('.nav').css("display","none");
}