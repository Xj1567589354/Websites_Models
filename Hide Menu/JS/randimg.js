window.onload=function(){
    var r = 1;
    function time(){
        r++;
        document.getElementById("bg").style.background=" linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('http://119.29.61.46/PHP/bg.php?index="+r+"') no-repeat ";
        document.getElementById("bg").style.backgroundSize = "cover";
    };
    setInterval(time,5000);//3秒刷新一次
};