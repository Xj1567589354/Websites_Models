$(function(){
	"use strict";
    var myAuto=document.getElementById("myaudio");
	var image=document.querySelector('.musicdis i');
            // 播放与暂停
        // audio.paused 在播放器播放时返回false.停止时返回true
		image.style.animationPlayState = 'paused';
		$('.musicdis').click(function(){autoplay();});
		
	  function autoplay(){
        // 播放
				if(myAuto.paused)
				{
					myAuto.play();
					image.style.animationPlayState = 'running';
				}
				// 停止
				else{
					myAuto.pause();
					image.style.animationPlayState = 'paused';
				}
              }
        setInterval(function(){
				if(myAuto.paused)
				{
					image.style.animationPlayState = 'paused';
				}
				else
				{
					clearInterval();
				}
			},1000);
});

