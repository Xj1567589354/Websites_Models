$(function () 
  {
	"use strict";
	$(".face2").fadeOut(1000,fin(1000));
		//	$(".face2").fadeOut(1500);
});

var fin = function(speed){
	"use strict";
	setTimeout(function(){$(".face").fadeIn(speed);},1000);
};












