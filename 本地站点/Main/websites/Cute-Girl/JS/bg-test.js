$(function () {
	"use strict";
    var backgroundimg= new Image();
	var index = 1;
	var url = 'http://119.29.61.46/PHP/bg.php?'+'r=';
	
	// 淡出函数
	var onImageLoad = function(){
			screenFitter();
			setOpcity(1,0.5,4,5,fadeset,displayBytime);
	};

	backgroundimg.src=url+index;
	backgroundimg.onload = onImageLoad;

	//实时传入遮罩透明度参数
	var fadeset = function(op){
		$('.body').css('background-image','linear-gradient(rgba(0,0,0,'+op+'),rgba(0,0,0,'+op+')),url('+backgroundimg.src+')');
	};

	//屏幕自适应
	function screenFitter()
	{$('<img/>').attr('src',backgroundimg.src).load(function(){
				if($('.body').width()>this.width || $('.body').height()>this.height)
					{
						if($('.body').width()>this.width)
						{
							$('.body').css('background-size','100%');
						}
						else
						{
							$('.body').css('background-size','auto 100%');
						}
					}
				else
					{$('.body').css('background-size','auto auto');}
			});
		}

		// opstart起始透明度,optarget终点透明度,speed速度,waittime等待时间,callback、callback2、callback3函数
	function setOpcity(opstart,optarget,speed,waittime,callback,callback2,callback3){
		var fixspeed= speed *10;
		var ops = opstart;
		//起始透明度>终止透明度,执行淡出
		if(ops>optarget)
			{   
				var outst = setInterval(function(){
					ops-=0.01;
					if(ops<=optarget)
						{
							ops = optarget;
							clearInterval(outst);
							callback2(waittime);
						}
					callback(ops);
				},fixspeed);
			}
		else if(ops < optarget)
			{
				var inst = setInterval(function(){
					ops+=0.01;
					if(ops >= optarget)
						{
							ops = optarget;
							clearInterval(inst);
							callback3(waittime);
						}
						callback(ops);
				},fixspeed);
			}
	}
	
	// 等待10秒，执行淡入函数
	function displayBytime(waittime){
		var fixtime = waittime*1000; 
		setTimeout(function(){
			setOpcity(0.5,1,4,5,fadeset,null,change);
			clearTimeout();
		},fixtime);
	}

	var change = function changeSrc(){
		index+=1;
		backgroundimg.src=url+index;
	};
});
