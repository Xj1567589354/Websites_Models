$(function(){
	"use strict";
	var index=1;
	var quoteurl="https://xjskr.top/PHP/RandWords_test.php?dtable=quote_one&";
	function GetQuote(r){	
		//ajax()实现服务器远程交换数据，在不需要加载页面的情况下
		$.ajax(
			{
			//请求的url地址
			url:r,
			//返回的格式类型
			dataType:"script",
			//设置为bool类型，false指将不会在浏览器缓存中加载请求信息
			cache:false,
			//完成时执行请求
			complete:function(){
				$('.wordstext')[0].innerHTML=Quote[0];
				$('.wordsfrom')[0].innerHTML=Quote[1];
			}
		});
	}
	setInterval(function(){
		GetQuote(quoteurl+index);
		index++;
	},15000);
});