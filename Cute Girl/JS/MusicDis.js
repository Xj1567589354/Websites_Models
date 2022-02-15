$(function(){
    var myAuto=document.getElementById("myaudio");
            // 播放与暂停
        // audio.paused 在播放器播放时返回false.停止时返回true
        image.style.animationPlayState = 'paused';
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