$(function(){
	'use strict';
	var index = 1;
	var wordurl = "https://xjskr.top/php/RandWords_test.php?dtable=quote_two&";
	function Getword(r){
        // ajax() 方法通过 HTTP 请求加载远程数据，在不需要加载网页的情况下
		$.ajax(
			{
                // 请求的url地址
                url:r,
                // 返回格式为scripts
                dataType:"script",
                // 设置bool类型，false表示将不会从浏览器缓存中加载请求信息
                cache:false,
                // 请求完成的时候处理
				complete:function(){
							$('.words_p')[0].innerHTML = Quote[0];
							$('.sources_p')[0].innerHTML = Quote[1];
				}
			}
	);}
	setInterval(function(){
		Getword(wordurl+index);
		index++;
	},10000);
});