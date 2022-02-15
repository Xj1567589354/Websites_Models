$(function(){
    var backgroundimg=new Image();
    var index=1;
    var url="https://xjskr.top/PHP/CoverImg.php?type=anc"+"&r=";

    //加载函数
    var OnImageLoad=function(){
        // SreenFit();
        SetOpacity(1,0.5,4,5,FadeSet,DisplayBytime);
    };

    //执行加载函数
    backgroundimg.src=url+index;
    backgroundimg.onload=OnImageLoad;

//  function SreenFit(){
//      //","相当于CSS  :
//      //获取一个虚拟img
//         $('<img/>').attr('src',backgroundimg.src).load(function(){
//             if($('.body').width()>this.width||$('.body').height()>this.height)
//             {
//                 if($('.body').width()>this.width)
//                 {
//                     $('.body').css('background-size','100%');
//                 }
//                 else{
//                     $('.body').css('background-size','auto 100%');
//                 }
//             }
//             else{
//                 $('.body').css('background-size','auto auto');
//             }
//         });
//     };
    //实时传入遮罩透明度
    var FadeSet=function(op){
        $('.body').css('background-image','linear-gradient(rgba(0,0,0,'+op+'),rgba(0,0,0,'+op+')),url('+backgroundimg.src+')');
    };
    //设置透明度
    var SetOpacity=function(opstart,opend,speed,waittime,callback,callback2,callback3){
        var fixspeed=speed*10;
        var ops=opstart;
        //淡入
        if(ops>opend)
        {
            var outs=setInterval(function()
            {
                ops-=0.01;
                //防止溢出
                if(ops<=opend)
                {
                    ops=opend;
                    clearInterval(outs);
                    //调用等待函数
                    callback2(waittime);
                }
                callback(ops);
            },fixspeed);
        }
            //淡出
            else if(ops<opend)
            {
                var ins=setInterval(function()
                {
                    ops+=0.01;
                    if(ops>=opend)
                    {
                        ops=opend;
                        clearInterval(ins);
                        //获取新源
                        callback3(waittime);
                    }
                    callback(ops);
                },fixspeed);
            }
    };
    //设置等待函数
    var DisplayBytime=function(waittime){
        var fixtime=waittime*1000;
        setTimeout(function(){
            SetOpacity(0.5,1,4,5,FadeSet,null,Change);
            clearTimeout();
        },fixtime);
    };
    //新源函数
    var Change=function changeSrc(){
        index+=1;
        backgroundimg.src=url+index;
        };
});